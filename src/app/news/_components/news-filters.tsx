'use client';
import Combobox from '@/app/_components/ui/combobox';
import type { ElectoralDivision } from '@/models/electoral-division';
import type { Parties } from '@/models/party';
import type { PartyProfile } from '@/models/profile';
import { useMemo } from 'react';

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

  const candidateOptions = useMemo(() => {
    const allProfiles: { id: string; name: string }[] = [];

    // First, collect all profiles by party
    for (const [partyId, partyProfiles] of Object.entries(profiles)) {
      const party = parties[partyId];
      for (const [profileId, profile] of Object.entries(partyProfiles)) {
        allProfiles.push({
          id: `${partyId}.${profileId}`,
          name: `${profile.name} (${party.id})`,
        });
      }
    }

    // Sort profiles by name
    const sortedProfiles = allProfiles.sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    // insert "All Candidates" at the beginning
    return [{ id: 'all', name: 'All Candidates' }, ...sortedProfiles];
  }, [parties, profiles]);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-[300px]">
        <Combobox
          options={partyOptions}
          value={currentFilters.party}
          onValueChange={(value) =>
            onFilterChange({
              ...currentFilters,
              party: value,
            })
          }
          placeholder="Filter by party"
        />
      </div>

      <div className="w-full md:w-[300px]">
        <Combobox
          options={constituencyOptions}
          value={currentFilters.constituency}
          onValueChange={(value) =>
            onFilterChange({
              ...currentFilters,
              constituency: value,
            })
          }
          placeholder="Filter by constituency"
        />
      </div>

      <div className="w-full md:w-[300px]">
        <Combobox
          options={candidateOptions}
          value={currentFilters.profile}
          onValueChange={(value) =>
            // if same profile is selected, set to all
            onFilterChange({
              ...currentFilters,
              profile: value,
            })
          }
          placeholder="Filter by candidate"
        />
      </div>
    </div>
  );
};

export default NewsFilters;
