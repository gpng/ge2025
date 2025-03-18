'use client';

import CompetitionFilter from '@/app/map/_components/sidebar/competition-filter';
import EDSelector from '@/app/map/_components/sidebar/ed-selector';
import PartyFilter from '@/app/map/_components/sidebar/party-filter';

interface MapFiltersProps {
  onElectoralDivisionSelected: (electoralDivisionId: number) => void;
}

const MapFilters = ({ onElectoralDivisionSelected }: MapFiltersProps) => {
  return (
    <div className="space-y-4">
      <PartyFilter />
      <CompetitionFilter />
      <EDSelector onElectoralDivisionSelected={onElectoralDivisionSelected} />
    </div>
  );
};

export default MapFilters;
