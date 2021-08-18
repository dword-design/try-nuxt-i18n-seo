export default {
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
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
