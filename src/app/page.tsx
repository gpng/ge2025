'use client';

import Main from '@/app/components/main';
import { electoralDivisions } from '@/models/electoral-division';
import 'maplibre-gl/dist/maplibre-gl.css';
import edJson from '@data/electoral-divisions.json';
import { MapProvider } from 'react-map-gl/maplibre';

const IndexPage = () => {
  const ed = electoralDivisions.safeParse(edJson);

  if (!ed.success) {
    console.error(ed.error);
  }

  return (
    <MapProvider>
      <Main electoralDivisions={ed.data || []} />
    </MapProvider>
  );
};

export default IndexPage;
