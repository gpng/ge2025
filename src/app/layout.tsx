import SiteHeader from '@/app/_components/header';
import { ThemeProvider } from '@/app/_components/theme-provider';
import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { FC } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

interface Props {
  children: React.ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: "GE2025: Everything You Need to Know About Singapore's Next Election",
  description:
    "Your go-to guide for Singapore's General Election 2025! Get the latest updates on who's running, what they're promising, and all the election buzz. No complicated jargon, just straight talk about what matters to you.",
  keywords:
    'GE2025, Singapore election 2025, Singapore politics, election candidates, election manifestos, Singapore constituencies, voting guide, election updates',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title:
      "GE2025: Everything You Need to Know About Singapore's Next Election",
    description:
      "Your go-to guide for Singapore's General Election 2025! Get the latest updates on who's running, what they're promising, and all the election buzz.",
    url: 'https://ge2025.vercel.app',
    siteName: 'GE2025',
    locale: 'en_SG',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GE2025 - Singapore General Election 2025 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "GE2025: Everything You Need to Know About Singapore's Next Election",
    description:
      "Your go-to guide for Singapore's General Election 2025! Get the latest updates on who's running, what they're promising, and all the election buzz.",
    images: ['/og-image.png'],
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
    google: 'your-google-site-verification', // You'll need to add your actual verification code
  },
  alternates: {
    canonical: 'https://ge2025.vercel.app',
  },
};

export default MainLayout;
