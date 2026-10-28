import type { Metadata, Viewport } from 'next';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import '@/app/globals.css';
import { AppProvider } from '@/context/AppContext';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#F7F7F2',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Manish Chouhan | Project Manager & Technical Product Leader',
  description:
    'Results-driven Project Manager, AI Automation Associate, and Technical Builder combining rigorous management principles from Harvard University with advanced technical foundations from IIT Madras.',
  keywords: [
    'Manish Chouhan',
    'Project Manager',
    'Technical Product Leader',
    'AI Automation Associate',
    'Devoq Labs',
    'Pixellab.Media',
    'JJGillespie.com',
    'IIT Madras Data Science',
    'Harvard University',
    'Full Stack Engineer',
    'Agile Scrum PM'
  ],
  authors: [{ name: 'Manish Chouhan' }],
  creator: 'Manish Chouhan',
  metadataBase: new URL('https://manish.devoq-labs.online'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://manish.devoq-labs.online',
    title: 'Manish Chouhan | Project Manager & Technical Product Leader',
    description:
      'Results-driven Project Manager, AI Automation Associate, and Technical Builder combining rigorous management principles from Harvard University with advanced technical foundations from IIT Madras.',
    siteName: 'Manish Chouhan Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Manish Chouhan | Project Manager & Technical Product Leader',
    description:
      'Results-driven Project Manager, AI Automation Associate, and Technical Builder combining management principles from Harvard with data science foundations from IIT Madras.',
    creator: '@Manish-10275',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://manish.devoq-labs.online',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://manish.devoq-labs.online/#person',
        name: 'Manish Chouhan',
        jobTitle: 'Project Manager & Technical Product Leader',
        telephone: '+918905694021',
        email: 'manishchouhan123@gmail.com',
        url: 'https://manish.devoq-labs.online',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Sojat Road, Pali',
          addressRegion: 'Rajasthan',
          addressCountry: 'India',
        },
        alumniOf: [
          {
            '@type': 'EducationalOrganization',
            name: 'Harvard University',
          },
          {
            '@type': 'EducationalOrganization',
            name: 'Indian Institute of Technology, Madras',
            alternateName: 'IIT Madras',
          },
        ],
        worksFor: [
          {
            '@type': 'Organization',
            name: 'Pixellab.Media',
          },
          {
            '@type': 'Organization',
            name: 'Devoq Labs',
            url: 'https://devoqlabs.com',
          },
          {
            '@type': 'Organization',
            name: 'JJGillespie.com',
          },
        ],
        sameAs: [
          'https://www.linkedin.com/in/manish-chouhan-2301a7230/',
          'https://github.com/Manish-10275',
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#F7F7F2] text-[#20231F]">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
