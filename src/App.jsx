// App.jsx — Arma la página uniendo todas las secciones en orden.
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Beneficios from './components/Beneficios.jsx'
import Menu from './components/Menu.jsx'
import Testimonios from './components/Testimonios.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      {/* Primer elemento enfocable: permite saltar la navegación con el teclado */}
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido">
        <Hero />
        <Beneficios />
        <Menu />
        <Testimonios />
        <Contacto />
      </main>

      <Footer />
    </>
  )
}

export default App
