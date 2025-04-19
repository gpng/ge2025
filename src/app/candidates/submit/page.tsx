import { fetchData } from '@/app/actions/fetch-data';
import CandidateSubmitContent from '@/app/candidates/submit/_components/content';
import Providers from '@/app/news/_components/providers';

const CandidatesSubmitPage = async () => {
  const data = await fetchData();

  return (
    <Providers initialData={data}>
      <CandidateSubmitContent />
    </Providers>
  );
};

export default CandidatesSubmitPage;
