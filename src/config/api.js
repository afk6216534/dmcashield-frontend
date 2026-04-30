const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
const WS_URL = import.meta.env.VITE_WS_URL || API_URL.replace('https', 'wss').replace('http', 'ws');

export default API_URL;
export { WS_URL };