import { MAP_ID, SOURCE_ID } from '@/app/components/map';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { ELECTORAL_DIVISIONS } from '@/data/electoral-division';
import { PARTIES, PARTY_COLORS } from '@/data/parties';
import { PartyId } from '@/models';
import React from 'react';
import { useMap } from 'react-map-gl/maplibre';

const partyIds = Object.values(PartyId);

const ALL_PARTIES = 'all';

const PartySelector = () => {
  const { [MAP_ID]: map } = useMap();

  const handlePartyChange = (partyId: string) => {
    if (!map) return;

    const showAll = partyId === ALL_PARTIES;

    ELECTORAL_DIVISIONS.forEach((ed) => {
      const isOpposition = ed.opposition?.some((p) => p.party === partyId);
      const isVisible = showAll || ed.current.party === partyId || isOpposition;
      const incumbentPartyColor = PARTY_COLORS[ed.current.party];

      map.setFeatureState(
        {
          source: SOURCE_ID,
          id: ed.featureId,
        },
        {
          fillColor: isVisible ? incumbentPartyColor : 'rgba(0, 0, 0, 0)',
          // TODO: if opposition was selected, should use their color as outline
          outlineColor:
            isVisible && ed.opposition?.length > 0
              ? PARTY_COLORS[ed.opposition[0].party]
              : 'rgba(0, 0, 0, 0)',
          visible: isVisible,
        },
      );
    });
  };

  return (
    <Select onValueChange={handlePartyChange}>
      <SelectTrigger className="relative bg-white z-10">
        <SelectValue placeholder="Select party" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={ALL_PARTIES}>Show all parties</SelectItem>
        {partyIds.map((partyId) => {
          const party = PARTIES[partyId];

          if (!party) return null;

          return (
            <SelectItem key={partyId} value={partyId} style={{ color: `${PARTY_COLORS[partyId]}` }}>
              {party.name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default React.memo(PartySelector);
