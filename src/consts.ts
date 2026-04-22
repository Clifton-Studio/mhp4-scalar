// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Maestro - Mobile UI Testing For Humans + AIs';
export const SITE_DESCRIPTION =
  'Mobile UI testing for humans and AIs. Write reliable tests in minutes, then scale them with Maestro.';

export const SITE_METADATA = {
  title: {
    default: SITE_TITLE,
    template: '%s | Maestro',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Astro',
    'React',
    'JavaScript',
    'TypeScript',
    'TailwindCSS',
    'Template',
    'Shadcn/UI',
    'Web Development',
  ],
  authors: [{ name: 'Maestro' }],
  creator: 'Maestro',
  publisher: 'Maestro',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: '/favicon/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.svg' }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: 'Maestro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maestro - Mobile UI Testing For Humans + AIs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
    creator: '@maestro__dev',
  },
};
