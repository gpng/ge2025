import { fetchData } from '@/app/actions/fetch-data';
import CandidatesContent from '@/app/candidates/_components/candidates-content';
import { fetchContentByCandidates } from '@/app/candidates/actions/candidates-actions';
import Providers from '@/app/news/_components/providers';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

const CandidatesConstituencyPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ constituency?: string }>;
  searchParams: Promise<{ page?: string }>;
}) => {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const data = await fetchData();
  const { constituency } = resolvedParams;
  const page = Number(resolvedSearchParams?.page) || 1;

  if (!constituency) {
    redirect('/candidates');
  }

  const constituencyId = constituency?.toUpperCase();

  const ed = data.electoralDivisions.find((ed) => ed.id === constituencyId);
  if (!ed) {
    redirect('/candidates');
  }

  const candidateIds: string[] = [];
  for (const candidate of ed.candidates) {
    for (const profileId of candidate.profiles) {
      candidateIds.push(profileId);
    }
  }

  const content = await fetchContentByCandidates(candidateIds, page);
  return (
    <Providers initialData={data}>
      <CandidatesContent
        content={content}
        selectedConstituency={constituencyId}
        page={page}
      />
    </Providers>
  );
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ constituency?: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const data = await fetchData();
  const { constituency } = resolvedParams;

  const constituencyId = constituency?.toUpperCase();
  if (!constituencyId) {
    return {
      title: 'GE2025: Candidate Content',
    };
  }
  const ed = data.electoralDivisions.find((ed) => ed.id === constituencyId);
  if (!ed) {
    return {
      title: 'GE2025: Candidate Content',
    };
  }

  return {
    title: `GE2025: ${ed.name} Content`,
    description:
      'Explore podcasts, interviews, and more from your candidates for GE2025.',
    openGraph: {
      title: `GE2025: ${ed.name} Content`,
      description:
        'Explore podcasts, interviews, and more from your candidates for GE2025.',
      url: `https://ge2025.vercel.app/candidates/constituency/${constituencyId}`,
      siteName: 'GE2025',
    },
  };
}

export default CandidatesConstituencyPage;
