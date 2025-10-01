import type { Metadata } from 'next'
import { Anton } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const anton = Anton({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Valoroulette - Random agent for Valorant',
  description: 'Valoroulette helps you randomly select Valorant agents for your next match. Perfect for players looking to add variety to their gameplay or practice with different agents.',
  keywords: ['Valorant', 'Agent Roulette', 'Valoroulette', 'Random Agent', 'FPS Game'],
  authors: [{ name: 'Nohan-V2' }],
  creator: 'Nohan-V2',
  publisher: 'Nohan-V2',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://valoroulette-five.vercel.app',
    title: 'Valoroulette - Choose a random agent in Valorant',
    description: 'A tool that allows you to select Valorant agents and get one randomly for more fun!',
    siteName: 'Valoroulette',
    images: [
      {
        url: 'https://valoroulette-five.vercel.app/assets/img/preview.png',
        width: 1200,
        height: 630,
        alt: 'Valoroulette Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valoroulette - Choose a random agent in Valorant',
    description: 'Select the agents you want to play and get one randomly!',
    images: ['https://valoroulette-five.vercel.app/assets/img/preview.png'],
  },
  metadataBase: new URL('https://valoroulette-five.vercel.app'),
  verification: {
    google: 'M5zQJ7L8gvSW9tjfW6-1j3egB0SR9Z31SEDXa0WnZnk',
  },
  other: {
    'theme-color': '#FF4655',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://valoroulette-five.vercel.app" />
        <link rel="icon" href="/assets/img/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Valoroulette",
              "url": "https://valoroulette-five.vercel.app",
              "description": "Tool to generate a random Valorant agent according to your selection.",
              "inLanguage": "en"
            })
          }}
        />
      </head>
      <body className={anton.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
