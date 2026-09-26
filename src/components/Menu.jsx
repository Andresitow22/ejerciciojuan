// Menu.jsx — Carta con 6 productos, precios en pesos y filtro por categoría.
import { useState } from 'react'
import './Menu.css'

const productos = [
  { id: 1, emoji: '☕', nombre: 'Espresso de la casa', descripcion: 'Notas a panela y cacao. Tueste medio.', precio: 5500, categoria: 'bebidas' },
  { id: 2, emoji: '🥛', nombre: 'Cappuccino', descripcion: 'Espresso doble con leche texturizada.', precio: 8500, categoria: 'bebidas' },
  { id: 3, emoji: '🫖', nombre: 'Filtrado V60', descripcion: 'Café de origen del día, preparado a mano.', precio: 10000, categoria: 'bebidas' },
  { id: 4, emoji: '🧊', nombre: 'Cold brew de maracuyá', descripcion: '18 horas en frío con un toque tropical.', precio: 12000, categoria: 'bebidas' },
  { id: 5, emoji: '🥐', nombre: 'Croissant de almendras', descripcion: 'Horneado cada mañana en casa.', precio: 9000, categoria: 'comida' },
  { id: 6, emoji: '🧀', nombre: 'Pandebono y buñuelo', descripcion: 'El combo valluno de toda la vida.', precio: 7000, categoria: 'comida' },
]

const filtros = [
  { valor: 'todos', texto: 'Todos' },
  { valor: 'bebidas', texto: 'Bebidas' },
  { valor: 'comida', texto: 'Comida' },
]

// Convierte 8500 en "$ 8.500" (formato de pesos colombianos)
const formatearPrecio = (valor) =>
  valor.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  })

function Menu() {
  const [filtro, setFiltro] = useState('todos')

  const productosVisibles =
    filtro === 'todos' ? productos : productos.filter((p) => p.categoria === filtro)

  return (
    <section id="menu" className="section menu" aria-labelledby="menu-titulo">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Nuestra carta</p>
          <h2 id="menu-titulo" className="section-title">
            Lo que más piden
          </h2>
          <p className="section-subtitle">Precios en pesos colombianos, IVA incluido.</p>
        </div>

        <div className="menu-filtros" role="group" aria-label="Filtrar productos">
          {filtros.map((f) => (
            <button
              key={f.valor}
              type="button"
              className={`menu-filtro ${filtro === f.valor ? 'is-active' : ''}`}
              aria-pressed={filtro === f.valor}
              onClick={() => setFiltro(f.valor)}
            >
              {f.texto}
            </button>
          ))}
        </div>

        <ul className="menu-grid">
          {productosVisibles.map((producto) => (
            <li key={producto.id} className="menu-card">
              <span className="menu-emoji" aria-hidden="true">
                {producto.emoji}
              </span>
              <div className="menu-info">
                <div className="menu-fila">
                  <h3 className="menu-nombre">{producto.nombre}</h3>
                  <p className="menu-precio">{formatearPrecio(producto.precio)}</p>
                </div>
                <p className="menu-descripcion">{producto.descripcion}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Menu
