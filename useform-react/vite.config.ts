import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite.config.ts
import Terminal from 'vite-plugin-terminal'

// https://vite.dev/config/
export default defineConfig({
  plugins: [Terminal({
      console: 'terminal'
    }), react()
],
})
