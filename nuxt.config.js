export default {
  head() {
    console.log(this.$foo)
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
  plugins: [
    '~/plugins/test.js',
  ],
  modules: [
    ['@nuxtjs/i18n', {
      langDir: 'i18n/',
      strategy: 'prefix',
      locales: [
        { code: 'de', file: 'de.json', iso: 'de' },
        { code: 'en', file: 'en.json', iso: 'en' },
      ]
    }],
  ],
}
