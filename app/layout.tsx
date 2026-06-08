import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mariana Coimbra Nails | Nail Artist em Castelo Branco',
  description: 'Nail artist profissional em Castelo Branco. Unhas de Gel, Acrílico, Acrigel e Formações Online. Revendedora oficial Hit Nails.',
  keywords: 'nail artist, unhas gel, acrílico, acrigel, Castelo Branco, Hit Nails, formações online',
  openGraph: {
    title: 'Mariana Coimbra Nails',
    description: 'Nail artist profissional em Castelo Branco. Gel, Acrílico, Acrigel e Formações Online.',
    locale: 'pt_PT',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-PT" className={`${playfair.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  )
}
