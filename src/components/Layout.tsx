import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Phone, MapPin, Instagram, Facebook, Globe } from 'lucide-react'
import { supportedLanguages, setStoredLanguage, type SupportedLanguage } from '../i18n'

/* WhatsApp: número móvil España (+34). Enlace abre chat con mensaje inicial. */
const WHATSAPP_NUMERO = '34679818346'
const WHATSAPP_DISPLAY = '+34 679 81 83 46'

/* Enlaces de redes sociales (sustituir # por tus URLs cuando los tengas) */
const REDES_SOCIALES = {
  instagram: '#',
  facebook: '#',
  tiktok: '#',
}

function IconWhatsApp({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function IconTikTok({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const location = useLocation()

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(t('whatsapp.message'))}`

  const navLinks = [
    { to: '/', label: t('nav.inicio') },
    { to: '/servicios', label: t('nav.servicios') },
    { to: '/nosotros', label: t('nav.nosotros') },
    { to: '/contacto', label: t('nav.contacto') },
  ]

  const changeLanguage = (code: SupportedLanguage) => {
    i18n.changeLanguage(code)
    setStoredLanguage(code)
    setLangOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full min-w-0">
          <div className="flex items-center justify-between h-16 md:h-20 gap-2 min-h-[4rem]">
            <Link to="/" className="flex items-center shrink-0 min-w-0 max-w-[70%] sm:max-w-none mr-12 md:mr-20 lg:mr-24">
              <img src="/logo/logo.png" alt="JULAB S.L." className="h-10 sm:h-14 md:h-20 w-auto max-h-16 sm:max-h-[5rem] object-contain object-left" />
            </Link>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8 md:mr-8 lg:mr-10 xl:mr-12">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`font-medium transition-colors whitespace-nowrap ${
                    location.pathname === to ? 'text-dental-600' : 'text-slate-600 hover:text-dental-600'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+34968931139" className="flex items-center gap-2 text-slate-600 hover:text-dental-600 text-sm whitespace-nowrap h-10">
                <Phone size={18} />
                <span>+34 968 93 11 39</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-lg font-medium hover:bg-[#20BD5A] transition-colors text-sm h-10 whitespace-nowrap shrink-0"
                aria-label="WhatsApp"
                title={`WhatsApp ${WHATSAPP_DISPLAY}`}
              >
                <IconWhatsApp size={20} className="shrink-0" />
                <span className="hidden lg:inline">{WHATSAPP_DISPLAY}</span>
              </a>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center bg-dental-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-dental-700 transition-colors text-sm h-10 whitespace-nowrap shrink-0"
              >
                {t('nav.solicitarPresupuesto')}
              </Link>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-800 text-sm font-medium uppercase whitespace-nowrap"
                  aria-label="Idioma"
                  aria-expanded={langOpen}
                >
                  <Globe size={18} />
                  <span>{i18n.language}</span>
                </button>
                {langOpen && (
                  <>
                    <div className="fixed inset-0 z-40" aria-hidden onClick={() => setLangOpen(false)} />
                    <div className="absolute right-0 top-full mt-1 py-1 bg-white border border-slate-200 rounded-lg shadow-lg z-50 min-w-[8rem]">
                      {supportedLanguages.map(({ code, label }) => (
                        <button
                          key={code}
                          type="button"
                          onClick={() => changeLanguage(code)}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 rounded-none first:rounded-t-lg last:rounded-b-lg ${i18n.language === code ? 'bg-dental-50 text-dental-700 font-medium' : 'text-slate-700'}`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label={t('nav.menu')}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <Globe size={18} className="text-slate-500" />
                {supportedLanguages.map(({ code, label }) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => changeLanguage(code)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium ${i18n.language === code ? 'bg-dental-100 text-dental-700' : 'text-slate-600 hover:bg-slate-100'}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg font-medium ${
                    location.pathname === to ? 'bg-dental-50 text-dental-600' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a href="tel:+34968931139" className="py-3 px-4 flex items-center gap-2 text-slate-600">
                <Phone size={20} />
                +34 968 93 11 39
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="py-3 px-4 flex items-center gap-2 bg-[#25D366] text-white rounded-lg font-medium"
                aria-label="WhatsApp"
              >
                <IconWhatsApp size={20} />
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
              <Link
                to="/contacto"
                onClick={() => setMenuOpen(false)}
                className="bg-dental-600 text-white py-3 px-4 rounded-lg font-medium text-center"
              >
                {t('nav.solicitarPresupuesto')}
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16 md:pt-20 w-full min-w-0">{children}</main>

      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src="/logo/logo.png" alt="JULAB S.L." className="h-8 w-auto object-contain brightness-0 invert opacity-90" />
              <p className="mt-2 text-sm text-slate-400 break-words">{t('footer.description')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">{t('footer.enlaces')}</h3>
              <ul className="space-y-2">
                {navLinks.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="hover:text-dental-400 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">{t('footer.contacto')}</h3>
              <a href="tel:+34968931139" className="flex items-center gap-2 hover:text-dental-400 transition-colors">
                <Phone size={18} />
                +34 968 93 11 39
              </a>
              <a href="tel:+34689411806" className="flex items-center gap-2 mt-2 hover:text-dental-400 transition-colors">
                <Phone size={18} />
                +34 689 41 18 06
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-2 hover:text-dental-400 transition-colors"
                aria-label="WhatsApp"
              >
                <IconWhatsApp size={18} className="text-[#25D366]" />
                <span>WhatsApp {WHATSAPP_DISPLAY}</span>
              </a>
              <div className="flex items-center gap-2 mt-2 text-slate-400 text-sm break-words">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>Plaza Puerta Nueva, 3 · 4ª Escalera, Entresuelo A · 30001 Murcia</span>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">{t('footer.redesSociales')}</h4>
                <div className="flex gap-3">
                  <a
                    href={REDES_SOCIALES.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-700 flex items-center justify-center text-slate-300 hover:bg-dental-600 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href={REDES_SOCIALES.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-700 flex items-center justify-center text-slate-300 hover:bg-dental-600 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href={REDES_SOCIALES.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-700 flex items-center justify-center text-slate-300 hover:bg-dental-600 hover:text-white transition-colors"
                    aria-label="TikTok"
                  >
                    <IconTikTok size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-400 break-words px-2">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </div>
        </div>
      </footer>
    </div>
  )
}
