import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import { version as pkgVersion } from './package.json'
import Layouts from 'vite-plugin-vue-layouts';

process.env.VITE_APP_VERSION = pkgVersion
if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString()
}

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        'pinia',
        {
          '@/store': ['useStore'],
        },
      ],
      dts: true,
      eslintrc: {
        enabled: true,
      },
    }),
    Layouts({
      layoutsDirs: ['src/layouts'],
      defaultLayout: 'default'
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
