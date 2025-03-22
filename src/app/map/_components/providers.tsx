'use client';

import { DataProvider } from '@/app/map/_components/contexts/data-context';
import type { DataContextType } from '@/app/map/_components/contexts/data-context';
import { FilterProvider } from '@/app/map/_components/contexts/filter-context';
import type { ReactNode } from 'react';
import { MapProvider } from 'react-map-gl/maplibre';

interface Props {
  children: ReactNode;
  initialData: DataContextType;
}

const Providers = ({ children, initialData }: Props) => {
  return (
    <DataProvider initialData={initialData}>
      <MapProvider>
        <FilterProvider>{children}</FilterProvider>
      </MapProvider>
    </DataProvider>
  );
};

export default Providers;
