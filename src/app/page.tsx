import Main from '@/app/components/main';
import { electoralDivisionsSchema } from '@/models/electoral-division';
import 'maplibre-gl/dist/maplibre-gl.css';
import Providers from '@/app/components/providers';
import { partiesSchema } from '@/models/party';
import { partyProfileSchema } from '@/models/profile';
import edJson from '@data/electoral-divisions.json';
import partiesJson from '@data/parties.json';
import profilesJson from '@data/profiles.json';

const IndexPage = () => {
  const ed = electoralDivisionsSchema.safeParse(edJson);

  if (!ed.success) {
    console.error(ed.error);
  }

  const parties = partiesSchema.safeParse(partiesJson);

  if (!parties.success) {
    console.error(parties.error);
  }

  const profiles = partyProfileSchema.safeParse(profilesJson);

  if (!profiles.success) {
    console.error(profiles.error);
  }

  return (
    <Providers
      electoralDivisions={ed.data || []}
      parties={parties.data || {}}
      profiles={profiles.data || {}}
    >
      <Main />
    </Providers>
  );
};

export default IndexPage;
