// filepath: /d:/work/crm-onoy-qr/vite.config.ts
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the mode
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      global: "window", // This makes `global` reference `window` in the browser
      'process.env': env
    },
    server: {
      port: Number(env.VITE_PORT),
    },
    build: {
      sourcemap: mode === 'development',
    },
    // Example of using environment variables
  };
});