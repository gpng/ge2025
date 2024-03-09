'use client';

import Main from '@/app/components/main';
import 'maplibre-gl/dist/maplibre-gl.css';
import { MapProvider } from 'react-map-gl/maplibre';

const IndexPage = () => (
  <MapProvider>
    <Main />
  </MapProvider>
);

export default IndexPage;
