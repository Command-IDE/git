import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), cssInjectedByJs()],
  resolve: {
    alias: {
      '@cmdide/plugin-sdk': path.resolve(__dirname, '../plugin-sdk/index.ts'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.tsx'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      // Bundle React and all deps inline — plugins load via blob URL
      // where bare imports can't resolve
      external: [],
    },
    outDir: 'dist',
    minify: true,
  },
})
