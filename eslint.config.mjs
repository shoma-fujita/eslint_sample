import stylistic from '@stylistic/eslint-plugin'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.vue', '**/*.ts'],
  },
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
  }),
)
