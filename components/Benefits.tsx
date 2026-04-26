const benefits = [
  { icon: 'bi-lightning-charge-fill', title: 'Punto de venta rápido', text: 'Cobra en segundos desde cualquier dispositivo. Compatible con lector de código de barras, impresoras térmicas y Transbank.' },
  { icon: 'bi-box-seam-fill', title: 'Inventario inteligente', text: 'Alertas automáticas de stock bajo, historial de movimientos y órdenes de reposición con un solo clic.' },
  { icon: 'bi-bar-chart-line-fill', title: 'Reportes en tiempo real', text: 'Dashboards con ventas, márgenes y productos más vendidos. Exporta a Excel o PDF en segundos.' },
  { icon: 'bi-people-fill', title: 'CRM de clientes', text: 'Historial de compras, programas de fidelidad y envío de promociones. Segmentación automática de tu base de clientes.' },
  { icon: 'bi-receipt-cutoff', title: 'Facturación electrónica', text: 'Boletas y facturas electrónicas integradas con el SII. Cumple con la normativa chilena sin complicaciones.' },
  { icon: 'bi-cloud-check-fill', title: 'Acceso en la nube', text: 'Pos Comercio funciona en la nube. Revisa el estado de tu negocio desde tu celular, tablet o computador, donde estés.' },
]

export default function Benefits() {
  return (
    <section className="section section--alt" id="beneficios" aria-labelledby="benefits-title">
      <div className="container">
        <div className="reveal">
          <span className="section-tag"><i className="bi bi-stars" aria-hidden="true" /> Beneficios</span>
          <h2 id="benefits-title" className="section-heading" style={{ marginTop: '10px' }}>
            Diseñado para crecer contigo
          </h2>
          <p className="section-sub">
            Cada funcionalidad de Pos Comercio está pensada para ahorrarte tiempo y ayudarte a vender más.
          </p>
        </div>
        <div className="benefits__grid">
          {benefits.map(({ icon, title, text }, i) => (
            <div key={title} className={`ben-card reveal d${(i % 3) + 1}`}>
              <div className="ben-icon"><i className={`bi ${icon}`} aria-hidden="true" /></div>
              <div className="ben-title">{title}</div>
              <div className="ben-text">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
