'use client';

import Main from '@/app/components/main';
import { electoralDivisionsSchema } from '@/models/electoral-division';
import 'maplibre-gl/dist/maplibre-gl.css';
import { DataProvider } from '@/contexts/data-context';
import { candidatesSchema } from '@/models/candidate';
import { partiesSchema } from '@/models/party';
import { partyProfileSchema } from '@/models/profile';
import candidatesJson from '@data/candidates.json';
import edJson from '@data/electoral-divisions.json';
import partiesJson from '@data/parties.json';
import profilesJson from '@data/profiles.json';
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

  const candidates = candidatesSchema.safeParse(candidatesJson);

  if (!candidates.success) {
    console.error(candidates.error);
  }

  const profiles = partyProfileSchema.safeParse(profilesJson);

  if (!profiles.success) {
    console.error(profiles.error);
  }

  return (
    <DataProvider
      electoralDivisions={ed.data || []}
      parties={parties.data || {}}
      candidates={candidates.data || {}}
      profiles={profiles.data || {}}
    >
      <MapProvider>
        <Main />
      </MapProvider>
    </DataProvider>
  );
};

export default IndexPage;
