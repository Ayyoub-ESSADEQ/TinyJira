import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      types: path.resolve(__dirname, './src/types/types.ts'),
      App: path.resolve(__dirname, './src/App'),
      Components: path.resolve(__dirname, './src/Components'),
    },
  },
});
