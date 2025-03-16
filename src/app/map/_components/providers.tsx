'use client';

import { DataProvider } from '@/app/map/_components/contexts/data-context';
import { FilterProvider } from '@/app/map/_components/contexts/filter-context';
import type { ElectoralDivision } from '@/models/electoral-division';
import type { Parties } from '@/models/party';
import type { PartyProfile } from '@/models/profile';
import type { ReactNode } from 'react';
import { MapProvider } from 'react-map-gl/maplibre';

interface ProvidersProps {
  electoralDivisions: ElectoralDivision[];
  parties: Parties;
  profiles: PartyProfile;
  children: ReactNode;
}

const Providers = ({
  children,
  electoralDivisions,
  parties,
  profiles,
}: ProvidersProps) => {
  return (
    <DataProvider
      electoralDivisions={electoralDivisions}
      parties={parties}
      profiles={profiles}
    >
      <MapProvider>
        <FilterProvider>{children}</FilterProvider>
      </MapProvider>
    </DataProvider>
  );
};

export default Providers;
