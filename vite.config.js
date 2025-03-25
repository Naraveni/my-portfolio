import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['a1a5-198-254-26-2.ngrok-free.app']
  },
  plugins: [react(),
    tailwindcss(),
  ],
})
