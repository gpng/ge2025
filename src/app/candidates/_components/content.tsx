'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';
import Combobox from '@/app/_components/ui/combobox';
import { useData } from '@/app/map/_components/contexts/data-context';
import type { Tables } from '@/models/database';
import { FileText, Mic, User } from 'lucide-react';
import { useMemo, useState } from 'react';

const mockContent = [
  {
    id: 1,
    type: 'Podcast',
    title: 'Vision for the Future',
    author: 'Jane Tan',
    url: 'https://example.com/podcast-vision',
  },
  {
    id: 2,
    type: 'Interview',
    title: 'Meet the Candidate: Alex Lim',
    author: 'Alex Lim',
    url: 'https://example.com/interview-alex',
  },
  {
    id: 3,
    type: 'Speech',
    title: 'Rally Highlights',
    author: 'Priya Singh',
    url: 'https://example.com/speech-rally',
  },
  {
    id: 4,
    type: 'Podcast',
    title: 'Youth Voices',
    author: 'Alex Lim',
    url: 'https://example.com/podcast-youth',
  },
  {
    id: 5,
    type: 'Interview',
    title: 'Women in Politics',
    author: 'Jane Tan',
    url: 'https://example.com/interview-women',
  },
];

const typeOptions = [
  { id: 'all', name: 'All Types' },
  ...Array.from(new Set(mockContent.map((item) => item.type))).map((type) => ({
    id: type,
    name: type,
  })),
];

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

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Mic className="h-6 w-6 text-primary" />
            Candidate Content
          </h1>
          <p className="text-muted-foreground mt-1">
            Explore podcasts, interviews, and more from your candidates for
            GE2025.
          </p>
        </div>
      </div>
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-[300px]">
          <Combobox
            options={typeOptions}
            value={filters.type}
            onValueChange={(value) =>
              setFilters((f) => ({ ...f, type: value }))
            }
            placeholder="Filter by type"
          />
        </div>
        <div className="w-full md:w-[300px]">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-foreground hover:text-foreground"
            >
              <Card className="group flex flex-col rounded-lg border-2 border-primary/10 p-0 hover:shadow-md transition-all overflow-hidden">
                <CardHeader className="p-2 bg-primary/5 flex flex-row items-center gap-2">
                  {item.type === 'Podcast' && (
                    <Mic className="h-5 w-5 text-primary" />
                  )}
                  {item.type === 'Interview' && (
                    <User className="h-5 w-5 text-primary" />
                  )}
                  {item.type === 'Speech' && (
                    <FileText className="h-5 w-5 text-primary" />
                  )}
                  <CardTitle className="text-lg font-bold">
                    {item.type}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="font-medium text-xl mb-2">{item.title}</div>
                  <div className="text-muted-foreground text-sm">
                    By {item.author}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
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
