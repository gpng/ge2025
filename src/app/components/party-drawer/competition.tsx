import { useData } from '@/app/components/contexts/data-context';
import DrawerLineup from '@/app/components/party-drawer/drawer-lineup';
import { Typography } from '@/app/components/ui/typography';
import type { ElectoralDivision } from '@/models/electoral-division';

interface Props {
  electoralDivision: ElectoralDivision;
}

const Competition = ({ electoralDivision }: Props) => {
  const { candidates, parties } = useData();

  const edCandidates = candidates[electoralDivision.id] || [];
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
          />
        )}
        {challengers.map((challenger) => (
          <DrawerLineup
            key={challenger.partyId}
            candidate={challenger}
            isConfirmed={challenger.isConfirmed}
            showStatus
          />
        ))}
      </div>
    </div>
  );
};

export default Competition;
