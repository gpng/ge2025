import { useData } from '@/app/components/contexts/data-context';
import { MAP_ID, SOURCE_ID } from '@/app/components/map';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import React from 'react';
import { useMap } from 'react-map-gl/maplibre';

const ALL_PARTIES = 'all';

const PartySelector = () => {
  const { [MAP_ID]: map } = useMap();
  const { electoralDivisions, parties } = useData();

  const handlePartyChange = (partyId: string) => {
    if (!map) return;

    const showAll = partyId === ALL_PARTIES;

    for (const ed of electoralDivisions) {
      const edCandidates = ed.candidates;
      const candidate = edCandidates.find((c) => c.partyId === partyId);
      const incumbent = edCandidates.find((c) => c.isIncumbent);

      map.setFeatureState(
        {
          source: SOURCE_ID,
          id: ed.featureId,
        },
        {
          fillColor: incumbent ? parties[incumbent.partyId].color : '#000000',
          outlineColor: candidate
            ? parties[candidate.partyId].color
            : '#000000',
          visible: showAll || !!candidate,
        },
      );
    }
  };

  return (
    <Select onValueChange={handlePartyChange}>
      <SelectTrigger className="relative bg-white z-10">
        <SelectValue placeholder="Filter by party" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={ALL_PARTIES}>Show all parties</SelectItem>
        {Object.values(parties).map((p) => {
          return (
            <SelectItem key={p.id} value={p.id} style={{ color: p.color }}>
              {p.name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default React.memo(PartySelector);
