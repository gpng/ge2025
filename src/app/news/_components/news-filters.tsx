'use client';
import Combobox from '@/app/_components/ui/combobox';
import type { ElectoralDivision } from '@/models/electoral-division';
import type { Parties } from '@/models/party';
import type { PartyProfile } from '@/models/profile';
import { useMemo } from 'react';
import CandidateFilter from './candidate-filter';

interface Props {
  parties: Parties;
  constituencies: ElectoralDivision[];
  profiles: PartyProfile;
  onFilterChange: (filters: {
    party: string;
    constituency: string;
    profile: string;
  }) => void;
  currentFilters: {
    party: string;
    constituency: string;
    profile: string;
  };
}

const NewsFilters = ({
  parties,
  constituencies,
  profiles,
  onFilterChange,
  currentFilters,
}: Props) => {
  // Sort parties alphabetically
  const partyOptions = useMemo(() => {
    return [
      { id: 'all', name: 'All Parties' },
      ...Object.entries(parties)
        .map(([id, party]) => ({ id, name: party.name }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    ];
  }, [parties]);

  // Sort constituencies alphabetically
  const constituencyOptions = useMemo(() => {
    return [
      { id: 'all', name: 'All Constituencies' },
      ...constituencies
        .map((ed) => ({ id: ed.id, name: ed.name }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    ];
  }, [constituencies]);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-[300px]">
        <Combobox
          options={partyOptions}
          value={currentFilters.party}
          onValueChange={(value) =>
            onFilterChange({ ...currentFilters, party: value })
          }
          placeholder="Filter by party"
        />
      </div>

      <div className="w-full md:w-[300px]">
        <Combobox
          options={constituencyOptions}
          value={currentFilters.constituency}
          onValueChange={(value) =>
            onFilterChange({ ...currentFilters, constituency: value })
          }
          placeholder="Filter by constituency"
        />
      </div>

      <div className="w-full md:w-[300px]">
        <CandidateFilter
          parties={parties}
          profiles={profiles}
          value={currentFilters.profile}
          onValueChange={(value) =>
            onFilterChange({ ...currentFilters, profile: value })
          }
        />
      </div>
    </div>
  );
};

export default NewsFilters;
