import Combobox from '@/app/_components/ui/combobox';
import { useData } from '@/app/map/_components/contexts/data-context';
import {
  ALL_PARTIES,
  useFilters,
} from '@/app/map/_components/contexts/filter-context';
import { useMemo } from 'react';
import React from 'react';

const PartyFilter = () => {
  const { parties } = useData();
  const { filters, setPartyFilter } = useFilters();

  const partyOptions = useMemo(() => {
    return [
      { id: ALL_PARTIES, name: 'Show all parties' },
      ...Object.values(parties).map((p) => ({
        id: p.id,
        name: p.name,
        searchText: `${p.id} ${p.name}`.toLowerCase(),
      })),
    ];
  }, [parties]);

  return (
    <Combobox
      options={partyOptions}
      value={filters.party}
      onValueChange={setPartyFilter}
      placeholder="Filter by party"
      filterFn={(value, search) => {
        if (!search) return 1;
        const searchLower = search.toLowerCase();
        const searchValue = value.toLowerCase();
        if (searchValue.includes(searchLower)) return 1;
        return 0;
      }}
    />
  );
};

export default React.memo(PartyFilter);
