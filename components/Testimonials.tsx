const testimonials = [
  {
    quote: '"Desde que usamos Nexo, tenemos control total del inventario. Antes perdíamos ventas por no saber qué había en bodega. Ahora todo está en tiempo real."',
    name: 'Camila Martínez',
    role: 'Dueña — Boutique Camila, Las Condes',
    initials: 'CM',
    gradient: 'linear-gradient(45deg,#4723d9,#73b4ff)',
  },
  {
    quote: '"La integración con Transbank y el SII nos ahorró semanas de trabajo. La factura electrónica sale automática y sin errores. El soporte es excelente."',
    name: 'Roberto Vargas',
    role: 'Administrador — Ferretería Vargas, Maipú',
    initials: 'RV',
    gradient: 'linear-gradient(45deg,#10b981,#59e0c5)',
  },
  {
    quote: '"Triplicamos nuestra velocidad de atención. El sistema de mesas es muy fácil de usar y mis garzones lo aprendieron en una hora. Increíble."',
    name: 'Jorge Pérez',
    role: 'Chef propietario — La Leña, Providencia',
    initials: 'JP',
    gradient: 'linear-gradient(45deg,#f59e0b,#ffcb80)',
  },
]

export default function Testimonials() {
  return (
    <section className="section section--white" id="testimonios" aria-labelledby="testi-title">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-tag"><i className="bi bi-chat-quote" aria-hidden="true" /> Testimonios</span>
          <h2 id="testi-title" className="section-heading" style={{ marginTop: '10px' }}>
            Lo que dicen nuestros clientes
          </h2>
        </div>
        <div className="testi__grid">
          {testimonials.map(({ quote, name, role, initials, gradient }, i) => (
            <article key={name} className={`testi-card reveal d${i + 1}`}>
              <div className="testi-stars" aria-label="5 estrellas">★★★★★</div>
              <p className="testi-quote">{quote}</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: gradient }} aria-hidden="true">
                  {initials}
                </div>
                <div>
                  <div className="testi-name">{name}</div>
                  <div className="testi-role">{role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
