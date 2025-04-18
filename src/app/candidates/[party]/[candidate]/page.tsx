import { fetchContent, fetchData } from '@/app/actions/fetch-data';
import CandidateContent from '@/app/candidates/_components/content';
import Providers from '@/app/news/_components/providers';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

function toProfileId(party?: string, candidate?: string) {
  if (!party || !candidate) return undefined;
  return `${party.toUpperCase()}.${candidate.toUpperCase()}`;
}

const CandidateFilteredPage = async ({
  params,
}: { params: Promise<{ party?: string; candidate?: string }> }) => {
  const resolvedParams = await params;
  const data = await fetchData();
  const { party, candidate } = resolvedParams;
  const profileId = toProfileId(party, candidate);
  // Validate profileId
  if (!profileId) {
    redirect('/candidates');
  }
  const profiles = data.profiles || {};
  const [partyId, candidateId] = profileId.split('.');
  if (!profiles[partyId] || !profiles[partyId][candidateId]) {
    redirect('/candidates');
  }
  const content = await fetchContent(profileId);
  return (
    <Providers initialData={data}>
      <CandidateContent content={content} selectedCandidate={profileId} />
    </Providers>
  );
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ party?: string; candidate?: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const data = await fetchData();
  const { party, candidate } = resolvedParams;
  const profileId = toProfileId(party, candidate);
  // Validate profileId
  if (!profileId) {
    return {
      title: 'GE2025: Candidate Content',
    };
  }
  const profiles = data.profiles || {};
  const [partyId, candidateId] = profileId.split('.');
  const profile = profiles[partyId]?.[candidateId];
  if (!profile) {
    return {
      title: 'GE2025: Candidate Content',
    };
  }

  return {
    title: `GE2025: ${profile.name} Content`,
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
