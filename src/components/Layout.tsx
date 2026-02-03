import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MapPin } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/nosotros', label: 'Nosotros' },
    { to: '/contacto', label: 'Contacto' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-content-wide mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full min-w-0">
          <div className="flex items-center justify-between h-16 md:h-20 gap-2 min-h-[4rem]">
            <Link to="/" className="flex items-center shrink-0 min-w-0 max-w-[70%] sm:max-w-none">
              <img src="/logo/logo.png" alt="JULAB S.L." className="h-10 sm:h-14 md:h-20 w-auto max-h-16 sm:max-h-[5rem] object-contain object-left" />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`font-medium transition-colors ${
                    location.pathname === to ? 'text-dental-600' : 'text-slate-600 hover:text-dental-600'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+34968931139" className="flex items-center gap-2 text-slate-600 hover:text-dental-600 text-sm">
                <Phone size={18} />
                <span>968 93 11 39</span>
              </a>
              <Link
                to="/contacto"
                className="bg-dental-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-dental-700 transition-colors"
              >
                Solicitar presupuesto
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Menú"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-4 flex flex-col gap-2">
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
                968 93 11 39
              </a>
              <Link
                to="/contacto"
                onClick={() => setMenuOpen(false)}
                className="bg-dental-600 text-white py-3 px-4 rounded-lg font-medium text-center"
              >
                Solicitar presupuesto
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16 md:pt-20 w-full min-w-0">{children}</main>

      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-content-wide mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src="/logo/logo.png" alt="JULAB S.L." className="h-8 w-auto object-contain brightness-0 invert opacity-90" />
              <p className="mt-2 text-sm text-slate-400 break-words">Laboratorio dental especializado · Ortopedia maxilar · Aparatos funcionales. Murcia, España.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Enlaces</h3>
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
              <h3 className="font-semibold text-white mb-3">Contacto</h3>
              <a href="tel:+34968931139" className="flex items-center gap-2 hover:text-dental-400 transition-colors">
                <Phone size={18} />
                968 93 11 39
              </a>
              <a href="tel:+34689411806" className="flex items-center gap-2 mt-2 hover:text-dental-400 transition-colors">
                <Phone size={18} />
                689 41 18 06
              </a>
              <div className="flex items-center gap-2 mt-2 text-slate-400 text-sm break-words">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>Plaza Puerta Nueva, 3 · 4ª Escalera, Entresuelo A · 30001 Murcia</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-400 break-words px-2">
            © {new Date().getFullYear()} JULAB S.L. Laboratorio Dental. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
