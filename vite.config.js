import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Si usas React

export default defineConfig({
  plugins: [react()], // Añade los plugins que necesites
  build: {
    outDir: 'dist', // Salida de la construcción
  },
  server: {
    open: true, // Abrir el navegador automáticamente al iniciar el servidor
  },
});
