// Hero.jsx — Primera pantalla: título, mensaje principal y botón "Reserva tu mesa".
import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-titulo">
      <div className="container hero-inner">
        <div className="hero-texto">
          <p className="hero-eyebrow">Café de especialidad · Cali</p>
          <h1 id="hero-titulo" className="hero-titulo">
            Tu próximo café favorito está en <span>Aroma Valle</span>
          </h1>
          <p className="hero-descripcion">
            Granos del Valle del Cauca tostados aquí mismo, baristas que te
            cuentan la historia de cada taza y un espacio para trabajar,
            estudiar o parchar con tus amigos.
          </p>

          <div className="hero-acciones">
            <a href="#contacto" className="btn btn-primary">
              Reserva tu mesa <span aria-hidden="true">→</span>
            </a>
            <a href="#menu" className="btn btn-secondary">
              Ver menú
            </a>
          </div>

          <ul className="hero-datos">
            <li>
              <strong>100%</strong> café colombiano
            </li>
            <li>
              <strong>Wi-Fi</strong> rápido y enchufes
            </li>
            <li>
              <strong>7 am</strong> a 9 pm
            </li>
          </ul>
        </div>

        {/* Ilustración hecha solo con CSS y emojis (decorativa) */}
        <div className="hero-ilustracion" aria-hidden="true">
          <div className="hero-circulo">
            <span className="hero-taza">☕</span>
          </div>
          <span className="hero-flotante hero-flotante-1">🌱</span>
          <span className="hero-flotante hero-flotante-2">🥐</span>
          <span className="hero-flotante hero-flotante-3">✨</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
