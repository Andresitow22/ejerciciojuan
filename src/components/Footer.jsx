// Footer.jsx — Pie de página con logo, enlaces, redes y año automático.
import './Footer.css'

const redes = [
  { nombre: 'Instagram', emoji: '📸', href: 'https://www.instagram.com/' },
  { nombre: 'TikTok', emoji: '🎵', href: 'https://www.tiktok.com/' },
  { nombre: 'WhatsApp', emoji: '💬', href: 'https://wa.me/573000000000' },
]

function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-marca">
          <p className="footer-logo">
            <span aria-hidden="true">☕</span> Aroma Valle
          </p>
          <p className="footer-lema">Café de especialidad hecho en Cali, con cariño valluno.</p>
        </div>

        <nav aria-label="Redes sociales">
          <ul className="footer-redes">
            {redes.map((red) => (
              <li key={red.nombre}>
                <a href={red.href} target="_blank" rel="noreferrer">
                  <span aria-hidden="true">{red.emoji}</span> {red.nombre}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container footer-legal">
        <p>© {anio} Aroma Valle. Todos los derechos reservados.</p>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  )
}

export default Footer
