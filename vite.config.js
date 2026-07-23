import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({ include: /\.[jt]sx?$/ })],
  server: {
    proxy: {
      '/cmv-icehouse': 'http://localhost:8080'
    }
  }
});