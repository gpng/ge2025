'use client';

import { DataProvider } from '@/app/map/_components/contexts/data-context';
import { FilterProvider } from '@/app/map/_components/contexts/filter-context';
import type { ReactNode } from 'react';
import { MapProvider } from 'react-map-gl/maplibre';

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <DataProvider>
      <MapProvider>
        <FilterProvider>{children}</FilterProvider>
      </MapProvider>
    </DataProvider>
  );
};

export default Providers;
