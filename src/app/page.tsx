'use client';

import 'maplibre-gl/dist/maplibre-gl.css';
import Map from 'react-map-gl/maplibre';

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
      />
    </div>
  );
};

export default IndexPage;
