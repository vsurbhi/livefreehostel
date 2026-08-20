import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',   // was '/' — must match repo name exactly, capital F included
  plugins: [react()],
})
