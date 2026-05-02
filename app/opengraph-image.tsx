import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Pos Comercio — Sistema POS para Comercios en Chile'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #4723d9 0%, #311894 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.12)',
            borderRadius: '20px',
            padding: '12px 28px',
            color: 'rgba(255,255,255,0.9)',
            fontSize: '22px',
            marginBottom: '32px',
            letterSpacing: '0.05em',
          }}
        >
          🇨🇱 Hecho para el comercio chileno
        </div>

        <div
          style={{
            color: '#ffffff',
            fontSize: '72px',
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}
        >
          Pos Comercio
        </div>

        <div
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: '30px',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
            marginBottom: '48px',
          }}
        >
          Ventas · Inventario · Clientes · Reportes
          <br />
          Boleta electrónica SII · Transbank · MercadoPago
        </div>

        <div style={{ display: 'flex', gap: '32px' }}>
          {[
            { num: '2.800', label: 'comercios activos' },
            { num: '4.9 ★', label: 'valoración' },
            { num: '98%', label: 'satisfacción' },
          ].map(({ num, label }) => (
            <div
              key={label}
              style={{
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '16px',
                padding: '20px 36px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ color: '#ffffff', fontSize: '36px', fontWeight: 700 }}>{num}</div>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '18px', marginTop: '4px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  )
}
