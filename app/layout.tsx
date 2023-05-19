import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://goodbye-k39c.netlify.app'),
  title: 'Goodbye K39C',
  description: 'Tiệc chia tay Y đa khoa K39C HPMU',
  openGraph: {
    title: 'Goodbye K39C',
    description: 'Tiệc chia tay Y đa khoa K39C HPMU',
    url: 'https://goodbye-k39c.netlify.app',
    siteName: 'Goodbye K39C',
    images: [
      {
        url: '/og-image.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'vi-VN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goodbye K39C',
    description: 'Tiệc chia tay Y đa khoa K39C HPMU',
    creator: '@torn4dom4n',
    images: ['/og-image.jpg'],
  },
  icons: {
    shortcut: '/favicon.svg',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black antialiased">{children}</body>
    </html>
  )
}
