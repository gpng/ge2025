import 'maplibre-gl/dist/maplibre-gl.css';

import Content from '@/app/map/_components/content';
import Providers from '@/app/map/_components/contexts/providers';
import { electoralDivisionsSchema } from '@/models/electoral-division';
import { newsSchema } from '@/models/news';
import { partiesSchema } from '@/models/party';
import { partyProfileSchema } from '@/models/profile';
import edJson from '@data/electoral-divisions.json';
import newsJson from '@data/news.json';
import partiesJson from '@data/parties.json';
import profilesJson from '@data/profiles.json';

const IndexPage = () => {
  const ed = electoralDivisionsSchema.safeParse(edJson);

  if (!ed.success) {
    console.error(ed.error);
  }

  const news = newsSchema.array().safeParse(newsJson);

  if (!news.success) {
    console.error(news.error);
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
      news={news.data || []}
      parties={parties.data || {}}
      profiles={profiles.data || {}}
    >
      <div className="h-[calc(100vh-3.5rem)]">
        <Content />
      </div>
    </Providers>
  );
};

export default IndexPage;
