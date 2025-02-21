import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/_mantine";`,
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
