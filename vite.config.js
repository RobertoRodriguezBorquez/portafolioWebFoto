import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      'lightgallery/react': path.resolve(__dirname, 'node_modules/lightgallery/react/Lightgallery.es5.mjs'),
    },
  },
  optimizeDeps: {
    include: ['lightgallery/react'],
  },
  build: {
    rollupOptions: {
      external: [
        'lightgallery/react',
        'lightgallery/plugins/thumbnail',
        'lightgallery/plugins/zoom',
      ],
    },
  },
});
