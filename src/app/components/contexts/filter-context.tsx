import { useData } from '@/app/components/contexts/data-context';
import { MAP_ID, SOURCE_ID } from '@/app/components/map';
import type { ElectoralDivisions } from '@/models/electoral-division';
import type { Parties } from '@/models/party';
import { createContext, useContext, useState } from 'react';
import type { MapRef } from 'react-map-gl/maplibre';
import { useMap } from 'react-map-gl/maplibre';

export const ALL_PARTIES = 'all';
export const ALL_COMPETITION = 'all';

type FilterState = {
  party: string;
  competition: string;
};

type FilterContextType = {
  filters: FilterState;
  setPartyFilter: (party: string) => void;
  setCompetitionFilter: (competition: string) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

const updateMapState = (
  map: MapRef,
  filters: FilterState,
  electoralDivisions: ElectoralDivisions,
  parties: Parties,
) => {
  for (const ed of electoralDivisions) {
    const edCandidates = ed.candidates;
    const numCandidates = edCandidates.length;
    let isVisible = true;

    // Apply party filter
    if (filters.party !== ALL_PARTIES) {
      const candidate = edCandidates.find((c) => c.partyId === filters.party);
      isVisible = isVisible && !!candidate;
    }

    // Apply competition filter
    if (filters.competition !== ALL_COMPETITION) {
      if (filters.competition === 'walkover') {
        isVisible = isVisible && numCandidates === 1;
      } else {
        const competitionCount = Number.parseInt(filters.competition);
        isVisible = isVisible && numCandidates === competitionCount;
      }
    }

    const incumbent = edCandidates.find((c) => c.isIncumbent);
    const partyCandidate =
      filters.party !== ALL_PARTIES
        ? edCandidates.find((c) => c.partyId === filters.party)
        : null;

    map.setFeatureState(
      {
        source: SOURCE_ID,
        id: ed.featureId,
      },
      {
        fillColor: incumbent ? parties[incumbent.partyId].color : '#000000',
        outlineColor: partyCandidate
          ? parties[partyCandidate.partyId].color
          : '#000000',
        visible: isVisible,
      },
    );
  }
};

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const { [MAP_ID]: map } = useMap();
  const { electoralDivisions, parties } = useData();
  const [filters, setFilters] = useState<FilterState>({
    party: ALL_PARTIES,
    competition: ALL_COMPETITION,
  });

  const setPartyFilter = (party: string) => {
    const newFilters = { ...filters, party };
    setFilters(newFilters);
    if (map) updateMapState(map, newFilters, electoralDivisions, parties);
  };

  const setCompetitionFilter = (competition: string) => {
    const newFilters = { ...filters, competition };
    setFilters(newFilters);
    if (map) updateMapState(map, newFilters, electoralDivisions, parties);
  };

  return (
    <FilterContext.Provider
      value={{ filters, setPartyFilter, setCompetitionFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error('useFilters must be used within FilterProvider');
  return context;
};
