interface PincodeResult {
    pincode: string;
    city: string;
    district: string;
    state: string;
    state_code: string;
    region: "North" | "South" | "East" | "West" | "Central" | "Northeast";
    lat: number;
    lng: number;
    type: "HO" | "SO" | "BO";
}
interface NearbyOptions {
    radiusKm?: number;
    limit?: number;
}
/**
 * Lookup a single pincode.
 * Returns null if not found or invalid.
 *
 * @example
 * lookup("400001") // → { city: "Mumbai", state: "Maharashtra", ... }
 */
declare function lookup(pincode: string): PincodeResult | null;
/**
 * Lookup multiple pincodes at once.
 * Returns a Map of pincode → result (null if not found).
 *
 * @example
 * lookupMany(["400001", "560001"])
 */
declare function lookupMany(pincodes: string[]): Map<string, PincodeResult | null>;
/**
 * Check if a pincode is valid (6 digits + exists in dataset).
 *
 * @example
 * isValid("400001") // → true
 * isValid("000000") // → false
 */
declare function isValid(pincode: string): boolean;
/**
 * Get all pincodes for a given city name (case-insensitive).
 *
 * @example
 * getByCity("Mumbai") // → [{ pincode: "400001", ... }, ...]
 */
declare function getByCity(city: string): PincodeResult[];
/**
 * Get all pincodes for a given state name or state code (case-insensitive).
 *
 * @example
 * getByState("Maharashtra")
 * getByState("MH")
 */
declare function getByState(state: string): PincodeResult[];
/**
 * Get all pincodes in a given district.
 *
 * @example
 * getByDistrict("Patna")
 */
declare function getByDistrict(district: string): PincodeResult[];
/**
 * Get all pincodes in a region.
 *
 * @example
 * getByRegion("South") // → all South India pincodes
 */
declare function getByRegion(region: PincodeResult["region"]): PincodeResult[];
/**
 * Find nearby pincodes within a radius from a given pincode.
 *
 * @example
 * nearby("400001", { radiusKm: 10, limit: 5 })
 */
declare function nearby(pincode: string, options?: NearbyOptions): PincodeResult[];
/**
 * Get distance in km between two pincodes.
 * Returns null if either pincode is invalid.
 *
 * @example
 * distanceBetween("400001", "411001") // → 148.7
 */
declare function distanceBetween(pincode1: string, pincode2: string): number | null;
/**
 * Validate format only (6 digits) without checking the dataset.
 *
 * @example
 * isValidFormat("400001") // → true
 * isValidFormat("40001")  // → false
 */
declare function isValidFormat(pincode: string): boolean;
/**
 * Get all unique states in the dataset.
 */
declare function getAllStates(): {
    state: string;
    state_code: string;
}[];
/**
 * Search pincodes by partial city, district, or state name.
 *
 * @example
 * search("banga") // → matches Bengaluru
 */
declare function search(query: string): PincodeResult[];
declare const pincode: {
    lookup: typeof lookup;
    lookupMany: typeof lookupMany;
    isValid: typeof isValid;
    isValidFormat: typeof isValidFormat;
    getByCity: typeof getByCity;
    getByState: typeof getByState;
    getByDistrict: typeof getByDistrict;
    getByRegion: typeof getByRegion;
    nearby: typeof nearby;
    distanceBetween: typeof distanceBetween;
    getAllStates: typeof getAllStates;
    search: typeof search;
};

export { type NearbyOptions, type PincodeResult, pincode as default, distanceBetween, getAllStates, getByCity, getByDistrict, getByRegion, getByState, isValid, isValidFormat, lookup, lookupMany, nearby, search };
