import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'window', // This makes `global` reference `window` in the browser
  },
  server: {
    port: 3000,
  }
})
