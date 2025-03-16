'use client';
import type { ElectoralDivision } from '@/models/electoral-division';
import type { Parties } from '@/models/party';
import type { PartyProfile } from '@/models/profile';
import boundariesJson from '@data/boundaries.json';
import { type ReactNode, createContext, useContext } from 'react';

interface DataContextType {
  electoralDivisions: ElectoralDivision[];
  parties: Parties;
  profiles: PartyProfile;
  boundaries: GeoJSON.FeatureCollection<GeoJSON.Polygon | GeoJSON.MultiPolygon>;
}

const ElectoralContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({
  children,
  electoralDivisions,
  parties,
  profiles,
}: Omit<DataContextType, 'boundaries'> & { children: ReactNode }) {
  return (
    <ElectoralContext.Provider
      value={{
        electoralDivisions,
        parties,
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
