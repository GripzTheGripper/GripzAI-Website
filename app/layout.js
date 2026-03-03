export const metadata = {
  title: 'Gripz AI - Intelligence at Your Fingertips',
  description: 'The world\'s first IoT-enabled smart handlebar grip, transforming two-wheelers into intelligent, connected, and safer mobility systems.',
  keywords: 'smart handlebar, IoT grip, two-wheeler safety, haptic navigation, gig economy, delivery riders, telematics, fleet management',
  openGraph: {
    title: 'Gripz AI - Intelligence at Your Fingertips',
    description: 'Transforming two-wheelers into intelligent, connected, and safer mobility systems.',
    type: 'website',
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
