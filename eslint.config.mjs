import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    ignores: ['src/app/**/index.vue','node_modules/', 'dist'],
  }
)
