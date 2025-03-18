import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/_components/ui/select';
import { useData } from '@/app/map/_components/contexts/data-context';
import {
  ALL_PARTIES,
  useFilters,
} from '@/app/map/_components/contexts/filter-context';
import React from 'react';

const PartyFilter = () => {
  const { parties } = useData();
  const { filters, setPartyFilter } = useFilters();

  return (
    <Select onValueChange={setPartyFilter} value={filters.party}>
      <SelectTrigger className="relative bg-white z-[10]">
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

export default React.memo(PartyFilter);
