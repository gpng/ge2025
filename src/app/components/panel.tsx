import EdSelector from '@/app/components/ed-selector';
import PartyDrawer from '@/app/components/party-drawer/party-drawer';
import PartySelector from '@/app/components/party-selector';
import { type ElectoralDivision } from '@/models';
import React from 'react';

interface Props {
  electoralDivision: ElectoralDivision | undefined;
  onClose: () => void;
  onElectoralDivisionSelected: (electoralDivisionId: number) => void;
}

const Panel = ({ electoralDivision, onClose, onElectoralDivisionSelected }: Props) => {
  return (
    <div className="h-full absolute left-0 top-0 w-[350px] p-2 pointer-events-none">
      <PartyDrawer electoralDivision={electoralDivision} onClose={onClose} />
      <div className="space-y-1 pointer-events-auto">
        <PartySelector />
        <EdSelector onElectoralDivisionSelected={onElectoralDivisionSelected} />
      </div>
    </div>
  );
};

export default React.memo(Panel);
