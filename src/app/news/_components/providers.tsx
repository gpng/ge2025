'use client';

import { DataProvider } from '@/app/map/_components/contexts/data-context';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return <DataProvider>{children}</DataProvider>;
};

export default Providers;
