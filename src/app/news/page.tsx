'use client';

import { DataProvider } from '@/app/map/_components/contexts/data-context';
import NewsContent from '@/app/news/_components/content';
import type { ElectoralDivision } from '@/models/electoral-division';
import { electoralDivisionsSchema } from '@/models/electoral-division';
import type { News } from '@/models/news';
import { newsSchema } from '@/models/news';
import type { Parties } from '@/models/party';
import { partiesSchema } from '@/models/party';
import type { PartyProfile } from '@/models/profile';
import { partyProfileSchema } from '@/models/profile';
import edJson from '@data/electoral-divisions.json';
import newsJson from '@data/news.json';
import partiesJson from '@data/parties.json';
import profilesJson from '@data/profiles.json';

const newsResult = newsSchema.array().safeParse(newsJson);
const partiesResult = partiesSchema.safeParse(partiesJson);
const electoralDivisionsResult = electoralDivisionsSchema.safeParse(edJson);
const profilesResult = partyProfileSchema.safeParse(profilesJson);

if (
  !newsResult.success ||
  !partiesResult.success ||
  !electoralDivisionsResult.success ||
  !profilesResult.success
) {
  throw new Error('Failed to parse data');
}

const news = newsResult.data as News[];
const parties = partiesResult.data as Parties;
const electoralDivisions = electoralDivisionsResult.data as ElectoralDivision[];
const profiles = profilesResult.data as PartyProfile;

const NewsPage = () => {
  return (
    <DataProvider
      news={news}
      parties={parties}
      electoralDivisions={electoralDivisions}
      profiles={profiles}
    >
      <NewsContent />
    </DataProvider>
  );
};

export default NewsPage;
