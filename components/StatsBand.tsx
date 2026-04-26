export default function StatsBand() {
  return (
    <div className="stats-band section--alt" aria-label="Estadísticas de Nexo POS">
      <div className="container">
        <div className="stats-band__grid">
          <div className="stat-card reveal">
            <div className="stat-card__icon"><i className="bi bi-shop" aria-hidden="true" /></div>
            <div className="stat-card__num">
              <span data-count="2800">0</span>+
            </div>
            <div className="stat-card__lbl">Comercios activos en Chile</div>
          </div>
          <div className="stat-card reveal d1">
            <div className="stat-card__icon"><i className="bi bi-currency-dollar" aria-hidden="true" /></div>
            <div className="stat-card__num" style={{ fontSize: '28px', color: 'var(--color-primary)' }}>
              $4.200M
            </div>
            <div className="stat-card__lbl">Procesados el último mes</div>
          </div>
          <div className="stat-card reveal d2">
            <div className="stat-card__icon"><i className="bi bi-emoji-smile" aria-hidden="true" /></div>
            <div className="stat-card__num">
              <span data-count="98">0</span><span>%</span>
            </div>
            <div className="stat-card__lbl">Tasa de satisfacción</div>
          </div>
          <div className="stat-card reveal d3">
            <div className="stat-card__icon"><i className="bi bi-clock" aria-hidden="true" /></div>
            <div className="stat-card__num" style={{ fontSize: '28px', color: 'var(--color-primary)' }}>
              &lt; 2 hrs
            </div>
            <div className="stat-card__lbl">Tiempo de implementación</div>
          </div>
        </div>
      </div>
    </div>
  )
}
