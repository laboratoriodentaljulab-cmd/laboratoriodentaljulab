import { useTranslation } from 'react-i18next'
import { Package, Activity, Smile, Crown, Scan, Zap } from 'lucide-react'

const categoryKeys = [
  { id: 1, icon: Package, titleKey: 'servicios.cat1Title', itemsKey: 'servicios.cat1Items' },
  { id: 2, icon: Activity, titleKey: 'servicios.cat2Title', itemsKey: 'servicios.cat2Items' },
  { id: 3, icon: Smile, titleKey: 'servicios.cat3Title', itemsKey: 'servicios.cat3Items' },
  { id: 4, icon: Crown, titleKey: 'servicios.cat4Title', itemsKey: 'servicios.cat4Items' },
  { id: 5, icon: Scan, titleKey: 'servicios.cat5Title', itemsKey: 'servicios.cat5Items' },
  { id: 6, icon: Zap, titleKey: 'servicios.cat6Title', itemsKey: 'servicios.cat6Items' },
] as const

export default function Servicios() {
  const { t } = useTranslation()
  return (
    <>
      <section className="relative bg-gradient-to-br from-dental-600 to-dental-800 text-white py-14 sm:py-20 md:py-24 w-full min-w-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.12)_0%,_transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center relative">
          <p className="text-dental-200 text-sm font-semibold uppercase tracking-wider">{t('servicios.eyebrow')}</p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">
            {t('servicios.title')}
          </h1>
          <p className="mt-4 text-dental-100 text-base sm:text-lg max-w-2xl mx-auto">
            {t('servicios.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 w-full min-w-0 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categoryKeys.map((cat) => {
              const Icon = cat.icon
              const items = t(cat.itemsKey, { returnObjects: true }) as string[]
              return (
                <article
                  key={cat.id}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-dental-200/60 transition-all duration-300 min-w-0"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-dental-100 text-dental-600 flex items-center justify-center group-hover:bg-dental-200/80 group-hover:text-dental-700 transition-colors">
                      <Icon size={24} />
                    </span>
                    <h2 className="text-lg font-bold text-slate-900 leading-tight pt-1.5">
                      {t(cat.titleKey)}
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    {Array.isArray(items) && items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-slate-600 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-dental-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white w-full min-w-0 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center">
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            {t('servicios.disclaimer')}
          </p>
        </div>
      </section>
    </>
  )
}
