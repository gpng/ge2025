'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/_components/ui/select';
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
  // Get all unique profile IDs across all parties
  const allProfileIds = useMemo(() => {
    const ids = new Set<string>();
    for (const partyProfiles of Object.values(profiles)) {
      for (const id of Object.keys(partyProfiles)) {
        ids.add(id);
      }
    }
    return Array.from(ids);
  }, [profiles]);

  // Group profiles by party and sort alphabetically
  const groupedProfiles = useMemo(() => {
    const groups: Record<string, { id: string; name: string }[]> = {};

    // First, collect all profiles by party
    for (const [partyId, partyProfiles] of Object.entries(profiles)) {
      groups[partyId] = [];
      for (const [profileId, profile] of Object.entries(partyProfiles)) {
        groups[partyId].push({ id: profileId, name: profile.name });
      }
    }

    // Sort profiles within each party by name
    for (const partyId of Object.keys(groups)) {
      groups[partyId].sort((a, b) => a.name.localeCompare(b.name));
    }

    return groups;
  }, [profiles]);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Select
        value={currentFilters.party}
        onValueChange={(value) =>
          onFilterChange({ ...currentFilters, party: value })
        }
      >
        <SelectTrigger className="w-full md:w-[200px]">
          <SelectValue placeholder="Filter by party" />
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          <SelectItem value="all">All Parties</SelectItem>
          {Object.entries(parties).map(([id, party]) => (
            <SelectItem key={id} value={id}>
              {party.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={currentFilters.constituency}
        onValueChange={(value) =>
          onFilterChange({ ...currentFilters, constituency: value })
        }
      >
        <SelectTrigger className="w-full md:w-[200px]">
          <SelectValue placeholder="Filter by constituency" />
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          <SelectItem value="all">All Constituencies</SelectItem>
          {constituencies.map((ed) => (
            <SelectItem key={ed.id} value={ed.id}>
              {ed.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={currentFilters.profile}
        onValueChange={(value) =>
          onFilterChange({ ...currentFilters, profile: value })
        }
      >
        <SelectTrigger className="w-full md:w-[200px]">
          <SelectValue placeholder="Filter by profile" />
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          <SelectItem value="all">All Candidates</SelectItem>
          {Object.entries(groupedProfiles).map(([partyId, partyProfiles]) => (
            <div key={partyId}>
              <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                {parties[partyId]?.name}
              </div>
              {partyProfiles.map((profile) => (
                <SelectItem key={profile.id} value={profile.id}>
                  {profile.name}
                </SelectItem>
              ))}
            </div>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default NewsFilters;
