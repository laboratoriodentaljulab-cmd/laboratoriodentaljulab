import { Target, Zap, Scale, Shield, AlertCircle, Quote } from 'lucide-react'

export default function Nosotros() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dental-600/10 via-white to-dental-500/10 py-14 sm:py-20 md:py-24 w-full min-w-0 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center w-full min-w-0">
          <p className="text-dental-600 font-semibold text-sm uppercase tracking-wider">Sobre nosotros</p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 break-words">
            JULAB S.L.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Laboratorio dental especializado · Ortopedia maxilar · Aparatos funcionales
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 w-full min-w-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full min-w-0 space-y-16">
          <article className="rounded-2xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 p-6 sm:p-8 md:p-10 min-w-0">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-dental-100 text-dental-600 flex items-center justify-center text-sm font-bold">1</span>
              Identidad y propósito
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
              <p>
                JULAB S.L. es un laboratorio dental orientado al desarrollo técnico de soluciones funcionales, ortopédicas y protésicas, concebidas desde el conocimiento, la experiencia y el respeto por la biología del sistema estomatognático.
              </p>
              <p>
                Nuestra actividad se fundamenta en la comprensión profunda de la función, la relación estructural y el equilibrio biomecánico, aplicados a cada dispositivo que elaboramos. No trabajamos bajo esquemas industriales ni de producción en serie. Cada trabajo responde a un análisis técnico y a una necesidad concreta, definida por el profesional prescriptor.
              </p>
              <p>
                JULAB S.L. nace del oficio, del trabajo manual bien ejecutado y de la evolución constante del conocimiento técnico.
              </p>
            </div>
            <blockquote className="mt-8 pl-5 sm:pl-6 border-l-4 border-dental-500 bg-dental-50/50 py-3 rounded-r-xl">
              <div className="flex gap-2 text-slate-700 font-medium">
                <Quote size={20} className="text-dental-500 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p>La técnica está al servicio de la función.</p>
                  <p>La función respeta la biología.</p>
                  <p>La biología guía cada decisión técnica.</p>
                </div>
              </div>
            </blockquote>
          </article>

          <article className="rounded-2xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 p-6 sm:p-8 md:p-10 min-w-0">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-dental-100 text-dental-600 flex items-center justify-center text-sm font-bold">2</span>
              Valores
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600">
              {['Rigor técnico', 'Coherencia funcional', 'Comunicación profesional clara', 'Respeto absoluto al marco clínico y legal'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-dental-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 p-6 sm:p-8 md:p-10 min-w-0">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-dental-100 text-dental-600 flex items-center justify-center text-sm font-bold">3</span>
              Filosofía de trabajo
            </h2>
            <p className="text-slate-600 mb-6">
              En JULAB S.L. entendemos la técnica como una extensión del conocimiento, la experiencia y la responsabilidad profesional. Todo trabajo se desarrolla bajo tres principios fundamentales:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: Target, title: 'Funcionalidad', text: 'Cada dispositivo debe responder a una necesidad real dentro del sistema estomatognático.' },
                { icon: Zap, title: 'Precisión', text: 'El ajuste, la estabilidad y la coherencia técnica son esenciales.' },
                { icon: Scale, title: 'Responsabilidad profesional', text: 'Trabajo siempre bajo prescripción clínica.' },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="p-5 rounded-xl bg-slate-50/80 border border-slate-100 min-w-0 hover:border-dental-200 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-dental-100 flex items-center justify-center text-dental-600 mb-3">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600 break-words">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-slate-600 italic border-l-2 border-dental-300 pl-4">
              No buscamos volumen. Buscamos coherencia. No buscamos rapidez. Buscamos resultados duraderos.
            </p>
          </article>

          <div className="rounded-2xl bg-amber-50/80 border border-amber-200/80 p-5 sm:p-6 flex gap-4 min-w-0 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 flex-shrink-0">
              <AlertCircle size={22} />
            </div>
            <div className="min-w-0">
              <h2 className="text-lg font-bold text-slate-900">Aviso importante</h2>
              <p className="mt-2 text-slate-700 text-sm sm:text-base">
                JULAB S.L. no sustituye al profesional sanitario ni emite diagnósticos clínicos.
              </p>
            </div>
          </div>

          <article className="rounded-2xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 p-6 sm:p-8 md:p-10 min-w-0">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 flex items-center gap-2">
              <Shield size={26} className="text-dental-600" />
              Marco ético y legal
            </h2>
            <ul className="space-y-3 text-slate-600">
              {[
                'JULAB S.L. actúa como laboratorio técnico bajo prescripción profesional.',
                'No realiza diagnósticos ni tratamientos clínicos.',
                'Cumple la normativa sanitaria vigente.',
                'Respeta la protección de datos y la confidencialidad.',
                'La ética profesional es un pilar fundamental del trabajo diario.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-dental-500 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  )
}
