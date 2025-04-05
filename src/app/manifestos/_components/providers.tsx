'use client';

import {
  type DataContextType,
  DataProvider,
} from '@/app/map/_components/contexts/data-context';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  initialData: DataContextType;
}

export default function Providers({ children, initialData }: Props) {
  return <DataProvider initialData={initialData}>{children}</DataProvider>;
}
