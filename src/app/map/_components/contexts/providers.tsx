'use client';

import { DataProvider } from '@/app/map/_components/contexts/data-context';
import { FilterProvider } from '@/app/map/_components/contexts/filter-context';
import type { ElectoralDivision } from '@/models/electoral-division';
import type { News } from '@/models/news';
import type { Parties } from '@/models/party';
import type { PartyProfile } from '@/models/profile';
import type { ReactNode } from 'react';
import { MapProvider } from 'react-map-gl/maplibre';

interface ProvidersProps {
  electoralDivisions: ElectoralDivision[];
  news: News[];
  parties: Parties;
  profiles: PartyProfile;
  children: ReactNode;
}

const Providers = ({
  children,
  electoralDivisions,
  news,
  parties,
  profiles,
}: ProvidersProps) => {
  return (
    <DataProvider
      electoralDivisions={electoralDivisions}
      news={news}
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
