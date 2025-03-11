import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { FC } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

interface Props {
  children: React.ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
};

export const metadata: Metadata = {
  title: 'GE2025',
  description: `Status of all lineups that will be contesting in each electoral district in Singapore's General Election 2025`,
};

export default MainLayout;
