'use client';

import { Button } from '@/app/_components/ui/button';
import GEMap from '@/app/map/_components/map';
import { electoralDivisionsSchema } from '@/models/electoral-division';
import { partiesSchema } from '@/models/party';
import { partyProfileSchema } from '@/models/profile';
import edJson from '@data/electoral-divisions.json';
import partiesJson from '@data/parties.json';
import profilesJson from '@data/profiles.json';
import { Filter } from 'lucide-react';
import { useState } from 'react';

const MapContent = () => {
  const [selectedParty, setSelectedParty] = useState<string>('all');
  const [selectedConstituency, setSelectedConstituency] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [hoveredDivisionId, setHoveredDivisionId] = useState<number>(-1);
  const [selectedDivisionId, setSelectedDivisionId] = useState<number>(-1);

  const ed = electoralDivisionsSchema.safeParse(edJson);
  const parties = partiesSchema.safeParse(partiesJson);
  const profiles = partyProfileSchema.safeParse(profilesJson);

  if (!ed.success || !parties.success || !profiles.success) {
    console.error('Data validation failed:', {
      ed: ed.success ? null : ed.error,
      parties: parties.success ? null : parties.error,
      profiles: profiles.success ? null : profiles.error,
    });
    return null;
  }

  const electoralDivisions = ed.data;
  const partiesData = parties.data;
  const profilesData = profiles.data;

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Desktop Sidebar */}
      {/* <MapSidebar
        parties={partiesData}
        electoralDivisions={electoralDivisions}
        selectedParty={selectedParty}
        selectedConstituency={selectedConstituency}
        onPartyChange={setSelectedParty}
        onConstituencyChange={setSelectedConstituency}
      /> */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Filters Button */}
        <div className="md:hidden border-b">
          <div className="flex items-center gap-2 p-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setIsFilterOpen(true)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Mobile Filters Sheet */}
        {/* <MobileFiltersSheet
          isOpen={isFilterOpen}
          onOpenChange={setIsFilterOpen}
          parties={partiesData}
          electoralDivisions={electoralDivisions}
          selectedParty={selectedParty}
          selectedConstituency={selectedConstituency}
          onPartyChange={setSelectedParty}
          onConstituencyChange={setSelectedConstituency}
        /> */}

        {/* Map Area */}
        <div className="flex-1">
          <GEMap
            onElectoralDivisionHovered={setHoveredDivisionId}
            onElectoralDivisionSelected={setSelectedDivisionId}
          />
        </div>
      </div>
    </div>
  );
};

export default MapContent;
