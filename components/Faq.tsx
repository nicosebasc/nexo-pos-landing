'use client'

import { useState } from 'react'

const faqs = [
  { q: '¿Necesito conocimientos técnicos para usar Pos Comercio?', a: 'No. Pos Comercio está diseñado para ser usado por cualquier persona, sin importar su nivel técnico. La configuración inicial la hacemos contigo en menos de 2 horas.' },
  { q: '¿Funciona desde el celular o tablet?', a: 'Sí. Pos Comercio es 100% responsive. Puedes vender, consultar inventario y revisar reportes desde cualquier dispositivo con navegador.' },
  { q: '¿Incluye boleta electrónica SII?', a: 'Sí. A partir del plan Básico puedes emitir boletas electrónicas integradas con el SII. Sin papeles, sin complicaciones.' },
  { q: '¿Qué pasa con mis datos si cancelo?', a: 'Tus datos son siempre tuyos. Puedes exportarlos en cualquier momento en formato Excel o CSV antes de cancelar.' },
  { q: '¿Funciona con Transbank y MercadoPago?', a: 'Sí, Pos Comercio se integra de forma nativa con Transbank (WebPay y débito), MercadoPago y Khipu. Sin comisiones adicionales de nuestra parte.' },
  { q: '¿Tienen soporte en español?', a: 'Sí, nuestro equipo es 100% chileno. Atendemos por chat, WhatsApp y teléfono en horario extendido de lunes a sábado.' },
  { q: '¿Cuántos usuarios puedo agregar?', a: 'El plan Básico incluye 1 usuario, el Pro hasta 5, y el Enterprise tiene usuarios ilimitados con roles y permisos personalizables.' },
  { q: '¿Pueden migrar mis datos desde otro sistema?', a: 'Sí. Nuestro equipo te ayuda a migrar tus productos, clientes e historial de ventas desde Excel u otros sistemas POS. El servicio es gratuito.' },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i))

  return (
    <section className="section section--white" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="reveal">
          <span className="section-tag"><i className="bi bi-question-circle" aria-hidden="true" /> FAQ</span>
          <h2 id="faq-title" className="section-heading" style={{ marginTop: '10px' }}>
            Preguntas frecuentes
          </h2>
        </div>
        <div className="faq__grid">
          {faqs.map(({ q, a }, i) => (
            <div key={q} className={`faq-item reveal ${i % 2 === 0 ? 'd1' : 'd2'}${open === i ? ' open' : ''}`}>
              <button
                id={`faq-btn-${i}`}
                className="faq-q"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                aria-controls={`faq-body-${i}`}
              >
                <span>{q}</span>
                <span className="faq-icon" aria-hidden="true">
                  <i className="bi bi-plus" />
                </span>
              </button>
              <div id={`faq-body-${i}`} className="faq-body" role="region" aria-labelledby={`faq-btn-${i}`}>
                {a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
