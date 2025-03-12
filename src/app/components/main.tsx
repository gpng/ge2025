'use client';

import GEMap from '@/app/components/map';
import Panel from '@/app/components/panel';
import QnaWidget from '@/app/components/qna-widget/qna-widget';
import Tooltip from '@/app/components/tooltip';
import { BOUNDARIES_2025 } from '@/data/boundaries-2025';
import { ELECTORAL_DIVISIONS } from '@/data/electoral-divisions';
import type {
  ElectoralDivision,
  ElectoralDivisions,
} from '@/models/electoral-division';
import { center } from '@turf/turf';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useState } from 'react';

interface Props {
  electoralDivisions: ElectoralDivisions;
}

const Main = ({ electoralDivisions }: Props) => {
  const [electoralDivisionHovered, setElectoralDivisionHovered] = useState<
    | {
        electoralDivision: ElectoralDivision;
        longitude: number;
        latitude: number;
      }
    | undefined
  >();
  const [electoralDivisionSelected, setElectoralDivisionSelected] = useState<
    ElectoralDivision | undefined
  >();

  const handleElectoralDivisionHovered = (electoralDivisionId: number) => {
    const electoralDivision = ELECTORAL_DIVISIONS.find(
      (division) => division.featureId === electoralDivisionId,
    );

    if (!electoralDivision) return;

    const boundaries = BOUNDARIES_2025.features.find(
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

  const handleElectoralDivisionSelected = (electoralDivisionId: number) => {
    const electoralDivision = ELECTORAL_DIVISIONS.find(
      (division) => division.featureId === electoralDivisionId,
    );

    if (!electoralDivision) return;

    setElectoralDivisionSelected(electoralDivision);
  };

  return (
    <>
      <div id="c-main" className="w-full h-full">
        <GEMap
          onElectoralDivisionHovered={handleElectoralDivisionHovered}
          onElectoralDivisionSelected={handleElectoralDivisionSelected}
        >
          {electoralDivisionHovered && (
            <Tooltip
              electoralDivision={electoralDivisionHovered.electoralDivision}
              longitude={electoralDivisionHovered.longitude}
              latitude={electoralDivisionHovered.latitude}
            />
          )}
        </GEMap>
        <Panel
          electoralDivision={electoralDivisionSelected}
          onClose={() => setElectoralDivisionSelected(undefined)}
          onElectoralDivisionSelected={handleElectoralDivisionSelected}
        />
      </div>
      <QnaWidget />
    </>
  );
};

export default Main;
