'use client';
import type { ElectoralDivision } from '@/models/electoral-division';
import { electoralDivisionsSchema } from '@/models/electoral-division';
import type { News } from '@/models/news';
import { newsSchema } from '@/models/news';
import type { Parties } from '@/models/party';
import { partiesSchema } from '@/models/party';
import type { PartyProfile } from '@/models/profile';
import { partyProfileSchema } from '@/models/profile';
import boundariesJson from '@data/boundaries.json';
import edJson from '@data/electoral-divisions.json';
import newsJson from '@data/news.json';
import partiesJson from '@data/parties.json';
import profilesJson from '@data/profiles.json';
import { type ReactNode, createContext, useContext } from 'react';

interface DataContextType {
  electoralDivisions: ElectoralDivision[];
  news: News[];
  parties: Parties;
  profiles: PartyProfile;
  boundaries: GeoJSON.FeatureCollection<GeoJSON.Polygon | GeoJSON.MultiPolygon>;
}

const ElectoralContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const newsResult = newsSchema.array().safeParse(newsJson);
  const partiesResult = partiesSchema.safeParse(partiesJson);
  const electoralDivisionsResult = electoralDivisionsSchema.safeParse(edJson);
  const profilesResult = partyProfileSchema.safeParse(profilesJson);

  if (
    !newsResult.success ||
    !partiesResult.success ||
    !electoralDivisionsResult.success ||
    !profilesResult.success
  ) {
    throw new Error('Failed to parse data');
  }

  const news = newsResult.data.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  ) as News[];
  const parties = partiesResult.data as Parties;
  const electoralDivisions =
    electoralDivisionsResult.data as ElectoralDivision[];
  const profiles = profilesResult.data as PartyProfile;

  return (
    <ElectoralContext.Provider
      value={{
        electoralDivisions,
        news,
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
