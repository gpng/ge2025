import DrawerLineup from '@/app/components/party-drawer/drawer-lineup';
import { Typography } from '@/app/components/ui/typography';
import type { ElectoralDivision } from '@/models';

interface Props {
  electoralDivision: ElectoralDivision;
}

const Competition = ({ electoralDivision }: Props) => {
  return (
    <div>
      <div className="space-y-2">
        <Typography as="h2" variant="h4">
          GE2025 Candidates
        </Typography>
        <DrawerLineup
          lineup={electoralDivision.incumbent}
          isConfirmed={false}
          showStatus
        />
        {electoralDivision.opposition.map((opposition) => (
          <DrawerLineup
            key={opposition.party}
            lineup={opposition}
            isConfirmed={false}
            showStatus
          />
        ))}
      </div>
      <div className="space-y-2 mt-4">
        <Typography as="h2" variant="h4">
          Previous
        </Typography>
        <DrawerLineup
          lineup={electoralDivision.current}
          isConfirmed={false}
          showStatus={false}
        />
      </div>
    </div>
  );
};

export default Competition;
