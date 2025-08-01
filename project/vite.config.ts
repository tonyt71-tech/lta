import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // VERY IMPORTANT for custom domain like www.lawtontennisacademy.com
});
