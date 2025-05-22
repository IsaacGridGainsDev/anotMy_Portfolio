import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(), // ✅ Official plugin
    tsconfigPaths()
  ],
  build: {
    outDir: 'dist',  // default is 'dist'
  },
  base: '/', // ✅ Required for correct routing
});
