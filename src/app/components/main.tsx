'use client';

import Map from '@/app/components/map';
import Panel from '@/app/components/panel';
import Tooltip from '@/app/components/tooltip';
import { BOUNDARIES_2020 } from '@/data/boundaries-2020';
import { ELECTORAL_DIVISIONS } from '@/data/electoral-division';
import { type ElectoralDivision } from '@/models';
import center from '@turf/center';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useState } from 'react';

const Main = () => {
  const [electoralDivisionHovered, setElectoralDivisionHovered] = useState<
    | {
        electoralDivision: ElectoralDivision;
        longitude: number;
        latitude: number;
      }
    | undefined
  >();

  const handleElectoralDivisionHovered = (electoralDivisionId: number) => {
    const electoralDivision = ELECTORAL_DIVISIONS.find(
      (division) => division.featureId === electoralDivisionId,
    );

    if (!electoralDivision) return;

    const boundaries = BOUNDARIES_2020.features.find(
      (feature) => feature.id === electoralDivisionId,
    );

    if (!boundaries) return;

    const boundaryCenter = center(boundaries);

    if (!boundaryCenter.geometry.coordinates.length) return;

    setElectoralDivisionHovered({
      electoralDivision,
      longitude: boundaryCenter.geometry.coordinates[0],
      latitude: boundaryCenter.geometry.coordinates[1],
    });
  };

  return (
    <div id="c-main" className="w-full h-full">
      <Map onElectoralDivisionHovered={handleElectoralDivisionHovered}>
        {electoralDivisionHovered && (
          <Tooltip
            electoralDivision={electoralDivisionHovered.electoralDivision}
            longitude={electoralDivisionHovered.longitude}
            latitude={electoralDivisionHovered.latitude}
          />
        )}
      </Map>
      <Panel />
    </div>
  );
};

export default Main;
