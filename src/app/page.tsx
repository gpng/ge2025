'use client';

import Main from '@/app/components/main';
import { electoralDivisionsSchema } from '@/models/electoral-division';
import 'maplibre-gl/dist/maplibre-gl.css';
import { ElectoralProvider } from '@/contexts/ElectoralContext';
import { partiesSchema } from '@/models/party';
import edJson from '@data/electoral-divisions.json';
import partiesJson from '@data/parties.json';
import { MapProvider } from 'react-map-gl/maplibre';

const IndexPage = () => {
  const ed = electoralDivisionsSchema.safeParse(edJson);

  if (!ed.success) {
    console.error(ed.error);
  }

  const parties = partiesSchema.safeParse(partiesJson);

  if (!parties.success) {
    console.error(parties.error);
  }

  return (
    <ElectoralProvider
      electoralDivisions={ed.data || []}
      parties={parties.data || {}}
    >
      <MapProvider>
        <Main />
      </MapProvider>
    </ElectoralProvider>
  );
};

export default IndexPage;
