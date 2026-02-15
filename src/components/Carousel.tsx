import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'

interface CarouselProps {
  images?: string[]
  interval?: number
  className?: string
}

export default function Carousel({ images = [], interval = 5000, className = '' }: CarouselProps) {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)

  const slides = images.length > 0 ? images : [null]
  const current = slides[index]
  const isPlaceholder = images.length === 0

  useEffect(() => {
    if (slides.length <= 1) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval)
    return () => clearInterval(id)
  }, [slides.length, interval])

  const go = (delta: number) => {
    setIndex((i) => (i + delta + slides.length) % slides.length)
  }

  return (
    <section className={`w-full min-w-0 ${className}`}>
      <div className="w-full px-0">
        <div className="relative overflow-hidden aspect-[21/9] min-h-[160px] sm:min-h-[200px] md:min-h-[260px] bg-slate-200">
          {current ? (
            <img
              src={current}
              alt=""
              className="absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-500 bg-slate-100"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-slate-100 to-dental-50/30 text-slate-500 p-8">
              <div className="w-20 h-20 rounded-2xl bg-white/80 flex items-center justify-center shadow-inner">
                <ImageIcon size={40} className="text-dental-400" />
              </div>
              <p className="text-center font-medium text-slate-600 max-w-sm">
                {t('carousel.placeholder')} <code className="text-sm bg-white/80 px-2 py-0.5 rounded">{t('carousel.placeholderCode')}</code>
              </p>
              <p className="text-sm text-slate-500">{t('carousel.placeholderHint')}</p>
            </div>
          )}

          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-slate-700 hover:bg-white hover:text-dental-600 transition-colors focus:outline-none focus:ring-2 focus:ring-dental-500 z-10"
                aria-label={t('carousel.prev')}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-slate-700 hover:bg-white hover:text-dental-600 transition-colors focus:outline-none focus:ring-2 focus:ring-dental-500 z-10"
                aria-label={t('carousel.next')}
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === index ? 'bg-white scale-110 shadow' : 'bg-white/60 hover:bg-white/80'
                    }`}
                    aria-label={`${t('carousel.goTo')} ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
