import { useTranslation } from 'react-i18next'
import { Target, Zap, Scale, Shield, AlertCircle, Quote } from 'lucide-react'

const navKeys = ['nosotros.nav1', 'nosotros.nav2', 'nosotros.nav3', 'nosotros.nav4', 'nosotros.nav5'] as const
const valoresKeys = ['nosotros.valorRigor', 'nosotros.valorCoherencia', 'nosotros.valorComunicacion', 'nosotros.valorRespeto'] as const
const filosofiaKeys = [
  { icon: Target, titleKey: 'nosotros.s3F1Title', textKey: 'nosotros.s3F1Text' },
  { icon: Zap, titleKey: 'nosotros.s3F2Title', textKey: 'nosotros.s3F2Text' },
  { icon: Scale, titleKey: 'nosotros.s3F3Title', textKey: 'nosotros.s3F3Text' },
] as const

export default function Nosotros() {
  const { t } = useTranslation()
  const s5Items = t('nosotros.s5Items', { returnObjects: true }) as string[]
  return (
    <>
      <section className="relative bg-gradient-to-br from-dental-600 to-dental-800 text-white py-14 sm:py-20 md:py-24 w-full min-w-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.12)_0%,_transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center relative">
          <p className="text-dental-200 text-sm font-semibold uppercase tracking-wider">{t('nosotros.eyebrow')}</p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">
            {t('nosotros.title')}
          </h1>
          <p className="mt-4 text-dental-100 text-base sm:text-lg max-w-2xl mx-auto">
            {t('nosotros.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 w-full min-w-0 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <aside className="lg:col-span-1 space-y-6 order-2 lg:order-1">
              <nav className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5 sticky top-24">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">{t('nosotros.contenido')}</p>
                <ul className="space-y-2">
                  {navKeys.map((key, i) => (
                    <li key={key}>
                      <a href={`#seccion-${i + 1}`} className="text-slate-600 hover:text-dental-600 text-sm font-medium transition-colors block py-1">
                        {t(key)}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="lg:col-span-2 space-y-8 order-1 lg:order-2">
              <article id="seccion-1" className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 sm:px-8 py-5 border-b border-slate-100 bg-slate-50/50">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-dental-600 text-white text-sm font-bold">1</span>
                  <h2 className="mt-3 text-xl sm:text-2xl font-bold text-slate-900">{t('nosotros.s1Title')}</h2>
                </div>
                <div className="p-6 sm:p-8 text-slate-600 space-y-4 leading-relaxed">
                  <p>{t('nosotros.s1P1')}</p>
                  <p>{t('nosotros.s1P2')}</p>
                  <p>{t('nosotros.s1P3')}</p>
                  <blockquote className="mt-6 pl-5 border-l-4 border-dental-500 bg-dental-50/60 py-4 pr-4 rounded-r-xl not-italic">
                    <div className="flex gap-3 text-slate-700">
                      <Quote size={22} className="text-dental-500 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1 text-sm sm:text-base">
                        <p className="font-medium">{t('nosotros.s1Quote1')}</p>
                        <p className="font-medium">{t('nosotros.s1Quote2')}</p>
                        <p className="font-medium">{t('nosotros.s1Quote3')}</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </article>

              <article id="seccion-2" className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 sm:px-8 py-5 border-b border-slate-100 bg-slate-50/50">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-dental-600 text-white text-sm font-bold">2</span>
                  <h2 className="mt-3 text-xl sm:text-2xl font-bold text-slate-900">{t('nosotros.s2Title')}</h2>
                </div>
                <div className="p-6 sm:p-8">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {valoresKeys.map((key) => (
                      <li key={key} className="flex items-center gap-3 py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="w-2 h-2 rounded-full bg-dental-500 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article id="seccion-3" className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 sm:px-8 py-5 border-b border-slate-100 bg-slate-50/50">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-dental-600 text-white text-sm font-bold">3</span>
                  <h2 className="mt-3 text-xl sm:text-2xl font-bold text-slate-900">{t('nosotros.s3Title')}</h2>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-slate-600 mb-6 leading-relaxed">{t('nosotros.s3Intro')}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {filosofiaKeys.map(({ icon: Icon, titleKey, textKey }) => (
                      <div key={titleKey} className="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-dental-200 transition-colors">
                        <div className="w-11 h-11 rounded-xl bg-dental-100 flex items-center justify-center text-dental-600 mb-3">
                          <Icon size={22} />
                        </div>
                        <h3 className="font-semibold text-slate-900">{t(titleKey)}</h3>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{t(textKey)}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-slate-600 italic border-l-2 border-dental-400 pl-4 py-1">
                    {t('nosotros.s3Quote')}
                  </p>
                </div>
              </article>

              <div id="seccion-4" className="rounded-2xl bg-amber-50 border border-amber-200/80 p-6 flex gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 flex-shrink-0">
                  <AlertCircle size={24} />
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-slate-900">{t('nosotros.s4Title')}</h2>
                  <p className="mt-2 text-slate-700 text-sm sm:text-base leading-relaxed">{t('nosotros.s4Text')}</p>
                </div>
              </div>

              <article id="seccion-5" className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 sm:px-8 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-3">
                  <Shield size={26} className="text-dental-600" />
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{t('nosotros.s5Title')}</h2>
                </div>
                <div className="p-6 sm:p-8">
                  <ul className="space-y-3">
                    {Array.isArray(s5Items) && s5Items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-dental-500 flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
