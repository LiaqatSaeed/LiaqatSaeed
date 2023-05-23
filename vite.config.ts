import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rollupOptions from "./rollup.config"

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  plugins: [react()],

  rollupOptions,

});
