import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Beaker, Shield, MessageSquare, Scale, LayoutList, Phone } from 'lucide-react'
import Carousel from '../components/Carousel'

const carouselImages: string[] = [
  '/carrusel/c1.png',
  '/carrusel/c2.png',
  '/carrusel/c3.png',
]

export default function Home() {
  const { t } = useTranslation()
  const valores = [
    { icon: Beaker, titleKey: 'home.valor1Title', textKey: 'home.valor1Text' },
    { icon: Shield, titleKey: 'home.valor2Title', textKey: 'home.valor2Text' },
    { icon: MessageSquare, titleKey: 'home.valor3Title', textKey: 'home.valor3Text' },
    { icon: Scale, titleKey: 'home.valor4Title', textKey: 'home.valor4Text' },
  ]

  return (
    <>
      <section className="relative bg-gradient-to-br from-dental-600 to-dental-800 overflow-hidden w-full min-w-0 min-h-[360px] lg:min-h-[420px] mt-6 lg:mt-8">
        <div className="mx-auto h-full min-h-[360px] lg:min-h-[420px] px-4 sm:px-6 lg:px-0 py-0 relative w-full min-w-0 flex">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 items-stretch w-full min-h-[360px] lg:min-h-[420px] flex-1">
            <div className="w-full min-w-0 order-2 lg:order-1 flex flex-col justify-center items-center py-8 lg:py-0 lg:pl-8 xl:pl-12 2xl:pl-16 lg:pr-6 xl:pr-8">
              <div className="flex flex-col justify-center items-center gap-5 max-w-lg mx-auto">
                <div className="flex flex-col gap-3 text-center">
                  <span className="inline-flex w-fit mx-auto items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 text-dental-100 text-sm font-medium tracking-wide uppercase">
                    {t('home.badge')}
                  </span>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                    {t('home.heroTitle')}
                  </h1>
                  <p className="text-dental-100/95 text-base sm:text-lg lg:text-xl leading-snug">
                    {t('home.heroSubtitle')}
                  </p>
                </div>
                <div className="flex flex-col xs:flex-row flex-wrap gap-4 justify-center">
                  <Link
                    to="/servicios"
                    className="group inline-flex items-center justify-center gap-3 bg-white text-dental-700 px-7 py-4 rounded-xl font-semibold text-base lg:text-lg shadow-lg shadow-black/15 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-dental-100/30 text-dental-600 group-hover:bg-dental-200/50 transition-colors">
                      <LayoutList size={22} />
                    </span>
                    {t('home.ctaServicios')}
                  </Link>
                  <Link
                    to="/contacto"
                    className="group inline-flex items-center justify-center gap-3 border-2 border-white/80 text-white px-7 py-4 rounded-xl font-semibold text-base lg:text-lg bg-white/5 hover:bg-white/15 hover:border-white transition-all duration-200"
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/15 group-hover:bg-white/25 transition-colors">
                      <Phone size={22} />
                    </span>
                    {t('home.ctaContactar')}
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full min-w-0 order-1 lg:order-2 flex items-stretch min-h-0 self-stretch">
              <div className="relative w-full h-full min-h-[220px] rounded-2xl lg:rounded-l-2xl lg:rounded-r-none overflow-hidden shadow-2xl shadow-black/25 ring-2 ring-white/10">
                <img
                  src="/carrusel/p1.png"
                  alt="JULAB S.L. Laboratorio Dental"
                  className="block w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Carousel
        images={carouselImages}
        interval={5000}
        className="py-8 sm:py-12 md:py-16 bg-slate-50"
      />

      <section className="py-10 sm:py-16 md:py-24 bg-white w-full min-w-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full min-w-0">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 px-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 break-words">{t('home.pillarsTitle')}</h2>
            <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base">{t('home.pillarsSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {valores.map(({ icon: Icon, titleKey, textKey }) => (
              <div key={titleKey} className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-dental-200 hover:shadow-md transition-all min-w-0">
                <div className="w-12 h-12 rounded-xl bg-dental-100 flex items-center justify-center text-dental-600 mb-4 flex-shrink-0">
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold text-slate-900 text-base sm:text-lg">{t(titleKey)}</h3>
                <p className="mt-2 text-slate-600 text-sm break-words">{t(textKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 md:py-24 bg-slate-50 w-full min-w-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="min-w-0 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 break-words">{t('home.identityTitle')}</h2>
              <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base break-words">
                {t('home.identityP1')}
              </p>
              <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base break-words">
                {t('home.identityP2')}
              </p>
              <Link to="/nosotros" className="inline-flex mt-6 text-dental-600 font-semibold hover:text-dental-700">
                {t('home.identityLink')}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 min-w-0 order-1 lg:order-2">
              {(['home.area1', 'home.area2', 'home.area3', 'home.area4'] as const).map((key) => (
                <div key={key} className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200 shadow-sm text-center min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-slate-700 break-words">{t(key)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-dental-600 text-white w-full min-w-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center w-full min-w-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold break-words px-2">{t('home.ctaTitle')}</h2>
          <p className="mt-3 sm:mt-4 text-dental-100 max-w-xl mx-auto text-sm sm:text-base break-words px-2">
            {t('home.ctaSubtitle')}
          </p>
          <Link to="/contacto" className="inline-flex mt-6 sm:mt-8 bg-white text-dental-700 px-6 py-3 sm:px-8 rounded-xl font-semibold hover:bg-dental-50 transition-colors">
            {t('home.ctaButton')}
          </Link>
        </div>
      </section>
    </>
  )
}
