import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Valoroulette - Random Valorant Agent Generator',
    short_name: 'Valoroulette',
    description: 'A tool to randomly select Valorant agents for your next match',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b1114',
    theme_color: '#ff4655',
    icons: [
      {
        src: '/assets/img/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/img/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
