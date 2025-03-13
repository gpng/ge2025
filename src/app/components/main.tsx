'use client';

import { useData } from '@/app/components/contexts/data-context';
import GEMap from '@/app/components/map';
import Panel from '@/app/components/panel';
import QnaWidget from '@/app/components/qna-widget/qna-widget';
import Tooltip from '@/app/components/tooltip';
import type { ElectoralDivision } from '@/models/electoral-division';
import { center } from '@turf/turf';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useState } from 'react';

const Main = () => {
  const { boundaries, electoralDivisions } = useData();

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
    const electoralDivision = electoralDivisions.find(
      (division) => division.featureId === electoralDivisionId,
    );

    if (!electoralDivision) return;

    const boundary = boundaries.features.find(
      (feature) => feature.id === electoralDivisionId,
    );

    if (!boundary) return;

    const boundaryCenter = center(boundary);

    if (!boundaryCenter.geometry.coordinates.length) return;

    setElectoralDivisionHovered({
      electoralDivision,
      longitude: boundaryCenter.geometry.coordinates[0],
      latitude: boundaryCenter.geometry.coordinates[1],
    });
  };

  const handleElectoralDivisionSelected = (electoralDivisionId: number) => {
    const electoralDivision = electoralDivisions.find(
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
