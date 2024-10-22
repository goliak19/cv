import { createI18n } from 'vue-i18n'
import en_US from '../locales/en_US.json'
import es_ES from '../locales/es_ES.json'

const messages = {
  en_US,
  es_ES,
}

const i18n = createI18n({
  locale: 'en_US', // idioma por defecto
  messages,
})

export default i18n
