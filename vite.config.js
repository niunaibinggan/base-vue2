import { defineConfig, loadEnv } from 'vite'
import path from 'path'

import { createVuePlugin } from 'vite-plugin-vue2'

import resolveExternalsPlugin from 'vite-plugin-resolve-externals'

const resolve = dir => path.resolve(__dirname, dir)

const env = loadEnv('development', __dirname)
// const env = loadEnv('production', __dirname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    resolveExternalsPlugin({
      vue: 'Vue',
      'vue-router': 'VueRouter'
    }),
    createVuePlugin({
      jsx: true
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: '@import "./src/style/global.scss";'
      }
    }
  },
  server: {
    open: true,
    host: '0.0.0.0',
    proxy: {
      // [env.VITE_APP_BASE_URL]: {
      //   target: env.VITE_APP_SERVER_PROXY,
      //   changeOrigin: true
      // }
    }
  },
  resolve: {
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': resolve('src'),
      '@router': resolve('src/router'),
      '@views': resolve('src/views'),
      '@http': resolve('src/http')
    },
    externals: {
      axios: 'axios'
    }
  },
  base: env.VITE_APP_WEB_PATH,
  publicDir: 'public',
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    },
    outDir: env.VITE_APP_OUT_DIR,
    emptyOutDir: true,
    target: 'es2020',
    sourcemap: false,
    chunkSizeWarningLimit: 10000,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
