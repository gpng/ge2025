import Combobox from '@/app/_components/ui/combobox';
import { useData } from '@/app/map/_components/contexts/data-context';
import {
  ALL_COMPETITION,
  useFilters,
} from '@/app/map/_components/contexts/filter-context';
import { useMemo } from 'react';

const CompetitionFilter = () => {
  const { electoralDivisions } = useData();
  const { filters, setCompetitionFilter } = useFilters();

  const competitionOptions = useMemo(() => {
    const uniqueCandidateCounts = new Set(
      electoralDivisions.map((ed) => ed.candidates.length),
    );

    return [
      { id: ALL_COMPETITION, name: 'Show all contests' },
      ...Array.from(uniqueCandidateCounts)
        .sort((a, b) => a - b)
        .map((count) => ({
          id: count === 1 ? 'walkover' : `${count}way`,
          name: count === 1 ? 'Walkovers only' : `${count}-way fights only`,
        })),
    ];
  }, [electoralDivisions]);

  return (
    <Combobox
      options={competitionOptions}
      value={filters.competition}
      onValueChange={setCompetitionFilter}
      placeholder="Filter by competition"
    />
  );
};

export default CompetitionFilter;
