import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './locales/es.json'
import en from './locales/en.json'
import de from './locales/de.json'
import fr from './locales/fr.json'

const LANG_KEY = 'julab-lang'

function getStoredLanguage(): string {
  try {
    const stored = localStorage.getItem(LANG_KEY)
    if (stored && ['es', 'en', 'de', 'fr'].includes(stored)) return stored
  } catch {
    /* ignore */
  }
  return 'es'
}

export const defaultLanguage = 'es'
export const supportedLanguages = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]['code']

export function setStoredLanguage(lang: string): void {
  try {
    localStorage.setItem(LANG_KEY, lang)
  } catch {
    /* ignore */
  }
}

export function getLanguage(): string {
  return i18n.language || getStoredLanguage()
}

i18n.use(initReactI18next).init({
  resources: { es: { translation: es }, en: { translation: en }, de: { translation: de }, fr: { translation: fr } },
  lng: getStoredLanguage(),
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
})

const pageTitles: Record<string, string> = {
  es: 'JULAB S.L. | Laboratorio Dental',
  en: 'JULAB S.L. | Dental Laboratory',
  de: 'JULAB S.L. | Zahnlabor',
  fr: 'JULAB S.L. | Laboratoire dentaire',
}

i18n.on('languageChanged', (lng) => {
  setStoredLanguage(lng)
  if (typeof document?.documentElement?.setAttribute === 'function') {
    document.documentElement.setAttribute('lang', lng)
  }
  if (typeof document?.title !== 'undefined' && pageTitles[lng]) {
    document.title = pageTitles[lng]
  }
})

const initialLang = getStoredLanguage()
document.documentElement.setAttribute('lang', initialLang)
if (pageTitles[initialLang]) {
  document.title = pageTitles[initialLang]
}

export default i18n
