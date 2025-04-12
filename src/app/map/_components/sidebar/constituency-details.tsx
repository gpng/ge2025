import ConstituencyCandidate from '@/app/map/_components/sidebar/constituency-candidate';
import type { ElectoralDivision } from '@/models/electoral-division';

interface Props {
  electoralDivision: ElectoralDivision;
}

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
              showStatus
              electoralDivisionName={electoralDivision?.name}
              electoralDivisionId={electoralDivision.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConstituencyDetails;
