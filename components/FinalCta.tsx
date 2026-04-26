import { REGISTER_URL } from '@/lib/config'

export default function FinalCta() {
  return (
    <section className="final-cta" id="demo" aria-labelledby="cta-title">
      <div className="final-cta__dots" aria-hidden="true" />
      <div className="container">
        <div className="final-cta__inner">
          <div className="final-cta__pre reveal">
            <i className="bi bi-shield-check" aria-hidden="true" /> Sin permanencia · Sin tarjeta de crédito
          </div>
          <h2 id="cta-title" className="final-cta__title reveal d1">
            Empieza a ordenar<br />tu negocio hoy.
          </h2>
          <p className="final-cta__sub reveal d2">
            14 días gratis, sin compromiso. Más de 2.800 comercios en Chile ya confían en Nexo.
          </p>
          <div className="final-cta__actions reveal d3">
            <a href={REGISTER_URL} className="btn btn-white btn-lg">
              <i className="bi bi-rocket-takeoff-fill" aria-hidden="true" /> Crear cuenta gratis
            </a>
            <a href="mailto:hola@nexo.cl" className="btn btn-outline-white btn-lg">
              <i className="bi bi-telephone-fill" aria-hidden="true" /> Hablar con un asesor
            </a>
          </div>
          <div className="final-cta__note reveal d4">
            Implementación en menos de 2 horas · Soporte en español · Datos 100% en Chile
          </div>
        </div>
      </div>
    </section>
  )
}
