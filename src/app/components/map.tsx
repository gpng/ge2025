'use client';

import { useData } from '@/app/components/contexts/data-context';
import 'maplibre-gl/dist/maplibre-gl.css';
import React, { useRef } from 'react';
import ReactMapGL, {
  Layer,
  Source,
  type MapLayerMouseEvent,
  type MapRef,
} from 'react-map-gl/maplibre';

export const MAP_ID = 'main-map';
export const SOURCE_ID = 'boundaries';
const LAYER_ID_FILL = 'fill';
const LAYER_ID_LINE = 'line';

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
  const { parties, electoralDivisions, candidates, boundaries } = useData();

  const mapRef = useRef<MapRef>(null);
  const hoveredRef = useRef<number>(-1);

  const handleMapLoad = () => {
    const map = mapRef.current;
    if (!map) return;

    for (const division of electoralDivisions) {
      const cdd = candidates[division.id];
      const incumbent = cdd?.find((c) => c.isIncumbent);

      map.setFeatureState(
        {
          source: SOURCE_ID,
          id: division.featureId,
        },
        {
          fillColor: incumbent ? parties[incumbent.partyId].color : '#000000',
          outlineColor: '#000000',
          //       outlineColor:
          //         division.opposition?.length > 0
          //           ? PARTY_COLORS[division.opposition[0].party as PartyId]
          //           : 'null',
          visible: true,
          hovered: false,
        },
      );
    }
  };

  const handleMouseEnter = (ev: MapLayerMouseEvent) => {
    const map = mapRef.current;
    const { features } = ev;

    if (!map || !features || features.length < 1) return;

    const feature = features[0];
    const featureId = feature.id as number;

    if (!feature.state.visible || hoveredRef.current === featureId) return;

    if (hoveredRef.current !== -1) {
      map.setFeatureState(
        {
          source: SOURCE_ID,
          id: hoveredRef.current,
        },
        {
          hovered: false,
        },
      );
    }
    map.setFeatureState(
      {
        source: SOURCE_ID,
        id: feature.id,
      },
      {
        hovered: true,
      },
    );

    hoveredRef.current = featureId;
    onElectoralDivisionHovered(featureId as number);
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
      onMouseMove={handleMouseEnter}
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
      {children}
    </ReactMapGL>
  );
};

export default React.memo(GEMap);
