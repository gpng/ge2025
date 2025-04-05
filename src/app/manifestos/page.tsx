import { fetchData } from '@/app/actions/fetch-data';
import Content from '@/app/manifestos/_components/content';
import Providers from '@/app/manifestos/_components/providers';

export default async function ManifestosPage() {
  const data = await fetchData();

  return (
    <Providers initialData={data}>
      <Content />
    </Providers>
  );
}
