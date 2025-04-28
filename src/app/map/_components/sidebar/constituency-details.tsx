import ConstituencyCandidate from '@/app/map/_components/sidebar/constituency-candidate';
import type { ElectoralDivision } from '@/models/electoral-division';

interface Props {
  electoralDivision: ElectoralDivision;
}

const ConstituencyDetails = ({ electoralDivision }: Props) => {
  console.log('electoralDivision: ', electoralDivision);
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
        </div>
      </div>
    </div>
  );
};

export default ConstituencyDetails;
