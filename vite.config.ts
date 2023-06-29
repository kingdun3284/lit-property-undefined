import { defineConfig } from 'vite';
// https://vitejs.dev/config/

export default defineConfig({
    plugins: [],
    resolve: {},
    build: {
        target: 'esnext',
    },
    optimizeDeps: {
        force: true,
    },
});
