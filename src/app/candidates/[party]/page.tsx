import { fetchContentByPartyId, fetchData } from '@/app/actions/fetch-data';
import CandidateContent from '@/app/candidates/_components/content';
import Providers from '@/app/news/_components/providers';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

const CandidateFilteredPage = async ({
  params,
}: { params: Promise<{ party?: string }> }) => {
  const resolvedParams = await params;
  const data = await fetchData();
  const { party } = resolvedParams;

  const partyId = party?.toUpperCase();
  // Validate party
  if (!partyId || !data.parties[partyId]) {
    redirect('/candidates');
  }
  const content = await fetchContentByPartyId(partyId);

  return (
    <Providers initialData={data}>
      <CandidateContent content={content} selectedParty={partyId} />
    </Providers>
  );
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ party?: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { party } = resolvedParams;

  if (!party) {
    return {
      title: 'GE2025: Candidate Content',
    };
  }

  const data = await fetchData();
  const partyData = data.parties[party.toUpperCase()];
  if (!partyData) {
    return {
      title: 'GE2025: Candidate Content',
    };
  }

  const partyName = partyData.name;

  return {
    title: `GE2025: ${partyName} (${partyData.id}) Content`,
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
}

export default CandidateFilteredPage;
