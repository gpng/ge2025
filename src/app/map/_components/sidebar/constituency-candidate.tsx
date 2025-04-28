import { Button } from '@/app/_components/ui/button';
import { Typography } from '@/app/_components/ui/typography';
import { useData } from '@/app/map/_components/contexts/data-context';
import NewsModal from '@/app/map/_components/party-drawer/news-modal';
import type { Candidate } from '@/models/candidate';
import Link from 'next/link';

interface Props {
  candidate: Candidate;
  electoralDivisionId: string;
}

const ConstituencyCandidate = ({ candidate, electoralDivisionId }: Props) => {
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
            <div className="flex items-center gap-1 mt-1">
              <NewsModal
                partyId={candidate.partyId}
                electoralDivisionId={electoralDivisionId}
              />
              {party.manifesto && (
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <a
                    href={party.manifesto}
                    target="_blank"
                    rel="noopener noreferrer"
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
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {candidate.profiles.map((profileId) => {
          const [profileParty, profileName] = profileId.split('.');
          const profile = profiles[profileParty]?.[profileName];
          return (
            <Link
              href={`/candidates/${profileParty.toLowerCase()}/${profileName.toLowerCase()}`}
              key={profileId}
              className="flex flex-col items-center text-center hover:bg-gray-100 rounded-t-3xl rounded-b-md"
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ConstituencyCandidate;
