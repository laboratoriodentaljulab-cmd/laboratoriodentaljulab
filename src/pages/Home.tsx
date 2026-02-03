import { Link } from 'react-router-dom'
import { Beaker, Shield, MessageSquare, Scale } from 'lucide-react'
import Carousel from '../components/Carousel'

const carouselImages: string[] = [
  '/carrusel/c1.jpg',
  '/carrusel/c2.jpg',
  '/carrusel/c3.jpg',
]

export default function Home() {
  const valores = [
    { icon: Beaker, title: 'Rigor técnico', text: 'Cada trabajo responde a un análisis técnico y a una necesidad concreta del profesional prescriptor.' },
    { icon: Shield, title: 'Coherencia funcional', text: 'La técnica está al servicio de la función. La función respeta la biología.' },
    { icon: MessageSquare, title: 'Comunicación clara', text: 'Diálogo profesional constante con el prescriptor y respeto al marco clínico y legal.' },
    { icon: Scale, title: 'Responsabilidad', text: 'JULAB S.L. no sustituye al profesional sanitario ni emite diagnósticos clínicos.' },
  ]

  return (
    <>
      <section className="relative bg-gradient-to-br from-dental-600 to-dental-800 text-white overflow-hidden w-full min-w-0">
        <div className="max-w-content-wide mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-12 sm:py-16 md:py-20 lg:py-28 relative w-full min-w-0">
          <div className="max-w-2xl w-full min-w-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight break-words">JULAB S.L.</h1>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-dental-100 uppercase tracking-wide font-medium break-words">
              Laboratorio dental especializado
            </p>
            <p className="mt-1 text-base sm:text-lg md:text-xl text-dental-100 uppercase tracking-wide font-medium break-words">
              Ortopedia maxilar · Aparatos funcionales
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
              <Link to="/servicios" className="inline-flex items-center justify-center gap-2 bg-white text-dental-700 px-5 py-3 sm:px-6 sm:py-3 rounded-xl font-semibold hover:bg-dental-50 transition-colors text-center min-h-[44px]">
                Nuestros servicios
              </Link>
              <Link to="/contacto" className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors text-center min-h-[44px]">
                Contactar · Murcia
              </Link>
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
        <div className="max-w-content-wide mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full min-w-0">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 px-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 break-words">Nuestros pilares</h2>
            <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base">La biología guía cada decisión técnica.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {valores.map(({ icon: Icon, title, text }) => (
              <div key={title} className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-dental-200 hover:shadow-md transition-all min-w-0">
                <div className="w-12 h-12 rounded-xl bg-dental-100 flex items-center justify-center text-dental-600 mb-4 flex-shrink-0">
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold text-slate-900 text-base sm:text-lg">{title}</h3>
                <p className="mt-2 text-slate-600 text-sm break-words">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 md:py-24 bg-slate-50 w-full min-w-0">
        <div className="max-w-content-wide mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="min-w-0 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 break-words">Identidad y propósito</h2>
              <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base break-words">
                JULAB S.L. nace del oficio, del trabajo manual bien ejecutado y de la evolución constante del conocimiento técnico. Nuestra actividad se fundamenta en la comprensión profunda de la función, la relación estructural y el equilibrio biomecánico aplicados a cada dispositivo que elaboramos.
              </p>
              <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base break-words">
                Trabajamos exclusivamente bajo prescripción clínica. No buscamos volumen; buscamos coherencia y resultados duraderos.
              </p>
              <Link to="/nosotros" className="inline-flex mt-6 text-dental-600 font-semibold hover:text-dental-700">
                Conocer JULAB S.L.
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 min-w-0 order-1 lg:order-2">
              {['Aparatología funcional', 'Prótesis removible', 'Prótesis fija', 'Tecnología digital'].map((label) => (
                <div key={label} className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200 shadow-sm text-center min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-slate-700 break-words">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-dental-600 text-white w-full min-w-0">
        <div className="max-w-content-wide mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center w-full min-w-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold break-words px-2">¿Tiene un caso o necesita presupuesto?</h2>
          <p className="mt-3 sm:mt-4 text-dental-100 max-w-xl mx-auto text-sm sm:text-base break-words px-2">
            Estamos en Murcia. Contacte por teléfono o envíenos su consulta.
          </p>
          <Link to="/contacto" className="inline-flex mt-6 sm:mt-8 bg-white text-dental-700 px-6 py-3 sm:px-8 rounded-xl font-semibold hover:bg-dental-50 transition-colors">
            Contactar con JULAB S.L.
          </Link>
        </div>
      </section>
    </>
  )
}
