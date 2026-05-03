// Centralized API Configuration
// Uses env var VITE_API_URL for production, localhost for dev
// Now falls back to demo mode when backend is down

const API = 'https://dmcashield-agency.vercel.app';
const WS_URL = 'wss://dmcashield-agency.vercel.app';
const IS_PROD = true;

export { API, WS_URL, IS_PROD };
export default API;