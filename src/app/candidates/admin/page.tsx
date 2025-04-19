import { fetchData } from '@/app/actions/fetch-data';
import ClientAdminTable from '@/app/candidates/admin/_components/client-admin-table';
import { fetchAdminContent } from '@/app/candidates/admin/actions/admin-content';
import { DataProvider } from '@/app/map/_components/contexts/data-context';

const CandidatesAdminPage = async ({
  searchParams,
}: { searchParams: Promise<{ page?: string }> }) => {
  const sParams = await searchParams;
  const page = Number(sParams?.page) || 1;
  const { data, error } = await fetchAdminContent(page);
  if (error) {
    return (
      <div className="container py-8">
        <h1 className="text-2xl font-bold mb-6">
          Admin: Candidate Content Submissions
        </h1>
        <div className="text-red-600 font-medium">
          Error: {error.message || String(error)}
        </div>
      </div>
    );
  }
  const initialData = await fetchData();
  return (
    <DataProvider initialData={initialData}>
      <ClientAdminTable initialData={data || []} page={page} />
    </DataProvider>
  );
};

export default CandidatesAdminPage;
