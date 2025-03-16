import CompetitionSelector from '@/app/map/_components/competition-selector';
import EdSelector from '@/app/map/_components/ed-selector';
import PartyDrawer from '@/app/map/_components/party-drawer/party-drawer';
import PartySelector from '@/app/map/_components/party-selector';
import type { ElectoralDivision } from '@/models/electoral-division';
import React from 'react';

interface Props {
  electoralDivision?: ElectoralDivision;
  onClose: () => void;
  onElectoralDivisionSelected: (electoralDivisionId: number) => void;
}

const Panel = ({
  electoralDivision,
  onClose,
  onElectoralDivisionSelected,
}: Props) => {
  return (
    <div
      id="panel"
      className="h-full absolute left-0 top-0 w-screen sm:w-[400px] pointer-events-none z-[30]"
    >
      <PartyDrawer electoralDivision={electoralDivision} onClose={onClose} />
      <div className="flex flex-col sm:flex-row gap-2 pointer-events-auto p-2">
        <div className="flex-1 space-y-1">
          <div className="flex gap-2">
            <div className="flex-1">
              <PartySelector />
            </div>
            <div className="flex-1">
              <CompetitionSelector />
            </div>
          </div>
          <EdSelector
            onElectoralDivisionSelected={onElectoralDivisionSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Panel);
