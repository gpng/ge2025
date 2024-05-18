import PartyDrawer from '@/app/components/party-drawer/party-drawer';
import PartySelector from '@/app/components/party-selector';
import { type ElectoralDivision } from '@/models';
import React from 'react';

interface Props {
  electoralDivision: ElectoralDivision | undefined;
  onClose: () => void;
}

const Panel = ({ electoralDivision, onClose }: Props) => {
  return (
    <div className="h-full absolute left-0 top-0 w-[350px] p-2">
      <PartyDrawer electoralDivision={electoralDivision} onClose={onClose} />
      <PartySelector />
    </div>
  );
};

export default React.memo(Panel);
