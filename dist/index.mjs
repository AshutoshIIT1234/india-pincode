// data/pincodes.json
var pincodes_default = { "110001": { city: "New Delhi", district: "Central Delhi", state: "Delhi", state_code: "DL", region: "North", lat: 28.6139, lng: 77.209, type: "HO" }, "110002": { city: "Delhi", district: "Central Delhi", state: "Delhi", state_code: "DL", region: "North", lat: 28.6328, lng: 77.2197, type: "SO" }, "110011": { city: "New Delhi", district: "South Delhi", state: "Delhi", state_code: "DL", region: "North", lat: 28.5918, lng: 77.1674, type: "SO" }, "110048": { city: "New Delhi", district: "South West Delhi", state: "Delhi", state_code: "DL", region: "North", lat: 28.5245, lng: 77.1855, type: "SO" }, "110092": { city: "Delhi", district: "East Delhi", state: "Delhi", state_code: "DL", region: "North", lat: 28.6692, lng: 77.3005, type: "SO" }, "400001": { city: "Mumbai", district: "Mumbai City", state: "Maharashtra", state_code: "MH", region: "West", lat: 18.9388, lng: 72.8354, type: "HO" }, "400051": { city: "Mumbai", district: "Mumbai Suburban", state: "Maharashtra", state_code: "MH", region: "West", lat: 19.0596, lng: 72.8295, type: "SO" }, "400076": { city: "Mumbai", district: "Mumbai Suburban", state: "Maharashtra", state_code: "MH", region: "West", lat: 19.1136, lng: 72.8697, type: "SO" }, "411001": { city: "Pune", district: "Pune", state: "Maharashtra", state_code: "MH", region: "West", lat: 18.5204, lng: 73.8567, type: "HO" }, "411014": { city: "Pune", district: "Pune", state: "Maharashtra", state_code: "MH", region: "West", lat: 18.5642, lng: 73.914, type: "SO" }, "440001": { city: "Nagpur", district: "Nagpur", state: "Maharashtra", state_code: "MH", region: "West", lat: 21.1458, lng: 79.0882, type: "HO" }, "431001": { city: "Aurangabad", district: "Aurangabad", state: "Maharashtra", state_code: "MH", region: "West", lat: 19.8762, lng: 75.3433, type: "HO" }, "560001": { city: "Bengaluru", district: "Bengaluru Urban", state: "Karnataka", state_code: "KA", region: "South", lat: 12.9716, lng: 77.5946, type: "HO" }, "560029": { city: "Bengaluru", district: "Bengaluru Urban", state: "Karnataka", state_code: "KA", region: "South", lat: 12.925, lng: 77.5938, type: "SO" }, "560034": { city: "Bengaluru", district: "Bengaluru Urban", state: "Karnataka", state_code: "KA", region: "South", lat: 12.9352, lng: 77.6245, type: "SO" }, "560066": { city: "Bengaluru", district: "Bengaluru Urban", state: "Karnataka", state_code: "KA", region: "South", lat: 13.0358, lng: 77.597, type: "SO" }, "570001": { city: "Mysuru", district: "Mysuru", state: "Karnataka", state_code: "KA", region: "South", lat: 12.2958, lng: 76.6394, type: "HO" }, "580001": { city: "Hubli", district: "Dharwad", state: "Karnataka", state_code: "KA", region: "South", lat: 15.3647, lng: 75.124, type: "HO" }, "600001": { city: "Chennai", district: "Chennai", state: "Tamil Nadu", state_code: "TN", region: "South", lat: 13.0827, lng: 80.2707, type: "HO" }, "600020": { city: "Chennai", district: "Chennai", state: "Tamil Nadu", state_code: "TN", region: "South", lat: 13.0569, lng: 80.2425, type: "SO" }, "600042": { city: "Chennai", district: "Chennai", state: "Tamil Nadu", state_code: "TN", region: "South", lat: 13.0067, lng: 80.2206, type: "SO" }, "641001": { city: "Coimbatore", district: "Coimbatore", state: "Tamil Nadu", state_code: "TN", region: "South", lat: 11.0168, lng: 76.9558, type: "HO" }, "625001": { city: "Madurai", district: "Madurai", state: "Tamil Nadu", state_code: "TN", region: "South", lat: 9.9252, lng: 78.1198, type: "HO" }, "620001": { city: "Tiruchirappalli", district: "Tiruchirappalli", state: "Tamil Nadu", state_code: "TN", region: "South", lat: 10.7905, lng: 78.7047, type: "HO" }, "500001": { city: "Hyderabad", district: "Hyderabad", state: "Telangana", state_code: "TS", region: "South", lat: 17.385, lng: 78.4867, type: "HO" }, "500018": { city: "Hyderabad", district: "Hyderabad", state: "Telangana", state_code: "TS", region: "South", lat: 17.44, lng: 78.3489, type: "SO" }, "500081": { city: "Hyderabad", district: "Rangareddy", state: "Telangana", state_code: "TS", region: "South", lat: 17.4947, lng: 78.3996, type: "SO" }, "506001": { city: "Warangal", district: "Warangal Urban", state: "Telangana", state_code: "TS", region: "South", lat: 17.9784, lng: 79.5941, type: "HO" }, "226001": { city: "Lucknow", district: "Lucknow", state: "Uttar Pradesh", state_code: "UP", region: "North", lat: 26.8467, lng: 80.9462, type: "HO" }, "226010": { city: "Lucknow", district: "Lucknow", state: "Uttar Pradesh", state_code: "UP", region: "North", lat: 26.8631, lng: 80.9176, type: "SO" }, "208001": { city: "Kanpur", district: "Kanpur Nagar", state: "Uttar Pradesh", state_code: "UP", region: "North", lat: 26.4499, lng: 80.3319, type: "HO" }, "201301": { city: "Noida", district: "Gautam Buddha Nagar", state: "Uttar Pradesh", state_code: "UP", region: "North", lat: 28.5355, lng: 77.391, type: "HO" }, "211001": { city: "Prayagraj", district: "Prayagraj", state: "Uttar Pradesh", state_code: "UP", region: "North", lat: 25.4358, lng: 81.8463, type: "HO" }, "221001": { city: "Varanasi", district: "Varanasi", state: "Uttar Pradesh", state_code: "UP", region: "North", lat: 25.3176, lng: 82.9739, type: "HO" }, "282001": { city: "Agra", district: "Agra", state: "Uttar Pradesh", state_code: "UP", region: "North", lat: 27.1767, lng: 78.0081, type: "HO" }, "800001": { city: "Patna", district: "Patna", state: "Bihar", state_code: "BR", region: "East", lat: 25.5941, lng: 85.1376, type: "HO" }, "800020": { city: "Patna", district: "Patna", state: "Bihar", state_code: "BR", region: "East", lat: 25.6138, lng: 85.0783, type: "SO" }, "842001": { city: "Muzaffarpur", district: "Muzaffarpur", state: "Bihar", state_code: "BR", region: "East", lat: 26.1209, lng: 85.3647, type: "HO" }, "843302": { city: "Sitamarhi", district: "Sitamarhi", state: "Bihar", state_code: "BR", region: "East", lat: 26.5942, lng: 85.489, type: "HO" }, "824101": { city: "Gaya", district: "Gaya", state: "Bihar", state_code: "BR", region: "East", lat: 24.7914, lng: 85.0002, type: "HO" }, "700001": { city: "Kolkata", district: "Kolkata", state: "West Bengal", state_code: "WB", region: "East", lat: 22.5726, lng: 88.3639, type: "HO" }, "700019": { city: "Kolkata", district: "Kolkata", state: "West Bengal", state_code: "WB", region: "East", lat: 22.5093, lng: 88.3639, type: "SO" }, "700091": { city: "Kolkata", district: "North 24 Parganas", state: "West Bengal", state_code: "WB", region: "East", lat: 22.6467, lng: 88.4296, type: "SO" }, "713101": { city: "Burdwan", district: "Purba Bardhaman", state: "West Bengal", state_code: "WB", region: "East", lat: 23.2324, lng: 87.8615, type: "HO" }, "302001": { city: "Jaipur", district: "Jaipur", state: "Rajasthan", state_code: "RJ", region: "North", lat: 26.9124, lng: 75.7873, type: "HO" }, "302017": { city: "Jaipur", district: "Jaipur", state: "Rajasthan", state_code: "RJ", region: "North", lat: 26.8742, lng: 75.8074, type: "SO" }, "342001": { city: "Jodhpur", district: "Jodhpur", state: "Rajasthan", state_code: "RJ", region: "North", lat: 26.2389, lng: 73.0243, type: "HO" }, "313001": { city: "Udaipur", district: "Udaipur", state: "Rajasthan", state_code: "RJ", region: "North", lat: 24.5854, lng: 73.7125, type: "HO" }, "334001": { city: "Bikaner", district: "Bikaner", state: "Rajasthan", state_code: "RJ", region: "North", lat: 28.0229, lng: 73.3119, type: "HO" }, "380001": { city: "Ahmedabad", district: "Ahmedabad", state: "Gujarat", state_code: "GJ", region: "West", lat: 23.0225, lng: 72.5714, type: "HO" }, "380015": { city: "Ahmedabad", district: "Ahmedabad", state: "Gujarat", state_code: "GJ", region: "West", lat: 23.0376, lng: 72.5269, type: "SO" }, "395001": { city: "Surat", district: "Surat", state: "Gujarat", state_code: "GJ", region: "West", lat: 21.1702, lng: 72.8311, type: "HO" }, "390001": { city: "Vadodara", district: "Vadodara", state: "Gujarat", state_code: "GJ", region: "West", lat: 22.3072, lng: 73.1812, type: "HO" }, "360001": { city: "Rajkot", district: "Rajkot", state: "Gujarat", state_code: "GJ", region: "West", lat: 22.3039, lng: 70.8022, type: "HO" }, "462001": { city: "Bhopal", district: "Bhopal", state: "Madhya Pradesh", state_code: "MP", region: "Central", lat: 23.2599, lng: 77.4126, type: "HO" }, "452001": { city: "Indore", district: "Indore", state: "Madhya Pradesh", state_code: "MP", region: "Central", lat: 22.7196, lng: 75.8577, type: "HO" }, "474001": { city: "Gwalior", district: "Gwalior", state: "Madhya Pradesh", state_code: "MP", region: "Central", lat: 26.2183, lng: 78.1828, type: "HO" }, "492001": { city: "Raipur", district: "Raipur", state: "Chhattisgarh", state_code: "CG", region: "Central", lat: 21.2514, lng: 81.6296, type: "HO" }, "160001": { city: "Chandigarh", district: "Chandigarh", state: "Chandigarh", state_code: "CH", region: "North", lat: 30.7333, lng: 76.7794, type: "HO" }, "141001": { city: "Ludhiana", district: "Ludhiana", state: "Punjab", state_code: "PB", region: "North", lat: 30.901, lng: 75.8573, type: "HO" }, "143001": { city: "Amritsar", district: "Amritsar", state: "Punjab", state_code: "PB", region: "North", lat: 31.634, lng: 74.8723, type: "HO" }, "122001": { city: "Gurugram", district: "Gurugram", state: "Haryana", state_code: "HR", region: "North", lat: 28.4595, lng: 77.0266, type: "HO" }, "121001": { city: "Faridabad", district: "Faridabad", state: "Haryana", state_code: "HR", region: "North", lat: 28.4089, lng: 77.3178, type: "HO" }, "695001": { city: "Thiruvananthapuram", district: "Thiruvananthapuram", state: "Kerala", state_code: "KL", region: "South", lat: 8.5241, lng: 76.9366, type: "HO" }, "682001": { city: "Ernakulam", district: "Ernakulam", state: "Kerala", state_code: "KL", region: "South", lat: 9.9312, lng: 76.2673, type: "HO" }, "673001": { city: "Kozhikode", district: "Kozhikode", state: "Kerala", state_code: "KL", region: "South", lat: 11.2588, lng: 75.7804, type: "HO" }, "520001": { city: "Vijayawada", district: "Krishna", state: "Andhra Pradesh", state_code: "AP", region: "South", lat: 16.5062, lng: 80.648, type: "HO" }, "530001": { city: "Visakhapatnam", district: "Visakhapatnam", state: "Andhra Pradesh", state_code: "AP", region: "South", lat: 17.6868, lng: 83.2185, type: "HO" }, "515001": { city: "Anantapur", district: "Anantapur", state: "Andhra Pradesh", state_code: "AP", region: "South", lat: 14.6819, lng: 77.6006, type: "HO" }, "751001": { city: "Bhubaneswar", district: "Khordha", state: "Odisha", state_code: "OD", region: "East", lat: 20.2961, lng: 85.8245, type: "HO" }, "753001": { city: "Cuttack", district: "Cuttack", state: "Odisha", state_code: "OD", region: "East", lat: 20.4625, lng: 85.8828, type: "HO" }, "781001": { city: "Guwahati", district: "Kamrup Metropolitan", state: "Assam", state_code: "AS", region: "Northeast", lat: 26.1445, lng: 91.7362, type: "HO" }, "793001": { city: "Shillong", district: "East Khasi Hills", state: "Meghalaya", state_code: "ML", region: "Northeast", lat: 25.5788, lng: 91.8933, type: "HO" }, "796001": { city: "Aizawl", district: "Aizawl", state: "Mizoram", state_code: "MZ", region: "Northeast", lat: 23.7271, lng: 92.7176, type: "HO" }, "834001": { city: "Ranchi", district: "Ranchi", state: "Jharkhand", state_code: "JH", region: "East", lat: 23.3441, lng: 85.3096, type: "HO" }, "831001": { city: "Jamshedpur", district: "East Singhbhum", state: "Jharkhand", state_code: "JH", region: "East", lat: 22.8046, lng: 86.2029, type: "HO" }, "248001": { city: "Dehradun", district: "Dehradun", state: "Uttarakhand", state_code: "UK", region: "North", lat: 30.3165, lng: 78.0322, type: "HO" }, "171001": { city: "Shimla", district: "Shimla", state: "Himachal Pradesh", state_code: "HP", region: "North", lat: 31.1048, lng: 77.1734, type: "HO" }, "180001": { city: "Jammu", district: "Jammu", state: "Jammu & Kashmir", state_code: "JK", region: "North", lat: 32.7266, lng: 74.857, type: "HO" }, "190001": { city: "Srinagar", district: "Srinagar", state: "Jammu & Kashmir", state_code: "JK", region: "North", lat: 34.0837, lng: 74.7973, type: "HO" }, "403001": { city: "Panaji", district: "North Goa", state: "Goa", state_code: "GA", region: "West", lat: 15.4909, lng: 73.8278, type: "HO" } };

