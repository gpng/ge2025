import 'maplibre-gl/dist/maplibre-gl.css';

import { fetchData } from '@/app/actions/fetch-data';
import MapContent from '@/app/map/_components/map-content';
import Providers from '@/app/map/_components/providers';
import type { Metadata } from 'next';

export default async function MapPage() {
  const data = await fetchData();

  return (
    <Providers initialData={data}>
      <MapContent />
    </Providers>
  );
}

export const metadata: Metadata = {
  title: 'GE2025: Interactive Map - Explore Constituencies & Candidates',
  description:
    "Dive into the 2025 Singapore General Election with our interactive map. Explore all constituencies, see who's running, filter by party, and get up-to-date candidate details.",
  keywords:
    'GE2025 map, Singapore election map, electoral divisions, constituencies, candidates, party filter, Singapore politics, voting districts, election guide, interactive map',
  openGraph: {
    title: 'Singapore GE2025 Interactive Election Map',
    description:
      "Explore every constituency and candidate for Singapore's 2025 General Election. Filter, search, and get the latest updates visualized on a dynamic map.",
    url: 'https://ge2025.vercel.app/map',
  },
};
