'use client';

import { BOUNDARIES_2020 } from '@/data/boundaries-2020';
import { ELECTORAL_DIVISIONS } from '@/data/electoral-division';
import { PARTY_COLORS } from '@/data/parties';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useRef } from 'react';
import Map, { Layer, Source, type MapLayerMouseEvent, type MapRef } from 'react-map-gl/maplibre';

const SOURCE_ID = 'boundaries';
const LAYER_ID_FILL = 'fill';
const LAYER_ID_LINE = 'line';

const IndexPage = () => {
  const mapRef = useRef<MapRef>(null);
  const hoveredRef = useRef<number>(-1);

  const handleMapLoad = () => {
    const map = mapRef.current;
    if (!map) return;

    for (let i = 0; i < ELECTORAL_DIVISIONS.length; i++) {
      const division = ELECTORAL_DIVISIONS[i];

      map.setFeatureState(
        {
          source: SOURCE_ID,
          id: division.featureId,
        },
        {
          fillColor: PARTY_COLORS[division.current.party],
          outlineColor:
            division.opposition?.length > 0 ? PARTY_COLORS[division.opposition[0].party] : 'null',
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

    if (hoveredRef.current === feature.id) return;

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
    hoveredRef.current = feature.id as number;
  };

  return (
    <div id="c-index-page" className="w-full h-full">
      <Map
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
      >
        <Source id={SOURCE_ID} type="geojson" data={BOUNDARIES_2020}>
          <Layer
            id={LAYER_ID_FILL}
            type="fill"
            paint={{
              'fill-color': [
                'case',
                ['!=', ['feature-state', 'fillColor'], 'null'],
                ['feature-state', 'fillColor'],
                'rgba(0, 0, 0, 0.1)',
              ],
              'fill-outline-color': 'rgba(0, 0, 0, 1)',
              'fill-opacity': ['case', ['boolean', ['feature-state', 'hovered'], true], 0.8, 0.4],
            }}
          />
          <Layer
            id={LAYER_ID_LINE}
            type="line"
            paint={{
              'line-color': [
                'case',
                ['!=', ['feature-state', 'outlineColor'], 'null'],
                ['feature-state', 'outlineColor'],
                'rgba(0, 0, 0, 0)',
              ],
              'line-width': 4,
              'line-opacity': ['case', ['boolean', ['feature-state', 'hovered'], true], 1, 0.6],
            }}
          />
        </Source>
      </Map>
    </div>
  );
};

export default IndexPage;
