const logos = [
  { icon: 'bi-bank', label: 'Transbank' },
  { icon: 'bi-file-earmark-text', label: 'SII' },
  { icon: 'bi-phone', label: 'MercadoPago' },
  { icon: 'bi-receipt-cutoff', label: 'Boleta electrónica' },
]

export default function TrustStrip() {
  return (
    <div className="trust">
      <div className="container">
        <div className="trust__inner">
          <span className="trust__label">Integrado con</span>
          <div className="trust__logos">
            {logos.map(({ icon, label }) => (
              <span key={label} className="trust__logo">
                <i className={`bi ${icon}`} aria-hidden="true" /> {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
