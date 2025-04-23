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
import { CANDIDATE_CONTENT_PAGE_SIZE } from '@/lib/constants';
import type { Tables } from '@/models/database';
import { format } from 'date-fns';
import { ExternalLink, LoaderCircle, Mic } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';

interface Props {
  content: Tables<'content'>[];
  selectedCandidate?: string;
  selectedParty?: string;
  selectedConstituency?: string;
  page?: number;
}

const CandidatesContent = ({
  content,
  selectedCandidate = 'all',
  selectedParty = 'all',
  selectedConstituency = 'all',
  page = 1,
}: Props) => {
  const { profiles, parties, electoralDivisions } = useData();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [type, setType] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const filteredContent = useMemo(() => {
    return content.filter((item) => {
      if (type !== 'all' && item.type !== type) return false;
      return true;
    });
  }, [type, content]);

  // const typeOptions = useMemo(
  //   () => [
  //     { id: 'all', name: 'All Types' },
  //     ...Object.values(ContentType).map((type) => ({
  //       id: type,
  //       name: type.charAt(0).toUpperCase() + type.slice(1),
  //     })),
  //   ],
  //   [],
  // );

  const constituencyOptions = useMemo(() => {
    return [
      { id: 'all', name: 'All Constituencies' },
      ...electoralDivisions
        .map((ed) => ({ id: ed.id, name: ed.name }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    ];
  }, [electoralDivisions]);

  const partyOptions = useMemo(() => {
    const options = Object.values(parties).map((party) => ({
      id: party.id,
      name: `${party.name} (${party.id})`,
    }));
    options.sort((a, b) => a.name.localeCompare(b.name));
    return [{ id: 'all', name: 'All Parties' }, ...options];
  }, [parties]);

  const candidateOptions = useMemo(() => {
    const allProfiles: { id: string; name: string }[] = [];
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
    const sortedProfiles = allProfiles.sort((a, b) =>
      a.name.localeCompare(b.name),
    );
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

  const handleNavigate = (path: string) => {
    setIsLoading(true);
    router.push(path);
  };

  // Pagination logic
  const hasNext = content.length === CANDIDATE_CONTENT_PAGE_SIZE;
  const hasPrev = page > 1;

  const goToPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(newPage));
    router.push(`?${params.toString()}`);
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
        {/* <div className="w-full md:w-[250px]">
          <Combobox
            options={typeOptions}
            value={type}
            onValueChange={setType}
            placeholder="Filter by type"
          />
        </div> */}
        <div className="w-full md:w-[250px]">
          <Combobox
            options={constituencyOptions}
            value={selectedConstituency}
            onValueChange={(value) => {
              if (value === 'all') {
                handleNavigate('/candidates');
              } else {
                handleNavigate(
                  `/candidates/constituency/${value.toLowerCase()}`,
                );
              }
            }}
            placeholder="Filter by constituency"
          />
        </div>
        <div className="w-full md:w-[250px]">
          <Combobox
            options={partyOptions}
            value={selectedParty}
            onValueChange={(value) => {
              if (value === 'all') {
                handleNavigate('/candidates');
              } else {
                handleNavigate(`/candidates/${value.toLowerCase()}`);
              }
            }}
            placeholder="Filter by party"
          />
        </div>
        <div className="w-full md:w-[250px]">
          <Combobox
            options={candidateOptions}
            value={selectedCandidate}
            onValueChange={(value) => {
              if (value === 'all') {
                handleNavigate('/candidates');
              } else {
                // value is like WP.HARPREET_SINGH
                const [party, candidate] = value.split('.');
                if (party && candidate) {
                  handleNavigate(
                    `/candidates/${party.toLowerCase()}/${candidate.toLowerCase()}`,
                  );
                }
              }
            }}
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
                  <TableHead>Author</TableHead>
                  <TableHead className="w-[200px]">Published Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading && (
                  <TableRow>
                    <TableCell colSpan={5} className="flex items-center">
                      <LoaderCircle className="animate-spin mr-2" /> Loading...
                    </TableCell>
                  </TableRow>
                )}
                {!isLoading &&
                  filteredContent.map((item) => (
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
                      {/* 02 Jan '25 */}
                      <TableCell>
                        {format(item.published_date, "dd MMM ''yy")}
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
                  <div className="font-medium text-wrap">{item.title}</div>
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

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <Button
              size="sm"
              variant="outline"
              onClick={() => goToPage(page - 1)}
              disabled={!hasPrev}
            >
              Previous
            </Button>
            <span className="px-4 py-2 text-xs">Page {page}</span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => goToPage(page + 1)}
              disabled={!hasNext}
            >
              Next
            </Button>
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

export default CandidatesContent;
