'use client';

import { DataProvider } from '@/app/map/_components/contexts/data-context';
import type { DataContextType } from '@/app/map/_components/contexts/data-context';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  initialData: DataContextType;
}

const Providers = ({ children, initialData }: Props) => {
  return <DataProvider initialData={initialData}>{children}</DataProvider>;
};

export default Providers;
