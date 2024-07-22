import { defineNuxtConfig } from 'nuxt/config'
import nuxt from './src/app/configs/nuxt'

const { ENV_MODE } = process.env

export default defineNuxtConfig({
  devtools: { enabled: ENV_MODE !== 'production' },
  ...nuxt,
  // rootDir: 'src',
  srcDir: 'src',
  alias: {
    '~/': `${__dirname}/src/`,
  },
  postcss: {
    plugins: {
      tailwindcss: {
        config: './tailwind.config.js',
      },
      autoprefixer: {},
    },
  },
  dir: {
    layouts: 'shared/ui/layouts',
    public: '../public',
  },

  imports: {
    dirs: ['src/shared/composables', 'src/shared/utils'],
  },

  components: {
    dirs: ['shared', 'entities', 'features', 'widgets', 'views'],
  },
})
