import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Phone, MapPin, Send, Clock, AlertCircle, Mail } from 'lucide-react'

const TELEFONO = '968 93 11 39'
const MOVIL = '689 41 18 06'
const TELEFONO_DISPLAY = '+34 968 93 11 39'
const MOVIL_DISPLAY = '+34 689 41 18 06'
const EMAIL_DIRECTO = 'julio.acevedo@laboratoriodentaljulab.es'
const MAPA_URL = 'https://www.google.com/maps?q=Plaza+Puerta+Nueva+3,+30001+Murcia,+España&output=embed'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || 'mgozgelb'

export default function Contacto() {
  const { t } = useTranslation()
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const DIRECCION = t('contacto.direccionCompleta')
  const contactos = [
    { icon: Phone, labelKey: 'contacto.telefono' as const, value: TELEFONO_DISPLAY, href: `tel:+34${TELEFONO.replace(/\s/g, '')}` },
    { icon: Phone, labelKey: 'contacto.movil' as const, value: MOVIL_DISPLAY, href: `tel:+34${MOVIL.replace(/\s/g, '')}` },
    { icon: Mail, labelKey: 'contacto.correoDirecto' as const, value: EMAIL_DIRECTO, href: `mailto:${EMAIL_DIRECTO}` },
    { icon: MapPin, labelKey: 'contacto.direccion' as const, value: DIRECCION, href: 'https://www.google.com/maps/search/Plaza+Puerta+Nueva+3+30001+Murcia', isLink: true },
    { icon: Clock, labelKey: 'contacto.horario' as const, value: t('contacto.horarioValor'), href: null },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!FORMSPREE_ID) {
      setError(t('contacto.errorForm'))
      return
    }
    setError(null)
    setSending(true)
    const form = e.currentTarget
    const body = new FormData(form)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSent(true)
        form.reset()
      } else {
        const data = await res.json().catch(() => ({}))
        setError(data.error || t('contacto.errorSend'))
      }
    } catch {
      setError(t('contacto.errorConnection'))
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <section className="relative bg-gradient-to-br from-dental-600 to-dental-800 text-white py-14 sm:py-20 md:py-24 w-full min-w-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.12)_0%,_transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center relative">
          <p className="text-dental-200 text-sm font-semibold uppercase tracking-wider">{t('contacto.eyebrow')}</p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">
            {t('contacto.title')}
          </h1>
          <p className="mt-4 text-dental-100 text-base sm:text-lg max-w-2xl mx-auto">
            {t('contacto.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 w-full min-w-0 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            <div className="lg:col-span-2 space-y-6 min-w-0">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-1">{t('contacto.datosTitulo')}</h2>
                <p className="text-slate-600 text-sm">{t('contacto.datosDesc')}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactos.map(({ icon: Icon, labelKey, value, href, isLink }) => (
                  <div
                    key={labelKey}
                    className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5 hover:border-dental-200/60 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <span className="w-11 h-11 rounded-xl bg-dental-100 text-dental-600 flex items-center justify-center flex-shrink-0">
                        <Icon size={22} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{t(labelKey)}</p>
                        {href ? (
                          <a
                            href={href}
                            target={isLink ? '_blank' : undefined}
                            rel={isLink ? 'noopener noreferrer' : undefined}
                            className="text-slate-700 hover:text-dental-600 font-medium text-sm sm:text-base mt-0.5 block break-words"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-slate-700 font-medium text-sm sm:text-base mt-0.5">{value}</p>
                        )}
                        {isLink && (
                          <span className="text-dental-600 text-sm font-medium mt-1 inline-block">{t('contacto.verMapa')}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6 min-w-0">
              <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 sm:px-8 py-5 border-b border-slate-100 bg-slate-50/50">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">{t('contacto.formTitle')}</h2>
                  <p className="text-slate-600 text-sm mt-1">{t('contacto.formSubtitle')}</p>
                </div>
                <div className="p-6 sm:p-8">
                  {sent ? (
                    <div className="py-14 text-center">
                      <div className="w-16 h-16 rounded-full bg-dental-100 text-dental-600 flex items-center justify-center mx-auto mb-4">
                        <Send size={28} />
                      </div>
                      <p className="text-dental-600 font-semibold text-lg">{t('contacto.sentTitle')}</p>
                      <p className="text-slate-600 mt-2">{t('contacto.sentSubtitle')}</p>
                    </div>
                  ) : (
                    <form
                      action="https://formspree.io/f/mgozgelb"
                      method="POST"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {error && (
                        <div className="flex items-start gap-2 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                          <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                          <span>{error}</span>
                        </div>
                      )}
                      <input type="hidden" name="_subject" value="Contacto JULAB S.L. - Web" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">{t('contacto.name')}</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="w-full min-w-0 px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-dental-500 focus:border-dental-500 outline-none transition text-slate-800"
                            placeholder={t('contacto.namePlaceholder')}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">{t('contacto.email')}</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full min-w-0 px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-dental-500 focus:border-dental-500 outline-none transition text-slate-800"
                            placeholder={t('contacto.emailPlaceholder')}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">{t('contacto.phone')}</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="w-full min-w-0 px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-dental-500 focus:border-dental-500 outline-none transition text-slate-800"
                          placeholder={t('contacto.phonePlaceholder')}
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">{t('contacto.message')}</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          className="w-full min-w-0 px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-dental-500 focus:border-dental-500 outline-none transition resize-none text-slate-800"
                          placeholder={t('contacto.messagePlaceholder')}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={sending}
                        className="inline-flex items-center gap-2 bg-dental-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-dental-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-dental-600/20"
                      >
                        {sending ? t('contacto.sending') : t('contacto.send')}
                        <Send size={18} />
                      </button>
                    </form>
                  )}
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
                  <MapPin size={20} className="text-dental-600" />
                  <h3 className="font-bold text-slate-900">{t('contacto.ubicacion')}</h3>
                </div>
                <div className="aspect-video w-full min-h-[220px] sm:min-h-[280px] bg-slate-100">
                  <iframe
                    title="Ubicación JULAB S.L. - Plaza Puerta Nueva 3, Murcia"
                    src={MAPA_URL}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block w-full h-full min-h-[220px] sm:min-h-[280px]"
                  />
                </div>
                <p className="p-4 text-center text-sm text-slate-600 border-t border-slate-100">
                  {t('contacto.direccionCompleta')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
