import { MAP_ID } from '@/app/components/map';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { BOUNDARIES_2020 } from '@/data/boundaries-2020';
import { ELECTORAL_DIVISIONS } from '@/data/electoral-division';
import { flattenDepth } from 'lodash';
import React from 'react';
import { useMap } from 'react-map-gl/maplibre';

interface Props {
  onElectoralDivisionSelected: (electoralDivisionId: number) => void;
}

const sortedElectoralDivisions = ELECTORAL_DIVISIONS.sort((a, b) => a.name.localeCompare(b.name));

const EDSelector = ({ onElectoralDivisionSelected }: Props) => {
  const { [MAP_ID]: map } = useMap();

  const handleElectoralDivisionSelected = (electoralDivisionId: string) => {
    const electoralDivision = ELECTORAL_DIVISIONS.find((ed) => ed.id === electoralDivisionId);

    if (!electoralDivision) return;

    onElectoralDivisionSelected(electoralDivision.featureId);

    if (!map) return;

    const feature = BOUNDARIES_2020.features.find(
      (f) => f.id === electoralDivision.featureId,
    ) as GeoJSON.Feature<GeoJSON.MultiPolygon>;

    if (!feature) return;

    const points = flattenDepth(feature.geometry.coordinates, 2) as unknown as number[][];

    const lons: number[] = [];
    const lats: number[] = [];
    points.forEach((point) => {
      lons.push(point[0]);
      lats.push(point[1]);
    });

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
        <SelectValue placeholder="Select party" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="placeholder">Select an electoral division</SelectItem>
        {sortedElectoralDivisions.map((ed) => (
          <SelectItem key={ed.featureId} value={ed.id}>
            {ed.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default React.memo(EDSelector);
