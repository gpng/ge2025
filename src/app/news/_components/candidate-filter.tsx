'use client';
import Combobox from '@/app/_components/ui/combobox';
import type { Parties } from '@/models/party';
import type { PartyProfile } from '@/models/profile';
import { useMemo } from 'react';

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
  // Group profiles by party and sort alphabetically
  const options = useMemo(() => {
    const allProfiles: { id: string; name: string }[] = [];

    // First, collect all profiles by party
    for (const [partyId, partyProfiles] of Object.entries(profiles)) {
      const party = parties[partyId];
      for (const [profileId, profile] of Object.entries(partyProfiles)) {
        allProfiles.push({
          id: profileId,
          name: `${profile.name} (${party.id})`,
        });
      }
    }

    // Sort profiles by name
    return allProfiles.sort((a, b) => a.name.localeCompare(b.name));
  }, [parties, profiles]);

  return (
    <Combobox
      options={options}
      value={value}
      onValueChange={onValueChange}
      placeholder="Filter by candidate"
    />
  );
};

export default CandidateFilter;
