import { fetchContent, fetchData } from '@/app/actions/fetch-data';
import CandidateContent from '@/app/candidates/_components/content';
import Providers from '@/app/news/_components/providers';
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

export default CandidateFilteredPage;
