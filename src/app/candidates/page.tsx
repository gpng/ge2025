import { fetchContent, fetchData } from '@/app/actions/fetch-data';
import CandidateContent from '@/app/candidates/_components/content';
import Providers from '@/app/news/_components/providers';

export default async function CandidatesPage() {
  const data = await fetchData();
  const content = await fetchContent();
  console.log('content: ', content);

  return (
    <Providers initialData={data}>
      <CandidateContent content={content} />
    </Providers>
  );
}
