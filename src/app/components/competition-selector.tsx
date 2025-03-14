import { useData } from '@/app/components/contexts/data-context';
import {
  ALL_COMPETITION,
  useFilters,
} from '@/app/components/contexts/filter-context';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { useMemo } from 'react';

const CompetitionSelector = () => {
  const { electoralDivisions } = useData();
  const { filters, setCompetitionFilter } = useFilters();

  const competitionOptions = useMemo(() => {
    const uniqueCandidateCounts = new Set(
      electoralDivisions.map((ed) => ed.candidates.length),
    );

    return Array.from(uniqueCandidateCounts)
      .sort((a, b) => a - b)
      .map((count) => ({
        value: count === 1 ? 'walkover' : `${count}way`,
        label: count === 1 ? 'Walkovers only' : `${count}-way fights only`,
      }));
  }, [electoralDivisions]);

  return (
    <Select onValueChange={setCompetitionFilter} value={filters.competition}>
      <SelectTrigger className="relative bg-white z-10">
        <SelectValue placeholder="Filter by competition" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={ALL_COMPETITION}>Show all constituencies</SelectItem>
        {competitionOptions.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CompetitionSelector;
