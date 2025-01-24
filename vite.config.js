import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
    plugins: [
        sveltekit(),
        viteCompression({
            algorithm: "brotli",
            threshold: 1024,
            compressionOptions: { level: 11 },
            exclude: [/\.(br|gz)$/, /\.(jpe?g|png|gif|webp|zip)$/i],
            filter: /\.(js|css|html|svg)$/i,
        }),
        viteCompression({
            algorithm: "gzip",
            threshold: 1024,
            compressionOptions: { level: 9 },
            exclude: [/\.(br|gz)$/, /\.(jpe?g|png|gif|webp|zip)$/i],
            filter: /\.(js|css|html|svg)$/i,
        }),
    ],
    build: {
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        reportCompressedSize: true,
        cssMinify: true,
        cssCodeSplit: true,
    },
    server: {
        host: "0.0.0.0",
        port: 3000,
    },
});
