import Combobox from '@/app/_components/ui/combobox';
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

  const edOptions = useMemo(() => {
    return [
      { id: 'placeholder', name: 'Choose a constituency to view details' },
      ...Object.values(electoralDivisions)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((ed) => ({
          id: ed.id,
          name: ed.name,
        })),
    ];
  }, [electoralDivisions]);

  const handleElectoralDivisionSelected = (electoralDivisionId: string) => {
    if (electoralDivisionId === 'placeholder') return;

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
    <Combobox
      options={edOptions}
      value="placeholder"
      onValueChange={handleElectoralDivisionSelected}
      placeholder="Search constituency..."
    />
  );
};

export default EDSelector;
