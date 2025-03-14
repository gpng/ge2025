import { useData } from '@/app/components/contexts/data-context';
import { useFilters } from '@/app/components/contexts/filter-context';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import React from 'react';

const ALL_PARTIES = 'all';

const PartySelector = () => {
  const { parties } = useData();
  const { filters, setPartyFilter } = useFilters();

  return (
    <Select onValueChange={setPartyFilter} value={filters.party}>
      <SelectTrigger className="relative bg-white z-10">
        <SelectValue placeholder="Filter by party" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={ALL_PARTIES}>Show all parties</SelectItem>
        {Object.values(parties).map((p) => (
          <SelectItem key={p.id} value={p.id} style={{ color: p.color }}>
            {p.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default React.memo(PartySelector);
