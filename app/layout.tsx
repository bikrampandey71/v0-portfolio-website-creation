import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: 'Bikram Pandey | Water Resource Engineer & Hydrologist',
  description: 'Portfolio of Bikram Pandey - Water Resources Engineer and Hydrologist specializing in hydrological modeling, flood forecasting, GRACE satellite gravimetry, and water resource systems. Based in Thailand with 6+ years of experience.',
  keywords: ['Water Resource Engineer', 'Hydrologist', 'Flood Forecasting', 'GRACE Satellite', 'Hydrological Modeling', 'GIS', 'Python', 'Nepal', 'Thailand', 'Asian Institute of Technology'],
  authors: [{ name: 'Bikram Pandey' }],
  creator: 'Bikram Pandey',
  openGraph: {
    title: 'Bikram Pandey | Water Resource Engineer',
    description: 'Water Resources Engineer specializing in hydrological modeling and flood forecasting',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#10b981',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
