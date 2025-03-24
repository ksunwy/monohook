import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://spp.dash-api-test.rjtech.ru',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
