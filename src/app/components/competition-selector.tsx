import { useData } from '@/app/components/contexts/data-context';
import { MAP_ID, SOURCE_ID } from '@/app/components/map';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { useMemo } from 'react';
import { useMap } from 'react-map-gl/maplibre';

const ALL_COMPETITION = 'all';

const CompetitionSelector = () => {
  const { [MAP_ID]: map } = useMap();
  const { electoralDivisions } = useData();

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

  const handleCompetitionChange = (type: string) => {
    if (!map) return;

    const showAll = type === ALL_COMPETITION;

    for (const ed of electoralDivisions) {
      const edCandidates = ed.candidates;
      const numCandidates = edCandidates.length;
      let isVisible = showAll;

      if (!showAll) {
        if (type === 'walkover') {
          isVisible = numCandidates === 1;
        } else {
          const wayCount = Number.parseInt(type);
          isVisible = numCandidates === wayCount;
        }
      }

      map.setFeatureState(
        {
          source: SOURCE_ID,
          id: ed.featureId,
        },
        {
          visible: isVisible,
        },
      );
    }
  };

  return (
    <Select onValueChange={handleCompetitionChange}>
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
