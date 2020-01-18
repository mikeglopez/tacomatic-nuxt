module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'semi': [2, 'always'],
    'no-console': 'off',
    'vue/html-self-closing': 'off',
    'vue/require-default-prop': 'off'
  }
}
