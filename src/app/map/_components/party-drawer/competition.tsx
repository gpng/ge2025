import { Typography } from '@/app/_components/ui/typography';
import DrawerLineup from '@/app/map/_components/party-drawer/drawer-lineup';
import type { ElectoralDivision } from '@/models/electoral-division';

interface Props {
  electoralDivision: ElectoralDivision;
}

const Competition = ({ electoralDivision }: Props) => {
  const edCandidates = electoralDivision.candidates;
  const incumbent = edCandidates.find((c) => c.isIncumbent);
  const challengers = edCandidates.filter((c) => !c.isIncumbent);

  return (
    <div>
      <div className="space-y-2">
        <Typography as="h2" variant="h4">
          GE2025 Candidates
        </Typography>
        {incumbent && (
          <DrawerLineup
            candidate={incumbent}
            isConfirmed={incumbent.isConfirmed}
            showStatus
            electoralDivision={electoralDivision.name}
          />
        )}
        {challengers.map((challenger) => (
          <DrawerLineup
            key={challenger.partyId}
            candidate={challenger}
            isConfirmed={challenger.isConfirmed}
            showStatus
            electoralDivision={electoralDivision.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Competition;
