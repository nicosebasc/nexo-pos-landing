import { REGISTER_URL } from '@/lib/config'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__dots" aria-hidden="true" />
      <div className="container">
        <div className="hero__inner">
          <div>
            <div className="hero__badge reveal">
              <i className="bi bi-patch-check-fill" aria-hidden="true" /> Hecho para el comercio chileno
            </div>
            <h1 id="hero-title" className="hero__title reveal d1">
              Tu comercio,<br /><em>ordenado y sin caos.</em>
            </h1>
            <p className="hero__sub reveal d2">
              Pos Comercio centraliza ventas, inventario, clientes y reportes en una sola plataforma POS.
              Boleta electrónica, Transbank y SII incluidos desde el primer día.
            </p>
            <div className="hero__actions reveal d3">
              <a href={REGISTER_URL} className="btn btn-white btn-lg">
                <i className="bi bi-rocket-takeoff-fill" aria-hidden="true" /> Empezar gratis — 14 días
              </a>
              <a href="#como-funciona" className="btn btn-outline-white btn-lg">
                Ver cómo funciona
              </a>
            </div>
            <div className="hero__stats reveal d4">
              <div>
                <div className="hero__stat-num" data-count="2800">0</div>
                <div className="hero__stat-label">comercios activos</div>
              </div>
              <div>
                <div className="hero__stat-num" data-count="98">0</div>
                <div className="hero__stat-label">% satisfacción</div>
              </div>
              <div>
                <div className="hero__stat-num">
                  4.9 <i className="bi bi-star-fill" style={{ fontSize: '20px', color: '#f59e0b' }} aria-hidden="true" />
                </div>
                <div className="hero__stat-label">valoración promedio</div>
              </div>
            </div>
          </div>

          <div className="hero__visual reveal d2" aria-hidden="true">
            <div className="dash-frame">
              <div className="dash-topbar">
                <div className="dot dot-r" /><div className="dot dot-y" /><div className="dot dot-g" />
                <div className="dash-title">Pos Comercio — Dashboard</div>
              </div>
              <div className="dash-body">
                <div className="kpi-row">
                  <div className="kpi-card kpi-card--blue">
                    <div className="kpi-val">$1.24M</div><div className="kpi-lbl">Ventas hoy</div>
                  </div>
                  <div className="kpi-card kpi-card--green">
                    <div className="kpi-val">147</div><div className="kpi-lbl">Transacciones</div>
                  </div>
                  <div className="kpi-card kpi-card--yellow">
                    <div className="kpi-val">3</div><div className="kpi-lbl">Stock bajo</div>
                  </div>
                </div>
                <div className="dash-chart-area">
                  <div className="chart-label">Ventas — últimos 7 días</div>
                  <div className="bars">
                    <div className="bar" style={{ height: '38%' }} />
                    <div className="bar" style={{ height: '52%' }} />
                    <div className="bar bar--mid" style={{ height: '45%' }} />
                    <div className="bar bar--mid" style={{ height: '68%' }} />
                    <div className="bar" style={{ height: '60%' }} />
                    <div className="bar bar--mid" style={{ height: '82%' }} />
                    <div className="bar bar--hi" style={{ height: '100%' }} />
                  </div>
                </div>
                <div className="dash-table">
                  <div className="dt-head">Últimas ventas</div>
                  <div className="dt-row">
                    <span className="dt-name">Mesa 4 — Almuerzo</span>
                    <span className="dt-val">$18.500</span>
                    <span className="dt-pill">Pagado</span>
                  </div>
                  <div className="dt-row">
                    <span className="dt-name">Producto A × 3</span>
                    <span className="dt-val">$42.000</span>
                    <span className="dt-pill">Pagado</span>
                  </div>
                  <div className="dt-row">
                    <span className="dt-name">Servicio consulta</span>
                    <span className="dt-val">$25.000</span>
                    <span className="dt-pill">Pagado</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-float hero-float--tl">
              <div className="hf-icon" style={{ background: 'var(--color-primary-soft)', color: 'var(--color-primary)' }}>
                <i className="bi bi-box-seam-fill" />
              </div>
              <div>
                <div className="hf-main">Stock actualizado</div>
                <div className="hf-sub">en tiempo real</div>
              </div>
            </div>
            <div className="hero-float hero-float--br">
              <div className="hf-icon" style={{ background: 'rgba(16,185,129,.1)', color: '#10b981' }}>
                <i className="bi bi-credit-card-fill" />
              </div>
              <div>
                <div className="hf-main">Transbank integrado</div>
                <div className="hf-sub">listo desde el día 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#f4f5fb" />
        </svg>
      </div>
    </section>
  )
}
