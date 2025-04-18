'use client';
import { Button } from '@/app/_components/ui/button';
import Combobox from '@/app/_components/ui/combobox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/_components/ui/table';
import ContentTypeWithIcon from '@/app/candidates/_components/content-type-with-icon';
import ProfileTags from '@/app/candidates/_components/profile-tags';
import { useData } from '@/app/map/_components/contexts/data-context';
import type { Tables } from '@/models/database';
import { ExternalLink, Mic } from 'lucide-react';
import { useMemo, useState } from 'react';

interface Props {
  content: Tables<'content'>[];
}

const CandidateContent = ({ content }: Props) => {
  const { profiles, parties } = useData();
  const [filters, setFilters] = useState({
    type: 'all',
    candidate: 'all',
  });

  const filteredContent = useMemo(() => {
    return content.filter((item) => {
      if (filters.type !== 'all' && item.type !== filters.type) return false;
      if (filters.candidate !== 'all' && item.author !== filters.candidate)
        return false;
      return true;
    });
  }, [filters, content]);

  const typeOptions = useMemo(
    () => [
      { id: 'all', name: 'All Types' },
      ...Array.from(new Set(content.map((item) => item.type))).map((type) => ({
        id: type,
        name: type,
      })),
    ],
    [content],
  );

  const candidateOptions = useMemo(() => {
    const allProfiles: { id: string; name: string }[] = [];

    // First, collect all profiles by party
    for (const [partyId, partyProfiles] of Object.entries(profiles)) {
      const party = parties[partyId];
      if (!party) continue;

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

  // Function to get candidate name from profileId
  const getCandidateName = (profileId: string) => {
    if (!profileId) return '';

    // Assuming profileId format is 'partyId.candidateId'
    const [partyId, candidateId] = profileId.split('.');

    if (!partyId || !candidateId || !profiles[partyId]?.[candidateId]) {
      return profileId; // Return the ID if we can't find the name
    }

    return profiles[partyId][candidateId].name;
  };

  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Mic className="h-5 w-5 text-primary" />
            Candidate Content
          </h1>
          <p className="text-muted-foreground mt-1">
            Explore podcasts, interviews, and more from your candidates for
            GE2025.
          </p>
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-4 p-3 rounded-md border border-primary/20 bg-primary/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span className="text-sm text-muted-foreground">
            <b>Help us crowdsource!</b> This page relies on community
            submissions. If you know of interviews, podcasts, or other content
            missing for any candidate, please submit it.
          </span>
          <a href="/candidates/submit">
            <Button variant="secondary" className="mt-2 sm:mt-0">
              Submit Content
            </Button>
          </a>
        </div>
      </div>
      <div className="mb-6 flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-[250px]">
          <Combobox
            options={typeOptions}
            value={filters.type}
            onValueChange={(value) =>
              setFilters((f) => ({ ...f, type: value }))
            }
            placeholder="Filter by type"
          />
        </div>
        <div className="w-full md:w-[250px]">
          <Combobox
            options={candidateOptions}
            value={filters.candidate}
            onValueChange={(value) =>
              setFilters((f) => ({ ...f, candidate: value }))
            }
            placeholder="Filter by candidate"
          />
        </div>
      </div>

      {filteredContent.length > 0 ? (
        <>
          {/* Desktop view with table */}
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">Type</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Candidates</TableHead>
                  <TableHead className="w-[200px]">Author</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredContent.map((item) => (
                  <TableRow
                    key={item.id}
                    className="cursor-pointer"
                    onClick={() =>
                      window.open(item.url, '_blank', 'noopener,noreferrer')
                    }
                  >
                    <TableCell>
                      <ContentTypeWithIcon type={item.type} />
                    </TableCell>
                    <TableCell className="font-medium max-w-[300px] truncate">
                      {item.title}
                    </TableCell>
                    <TableCell>
                      <ProfileTags
                        profileIds={item.profile_ids || []}
                        getCandidateName={getCandidateName}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="text-muted-foreground flex items-center gap-1">
                        {item.author}
                        <ExternalLink className="h-3 w-3 ml-1 flex-shrink-0" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile view with cards */}
          <div className="md:hidden space-y-3">
            {filteredContent.map((item) => (
              <Button
                key={item.id}
                variant="outline"
                className="w-full p-0 h-auto border rounded-md hover:bg-muted/20 flex flex-col items-stretch"
                onClick={() =>
                  window.open(item.url, '_blank', 'noopener,noreferrer')
                }
              >
                <div className="flex flex-col gap-2 p-4 text-left">
                  <ContentTypeWithIcon type={item.type} />
                  <div className="font-medium">{item.title}</div>
                  <ProfileTags
                    profileIds={item.profile_ids || []}
                    getCandidateName={getCandidateName}
                  />
                  <div className="text-muted-foreground text-xs flex items-center gap-1 mt-1">
                    By {item.author}
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-8 border rounded-md">
          <p className="text-muted-foreground">
            No content found matching your filters.
          </p>
          <p className="text-muted-foreground mt-1">
            Try changing your filter criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default CandidateContent;
