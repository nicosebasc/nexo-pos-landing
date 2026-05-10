import { REGISTER_URL } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__brand">
              <div className="footer__brand-icon">
                <i className="bi bi-shop" style={{ color: '#fff', fontSize: '15px' }} aria-hidden="true" />
              </div>
              <span className="footer__brand-name">Pos Comercio</span>
            </div>
            <div className="footer__brand-desc">
              Sistema de gestión POS para comercios en Chile. Simple, potente y hecho para crecer contigo.
            </div>
          </div>
          <div>
            <div className="footer__col-title">Producto</div>
            <ul className="footer__links">
              <li><a href="/#beneficios">Funcionalidades</a></li>
              <li><a href="/#precios">Precios</a></li>
              <li><a href="/#comercios">Rubros</a></li>
              <li><a href="/#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="footer__col-title">Empresa</div>
            <ul className="footer__links">
              <li><a href="mailto:contacto@pos-comercio.cl">Sobre Pos Comercio</a></li>
              <li><a href="mailto:contacto@pos-comercio.cl">Contacto</a></li>
            </ul>
          </div>
          <div>
            <div className="footer__col-title">Soporte</div>
            <ul className="footer__links">
              <li><a href="mailto:contacto@pos-comercio.cl">Centro de ayuda</a></li>
              <li><a href="mailto:contacto@pos-comercio.cl">contacto@pos-comercio.cl</a></li>
              <li>
                <a href={REGISTER_URL} style={{ color: 'rgba(255,255,255,.5)', fontWeight: 600 }}>
                  Crear cuenta
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__copy">© 2026 Pos Comercio SpA · Santiago, Chile</div>
          <div className="footer__legal">
            <a href="#">Términos de uso</a>
            <a href="#">Privacidad</a>
            <a href="#">Seguridad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
