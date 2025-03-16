import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/_components/ui/select';
import { useData } from '@/app/map/_components/contexts/data-context';
import { MAP_ID } from '@/app/map/_components/map';
import { flattenDepth } from 'lodash';
import { useMemo } from 'react';
import { useMap } from 'react-map-gl/maplibre';

interface Props {
  onElectoralDivisionSelected: (electoralDivisionId: number) => void;
}

const EDSelector = ({ onElectoralDivisionSelected }: Props) => {
  const { electoralDivisions, boundaries } = useData();
  const { [MAP_ID]: map } = useMap();

  const sortedDivisions = useMemo(() => {
    return Object.values(electoralDivisions).sort((a, b) =>
      a.name.localeCompare(b.name),
    );
  }, [electoralDivisions]);

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
        <SelectValue placeholder="Search constituency..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="placeholder" disabled>
          Choose a constituency to view details
        </SelectItem>
        {sortedDivisions.map((ed) => (
          <SelectItem key={ed.featureId} value={ed.id}>
            {ed.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default EDSelector;
