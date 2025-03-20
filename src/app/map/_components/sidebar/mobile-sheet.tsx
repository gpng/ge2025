'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/app/_components/ui/sheet';
import ConstituencyDetails from '@/app/map/_components/sidebar/constituency-details';
import MapFilters from '@/app/map/_components/sidebar/map-filters';
import type { ElectoralDivision } from '@/models/electoral-division';
import { useEffect, useState } from 'react';

interface MobileSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onElectoralDivisionSelected: (electoralDivisionId: number) => void;
  selectedElectoralDivision?: ElectoralDivision;
}

const MobileSheet = ({
  isOpen,
  onOpenChange,
  onElectoralDivisionSelected,
  selectedElectoralDivision,
}: MobileSheetProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mdBreakpoint = getComputedStyle(document.documentElement)
        .getPropertyValue('--screen-md')
        .trim();
      setIsMobile(window.matchMedia(`(max-width: ${mdBreakpoint})`).matches);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[350px] p-0">
        <div className="h-full flex flex-col">
          <SheetHeader className="p-4 border-b">
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto p-4">
            <MapFilters
              onElectoralDivisionSelected={onElectoralDivisionSelected}
            />
            {selectedElectoralDivision && (
              <div className="mt-4">
                <ConstituencyDetails
                  electoralDivision={selectedElectoralDivision}
                />
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSheet;
