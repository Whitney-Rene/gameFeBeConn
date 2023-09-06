import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      //http://localhost:1234 = creates a router
      '/myAPI': {
        target: "http://localhost:1234/",
        changeOrigin: true,
        secure: false
      },
      // proxy: {
      //   //http://localhost:1234 = creates a router
      //   '/myAPI': {
      //     target: "http://localhost:1234/",
      //     changeOrigin: true,
      //     secure: false
      //   }
    }
  }
})
