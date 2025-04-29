import type { ElectoralDivision } from '@/models/electoral-division';

export const addResultsPerc = (ed: ElectoralDivision) => {
  const { history } = ed;

  return history.map((h) => {
    const { results } = h;

    const totalVotes = results.reduce((acc, curr) => acc + curr.votes, 0);

    return {
      ...h,
      results: results.map((r) => ({
        ...r,
        votesPerc: (r.votes / totalVotes) * 100,
      })),
    };
  });
};
