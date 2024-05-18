import { Typography } from '@/app/components/ui/typography';
import { PARTIES, PARTY_COLORS } from '@/data/parties';
import { cn } from '@/lib/utils';
import { type Lineup } from '@/models';

interface Props {
  lineup: Lineup;
  isConfirmed: boolean;
  showStatus: boolean;
}

const Lineup = ({ lineup, isConfirmed, showStatus }: Props) => {
  const party = PARTIES[lineup.party];

  if (!party) return <Typography>Party not found</Typography>;

  return (
    <div className="flex items-start">
      <div className="w-24 flex-grow-0 flex-shrink-0">
        <div className="flex items-center gap-1">
          <Typography>{lineup.party}</Typography>
          <img src={`/images/logos/${party.logo}`} alt={party.name} className="h-6 w-auto" />
        </div>
        {showStatus && (
          <>
            <Typography
              variant="mutedText"
              className={cn('text-xs', {
                'text-green-500': isConfirmed,
                'text-red-500': !isConfirmed,
              })}
            >
              {isConfirmed ? 'confirmed' : 'unconfirmed'}
            </Typography>
            {party.manifesto && (
              <a
                href={party.manifesto}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-500 underline"
              >
                Party Manifesto
              </a>
            )}
          </>
        )}
      </div>
      <div className="flex flex-grow-1 min-w-1 flex-wrap gap-2">
        {lineup.members.map((member) => (
          <div key={member.name} className="w-16 flex flex-col items-center gap-1">
            <div
              className="w-10 h-10 rounded-full border overflow-hidden"
              style={{
                borderColor: PARTY_COLORS[lineup.party],
              }}
            >
              <img
                src={`/images/profiles/${member.image || 'person.svg'}`}
                alt={`profile image of ${member.name}`}
                className="h-auto w-full"
              />
            </div>
            <Typography variant="mutedText" className="text-xs text-black text-center">
              {member.name}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lineup;
