import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'build', // Maintain CRA output directory for compatibility
    },
    server: {
        port: 3000, // Maintain default CRA port
        open: true,
    },
});
