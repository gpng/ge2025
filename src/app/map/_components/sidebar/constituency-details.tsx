import ConstituencyCandidate from '@/app/map/_components/sidebar/constituency-candidate';
import type { ElectoralDivision } from '@/models/electoral-division';

interface Props {
  electoralDivision: ElectoralDivision;
}

// Define the types for the history data
interface ElectionResult {
  name: string;
  votes: number;
  votesPerc: number;
}

interface ElectionHistory {
  year: number;
  name: string;
  electors: number;
  results: ElectionResult[];
}

const mockHistory: ElectionHistory[] = [
  {
    year: 2020,
    name: 'Jurong GRC',
    electors: 131058,
    results: [
      {
        name: 'PAP',
        votes: 91846,
        votesPerc: 74.61,
      },
      {
        name: 'RDU',
        votes: 31260,
        votesPerc: 25.39,
      },
    ],
  },
  {
    year: 2016,
    name: 'Bukit Batok GRC',
    electors: 29948,
    results: [
      {
        name: 'PAP',
        votes: 15500,
        votesPerc: 54.8,
      },
      {
        name: 'SDP',
        votes: 12787,
        votesPerc: 45.2,
      },
    ],
  },
  {
    year: 2015,
    name: 'Jurong GRC',
    electors: 130498,
    results: [
      {
        name: 'PAP',
        votes: 14428,
        votesPerc: 61.21,
      },
      {
        name: 'SDP',
        votes: 9142,
        votesPerc: 38.79,
      },
    ],
  },
  {
    year: 2015,
    name: 'Bukit Batok GRC',
    electors: 27077,
    results: [
      {
        name: 'PAP',
        votes: 18204,
        votesPerc: 72.99,
      },
      {
        name: 'SDP',
        votes: 6585,
        votesPerc: 26.4,
      },
      {
        name: 'INDIE',
        votes: 150,
        votesPerc: 0.6,
      },
    ],
  },
  {
    year: 2011,
    name: 'Jurong GRC',
    electors: 125276,
    results: [
      {
        name: 'PAP',
        votes: 76595,
        votesPerc: 66.96,
      },
      {
        name: 'NSP',
        votes: 37786,
        votesPerc: 33.04,
      },
    ],
  },
];

const ConstituencyDetails = ({ electoralDivision }: Props) => {
  return (
    <div className="space-y-4 pt-4 border-t h-full flex-1 min-h-1 flex flex-col">
      <div className="flex-0">
        <h3 className="font-semibold text-lg">{electoralDivision?.name}</h3>
        <p className="text-sm text-muted-foreground">
          {electoralDivision?.electors.toLocaleString()} voters
        </p>
      </div>
      <div className="flex-1 min-h-1 flex flex-col">
        <h4 className="font-medium mb-2 flex-0">GE2025 Candidates</h4>
        <div className="flex-1 overflow-y-auto">
          {(electoralDivision.candidates || []).map((candidate) => (
            <ConstituencyCandidate
              key={candidate.partyId}
              candidate={candidate}
              electoralDivisionId={electoralDivision.id}
            />
          ))}
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
          <div className="mt-8">
            <h4 className="font-medium mb-4">Past Election Results</h4>
            <div className="space-y-6">
              {mockHistory.map((election) => (
                <div
                  key={`${election.year}-${election.name}`}
                  className="rounded-md border p-4 bg-card"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h5 className="font-medium text-base">
                        {election.year} - {election.name}
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {election.electors.toLocaleString()} registered voters
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {election.results.map((result) => (
                      <div
                        key={`${election.year}-${election.name}-${result.name}`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">{result.name}</span>
                          <span className="text-sm">
                            {result.votesPerc.toFixed(1)}% (
                            {result.votes.toLocaleString()} votes)
                          </span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                          <div
                            className="bg-primary h-2.5 rounded-full"
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
