import { fetchContent, fetchData } from '@/app/actions/fetch-data';
import CandidateContent from '@/app/candidates/_components/content';
import Providers from '@/app/news/_components/providers';
import type { Metadata } from 'next';

const CandidatesPage = async ({
  searchParams,
}: { searchParams: Promise<{ page?: string }> }) => {
  const sParams = await searchParams;
  const page = Number(sParams?.page) || 1;

  const data = await fetchData();
  const content = await fetchContent(undefined, page);
  return (
    <Providers initialData={data}>
      <CandidateContent content={content} page={page} />
    </Providers>
  );
};

export const metadata: Metadata = {
  title: 'GE2025: Candidate Content',
  description:
    'Explore podcasts, interviews, and more from your candidates for GE2025.',
  openGraph: {
    title: 'GE2025: Candidate Content',
    description:
      'Explore podcasts, interviews, and more from your candidates for GE2025.',
    url: 'https://ge2025.vercel.app/candidates',
    siteName: 'GE2025',
  },
};

export default CandidatesPage;
