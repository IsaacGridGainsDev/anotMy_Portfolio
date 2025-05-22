import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(), // ✅ Official plugin
    tsconfigPaths()
  ],
  base: '/', // ✅ Required for correct routing
});
