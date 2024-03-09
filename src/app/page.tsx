'use client';

import { BOUNDARIES_2020 } from '@/data/boundaries-2020';
import 'maplibre-gl/dist/maplibre-gl.css';
import Map, { Layer, Source } from 'react-map-gl/maplibre';

const IndexPage = () => {
  return (
    <div id="c-index-page" className="w-full h-full">
      <Map
        initialViewState={{
          longitude: 103.808375,
          latitude: 1.360365,
          zoom: 11,
        }}
        mapStyle="https://www.onemap.gov.sg/maps/json/raster/mbstyle/Grey.json"
      >
        <Source id="boundaries" type="geojson" data={BOUNDARIES_2020}>
          <Layer
            id="fill"
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
            id="line"
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
