import { REGISTER_URL } from '@/lib/config'

export default function Nav() {
  return (
    <nav className="nav" id="mainNav" aria-label="Navegación principal">
      <div className="container">
        <div className="nav__inner">
          <a href="#" className="nav__logo" aria-label="Nexo POS inicio">
            <div className="nav__logo-icon"><i className="bi bi-shop" aria-hidden="true" /></div>
            Nexo
          </a>
          <ul className="nav__links">
            <li><a href="#beneficios">Beneficios</a></li>
            <li><a href="#como-funciona">Cómo funciona</a></li>
            <li><a href="#comercios">Comercios</a></li>
            <li><a href="#precios">Precios</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <div className="nav__actions">
            <a href="#precios" className="btn btn-outline-white" style={{ fontSize: '13px', padding: '.5rem 1.1rem' }}>
              Ver planes
            </a>
            <a href={REGISTER_URL} className="btn btn-white" style={{ fontSize: '13px', padding: '.5rem 1.1rem' }}>
              <i className="bi bi-rocket-takeoff-fill" aria-hidden="true" /> Probar gratis
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
