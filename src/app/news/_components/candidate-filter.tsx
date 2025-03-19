'use client';
import { Button } from '@/app/_components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/app/_components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/_components/ui/popover';
import { cn } from '@/lib/utils';
import type { Parties } from '@/models/party';
import type { PartyProfile } from '@/models/profile';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useMemo, useState } from 'react';

interface Props {
  parties: Parties;
  profiles: PartyProfile;
  value: string;
  onValueChange: (value: string) => void;
}

const CandidateFilter = ({
  parties,
  profiles,
  value,
  onValueChange,
}: Props) => {
  const [open, setOpen] = useState(false);

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

  const selectedProfile =
    value !== 'all'
      ? Object.entries(profiles)
          .flatMap(([partyId, partyProfiles]) =>
            Object.entries(partyProfiles).map(([profileId, profile]) => ({
              id: `${partyId}.${profileId}`,
              name: profile.name,
            })),
          )
          .find((profile) => profile.id === value)?.name
      : 'All Candidates';

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          // biome-ignore lint/a11y/useSemanticElements: <explanation>
          role="combobox"
          aria-expanded={open}
          className="w-full md:w-[200px] justify-between"
        >
          {selectedProfile}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full md:w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search candidates..." />
          <CommandList className="max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent hover:scrollbar-thumb-gray-300">
            <CommandEmpty>No candidates found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                value="All Candidates"
                onSelect={() => {
                  onValueChange('all');
                  setOpen(false);
                }}
              >
                All Candidates
                <Check
                  className={cn(
                    'ml-auto',
                    value === 'all' ? 'opacity-100' : 'opacity-0',
                  )}
                />
              </CommandItem>
            </CommandGroup>
            {Object.entries(groupedProfiles).map(([partyId, partyProfiles]) => (
              <CommandGroup key={partyId} heading={parties[partyId]?.name}>
                {partyProfiles.map((profile) => (
                  <CommandItem
                    key={profile.id}
                    value={profile.name}
                    onSelect={() => {
                      onValueChange(`${partyId}.${profile.id}`);
                      setOpen(false);
                    }}
                  >
                    {profile.name}
                    <Check
                      className={cn(
                        'ml-auto',
                        value === `${partyId}.${profile.id}`
                          ? 'opacity-100'
                          : 'opacity-0',
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CandidateFilter;
