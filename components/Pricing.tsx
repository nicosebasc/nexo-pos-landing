import { REGISTER_URL } from '@/lib/config'

const plans = [
  {
    name: 'Básico',
    price: '$19.900',
    period: 'por mes / por local',
    featured: false,
    features: [
      'Punto de venta (POS)',
      'Inventario hasta 500 productos',
      'Boleta electrónica SII',
      'Reportes básicos',
      '1 usuario',
    ],
    cta: 'Empezar gratis',
    ctaClass: 'btn btn-outline',
  },
  {
    name: 'Pro',
    price: '$39.900',
    period: 'por mes / por local',
    featured: true,
    badge: '⭐ Más popular',
    features: [
      'Todo lo del plan Básico',
      'Productos ilimitados',
      'CRM de clientes + fidelización',
      'Factura electrónica (próximamente)',
      'Hasta 5 usuarios',
      'Transbank + MercadoPago',
      'Soporte prioritario',
    ],
    cta: 'Empezar gratis →',
    ctaClass: 'btn btn-white btn-lg',
    ctaIcon: 'bi-rocket-takeoff-fill',
  },
  {
    name: 'Enterprise',
    price: 'A medida',
    period: 'múltiples locales / cadenas',
    featured: false,
    features: [
      'Todo lo del plan Pro',
      'Múltiples locales centralizados',
      'Usuarios ilimitados',
      'API + integraciones a medida',
      'Ejecutivo de cuenta dedicado',
    ],
    cta: 'Contactar ventas',
    ctaHref: 'mailto:contacto@pos-comercio.cl',
    ctaClass: 'btn btn-outline',
    ctaIcon: 'bi-envelope-fill',
  },
]

export default function Pricing() {
  return (
    <section className="section section--alt" id="precios" aria-labelledby="pricing-title">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-tag"><i className="bi bi-tag" aria-hidden="true" /> Planes y precios</span>
          <h2 id="pricing-title" className="section-heading" style={{ marginTop: '10px' }}>
            Elige el plan para tu negocio
          </h2>
          <p className="section-sub" style={{ margin: '10px auto 0' }}>
            Sin permanencia mínima. Cancela cuando quieras. Precios en CLP + IVA.
          </p>
        </div>
        <div className="pricing__grid">
          {plans.map(({ name, price, period, featured, badge, features, cta, ctaHref, ctaClass, ctaIcon }, i) => (
            <div
              key={name}
              className={`price-card reveal d${i + 1}${featured ? ' price-card--featured' : ''}`}
            >
              {badge && <div className="price-badge">{badge}</div>}
              <div className="price-plan">{name}</div>
              <div
                className="price-amount"
                style={name === 'Enterprise' ? { fontSize: '32px' } : undefined}
              >
                {price}
              </div>
              <div className="price-period">{period}</div>
              <hr className="price-hr" />
              <div className="price-features">
                {features.map((f) => (
                  <div key={f} className="price-feat">
                    <i className="bi bi-check-circle-fill price-feat-icon" aria-hidden="true" />
                    {f}
                  </div>
                ))}
              </div>
              <a
                href={ctaHref ?? REGISTER_URL}
                className={ctaClass}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {ctaIcon && <i className={`bi ${ctaIcon}`} aria-hidden="true" />}
                {cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
