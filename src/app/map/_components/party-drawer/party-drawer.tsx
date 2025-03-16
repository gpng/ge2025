import { Button } from '@/app/_components/ui/button';
import { Typography } from '@/app/_components/ui/typography';
import Competition from '@/app/map/_components/party-drawer/competition';
import type { ElectoralDivision } from '@/models/electoral-division';
import { Cross1Icon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface Props {
  electoralDivision?: ElectoralDivision;
  onClose: () => void;
}

const PartyDrawer = ({ electoralDivision, onClose }: Props) => {
  return (
    <AnimatePresence>
      {electoralDivision && (
        <motion.div
          initial={{ x: -350 }}
          animate={{ x: 0 }}
          exit={{ x: -350 }}
          transition={{ duration: 0.1 }}
          className="absolute left-0 top-0 w-full h-full bg-white shadow-lg z-0 pt-24 px-2 pb-2 flex flex-col pointer-events-auto"
        >
          <div className="relative flex-grow-0 flex-shrink-0">
            <Button
              size="icon"
              variant="outline"
              className="float-right"
              onClick={onClose}
            >
              <Cross1Icon className="h-4 w-4" />
            </Button>
            <Typography as="h1" variant="h3">
              {electoralDivision.name}
            </Typography>
            <Typography variant="mutedText">
              {electoralDivision.electors.toLocaleString()} electors
            </Typography>
          </div>
          <div className="flex-grow min-h-1 mt-4 overflow-y-auto">
            <Competition electoralDivision={electoralDivision} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default React.memo(PartyDrawer);
