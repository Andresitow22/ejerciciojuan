// Header.jsx — Barra de navegación fija con menú hamburguesa en celular.
import { useState } from 'react'
import './Header.css'

const enlaces = [
  { href: '#beneficios', texto: 'Nosotros' },
  { href: '#menu', texto: 'Menú' },
  { href: '#testimonios', texto: 'Opiniones' },
  { href: '#contacto', texto: 'Contacto' },
]

function Header() {
  // true = menú abierto (solo importa en celular)
  const [abierto, setAbierto] = useState(false)

  const cerrarMenu = () => setAbierto(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="header-logo" onClick={cerrarMenu}>
          <span aria-hidden="true">☕</span> Aroma Valle
        </a>

        <button
          type="button"
          className="header-toggle"
          aria-expanded={abierto}
          aria-controls="menu-principal"
          onClick={() => setAbierto(!abierto)}
        >
          <span className="sr-only">{abierto ? 'Cerrar menú' : 'Abrir menú'}</span>
          <span className={`hamburguesa ${abierto ? 'is-open' : ''}`} aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav
          id="menu-principal"
          className={`header-nav ${abierto ? 'is-open' : ''}`}
          aria-label="Principal"
        >
          <ul>
            {enlaces.map((enlace) => (
              <li key={enlace.href}>
                <a href={enlace.href} onClick={cerrarMenu}>
                  {enlace.texto}
                </a>
              </li>
            ))}
            <li>
              <a href="#contacto" className="btn btn-primary header-cta" onClick={cerrarMenu}>
                Reservar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
