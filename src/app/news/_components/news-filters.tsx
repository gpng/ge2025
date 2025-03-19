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
  const sortedParties = useMemo(() => {
    return Object.entries(parties).sort(([, a], [, b]) =>
      a.name.localeCompare(b.name),
    );
  }, [parties]);

  // Sort constituencies alphabetically
  const sortedConstituencies = useMemo(() => {
    return [...constituencies].sort((a, b) => a.name.localeCompare(b.name));
  }, [constituencies]);

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
          {sortedParties.map(([id, party]) => (
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
          {sortedConstituencies.map((ed) => (
            <SelectItem key={ed.id} value={ed.id}>
              {ed.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <CandidateFilter
        parties={parties}
        profiles={profiles}
        value={currentFilters.profile}
        onValueChange={(value) =>
          onFilterChange({ ...currentFilters, profile: value })
        }
      />
    </div>
  );
};

export default NewsFilters;
