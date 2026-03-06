export const metadata = {
  title: 'Gripz AI - Intelligence at Your Fingertips',
  description:
    "The world's first and patented IoT-enabled smart handlebar grip, transforming two-wheelers into intelligent, connected, and safer mobility systems.",
  keywords:
    'smart handlebar, IoT grip, two-wheeler safety, haptic navigation, gig economy, delivery riders, telematics, fleet management',

  /* ── Favicon / Icons ── */
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico',       sizes: 'any' },
    ],
    apple:   { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    android: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },

  /* ── Open Graph ── */
  openGraph: {
    title:       'Gripz AI - Intelligence at Your Fingertips',
    description: 'Transforming two-wheelers into intelligent, connected, and safer mobility systems.',
    type:        'website',
    url:         'https://gripz.ai/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Gripz AI Smart Handlebar Grip' }],
  },

  /* ── Twitter ── */
  twitter: {
    card:        'summary_large_image',
    title:       'Gripz AI - Intelligence at Your Fingertips',
    description: "The world's first IoT-enabled smart handlebar grip for safer two-wheeler mobility.",
    images:      ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon fallback — belt AND suspenders */}
        <link rel="icon"             href="/favicon.ico"             sizes="any" />
        <link rel="icon"             href="/favicon-32x32.png"       type="image/png" sizes="32x32" />
        <link rel="icon"             href="/favicon-16x16.png"       type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"    sizes="180x180" />
        <link rel="manifest"         href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}
