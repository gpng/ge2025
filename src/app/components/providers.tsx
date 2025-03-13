'use client';

import { DataProvider } from '@/app/components/contexts/data-context';
import type { Candidates } from '@/models/candidate';
import type { ElectoralDivision } from '@/models/electoral-division';
import type { Parties } from '@/models/party';
import type { PartyProfile } from '@/models/profile';
import type { ReactNode } from 'react';
import { MapProvider } from 'react-map-gl/maplibre';

interface ProvidersProps {
  electoralDivisions: ElectoralDivision[];
  parties: Parties;
  candidates: Candidates;
  profiles: PartyProfile;
  children: ReactNode;
}

const Providers = ({
  children,
  electoralDivisions,
  parties,
  candidates,
  profiles,
}: ProvidersProps) => {
  return (
    <DataProvider
      electoralDivisions={electoralDivisions}
      parties={parties}
      candidates={candidates}
      profiles={profiles}
    >
      <MapProvider>{children}</MapProvider>
    </DataProvider>
  );
};

export default Providers;
