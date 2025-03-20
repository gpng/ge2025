import { Typography } from '@/app/_components/ui/typography';
import { useData } from '@/app/map/_components/contexts/data-context';
import NewsModal from '@/app/map/_components/party-drawer/news-modal';
import { cn } from '@/lib/utils';
import type { Candidate } from '@/models/candidate';

interface Props {
  candidate: Candidate;
  showStatus: boolean;
  electoralDivisionName: string;
  electoralDivisionId: string;
}

const ConstituencyCandidate = ({
  candidate,
  showStatus,
  electoralDivisionName,
  electoralDivisionId,
}: Props) => {
  const { parties, profiles } = useData();

  const party = parties[candidate.partyId];

  if (!party) return <Typography>Party not found</Typography>;

  return (
    <div className="rounded-lg border p-4 mb-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 flex-shrink-0 overflow-hidden">
            <img
              src={`/images/logos/${party.logo}`}
              alt={party.name}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <Typography variant="h5" className="leading-tight">
              {party.name}
            </Typography>
            {showStatus && (
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={cn('inline-block w-2 h-2 rounded-full', {
                    'bg-green-500': candidate.isConfirmed,
                    'bg-yellow-500': !candidate.isConfirmed,
                  })}
                />
                <Typography
                  variant="mutedText"
                  className={cn('text-xs', {
                    'text-green-700': candidate.isConfirmed,
                    'text-yellow-700': !candidate.isConfirmed,
                  })}
                >
                  {candidate.isConfirmed ? 'Confirmed' : 'Unconfirmed'}
                </Typography>
                <NewsModal
                  partyId={candidate.partyId}
                  electoralDivisionId={electoralDivisionId}
                />
              </div>
            )}
          </div>
        </div>
        {party.manifesto && (
          <a
            href={party.manifesto}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>Manifesto document icon</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Manifesto
          </a>
        )}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {candidate.profiles.map((profileId) => {
          const [profileParty, profileName] = profileId.split('.');
          const profile = profiles[profileParty]?.[profileName];
          return (
            <div
              key={profileId}
              className="flex flex-col items-center text-center"
            >
              <div
                className="w-16 h-16 rounded-full border-2 overflow-hidden mb-2"
                style={{
                  borderColor: party.color,
                }}
              >
                <img
                  src={`/images/profiles/${profile?.image || 'person.svg'}`}
                  alt={`${profile?.name || profileName} profile`}
                  className="h-full w-full object-cover"
                />
              </div>
              <Typography variant="lead" className="text-xs font-medium">
                {profile?.name || profileName}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConstituencyCandidate;
