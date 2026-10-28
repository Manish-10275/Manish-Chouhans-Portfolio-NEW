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
  title: 'Manish Chouhan | AI Automation, Products & Engineering',
  description:
    'Personal portfolio of Manish Chouhan. Founder of Devoq Labs, AI automation professional, and IIT Madras BS Data Science student building practical software products.',
  keywords: [
    'Manish Chouhan',
    'Devoq Labs',
    'AI Automation',
    'IIT Madras Data Science',
    'Project Manager',
    'Software Developer India',
    'Next.js Developer',
    'Bioinformatics AI',
    'Startup Founder'
  ],
  authors: [{ name: 'Manish Chouhan' }],
  creator: 'Manish Chouhan',
  metadataBase: new URL('https://manish.devoq-labs.online'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://manish.devoq-labs.online',
    title: 'Manish Chouhan | AI Automation, Products & Engineering',
    description:
      'Founder of Devoq Labs, AI automation professional, and IIT Madras BS Data Science student building practical software products.',
    siteName: 'Manish Chouhan Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Manish Chouhan | AI Automation & Products',
    description:
      'Founder of Devoq Labs, AI automation developer, and IIT Madras BS Data Science student.',
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
        jobTitle: 'Founder & AI Automation Developer',
        worksFor: {
          '@type': 'Organization',
          name: 'Devoq Labs',
          url: 'https://devoqlabs.com',
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Indian Institute of Technology, Madras',
          alternateName: 'IIT Madras',
        },
        email: 'manishchouhan123@gmail.com',
        url: 'https://manish.devoq-labs.online',
        sameAs: [
          'https://www.linkedin.com/in/manish-chouhan-2301a7230/',
          'https://github.com/Manish-10275',
        ],
      },
      {
        '@type': 'Organization',
        '@id': 'https://devoqlabs.com/#organization',
        name: 'Devoq Labs',
        url: 'https://devoqlabs.com',
        founder: {
          '@id': 'https://manish.devoq-labs.online/#person',
        },
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
