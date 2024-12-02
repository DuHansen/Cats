import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: './', 
  plugins: [
    react(),
    svgr(), 
  ],
  server: {
    historyApiFallback: true, // Redireciona requisições desconhecidas para o index.html
  },
  build: {
    rollupOptions: {
      input: 'index.html', // Garante que o ponto de entrada seja o index.html
    },
  },
  resolve: {
    alias: {
      // Se necessário, defina aliases para módulos
    },
  },
});
