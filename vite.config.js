import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const deployedAPI = 'https://dmcashield-agency-8666.apps.hostingguru.io';

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL || deployedAPI),
    'import.meta.env.VITE_WS_URL': JSON.stringify(process.env.VITE_WS_URL || deployedAPI.replace('https', 'wss')),
  },
  server: {
    port: 5175
  }
})