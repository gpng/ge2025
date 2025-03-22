import 'maplibre-gl/dist/maplibre-gl.css';

import { fetchData } from '@/app/actions/fetch-data';
import Content from '@/app/map/_components/content';
import Providers from '@/app/map/_components/providers';

export default async function MapPage() {
  const data = await fetchData();

  return (
    <Providers initialData={data}>
      <Content />
    </Providers>
  );
}
