import { defineNuxtConfig } from 'nuxt/config'
import nuxt from './src/app/configs/nuxt'

const { ENV_MODE } = process.env

export default defineNuxtConfig({
  devtools: { enabled: ENV_MODE !== 'production' },
  ...nuxt,
  buildDir: '../.nuxt',
  rootDir: 'src',
  dir: {
    layouts: 'shared/ui/layouts',
  },
  components: {
    dirs: ['~/shared', '~/entities', '~/features', '~/widgets'],
  },
})
