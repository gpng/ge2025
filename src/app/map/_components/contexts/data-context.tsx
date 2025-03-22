'use client';
import type { ElectoralDivision } from '@/models/electoral-division';
import type { News } from '@/models/news';
import type { Parties } from '@/models/party';
import type { PartyProfile } from '@/models/profile';
import { type ReactNode, createContext, useContext } from 'react';

export interface DataContextType {
  electoralDivisions: ElectoralDivision[];
  news: News[];
  parties: Parties;
  profiles: PartyProfile;
  boundaries: GeoJSON.FeatureCollection<GeoJSON.Polygon | GeoJSON.MultiPolygon>;
}

const ElectoralContext = createContext<DataContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
  initialData: DataContextType;
}

export function DataProvider({ children, initialData }: Props) {
  return (
    <ElectoralContext.Provider value={initialData}>
      {children}
    </ElectoralContext.Provider>
  );
}

export function useData() {
  const context = useContext(ElectoralContext);
  if (context === undefined) {
    throw new Error('useData must be used within an DataProvider');
  }
  return context;
}
