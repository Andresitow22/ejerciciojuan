// Testimonios.jsx — Opiniones de clientes con estrellas y citas semánticas.
import './Testimonios.css'

const testimonios = [
  {
    nombre: 'Valentina R.',
    detalle: 'Diseñadora, 26 años',
    texto: 'Mi oficina los martes y jueves. El cold brew de maracuyá es otro nivel y nadie te afana.',
    estrellas: 5,
  },
  {
    nombre: 'Andrés M.',
    detalle: 'Estudiante, 22 años',
    texto: 'Vine por el pandebono y me quedé por el V60. Los baristas te explican todo sin hacerte sentir perdido.',
    estrellas: 5,
  },
  {
    nombre: 'Camila y Juan',
    detalle: 'Clientes desde 2024',
    texto: 'Reservamos para nuestro aniversario y nos guardaron la mejor mesa. Volvemos cada mes.',
    estrellas: 5,
  },
]

function Testimonios() {
  return (
    <section id="testimonios" className="section testimonios" aria-labelledby="testimonios-titulo">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Opiniones</p>
          <h2 id="testimonios-titulo" className="section-title">
            Lo que dicen de nosotros
          </h2>
        </div>

        <ul className="testimonios-grid">
          {testimonios.map((t) => (
            <li key={t.nombre} className="testimonio-card">
              <figure>
                <p className="testimonio-estrellas" role="img" aria-label={`${t.estrellas} de 5 estrellas`}>
                  {'⭐'.repeat(t.estrellas)}
                </p>
                <blockquote className="testimonio-texto">
                  <p>“{t.texto}”</p>
                </blockquote>
                <figcaption className="testimonio-autor">
                  <span className="testimonio-avatar" aria-hidden="true">
                    {t.nombre.charAt(0)}
                  </span>
                  <span>
                    <cite className="testimonio-nombre">{t.nombre}</cite>
                    <span className="testimonio-detalle">{t.detalle}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Testimonios
