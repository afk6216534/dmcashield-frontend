// Centralized API Configuration
// Uses env var VITE_API_URL for production, localhost for dev
// Now falls back to demo mode when backend is down

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';
const IS_PROD = import.meta.env.VITE_PROD === 'true';

// For production, use HostingGuru or whatever is set in env
const API = IS_PROD ? API_BASE : 'http://localhost:8000';
const WS_URL = API.replace('https', 'wss').replace('http', 'ws');

export { API, WS_URL, IS_PROD };
export default API;