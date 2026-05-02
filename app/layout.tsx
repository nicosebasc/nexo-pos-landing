import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { SITE_URL } from '@/lib/config'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Pos Comercio — Sistema POS para Comercios en Chile',
    template: '%s | Pos Comercio',
  },
  description:
    'Pos Comercio simplifica la gestión de tu comercio: ventas, inventario, clientes y reportes en un solo lugar. Boleta electrónica SII, Transbank y MercadoPago incluidos. Diseñado para negocios chilenos.',
  keywords: [
    'POS Chile',
    'punto de venta Chile',
    'sistema POS',
    'boleta electrónica SII',
    'software inventario',
    'Transbank',
    'software comercio Chile',
    'gestión negocio',
  ],
  authors: [{ name: 'Pos Comercio SpA' }],
  creator: 'Pos Comercio SpA',
  publisher: 'Pos Comercio SpA',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: SITE_URL,
    siteName: 'Pos Comercio',
    title: 'Pos Comercio — Sistema POS para Comercios en Chile',
    description:
      'Centraliza ventas, inventario y reportes en una plataforma POS diseñada para el comercio chileno. Boleta electrónica, Transbank y MercadoPago incluidos.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pos Comercio — Sistema POS para Comercios en Chile',
    description: 'Centraliza ventas, inventario y reportes en una plataforma POS diseñada para el comercio chileno.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Pos Comercio',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  inLanguage: 'es-CL',
  url: SITE_URL,
  description:
    'Sistema POS para comercios en Chile. Ventas, inventario, boleta electrónica SII, Transbank y MercadoPago en una sola plataforma.',
  offers: [
    { '@type': 'Offer', name: 'Básico', price: '19900', priceCurrency: 'CLP', priceValidUntil: '2027-12-31' },
    { '@type': 'Offer', name: 'Pro', price: '39900', priceCurrency: 'CLP', priceValidUntil: '2027-12-31' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '2800',
    bestRating: '5',
    worstRating: '1',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Pos Comercio SpA',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/icon-192x192.png` },
    address: { '@type': 'PostalAddress', addressCountry: 'CL', addressLocality: 'Santiago' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
