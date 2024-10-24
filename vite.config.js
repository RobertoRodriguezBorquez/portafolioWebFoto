import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['lightgallery/react']
  },
  build: {
    rollupOptions: {
      external: ['lightgallery/react']
    }
  }
});
