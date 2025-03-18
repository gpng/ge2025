'use client';

import { useData } from '@/app/map/_components/contexts/data-context';
import type { ElectoralDivision } from '@/models/electoral-division';
import React from 'react';
import { Marker } from 'react-map-gl/maplibre';

interface Props {
  electoralDivision: ElectoralDivision;
  longitude: number;
  latitude: number;
}

const Tooltip = ({ electoralDivision, longitude, latitude }: Props) => {
  const { parties } = useData();

  return (
    <Marker
      longitude={longitude}
      latitude={latitude}
      anchor="center"
      style={{ zIndex: 10 }}
    >
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-full">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-2 min-w-[220px] border border-gray-100">
          <div className="font-semibold text-center mb-3 text-gray-800">
            {electoralDivision.name}
          </div>
          <div className="flex justify-center items-center gap-3">
            {electoralDivision.candidates.map((candidate) => {
              const party = parties[candidate.partyId];
              if (!party?.logo) return null;

              return (
                <div
                  key={candidate.partyId}
                  className="w-9 h-9 rounded-full overflow-hidden bg-white shadow-sm border-2 transition-transform hover:scale-105"
                  style={{ borderColor: party.color }}
                >
                  <img
                    src={`/images/logos/${party.logo}`}
                    alt={party.name}
                    className="w-full h-full object-contain p-0.5"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-3 h-3 bg-white/95 rotate-45 transform -translate-x-1/2 translate-y-[-2px] mx-auto border-b border-r border-gray-100" />
      </div>
    </Marker>
  );
};

export default React.memo(Tooltip);
