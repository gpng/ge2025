import { fetchData } from '@/app/actions/fetch-data';
import Content from './_components/content';
import Providers from './_components/providers';

export default async function NewsPage() {
  const data = await fetchData();

  return (
    <Providers initialData={data}>
      <Content />
    </Providers>
  );
}
