import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    server: {
        host: "::",
        port: 8080,
    },
    plugins: [react()],
    base: mode === 'production' && !process.env.VERCEL ? "/Modern-Personal-Portfolio/" : "/",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
}));
