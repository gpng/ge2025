'use client';

import { Input } from '@/app/_components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/_components/ui/select';
import type { ElectoralDivision } from '@/models/electoral-division';
import type { Parties } from '@/models/party';

interface NewsFiltersProps {
  parties: Parties;
  constituencies: ElectoralDivision[];
  onFilterChange: (filters: {
    party: string;
    constituency: string;
    search: string;
  }) => void;
}

export function NewsFilters({
  parties,
  constituencies,
  onFilterChange,
}: NewsFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Select
        onValueChange={(value) =>
          onFilterChange({ party: value, constituency: 'all', search: '' })
        }
      >
        <SelectTrigger className="w-full md:w-[200px]">
          <SelectValue placeholder="Filter by party" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Parties</SelectItem>
          {Object.entries(parties).map(([id, party]) => (
            <SelectItem key={id} value={id}>
              {party.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) =>
          onFilterChange({ party: 'all', constituency: value, search: '' })
        }
      >
        <SelectTrigger className="w-full md:w-[200px]">
          <SelectValue placeholder="Filter by constituency" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Constituencies</SelectItem>
          {constituencies.map((ed) => (
            <SelectItem key={ed.id} value={ed.id}>
              {ed.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        placeholder="Search news..."
        className="w-full md:w-[300px]"
        onChange={(e) =>
          onFilterChange({
            party: 'all',
            constituency: 'all',
            search: e.target.value,
          })
        }
      />
    </div>
  );
}
