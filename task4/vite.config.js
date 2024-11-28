import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5500/',
        rewrite: (path) => {
          const rewritten = path.replace(/^\/api/, '');
          console.log(`Proxy: ${path} => ${rewritten}`);
          return rewritten;
        },
      }


    }
  }
})
