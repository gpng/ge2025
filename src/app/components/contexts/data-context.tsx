'use client';

import type { Candidates } from '@/models/candidate';
import type { ElectoralDivision } from '@/models/electoral-division';
import type { Parties } from '@/models/party';
import type { PartyProfile } from '@/models/profile';
import boundariesJson from '@data/boundaries.json';
import { type ReactNode, createContext, useContext } from 'react';

interface DataContextType {
  electoralDivisions: ElectoralDivision[];
  parties: Parties;
  candidates: Candidates;
  profiles: PartyProfile;
  boundaries: GeoJSON.FeatureCollection<GeoJSON.Polygon | GeoJSON.MultiPolygon>;
}

const ElectoralContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({
  children,
  electoralDivisions,
  parties,
  candidates,
  profiles,
}: Omit<DataContextType, 'boundaries'> & { children: ReactNode }) {
  return (
    <ElectoralContext.Provider
      value={{
        electoralDivisions,
        parties,
        candidates,
        profiles,
        boundaries: boundariesJson as GeoJSON.FeatureCollection<
          GeoJSON.Polygon | GeoJSON.MultiPolygon
        >,
      }}
    >
      {children}
    </ElectoralContext.Provider>
  );
}

export function useData() {
  const context = useContext(ElectoralContext);
  if (context === undefined) {
    throw new Error('useElectoral must be used within an ElectoralProvider');
  }
  return context;
}
