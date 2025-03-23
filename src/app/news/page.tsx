import { fetchData } from '@/app/actions/fetch-data';
import Content from '@/app/news/_components/content';
import Providers from '@/app/news/_components/providers';

export default async function NewsPage() {
  const data = await fetchData();

  return (
    <Providers initialData={data}>
      <Content />
    </Providers>
  );
}
