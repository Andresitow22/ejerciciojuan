// Contacto.jsx — Formulario de reserva con validación y datos de contacto.
// No hay servidor: al reservar se arma un mensaje para confirmar por WhatsApp.
import { useState } from 'react'
import './Contacto.css'

// ⚠️ Cambia este número por el WhatsApp real del café (código país + número, sin espacios)
const WHATSAPP = '573000000000'

const HORAS = ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
  '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']

// Fecha de hoy en formato AAAA-MM-DD (hora local) para no permitir fechas pasadas
const hoy = () => new Date().toLocaleDateString('en-CA')

// Convierte "2026-09-27" en "domingo, 27 de septiembre" (se agrega la hora
// T00:00 para que JavaScript la lea en hora local y no cambie de día)
const fechaLegible = (fecha) =>
  new Date(`${fecha}T00:00`).toLocaleDateString('es-CO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

const formularioVacio ={ nombre: '', telefono: '', fecha: '', hora: '', personas: '2', comentario: '' }

// Revisa los campos y devuelve un objeto con los errores encontrados
function validar(datos) {
  const errores = {}
  if (datos.nombre.trim().length < 2) errores.nombre = 'Escribe tu nombre.'
  if (!/^[0-9]{10}$/.test(datos.telefono.replace(/\s/g, ''))) {
    errores.telefono = 'Escribe un celular de 10 dígitos.'
  }
  if (!datos.fecha) errores.fecha = 'Elige una fecha.'
  else if (datos.fecha < hoy()) errores.fecha = 'La fecha no puede ser anterior a hoy.'
  if (!datos.hora) errores.hora = 'Elige una hora.'
  return errores
}

function Contacto() {
  const [datos, setDatos] = useState(formularioVacio)
  const [errores, setErrores] = useState({})
  const [reserva, setReserva] = useState(null) // datos confirmados

  // Un solo manejador para todos los campos, usando el atributo "name"
  const manejarCambio = (e) => {
    const { name, value } = e.target
    setDatos({ ...datos, [name]: value })
    if (errores[name]) setErrores({ ...errores, [name]: undefined })
  }

  const manejarEnvio = (e) => {
    e.preventDefault()
    const nuevosErrores = validar(datos)
    setErrores(nuevosErrores)

    if (Object.keys(nuevosErrores).length > 0) {
      // Lleva el foco al primer campo con error (ayuda a lectores de pantalla)
      const primero = Object.keys(nuevosErrores)[0]
      document.getElementById(`reserva-${primero}`)?.focus()
      return
    }

    setReserva(datos)
    setDatos(formularioVacio)
  }

  const linkWhatsApp = reserva
    ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        `Hola Aroma Valle ☕ Quiero reservar una mesa:\n` +
          `• Nombre: ${reserva.nombre}\n` +
          `• Fecha: ${fechaLegible(reserva.fecha)} a las ${reserva.hora}\n` +
          `• Celular: ${reserva.telefono}\n` +
          `• Personas: ${reserva.personas}` +
          (reserva.comentario ? `\n• Nota: ${reserva.comentario}` : ''),
      )}`
    : ''

  // Props de accesibilidad para cada campo con posible error
  const propsError = (campo) => ({
    'aria-invalid': errores[campo] ? true : undefined,
    'aria-describedby': errores[campo] ? `error-${campo}` : undefined,
  })

  return (
    <section id="contacto" className="section contacto" aria-labelledby="contacto-titulo">
      <div className="container contacto-inner">
        <div className="contacto-info">
          <p className="section-eyebrow">Reservas</p>
          <h2 id="contacto-titulo" className="section-title">
            Reserva tu mesa
          </h2>
          <p className="section-subtitle">
            Llena el formulario y confirma por WhatsApp en un clic. Te respondemos en minutos.
          </p>

          <ul className="contacto-datos">
            <li>
              <span aria-hidden="true">📍</span>
              <span>
                <strong>Dirección</strong>
                Calle 3 # 4-50, barrio San Antonio, Cali
              </span>
            </li>
            <li>
              <span aria-hidden="true">🕖</span>
              <span>
                <strong>Horario</strong>
                Lunes a domingo, 7:00 am – 9:00 pm
              </span>
            </li>
            <li>
              <span aria-hidden="true">💬</span>
              <span>
                <strong>WhatsApp</strong>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                  +57 300 000 0000
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div className="contacto-form-wrap">
          {/* aria-live: el lector de pantalla anuncia cuando aparece la confirmación */}
          <div aria-live="polite">
            {reserva && (
              <div className="reserva-ok">
                <p className="reserva-ok-titulo">
                  <span aria-hidden="true">🎉</span> ¡Listo, {reserva.nombre}!
                </p>
                <p>
                  Mesa para {reserva.personas} el {fechaLegible(reserva.fecha)} a las {reserva.hora}.
                  Confírmala por WhatsApp para asegurarla.
                </p>
                <div className="reserva-ok-acciones">
                  <a href={linkWhatsApp} target="_blank" rel="noreferrer" className="btn btn-primary">
                    Confirmar por WhatsApp
                  </a>
                  <button type="button" className="btn btn-secondary" onClick={() => setReserva(null)}>
                    Hacer otra reserva
                  </button>
                </div>
              </div>
            )}
          </div>

          {!reserva && (
            <form className="contacto-form" onSubmit={manejarEnvio} noValidate>
              <div className="campo">
                <label htmlFor="reserva-nombre">Nombre</label>
                <input
                  id="reserva-nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  value={datos.nombre}
                  onChange={manejarCambio}
                  {...propsError('nombre')}
                />
                {errores.nombre && <p id="error-nombre" className="campo-error">{errores.nombre}</p>}
              </div>

              <div className="campo">
                <label htmlFor="reserva-telefono">Celular</label>
                <input
                  id="reserva-telefono"
                  name="telefono"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder="300 123 4567"
                  value={datos.telefono}
                  onChange={manejarCambio}
                  {...propsError('telefono')}
                />
                {errores.telefono && <p id="error-telefono" className="campo-error">{errores.telefono}</p>}
              </div>

              <div className="campo-fila">
                <div className="campo">
                  <label htmlFor="reserva-fecha">Fecha</label>
                  <input
                    id="reserva-fecha"
                    name="fecha"
                    type="date"
                    min={hoy()}
                    value={datos.fecha}
                    onChange={manejarCambio}
                    {...propsError('fecha')}
                  />
                  {errores.fecha && <p id="error-fecha" className="campo-error">{errores.fecha}</p>}
                </div>

                <div className="campo">
                  <label htmlFor="reserva-hora">Hora</label>
                  <select
                    id="reserva-hora"
                    name="hora"
                    value={datos.hora}
                    onChange={manejarCambio}
                    {...propsError('hora')}
                  >
                    <option value="">Elige</option>
                    {HORAS.map((h) => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                  {errores.hora && <p id="error-hora" className="campo-error">{errores.hora}</p>}
                </div>

                <div className="campo">
                  <label htmlFor="reserva-personas">Personas</label>
                  <select id="reserva-personas" name="personas" value={datos.personas} onChange={manejarCambio}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="campo">
                <label htmlFor="reserva-comentario">
                  Comentario <span className="campo-opcional">(opcional)</span>
                </label>
                <textarea
                  id="reserva-comentario"
                  name="comentario"
                  rows="3"
                  placeholder="¿Cumpleaños, mesa con enchufe, silla para bebé?"
                  value={datos.comentario}
                  onChange={manejarCambio}
                />
              </div>

              <button type="submit" className="btn btn-primary contacto-enviar">
                Reservar mesa
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contacto
