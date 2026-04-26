const types = [
  { icon: 'bi-egg-fried', name: 'Restaurantes', desc: 'Gestión de mesas, pedidos, cocina conectada e historial de menús.' },
  { icon: 'bi-bag-fill', name: 'Retail', desc: 'Control de stock por variantes, múltiples bodegas y caja rápida.' },
  { icon: 'bi-scissors', name: 'Servicios', desc: 'Agenda de citas, ficha de clientes y recordatorios automáticos.' },
  { icon: 'bi-cart4', name: 'Minimarket', desc: 'POS ultrarrápido, vencimientos, alertas de stock y cierre de caja.' },
  { icon: 'bi-tools', name: 'Ferretería', desc: 'Catálogo extenso, búsqueda por código, cotizaciones y presupuestos.' },
  { icon: 'bi-capsule', name: 'Farmacia', desc: 'Control de lotes y vencimientos, recetas y despacho con trazabilidad.' },
  { icon: 'bi-truck', name: 'Distribuidora', desc: 'Pedidos por vendedor, rutas de reparto y crédito a clientes.' },
  { icon: 'bi-three-dots', name: 'Otros rubros', desc: 'Gimnasios, veterinarias, cafeterías, talleres y más. Adaptamos Pos Comercio.' },
]

export default function CommerceTypes() {
  return (
    <section className="section section--white" id="comercios" aria-labelledby="types-title">
      <div className="container">
        <div className="reveal">
          <span className="section-tag"><i className="bi bi-shop" aria-hidden="true" /> ¿Para quién es Pos Comercio?</span>
          <h2 id="types-title" className="section-heading" style={{ marginTop: '10px' }}>
            Para todo tipo de comercio
          </h2>
          <p className="section-sub">
            Adaptamos Pos Comercio a las necesidades específicas de tu negocio, sin importar el rubro.
          </p>
        </div>
        <div className="types__grid">
          {types.map(({ icon, name, desc }, i) => (
            <div key={name} className={`type-card reveal d${(i % 4) + 1}`}>
              <div className="type-icon"><i className={`bi ${icon}`} aria-hidden="true" /></div>
              <div className="type-name">{name}</div>
              <div className="type-desc">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
