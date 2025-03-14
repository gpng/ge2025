'use client';

import { useData } from '@/app/components/contexts/data-context';
import { useFilters } from '@/app/components/contexts/filter-context';
import 'maplibre-gl/dist/maplibre-gl.css';
import { center } from '@turf/turf';
import React, { useRef, useState } from 'react';
import ReactMapGL, {
  Layer,
  Source,
  Marker,
  type MapLayerMouseEvent,
  type MapRef,
} from 'react-map-gl/maplibre';

export const MAP_ID = 'main-map';
export const SOURCE_ID = 'boundaries';
const LAYER_ID_FILL = 'fill';
const LAYER_ID_LINE = 'line';

// Base offset in degrees at zoom level 11 (our default)
const BASE_OFFSET = 0.008;
// Calculate dynamic offset based on zoom level
const getOffset = (zoom: number) => BASE_OFFSET * 2 ** (11 - zoom);

interface Props {
  children?: React.ReactNode;
  onElectoralDivisionHovered: (electoralDivisionId: number) => void;
  onElectoralDivisionSelected: (electoralDivisionId: number) => void;
}

const GEMap = ({
  children,
  onElectoralDivisionHovered,
  onElectoralDivisionSelected,
}: Props) => {
  const { boundaries, electoralDivisions, parties } = useData();
  const { setFeatureStates } = useFilters();
  const [zoom, setZoom] = useState(11);

  const mapRef = useRef<MapRef>(null);
  const hoveredRef = useRef<number>(-1);

  const handleMapLoad = () => {
    const map = mapRef.current;
    if (!map) return;
    setFeatureStates();
  };

  const handleZoom = () => {
    const map = mapRef.current;
    if (!map) return;
    setZoom(map.getZoom());
  };

  const handleMouseEnter = (ev: MapLayerMouseEvent) => {
    const map = mapRef.current;
    const { features } = ev;

    if (!map || !features || features.length < 1) return;

    const feature = features[0];
    const featureId = feature.id as number;

    if (!feature.state.visible || hoveredRef.current === featureId) return;

    hoveredRef.current = featureId;
    setFeatureStates(featureId);
    onElectoralDivisionHovered(featureId);
  };

  const handleMouseLeave = () => {
    hoveredRef.current = -1;
    setFeatureStates();
    onElectoralDivisionHovered(-1);
  };

  const handleClick = (ev: MapLayerMouseEvent) => {
    const feature = ev.features?.[0];

    if (!feature || !feature.state.visible) return;

    onElectoralDivisionSelected(feature.id as number);
  };

  return (
    <ReactMapGL
      id={MAP_ID}
      initialViewState={{
        longitude: 103.808375,
        latitude: 1.360365,
        zoom: 11,
      }}
      mapStyle="https://www.onemap.gov.sg/maps/json/raster/mbstyle/Grey.json"
      ref={mapRef}
      onLoad={handleMapLoad}
      onZoom={handleZoom}
      onMouseMove={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      interactiveLayerIds={[LAYER_ID_FILL]}
      onClick={handleClick}
    >
      <Source id={SOURCE_ID} type="geojson" data={boundaries}>
        <Layer
          id={LAYER_ID_FILL}
          type="fill"
          paint={{
            'fill-color': [
              'case',
              ['boolean', ['feature-state', 'visible'], true],
              [
                'case',
                ['!=', ['feature-state', 'fillColor'], 'null'],
                ['feature-state', 'fillColor'],
                'rgba(0, 0, 0, 0.1)',
              ],
              'rgba(0, 0, 0, 0)',
            ],
            'fill-opacity': [
              'case',
              ['boolean', ['feature-state', 'hovered'], true],
              0.8,
              0.4,
            ],
          }}
        />
        <Layer
          id={LAYER_ID_LINE}
          type="line"
          paint={{
            'line-color': [
              'case',
              ['boolean', ['feature-state', 'visible'], true],
              [
                'case',
                ['!=', ['feature-state', 'outlineColor'], 'null'],
                ['feature-state', 'outlineColor'],
                'rgba(0, 0, 0, 0)',
              ],
              'rgba(0, 0, 0, 0)',
            ],
            'line-width': 2,
            'line-opacity': [
              'case',
              ['boolean', ['feature-state', 'hovered'], true],
              1,
              0.6,
            ],
          }}
        />
      </Source>
      {electoralDivisions.map((ed) => {
        if (ed.featureId === hoveredRef.current) return null;

        const boundary = boundaries.features.find(
          (feature) => feature.id === ed.featureId,
        );
        if (!boundary) return null;

        // Get feature state to check visibility
        const map = mapRef.current;
        if (!map) return null;

        const featureState = map.getFeatureState({
          source: SOURCE_ID,
          id: ed.featureId,
        });

        if (!featureState.visible) return null;

        const boundaryCenter = center(boundary);
        if (!boundaryCenter.geometry.coordinates.length) return null;

        const [longitude, latitude] = boundaryCenter.geometry.coordinates;
        const offset = getOffset(zoom);

        return ed.candidates.map((candidate, index) => {
          const party = parties[candidate.partyId];
          if (!party?.logo) return null;

          // Place all logos in a single row, centered on the point
          const offsetLon = (index - (ed.candidates.length - 1) / 2) * offset;

          return (
            <Marker
              key={`${ed.id}-${candidate.partyId}`}
              longitude={longitude + offsetLon}
              latitude={latitude}
              anchor="center"
              style={{ zIndex: 1 }}
            >
              <div
                className="w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm border"
                style={{ borderColor: party.color }}
              >
                <img
                  src={`/images/logos/${party.logo}`}
                  alt={party.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </Marker>
          );
        });
      })}
      {children}
    </ReactMapGL>
  );
};

export default React.memo(GEMap);
