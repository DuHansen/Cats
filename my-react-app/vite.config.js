import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/', // Use '/' para Vercel, ou configure se o projeto estiver em um subdiretório
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true, // Permite que SVGs sejam tratados como ícones
      },
    }),
  ],
  server: {
    historyApiFallback: true, // Garante redirecionamento para SPA
  },
  build: {
    rollupOptions: {
      input: 'index.html', // Certifica-se de que o ponto de entrada é o index.html
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Facilita importações de módulos dentro de `src`
    },
  },
});
