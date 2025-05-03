import { Typography } from '@/app/_components/ui/typography';
import ConstituencyCandidate from '@/app/map/_components/sidebar/constituency-candidate';
import { addResultsPerc } from '@/lib/results';
import { cn } from '@/lib/utils';
import type { ElectoralDivision } from '@/models/electoral-division';
import { useMemo } from 'react';

interface Props {
  electoralDivision: ElectoralDivision;
}

const ConstituencyDetails = ({ electoralDivision }: Props) => {
  const historyWithResults = useMemo(
    () => addResultsPerc(electoralDivision),
    [electoralDivision],
  );

  return (
    <div className="space-y-4 pt-4 border-t h-full flex-1 min-h-1 flex flex-col">
      <div className="flex-0">
        <h3 className="font-semibold text-lg">{electoralDivision?.name}</h3>
        <p className="text-sm text-muted-foreground">
          {electoralDivision?.electorsVoted
            ? `${electoralDivision?.electorsVoted.toLocaleString()} of ${electoralDivision?.electors.toLocaleString()} voted (${(
                (electoralDivision?.electorsVoted * 100) /
                  (electoralDivision?.electors ||
                    electoralDivision?.electorsVoted)
              ).toFixed(2)}%)`
            : `${electoralDivision?.electors.toLocaleString()} voters`}
        </p>
      </div>
      <div className="flex-1 min-h-1 flex flex-col">
        <h4 className="font-medium mb-2 flex-0">GE2025 Candidates</h4>
        <div className="flex-1 overflow-y-auto">
          {(electoralDivision.candidates || []).map((candidate, index) => {
            // Hardcode walkover for demo purposes: if only one candidate, it's a walkover
            const isWalkover = electoralDivision.candidates.length === 1;

            return (
              <ConstituencyCandidate
                key={candidate.partyId}
                candidate={candidate}
                electoralDivisionId={electoralDivision.id}
                isCalled={electoralDivision.isCalled}
                isWinner={candidate.isWinner}
                isWalkover={isWalkover}
                samplePerc={candidate.samplePerc}
                actualCount={candidate.actualCount}
                actualPerc={candidate.actualPerc}
              />
            );
          })}
          {/* Call to action for candidate content */}
          <div className="mt-6 p-4 rounded-md border border-primary/20 bg-primary/5 text-sm text-muted-foreground text-center">
            <span>
              Want to discover interviews, podcasts, and more about each
              candidate?{' '}
              <a
                href="/candidates"
                className="underline text-primary hover:text-primary/80"
              >
                Browse candidate content here
              </a>{' '}
              or{' '}
              <a
                href="/candidates/submit"
                className="underline text-primary hover:text-primary/80"
              >
                submit content you find
              </a>{' '}
              to help inform voters.
            </span>
          </div>

          {/* Elections history section */}
          <div className="mt-6">
            <h4 className="font-medium text-sm mb-3 text-muted-foreground">
              Past Election Results
            </h4>
            <div className="space-y-3">
              {historyWithResults.map((election) => (
                <div
                  key={`${election.year}-${election.name}`}
                  className="pb-3 border-b border-muted last:border-0"
                >
                  <div className="mb-1">
                    <div className="flex items-baseline justify-between">
                      <h5 className="text-sm font-medium">
                        {election.year} · {election.name}
                      </h5>
                      <span className="text-xs text-muted-foreground">
                        {election.electors.toLocaleString()} voters
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    {election.results.map((result, i) => (
                      <div
                        key={`${election.year}-${election.name}-${result.name}`}
                        className="text-xs"
                      >
                        <div className="flex justify-between items-center">
                          <span className={i === 0 ? 'font-semibold' : ''}>
                            {result.name}
                          </span>
                          <Typography
                            variant="inlineCode"
                            className={cn(
                              'text-xs bg-transparent py-0',
                              i === 0
                                ? 'font-semibold'
                                : 'text-muted-foreground',
                            )}
                          >
                            {result.votes < 0
                              ? 'Walkover'
                              : `${result.votesPerc.toFixed(2)}%`}
                          </Typography>
                        </div>
                        <div className="w-full bg-muted/30 rounded-full h-1 mt-0.5">
                          <div
                            className={`${i === 0 ? 'bg-primary' : 'bg-primary/60'} h-1 rounded-full`}
                            style={{ width: `${result.votesPerc}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstituencyDetails;
