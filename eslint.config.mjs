// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  ignores: ['src/**/*/index.vue', 'node_modules/', 'dist'],
})
