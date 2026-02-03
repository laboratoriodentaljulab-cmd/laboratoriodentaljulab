import { useState } from 'react'
import { Package, Activity, Smile, Crown, Scan, Zap, ChevronDown, ChevronUp } from 'lucide-react'

const categorias = [
  {
    id: 1,
    icon: Package,
    title: 'Preparación de trabajos',
    items: ['Cubetas', 'Planchas base', 'Modelos y montajes', 'Articuladores', 'Trabajos auxiliares'],
    color: 'dental',
  },
  {
    id: 2,
    icon: Activity,
    title: 'Aparatología funcional, RNO, removible y fija',
    items: [
      'Aparatología funcional y RNO',
      'Ortodoncia removible',
      'Placas obturadoras',
      'Férulas',
      'Ortodoncia fija',
      'Ortodoncia digital y anclaje óseo',
      'Componentes de ortodoncia',
      'Aditamentos adicionales',
    ],
    color: 'dental',
  },
  {
    id: 3,
    icon: Smile,
    title: 'Prótesis parciales, completas y estructuras metálicas removibles',
    items: [
      'Removible resina estética',
      'Componentes de resina',
      'Composturas PPR resina',
      'PRP flexible (Valplast)',
      'Esqueléticos',
      'Composturas de esqueléticos',
    ],
    color: 'dental',
  },
  {
    id: 4,
    icon: Crown,
    title: 'Prótesis fija e implantología',
    items: [
      'Metal cerámica (Cr/Cobalto)',
      'Gradia (composite cerámico)',
      'Titanio y Cr/Cobalto fresado',
      'Zirconio CAD/CAM',
      'Implantología',
      'Ataches y componentes',
    ],
    color: 'dental',
  },
  {
    id: 5,
    icon: Scan,
    title: 'Escaneado e impresiones 3D',
    items: ['Escaneado de modelos', 'Impresión 3D', 'Diseño CAD/CAM'],
    color: 'dental',
  },
  {
    id: 6,
    icon: Zap,
    title: 'Servicios especiales',
    items: ['Urgencias', 'Modificaciones de trabajos'],
    color: 'dental',
  },
]

export default function Servicios() {
  const [abierto, setAbierto] = useState<number | null>(1)

  return (
    <>
      <section className="relative bg-gradient-to-br from-dental-600 to-dental-800 text-white py-14 sm:py-20 md:py-24 w-full min-w-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.12)_0%,_transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center relative">
          <p className="text-dental-200 text-sm font-semibold uppercase tracking-wider">Catálogo</p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">
            Servicios del laboratorio
          </h1>
          <p className="mt-4 text-dental-100 text-base sm:text-lg max-w-2xl mx-auto">
            Preparación de trabajos, aparatología, prótesis, implantología, escaneado 3D y servicios especiales.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 w-full min-w-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full min-w-0">
          <div className="space-y-3">
            {categorias.map((cat) => {
              const isOpen = abierto === cat.id
              const Icon = cat.icon
              return (
                <div
                  key={cat.id}
                  className="rounded-2xl border border-slate-200 bg-white shadow-md shadow-slate-200/50 overflow-hidden min-w-0 transition-all hover:shadow-lg hover:border-dental-200/60"
                >
                  <button
                    type="button"
                    onClick={() => setAbierto(isOpen ? null : cat.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-dental-500 focus:ring-inset rounded-2xl"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-dental-100 text-dental-600 flex items-center justify-center">
                        <Icon size={24} />
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-slate-900">
                        {cat.title}
                      </span>
                    </div>
                    <span className="flex-shrink-0 text-slate-400">
                      {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-0 sm:pl-14">
                        {cat.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-slate-600 py-1.5 px-3 rounded-lg bg-slate-50 border border-slate-100"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-dental-500 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-slate-50 w-full min-w-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <p className="text-center text-slate-600 text-sm sm:text-base">
            Todos los trabajos se realizan bajo prescripción clínica. Para plazos y condiciones, contacte con nosotros.
          </p>
        </div>
      </section>
    </>
  )
}
