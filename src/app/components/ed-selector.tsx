import { useData } from '@/app/components/contexts/data-context';
import { MAP_ID } from '@/app/components/map';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { flattenDepth } from 'lodash';
import React, { useMemo } from 'react';
import { useMap } from 'react-map-gl/maplibre';

interface Props {
  onElectoralDivisionSelected: (electoralDivisionId: number) => void;
}

const EDSelector = ({ onElectoralDivisionSelected }: Props) => {
  const { electoralDivisions, boundaries, candidates } = useData();
  const { [MAP_ID]: map } = useMap();

  const groupedDivisions = useMemo(() => {
    const groups: Record<string, typeof electoralDivisions> = {
      'Single Member': [],
      'Group Representation': [],
    };

    for (const ed of electoralDivisions) {
      const edCandidates = candidates[ed.id] || [];
      const type =
        edCandidates.length > 1 ? 'Group Representation' : 'Single Member';
      groups[type].push(ed);
    }

    // Sort within each group
    for (const group of Object.values(groups)) {
      group.sort((a, b) => a.name.localeCompare(b.name));
    }

    return groups;
  }, [electoralDivisions, candidates]);

  const handleElectoralDivisionSelected = (electoralDivisionId: string) => {
    const electoralDivision = electoralDivisions.find(
      (ed) => ed.id === electoralDivisionId,
    );

    if (!electoralDivision) return;

    onElectoralDivisionSelected(electoralDivision.featureId);

    if (!map) return;

    const feature = boundaries.features.find(
      (f) => f.id === electoralDivision.featureId,
    ) as GeoJSON.Feature<GeoJSON.MultiPolygon>;

    if (!feature) return;

    let points: number[][] = [];

    if (feature.geometry.type === 'MultiPolygon') {
      points = flattenDepth(
        feature.geometry.coordinates,
        2,
      ) as unknown as number[][];
    } else if (feature.geometry.type === 'Polygon') {
      points = flattenDepth(
        feature.geometry.coordinates,
        1,
      ) as unknown as number[][];
    }

    const lons = points.map((p) => p[0]);
    const lats = points.map((p) => p[1]);

    map.fitBounds(
      [
        [Math.min(...lons), Math.min(...lats)],
        [Math.max(...lons), Math.max(...lats)],
      ],
      { padding: 50, duration: 500 },
    );
  };

  return (
    <Select value="placeholder" onValueChange={handleElectoralDivisionSelected}>
      <SelectTrigger className="relative bg-white z-10">
        <SelectValue placeholder="Select electoral division" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="placeholder" disabled>
          Select an electoral division
        </SelectItem>
        {Object.entries(groupedDivisions).map(([groupName, divisions]) => (
          <SelectGroup key={groupName}>
            <SelectLabel>{groupName} Constituencies</SelectLabel>
            {divisions.map((ed) => (
              <SelectItem key={ed.featureId} value={ed.id}>
                {ed.name}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
};

export default React.memo(EDSelector);