// src/index.ts
var db = pincodes_default;
function isValidPincode(pin) {
  return /^\d{6}$/.test(pin.trim());
}
function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
function toResult(pin, val) {
  return { pincode: pin, ...val };
}
function lookup(pincode2) {
  const pin = pincode2.trim();
  if (!isValidPincode(pin)) return null;
  const entry = db[pin];
  return entry ? toResult(pin, entry) : null;
}
function lookupMany(pincodes) {
  const result = /* @__PURE__ */ new Map();
  for (const p of pincodes) {
    result.set(p, lookup(p));
  }
  return result;
}
function isValid(pincode2) {
  return lookup(pincode2) !== null;
}
function getByCity(city) {
  const q = city.toLowerCase().trim();
  return Object.entries(db).filter(([, v]) => v.city.toLowerCase().includes(q)).map(([pin, val]) => toResult(pin, val));
}
function getByState(state) {
  const q = state.toLowerCase().trim();
  return Object.entries(db).filter(
    ([, v]) => v.state.toLowerCase().includes(q) || v.state_code.toLowerCase() === q
  ).map(([pin, val]) => toResult(pin, val));
}
function getByDistrict(district) {
  const q = district.toLowerCase().trim();
  return Object.entries(db).filter(([, v]) => v.district.toLowerCase().includes(q)).map(([pin, val]) => toResult(pin, val));
}
function getByRegion(region) {
  return Object.entries(db).filter(([, v]) => v.region === region).map(([pin, val]) => toResult(pin, val));
}
function nearby(pincode2, options = {}) {
  const { radiusKm = 20, limit = 10 } = options;
  const origin = lookup(pincode2);
  if (!origin) return [];
  return Object.entries(db).filter(([pin]) => pin !== pincode2).map(([pin, val]) => ({
    result: toResult(pin, val),
    dist: haversineKm(origin.lat, origin.lng, val.lat, val.lng)
  })).filter(({ dist }) => dist <= radiusKm).sort((a, b) => a.dist - b.dist).slice(0, limit).map(({ result }) => result);
}
function distanceBetween(pincode1, pincode2) {
  const a = lookup(pincode1);
  const b = lookup(pincode2);
  if (!a || !b) return null;
  return parseFloat(haversineKm(a.lat, a.lng, b.lat, b.lng).toFixed(2));
}
function isValidFormat(pincode2) {
  return isValidPincode(pincode2);
}
function getAllStates() {
  const seen = /* @__PURE__ */ new Map();
  for (const v of Object.values(db)) {
    if (!seen.has(v.state_code)) seen.set(v.state_code, v.state);
  }
  return Array.from(seen.entries()).map(([state_code, state]) => ({ state, state_code })).sort((a, b) => a.state.localeCompare(b.state));
}
function search(query) {
  const q = query.toLowerCase().trim();
  if (q.length < 2) return [];
  return Object.entries(db).filter(
    ([pin, v]) => pin.startsWith(q) || v.city.toLowerCase().includes(q) || v.district.toLowerCase().includes(q) || v.state.toLowerCase().includes(q)
  ).map(([pin, val]) => toResult(pin, val));
}
var pincode = {
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
  search
};
var index_default = pincode;
export {
  index_default as default,
  distanceBetween,
  getAllStates,
  getByCity,
  getByDistrict,
  getByRegion,
  getByState,
  isValid,
  isValidFormat,
  lookup,
  lookupMany,
  nearby,
  search
};
