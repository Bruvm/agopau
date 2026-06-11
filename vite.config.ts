import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

function preloadHero(): PluginOption {
  return {
    name: 'preload-hero',
    transformIndexHtml: {
      order: 'pre',
      handler() {
        return [
          {
            tag: 'link',
            attrs: {
              rel: 'preload',
              href: '/src/assets/img/hero.png',
              as: 'image',
            },
          },
        ]
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    preloadHero(),
    ViteImageOptimizer({
      png: { quality: 65 },
      jpeg: { quality: 60 },
      jpg: { quality: 60 },
    }),
  ],
})
