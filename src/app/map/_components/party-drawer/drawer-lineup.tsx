import { Typography } from '@/app/_components/ui/typography';
import { useData } from '@/app/map/_components/contexts/data-context';
import NewsModal from '@/app/map/_components/party-drawer/news-modal';
import { cn } from '@/lib/utils';
import type { Candidate } from '@/models/candidate';
import { useState } from 'react';

interface Props {
  candidate: Candidate;
  isConfirmed: boolean;
  showStatus: boolean;
  electoralDivision: string;
}

const DrawerLineup = ({
  candidate,
  isConfirmed,
  showStatus,
  electoralDivision,
}: Props) => {
  const { parties, profiles } = useData();
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);

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
                    'bg-green-500': isConfirmed,
                    'bg-yellow-500': !isConfirmed,
                  })}
                />
                <Typography
                  variant="mutedText"
                  className={cn('text-xs', {
                    'text-green-700': isConfirmed,
                    'text-yellow-700': !isConfirmed,
                  })}
                >
                  {isConfirmed ? 'Confirmed' : 'Unconfirmed'}
                </Typography>
                {(candidate.news?.length || 0) > 0 && (
                  <button
                    type="button"
                    onClick={() => setIsNewsModalOpen(true)}
                    className="text-xs text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <title>News and announcements icon</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
                      />
                    </svg>
                    News
                  </button>
                )}
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

      {candidate.news && (
        <NewsModal
          news={candidate.news}
          isOpen={isNewsModalOpen}
          onClose={() => setIsNewsModalOpen(false)}
          partyName={party.name}
          electoralDivision={electoralDivision}
        />
      )}
    </div>
  );
};

export default DrawerLineup;
