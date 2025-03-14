import { useData } from '@/app/components/contexts/data-context';
import { MAP_ID, SOURCE_ID } from '@/app/components/map';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { useMap } from 'react-map-gl/maplibre';

const ALL_COMPETITION = 'all';

const CompetitionSelector = () => {
  const { [MAP_ID]: map } = useMap();
  const { electoralDivisions, candidates } = useData();

  const handleCompetitionChange = (type: string) => {
    if (!map) return;

    const showAll = type === ALL_COMPETITION;

    for (const ed of electoralDivisions) {
      const edCandidates = candidates[ed.id] || [];
      const numCandidates = edCandidates.length;
      let isVisible = showAll;

      if (!showAll) {
        switch (type) {
          case 'walkover':
            isVisible = numCandidates === 1;
            break;
          case '2way':
            isVisible = numCandidates === 2;
            break;
          case '3way':
            isVisible = numCandidates === 3;
            break;
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
        <SelectItem value="walkover">Show walkovers only</SelectItem>
        <SelectItem value="2way">Show 2-way fights only</SelectItem>
        <SelectItem value="3way">Show 3-way fights only</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CompetitionSelector;
