export const metadata = {
  title: 'Gripz AI - Intelligence at Your Fingertips',
  description: 'The world\'s first IoT-enabled smart handlebar grip, transforming two-wheelers into intelligent, connected, and safer mobility systems.',
  keywords: 'smart handlebar, IoT grip, two-wheeler safety, haptic navigation, gig economy, delivery riders, telematics, fleet management',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Gripz AI - Intelligence at Your Fingertips',
    description: 'Transforming two-wheelers into intelligent, connected, and safer mobility systems.',
    type: 'website',
    url: 'https://gripz.ai',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gripz AI Smart Handlebar Grip',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gripz AI - Intelligence at Your Fingertips',
    description: 'The world\'s first IoT-enabled smart handlebar grip for safer two-wheeler mobility.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
