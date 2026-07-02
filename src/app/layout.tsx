import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import '@/app/globals.css';
import { AppProvider } from '@/context/AppContext';
import CustomCursor from '@/components/CustomCursor';
import LoadingScreen from '@/components/LoadingScreen';
import CommandPalette from '@/components/CommandPalette';
import AIAssistant from '@/components/AIAssistant';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Manish Chouhan | Founder & CEO of Devoq Labs | IIT Madras Data Science',
  description: 'Founder & CEO of Devoq Labs, IIT Madras Data Science student, tech builder, and published author. Explore high-performance web products, custom AI systems, and project management timelines.',
  keywords: [
    'Manish Chouhan',
    'Devoq Labs',
    'IIT Madras Data Science',
    'AI Developer India',
    'Startup Founder India',
    'Project Manager Portfolio',
    'React Developer',
    'Next.js Developer',
    'Entrepreneur Portfolio'
  ],
  authors: [{ name: 'Manish Chouhan' }],
  creator: 'Manish Chouhan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://manishchouhan.com',
    title: 'Manish Chouhan | Founder & CEO, Devoq Labs | IIT Madras Data Science',
    description: 'Founder & CEO of Devoq Labs, IIT Madras BS Data Science student, tech builder, and author. Explore custom AI systems and scalable SaaS applications.',
    siteName: 'Manish Chouhan Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Manish Chouhan Portfolio Space Grid',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manish Chouhan | Founder & CEO, Devoq Labs',
    description: 'AI Developer, Startup Founder, and IIT Madras BS Data Science student.',
    images: ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop'],
    creator: '@manishchouhan',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://manishchouhan.com',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://manishchouhan.com/#person",
        "name": "Manish Chouhan",
        "jobTitle": "Founder & CEO",
        "worksFor": {
          "@type": "Organization",
          "name": "Devoq Labs",
          "url": "https://devoqlabs.com"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Indian Institute of Technology, Madras",
          "alternateName": "IIT Madras"
        },
        "email": "manishchouhan123@gmail.com",
        "url": "https://manishchouhan.com",
        "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop",
        "sameAs": [
          "https://linkedin.com",
          "https://github.com/manishchouhan123"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://devoqlabs.com/#organization",
        "name": "Devoq Labs",
        "url": "https://devoqlabs.com",
        "founder": {
          "@id": "https://manishchouhan.com/#person"
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased overflow-x-hidden selection:bg-brand-purple/30 selection:text-white bg-[#050505] text-white">
        <AppProvider>
          <SmoothScroll>
            {/* Custom Cursor for interactive mouse feedback */}
            <CustomCursor />
            
            {/* Initial Boot Up Loading Screen */}
            <LoadingScreen />

            {/* Custom command palette triggered by Ctrl+K */}
            <CommandPalette />

            {/* AI Assistant Chatbot */}
            <AIAssistant />

            {/* Body Pages Content */}
            <div className="relative min-h-screen">
              {/* Noise texture overlay for a premium film-grain luxury look */}
              <div className="noise-overlay" />
              
              {/* Radial gradient linked to cursor coords */}
              <div className="radial-neon" />
              
              {children}
            </div>
          </SmoothScroll>
        </AppProvider>
      </body>
    </html>
  );
}
