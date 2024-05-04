import { defineConfig } from "vite";

export default defineConfig({
    base: "/This-is-me/",
    build: {
        minify: "terser",
        
    }
})