import { REGISTER_URL } from '@/lib/config'

const steps = [
  {
    num: 1,
    title: 'Crea tu cuenta',
    text: 'Regístrate en menos de 2 minutos. Sin tarjeta de crédito. Los primeros 14 días son completamente gratis.',
    href: REGISTER_URL,
  },
  {
    num: 2,
    title: 'Configura tu negocio',
    text: 'Ingresa tus productos, precios y métodos de pago. Nuestro equipo te ayuda a migrar tus datos si los tienes en otro sistema.',
    href: null,
  },
  {
    num: 3,
    title: 'Empieza a vender',
    text: 'Cobra, gestiona inventario y analiza resultados desde el primer día. Soporte humano disponible siempre.',
    href: null,
  },
]

export default function HowItWorks() {
  return (
    <section className="section section--dark" id="como-funciona" aria-labelledby="how-title">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-tag section-tag--white">
            <i className="bi bi-map" aria-hidden="true" /> Cómo funciona
          </span>
          <h2 id="how-title" className="section-heading section-heading--white" style={{ marginTop: '10px' }}>
            Listo en 3 pasos simples
          </h2>
          <p className="section-sub section-sub--white" style={{ margin: '10px auto 0' }}>
            Sin instalaciones, sin configuraciones técnicas. Empieza a vender hoy.
          </p>
        </div>
        <div className="how__steps">
          <div className="how__connector" aria-hidden="true" />
          {steps.map(({ num, title, text, href }) => (
            <div key={num} className={`step-card reveal d${num}`}>
              <div className="step-num">{num}</div>
              {href ? (
                <a href={href} className="step-title" style={{ color: '#fff', textDecoration: 'none' }}>{title}</a>
              ) : (
                <div className="step-title">{title}</div>
              )}
              <div className="step-text">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
