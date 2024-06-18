const { rules } = require('eslint-plugin-prettier')

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // Aqui você pode adicionar ou modificar as regras específicas
    // Exemplo:
    'vue/no-unused-vars': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/valid-v-for': 'off',  // Desativa a regra que pode estar sublinhando o v-for
    'prettier/prettier': 'error'
  }
}
