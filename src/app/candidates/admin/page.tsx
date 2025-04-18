import { fetchAdminContent } from '@/app/candidates/admin/actions/fetch-admin-content';

const CandidatesAdminPage = async () => {
  const { data, error } = await fetchAdminContent();
  console.log('data, error: ', data, error);

  return <div>CandidatesAdminPage</div>;
};

export default CandidatesAdminPage;
