const problems = [
  { icon: 'bi-box-seam', title: 'Inventario descontrolado:', text: 'te quedas sin stock sin darte cuenta y pierdes ventas.' },
  { icon: 'bi-folder2-open', title: 'Datos dispersos:', text: 'ventas en planilla, clientes en el celular, cuentas en papel.' },
  { icon: 'bi-clock-history', title: 'Reportes manuales:', text: 'horas preparando informes que deberían estar a un clic.' },
  { icon: 'bi-plug', title: 'Herramientas desconectadas:', text: 'cobro, facturación y control no se hablan entre sí.' },
]

const solutions = [
  'Control de inventario en tiempo real',
  'Punto de venta con boleta electrónica SII',
  'Reportes automáticos y análisis de ventas',
  'CRM de clientes con historial de compras',
  'Integración con Transbank y MercadoPago',
  'Acceso desde cualquier dispositivo, en la nube',
]

export default function ProblemSolution() {
  return (
    <section className="section section--white" id="problema" aria-labelledby="problem-title">
      <div className="container">
        <div className="prob-sol__grid">
          <div>
            <span className="section-tag reveal"><i className="bi bi-exclamation-circle" aria-hidden="true" /> El problema</span>
            <h2 id="problem-title" className="section-heading reveal d1">
              Gestionar un comercio<br />debería ser más simple.
            </h2>
            <p className="section-sub reveal d2">
              La mayoría de dueños de negocios pierde horas valiosas en tareas que deberían ser automáticas.
            </p>
            <div className="prob-list">
              {problems.map(({ icon, title, text }, i) => (
                <div key={title} className={`prob-item reveal d${i + 1}`}>
                  <div className="prob-icon"><i className={`bi ${icon}`} aria-hidden="true" /></div>
                  <p className="prob-text"><strong>{title}</strong> {text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal d2">
            <div className="sol-card">
              <span className="section-tag"><i className="bi bi-check-circle" aria-hidden="true" /> La solución</span>
              <div className="sol-title">Todo en un solo lugar, desde el primer día.</div>
              <div className="sol-sub">
                Nexo conecta todas las piezas de tu negocio en una plataforma simple, sin conocimientos técnicos
                y con soporte en español.
              </div>
              <div className="sol-items">
                {solutions.map((item) => (
                  <div key={item} className="sol-item">
                    <div className="sol-check"><i className="bi bi-check" aria-hidden="true" /></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
