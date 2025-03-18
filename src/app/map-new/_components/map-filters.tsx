'use client';

import CompetitionSelector from '@/app/map/_components/competition-selector';
import EDSelector from '@/app/map/_components/ed-selector';
import PartySelector from '@/app/map/_components/party-selector';

interface MapFiltersProps {
  onElectoralDivisionSelected: (electoralDivisionId: number) => void;
}

const MapFilters = ({ onElectoralDivisionSelected }: MapFiltersProps) => {
  return (
    <div className="space-y-4">
      <PartySelector />
      <CompetitionSelector />
      <EDSelector onElectoralDivisionSelected={onElectoralDivisionSelected} />
    </div>
  );
};

export default MapFilters;
