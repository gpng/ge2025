import { QnaWidgetProvider } from '@/app/_components/contexts/qna-widget-context';
import SiteHeader from '@/app/_components/header';
import { ThemeProvider } from '@/app/_components/theme-provider';
import '@/app/globals.css';
import QnaWidget from '@/app/map/_components/qna-widget/qna-widget';
import { FEAT_MANIFESTOS_CHAT, GOOGLE_TAG_MANAGER_ID } from '@/lib/env';
import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="jsd0GI10_crUzHY9gmrab0HEDvvnqPZB3YktFd5IrVI"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <GoogleTagManager gtmId={GOOGLE_TAG_MANAGER_ID || ''} />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QnaWidgetProvider>
            <div className="flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              {FEAT_MANIFESTOS_CHAT === 'true' && <QnaWidget />}
            </div>
          </QnaWidgetProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: 'GE2025: Singapore General Election 2025 Guide',
  description:
    "Your go-to guide for Singapore's General Election 2025! Get the latest updates on who's running, what they're promising, and all the election buzz.",
  keywords:
    'GE2025, Singapore election 2025, Singapore politics, election candidates, election manifestos, Singapore constituencies, voting guide, election updates',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png', sizes: '32x32' },
    ],
  },
  openGraph: {
    title: 'GE2025: Singapore General Election 2025 Guide',
    description:
      "Your go-to guide for Singapore's General Election 2025! Get the latest updates on who's running, what they're promising, and all the election buzz.",
    url: 'https://ge2025.vercel.app',
    siteName: 'GE2025',
    locale: 'en_SG',
    type: 'website',
    images: [
      {
        url: '/images/social.png',
        width: 1200,
        height: 630,
        alt: 'GE2025 - Singapore General Election 2025 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GE2025: Singapore General Election 2025 Guide',
    description:
      "Your go-to guide for Singapore's General Election 2025! Get the latest updates on who's running, what they're promising, and all the election buzz.",
    images: ['/images/social.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://ge2025.vercel.app',
  },
};

export default MainLayout;
