import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    // Classic JSX runtime so the bundle uses React.createElement from the
    // global window.React rather than importing from 'react/jsx-runtime'.
    react({ jsxRuntime: 'classic' }),
    cssInjectedByJs(),
  ],
  resolve: {
    alias: {
      '@cmdide/plugin-sdk': path.resolve(__dirname, '../plugin-sdk/index.ts'),
    },
  },
  define: {
    // Required for React production build inside an IIFE bundle.
    'process.env.NODE_ENV': '"production"',
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.tsx'),
      // IIFE format: the bundle assigns itself to window.__cmdide_plugin__
      // and reads React from window.React (set by the host app in main.tsx).
      // This avoids the "Invalid hook call" error caused by two React copies.
      formats: ['iife'],
      name: 'window.__cmdide_plugin__',
      fileName: () => 'index.js',
    },
    rollupOptions: {
      // React is provided by the host app via window.React — do not bundle it.
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist',
    minify: true,
  },
})
