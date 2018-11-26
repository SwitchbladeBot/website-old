import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

export default ({ app, store }) => {
  // inject our i18n instance into the app root to be used in middleware
  // we assume a store/index.js file has been defined and the variable 'locale' defined on store, we'll go into this in detail in the next code snippet
  app.i18n = new VueI18n({ //construction a new VueI18n
    locale: store.state.locale,
    fallbackLocale: 'en',//always displays Chinese if English translation is not available
    messages: {
      // TODO: Add a for here
      'en': require('@/locales/en.json'),
      'pt': require('@/locales/pt.json')
    }
  })
}
