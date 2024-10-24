import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtén el directorio actual equivalente a __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      // Aquí puedes definir el alias si es necesario
      'lightgallery/react': path.resolve(__dirname, 'node_modules/lightgallery/react/Lightgallery.es5.mjs')
    }
  },
  build: {
    rollupOptions: {
      external: ['lightgallery/react'], // Asegúrate de que este módulo esté listado aquí
    },
  },
});
