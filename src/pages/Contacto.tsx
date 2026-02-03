import { useState } from 'react'
import { Phone, MapPin, Send, Clock } from 'lucide-react'

const DIRECCION = 'Plaza Puerta Nueva, 3 · 4ª Escalera – Entresuelo A · 30001 Murcia'
const TELEFONO = '968 93 11 39'
const MOVIL = '689 41 18 06'
const MAPA_URL = 'https://www.google.com/maps?q=Plaza+Puerta+Nueva+3,+30001+Murcia,+España&output=embed'

export default function Contacto() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="bg-gradient-to-b from-dental-50 to-white py-12 sm:py-16 md:py-20 w-full min-w-0">
        <div className="max-w-content-wide mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center w-full min-w-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 break-words px-2">Contacto</h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto break-words px-2">
            Estamos en Murcia, España. Solicite presupuesto, envíe sus trabajos o consulte plazos.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 w-full min-w-0">
        <div className="max-w-content-wide mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            <div className="lg:col-span-1 space-y-5 sm:space-y-6 min-w-0">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 rounded-xl bg-dental-100 flex items-center justify-center text-dental-600 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Teléfono</h3>
                  <a href={`tel:+34${TELEFONO.replace(/\s/g, '')}`} className="text-slate-600 hover:text-dental-600">
                    {TELEFONO}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 rounded-xl bg-dental-100 flex items-center justify-center text-dental-600 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Móvil</h3>
                  <a href={`tel:+34${MOVIL.replace(/\s/g, '')}`} className="text-slate-600 hover:text-dental-600">
                    {MOVIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 rounded-xl bg-dental-100 flex items-center justify-center text-dental-600 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Dirección</h3>
                  <p className="text-slate-600 text-sm sm:text-base break-words">
                    {DIRECCION}
                  </p>
                  <a
                    href="https://www.google.com/maps/search/Plaza+Puerta+Nueva+3+30001+Murcia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dental-600 hover:text-dental-700 text-sm mt-1 inline-block"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 rounded-xl bg-dental-100 flex items-center justify-center text-dental-600 flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Horario</h3>
                  <p className="text-slate-600 text-sm">
                    Consulte por teléfono o correo.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6 min-w-0">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 md:p-8 shadow-sm">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 break-words">Envíenos un mensaje</h2>
                {sent ? (
                  <div className="py-12 text-center">
                    <p className="text-dental-600 font-medium text-lg">Mensaje enviado correctamente.</p>
                    <p className="text-slate-600 mt-2">Le contactaremos en breve.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="w-full min-w-0 px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-dental-500 focus:border-dental-500 outline-none transition"
                          placeholder="Su nombre o clínica"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full min-w-0 px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-dental-500 focus:border-dental-500 outline-none transition"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full min-w-0 px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-dental-500 focus:border-dental-500 outline-none transition"
                        placeholder="968 00 00 00"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensaje *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full min-w-0 px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-dental-500 focus:border-dental-500 outline-none transition resize-none"
                        placeholder="Indique el tipo de trabajo, cantidad de unidades o cualquier detalle del pedido."
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-dental-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-dental-700 transition-colors"
                    >
                      Enviar mensaje
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 min-w-0">
                <h3 className="sr-only">Ubicación del laboratorio</h3>
                <div className="aspect-video w-full min-h-[220px] sm:min-h-[280px]">
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
                <p className="p-3 text-center text-sm text-slate-600 bg-white border-t border-slate-200">
                  Plaza Puerta Nueva, 3 · 4ª Escalera, Entresuelo A · 30001 Murcia, España
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
