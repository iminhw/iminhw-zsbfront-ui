import { defineConfig } from 'vite'
import postcss from './postcss.config.js'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  css: {
    postcss,
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
      {
        // 设置别名
        find:'@', replacement: path.resolve(__dirname, './src')
      }
    ],
  },
  // vite 相关配置
  server: {
    // port: 80,
    host: true,
    open: true,
    proxy: {
      // https://cn.vitejs.dev/config/#server-proxy
      '/dev-api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/dev-api/, '')
      }
    }
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  } 
})
