// Beneficios.jsx — Tres razones para elegir Aroma Valle, pintadas desde un arreglo.
import './Beneficios.css'

const beneficios = [
  {
    emoji: '🌱',
    titulo: 'Café de origen',
    texto: 'Compramos directo a fincas del Valle y el Cauca. Sabes de dónde viene cada grano y a quién apoyas.',
  },
  {
    emoji: '👩‍🍳',
    titulo: 'Baristas expertos',
    texto: 'Métodos V60, Chemex, prensa francesa y espresso. Pregunta y te recomendamos según tu gusto.',
  },
  {
    emoji: '💻',
    titulo: 'Espacio para ti',
    texto: 'Wi-Fi rápido, enchufes en cada mesa y buena música. Ideal para trabajar, estudiar o una cita.',
  },
]

function Beneficios() {
  return (
    <section id="beneficios" className="section beneficios" aria-labelledby="beneficios-titulo">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">¿Por qué nosotros?</p>
          <h2 id="beneficios-titulo" className="section-title">
            Más que un café, un plan
          </h2>
          <p className="section-subtitle">
            Creamos el lugar al que te dan ganas de volver.
          </p>
        </div>

        <ul className="beneficios-grid">
          {beneficios.map((beneficio) => (
            <li key={beneficio.titulo} className="beneficio-card">
              <span className="beneficio-emoji" aria-hidden="true">
                {beneficio.emoji}
              </span>
              <h3 className="beneficio-titulo">{beneficio.titulo}</h3>
              <p className="beneficio-texto">{beneficio.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Beneficios
