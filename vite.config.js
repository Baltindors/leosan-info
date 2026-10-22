import { copyFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import { defineConfig } from 'vite'

const bufferShim = fileURLToPath(new URL('./src/shims/buffer.js', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      buffer: bufferShim,
    },
  },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown({
      headEnabled: false,
      wrapperClasses: 'prose prose-neutral max-w-none dark:prose-invert',
    }),
    tailwindcss(),
    {
      name: 'gh-pages-spa-fallback',
      closeBundle() {
        copyFileSync('dist/index.html', 'dist/404.html')
      },
    },
  ],
})
