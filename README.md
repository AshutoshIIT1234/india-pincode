# bharat-pincode

> 🇮🇳 Offline-first Indian pincode lookup — city, state, district, nearby search, distance calculation & more. **Zero dependencies. TypeScript-first.**

[![npm version](https://img.shields.io/npm/v/bharat-pincode.svg)](https://npmjs.com/package/bharat-pincode)
[![npm downloads](https://img.shields.io/npm/dm/bharat-pincode.svg)](https://npmjs.com/package/bharat-pincode)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-blue.svg)](https://www.typescriptlang.org/)

---

## ✨ Features

- 🔌 **Offline-first** — no API calls, no rate limits, works anywhere
- ⚡ **Instant lookups** — O(1) hashmap access
- 🗺️ **Nearby search** — find pincodes within N km using Haversine formula
- 📏 **Distance calculator** — km between any two pincodes
- 🔍 **Fuzzy search** — partial city / state / district name matching
- 🏙️ **Rich data** — city, district, state, state code, region, lat/lng, office type
- 🧩 **Tree-shakable** — ESM + CJS dual build
- 💪 **TypeScript** — full types included, no `@types/` install needed

---

## 📦 Install

```bash
npm install bharat-pincode
# or
pnpm add bharat-pincode
# or
yarn add bharat-pincode
```

---

## 🚀 Quick Start

```ts
import pincode from "bharat-pincode";

// Single lookup
const result = pincode.lookup("400001");
// → { pincode: "400001", city: "Mumbai", district: "Mumbai City",
//     state: "Maharashtra", state_code: "MH", region: "West",
//     lat: 18.9388, lng: 72.8354, type: "HO" }

// Validate
pincode.isValid("400001"); // → true
pincode.isValid("000000"); // → false

// Distance between two cities
pincode.distanceBetween("400001", "560001"); // → 981.4 (km)
```

---

## 📖 API Reference

### `lookup(pincode: string): PincodeResult | null`
Lookup a single pincode. Returns `null` if not found.

```ts
import { lookup } from "bharat-pincode";

lookup("800001");
// → { pincode: "800001", city: "Patna", state: "Bihar", ... }

lookup("000000"); // → null
```

---

### `lookupMany(pincodes: string[]): Map<string, PincodeResult | null>`
Batch lookup — returns a Map.

```ts
const results = lookupMany(["400001", "560001", "999999"]);
results.get("400001"); // → { city: "Mumbai", ... }
results.get("999999"); // → null
```

---

### `isValid(pincode: string): boolean`
Checks both format and dataset existence.

```ts
isValid("400001"); // → true
isValid("12345");  // → false (not 6 digits)
```

---

### `isValidFormat(pincode: string): boolean`
Checks only format (6 digits) without dataset lookup.

```ts
isValidFormat("123456"); // → true (format ok, may not exist)
```

---

### `getByCity(city: string): PincodeResult[]`
All pincodes for a city (partial, case-insensitive).

```ts
getByCity("Mumbai");    // → all Mumbai pincodes
getByCity("banga");     // → matches Bengaluru
```

---

### `getByState(state: string): PincodeResult[]`
By state name or 2-letter state code.

```ts
getByState("Bihar");   // → all Bihar pincodes
getByState("BR");      // → same result
getByState("MH");      // → Maharashtra pincodes
```

---

### `getByDistrict(district: string): PincodeResult[]`
All pincodes in a district.

```ts
getByDistrict("Patna"); // → all Patna district pincodes
```

---

### `getByRegion(region: Region): PincodeResult[]`
Filter by geographic region.

Regions: `"North"` | `"South"` | `"East"` | `"West"` | `"Central"` | `"Northeast"`

```ts
getByRegion("South");     // → all South India pincodes
getByRegion("Northeast"); // → Assam, Meghalaya, Mizoram, etc.
```

---

### `nearby(pincode: string, options?: NearbyOptions): PincodeResult[]`
Find pincodes within a radius. Sorted by distance.

```ts
nearby("400001", { radiusKm: 15, limit: 5 });
// → up to 5 pincodes within 15 km of Mumbai GPO
```

| Option | Default | Description |
|--------|---------|-------------|
| `radiusKm` | `20` | Search radius in km |
| `limit` | `10` | Max results |

---

### `distanceBetween(pin1: string, pin2: string): number | null`
Straight-line distance (km) between two pincodes.

```ts
distanceBetween("110001", "400001"); // → 1148.32 (Delhi → Mumbai)
distanceBetween("400001", "invalid"); // → null
```

---

### `search(query: string): PincodeResult[]`
Fuzzy search across pincode, city, district, state.

```ts
search("bhopal");  // → Bhopal pincodes
search("110");     // → all pincodes starting with 110
```

---

### `getAllStates(): { state: string, state_code: string }[]`
List of all states in the dataset.

```ts
getAllStates();
// → [{ state: "Andhra Pradesh", state_code: "AP" }, ...]
```

---

## 📐 TypeScript Types

```ts
export interface PincodeResult {
  pincode: string;
  city: string;
  district: string;
  state: string;
  state_code: string;
  region: "North" | "South" | "East" | "West" | "Central" | "Northeast";
  lat: number;
  lng: number;
  type: "HO" | "SO" | "BO"; // Head Office | Sub Office | Branch Office
}
```

---

## 💡 Real-world Examples

### Address form auto-fill
```ts
const handlePincodeChange = (pin: string) => {
  if (pin.length === 6) {
    const result = lookup(pin);
    if (result) {
      setCity(result.city);
      setState(result.state);
      setDistrict(result.district);
    }
  }
};
```

### E-commerce delivery zone check
```ts
const warehousePincode = "400001"; // Mumbai warehouse

const isDeliverable = (customerPin: string): boolean => {
  const dist = distanceBetween(warehousePincode, customerPin);
  return dist !== null && dist <= 500;
};
```

### Find nearest service center
```ts
const serviceCenters = ["560001", "600001", "500001"];

const nearest = (userPin: string) => {
  return serviceCenters
    .map(sc => ({ pincode: sc, dist: distanceBetween(userPin, sc) }))
    .filter(s => s.dist !== null)
    .sort((a, b) => (a.dist ?? 0) - (b.dist ?? 0))[0];
};
```

---

## 🗃️ Dataset Coverage

| Region | States Covered |
|--------|---------------|
| North | Delhi, UP, Rajasthan, Punjab, Haryana, HP, Uttarakhand, J&K |
| South | Karnataka, Tamil Nadu, Telangana, Kerala, Andhra Pradesh |
| East | Bihar, West Bengal, Odisha, Jharkhand, Assam + NE states |
| West | Maharashtra, Gujarat, Goa |
| Central | Madhya Pradesh, Chhattisgarh |

> 📝 Want your city added? [Open an issue](https://github.com/AshutoshIITP1234/bharat-pincode/issues) or submit a PR!

---

## 🤝 Contributing

PRs welcome! Especially for:
- Adding more pincodes (submit a JSON patch)
- Improving coordinate accuracy

```bash
git clone https://github.com/AshutoshIITP1234/bharat-pincode
cd bharat-pincode
npm install
npm run dev
```

---

## 📄 License

MIT © [Ashutosh Kumar Tripathi](https://ashutosh.social)

---

<p align="center">Made with ❤️ in India — from IIT Patna</p>
