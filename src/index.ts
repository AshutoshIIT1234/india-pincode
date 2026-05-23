import data from "../data/pincodes.json";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PincodeResult {
  pincode: string;
  city: string;
  district: string;
  state: string;
  state_code: string;
  region: "North" | "South" | "East" | "West" | "Central" | "Northeast";
  lat: number;
  lng: number;
  type: "HO" | "SO" | "BO"; // Head Office, Sub Office, Branch Office
}

export interface NearbyOptions {
  radiusKm?: number;
  limit?: number;
}

// ─── Internal ─────────────────────────────────────────────────────────────────

const db = data as Record<string, Omit<PincodeResult, "pincode">>;

function isValidPincode(pin: string): boolean {
  return /^\d{6}$/.test(pin.trim());
}

function haversineKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function toResult(pin: string, val: Omit<PincodeResult, "pincode">): PincodeResult {
  return { pincode: pin, ...val };
}

// ─── Core API ─────────────────────────────────────────────────────────────────

/**
 * Lookup a single pincode.
 * Returns null if not found or invalid.
 *
 * @example
 * lookup("400001") // → { city: "Mumbai", state: "Maharashtra", ... }
 */
export function lookup(pincode: string): PincodeResult | null {
  const pin = pincode.trim();
  if (!isValidPincode(pin)) return null;
  const entry = db[pin];
  return entry ? toResult(pin, entry) : null;
}

/**
 * Lookup multiple pincodes at once.
 * Returns a Map of pincode → result (null if not found).
 *
 * @example
 * lookupMany(["400001", "560001"])
 */
export function lookupMany(
  pincodes: string[]
): Map<string, PincodeResult | null> {
  const result = new Map<string, PincodeResult | null>();
  for (const p of pincodes) {
    result.set(p, lookup(p));
  }
  return result;
}

/**
 * Check if a pincode is valid (6 digits + exists in dataset).
 *
 * @example
 * isValid("400001") // → true
 * isValid("000000") // → false
 */
export function isValid(pincode: string): boolean {
  return lookup(pincode) !== null;
}

/**
 * Get all pincodes for a given city name (case-insensitive).
 *
 * @example
 * getByCity("Mumbai") // → [{ pincode: "400001", ... }, ...]
 */
export function getByCity(city: string): PincodeResult[] {
  const q = city.toLowerCase().trim();
  return Object.entries(db)
    .filter(([, v]) => v.city.toLowerCase().includes(q))
    .map(([pin, val]) => toResult(pin, val));
}

/**
 * Get all pincodes for a given state name or state code (case-insensitive).
 *
 * @example
 * getByState("Maharashtra")
 * getByState("MH")
 */
export function getByState(state: string): PincodeResult[] {
  const q = state.toLowerCase().trim();
  return Object.entries(db)
    .filter(
      ([, v]) =>
        v.state.toLowerCase().includes(q) ||
        v.state_code.toLowerCase() === q
    )
    .map(([pin, val]) => toResult(pin, val));
}

/**
 * Get all pincodes in a given district.
 *
 * @example
 * getByDistrict("Patna")
 */
export function getByDistrict(district: string): PincodeResult[] {
  const q = district.toLowerCase().trim();
  return Object.entries(db)
    .filter(([, v]) => v.district.toLowerCase().includes(q))
    .map(([pin, val]) => toResult(pin, val));
}

/**
 * Get all pincodes in a region.
 *
 * @example
 * getByRegion("South") // → all South India pincodes
 */
export function getByRegion(
  region: PincodeResult["region"]
): PincodeResult[] {
  return Object.entries(db)
    .filter(([, v]) => v.region === region)
    .map(([pin, val]) => toResult(pin, val));
}

/**
 * Find nearby pincodes within a radius from a given pincode.
 *
 * @example
 * nearby("400001", { radiusKm: 10, limit: 5 })
 */
export function nearby(
  pincode: string,
  options: NearbyOptions = {}
): PincodeResult[] {
  const { radiusKm = 20, limit = 10 } = options;
  const origin = lookup(pincode);
  if (!origin) return [];

  return Object.entries(db)
    .filter(([pin]) => pin !== pincode)
    .map(([pin, val]) => ({
      result: toResult(pin, val),
      dist: haversineKm(origin.lat, origin.lng, val.lat, val.lng),
    }))
    .filter(({ dist }) => dist <= radiusKm)
    .sort((a, b) => a.dist - b.dist)
    .slice(0, limit)
    .map(({ result }) => result);
}

/**
 * Get distance in km between two pincodes.
 * Returns null if either pincode is invalid.
 *
 * @example
 * distanceBetween("400001", "411001") // → 148.7
 */
export function distanceBetween(
  pincode1: string,
  pincode2: string
): number | null {
  const a = lookup(pincode1);
  const b = lookup(pincode2);
  if (!a || !b) return null;
  return parseFloat(haversineKm(a.lat, a.lng, b.lat, b.lng).toFixed(2));
}

/**
 * Validate format only (6 digits) without checking the dataset.
 *
 * @example
 * isValidFormat("400001") // → true
 * isValidFormat("40001")  // → false
 */
export function isValidFormat(pincode: string): boolean {
  return isValidPincode(pincode);
}

/**
 * Get all unique states in the dataset.
 */
export function getAllStates(): { state: string; state_code: string }[] {
  const seen = new Map<string, string>();
  for (const v of Object.values(db)) {
    if (!seen.has(v.state_code)) seen.set(v.state_code, v.state);
  }
  return Array.from(seen.entries())
    .map(([state_code, state]) => ({ state, state_code }))
    .sort((a, b) => a.state.localeCompare(b.state));
}

/**
 * Search pincodes by partial city, district, or state name.
 *
 * @example
 * search("banga") // → matches Bengaluru
 */
export function search(query: string): PincodeResult[] {
  const q = query.toLowerCase().trim();
  if (q.length < 2) return [];
  return Object.entries(db)
    .filter(
      ([pin, v]) =>
        pin.startsWith(q) ||
        v.city.toLowerCase().includes(q) ||
        v.district.toLowerCase().includes(q) ||
        v.state.toLowerCase().includes(q)
    )
    .map(([pin, val]) => toResult(pin, val));
}

// Default export with all methods
const pincode = {
  lookup,
  lookupMany,
  isValid,
  isValidFormat,
  getByCity,
  getByState,
  getByDistrict,
  getByRegion,
  nearby,
  distanceBetween,
  getAllStates,
  search,
};

export default pincode;
