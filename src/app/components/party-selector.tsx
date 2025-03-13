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
  const { electoralDivisions, candidates, parties } = useData();

  const handlePartyChange = (partyId: string) => {
    if (!map) return;

    const showAll = partyId === ALL_PARTIES;

    for (const ed of electoralDivisions) {
      const edCandidates = candidates[ed.id];
      const candidate = edCandidates.find((c) => c.partyId === partyId);
      const incumbent = edCandidates.find((c) => c.isIncumbent);
      const isVisible = showAll || !!candidate;

      let fillColor = '#000000';
      let outlineColor = '#000000';

      if (!isVisible) {
        fillColor = 'rgba(0, 0, 0, 0)';
        outlineColor = 'rgba(0, 0, 0, 0)';
      } else {
        if (incumbent) {
          fillColor = parties[incumbent.partyId].color;
        } else {
          fillColor = '#000000';
        }

        if (candidate) {
          outlineColor = parties[candidate.partyId].color;
        }
      }

      map.setFeatureState(
        {
          source: SOURCE_ID,
          id: ed.featureId,
        },
        {
          fillColor,
          outlineColor,
          visible: isVisible,
        },
      );
    }
  };

  return (
    <Select onValueChange={handlePartyChange}>
      <SelectTrigger className="relative bg-white z-10">
        <SelectValue placeholder="Select party" />
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
