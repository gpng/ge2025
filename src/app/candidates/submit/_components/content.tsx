'use client';

import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import {
  MultiSelect,
  type Option as MultiSelectOption,
} from '@/app/_components/ui/multiselect';
import { submitContent } from '@/app/candidates/submit/actions/submit';
import { useData } from '@/app/map/_components/contexts/data-context';
import { useState } from 'react';

const CandidateSubmitContent = () => {
  const { profiles, parties } = useData();
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
  const [url, setUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Build candidate options for MultiSelect
  const candidateOptions: MultiSelectOption[] = [];
  for (const [partyId, partyProfiles] of Object.entries(profiles)) {
    const party = parties[partyId];
    if (!party) continue;
    for (const [profileId, profile] of Object.entries(partyProfiles)) {
      candidateOptions.push({
        value: `${partyId}.${profileId}`,
        label: `${profile.name} (${party.id})`,
      });
    }
  }
  candidateOptions.sort((a, b) => a.label.localeCompare(b.label));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);
    setError(null);
    const error = await submitContent(selectedCandidates, url);
    setSubmitting(false);
    if (error) {
      setError(error);
      setSuccess(false);
    } else {
      setSuccess(true);
      setError(null);
      setSelectedCandidates([]);
      setUrl('');
    }
  };

  // Clear error on input change
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    if (error) setError(null);
  };
  const handleCandidatesChange = (candidates: string[]) => {
    setSelectedCandidates(candidates);
    if (error) setError(null);
  };

  return (
    <div className="container max-w-lg py-12">
      <h1 className="text-2xl font-bold mb-6">Submit Content for Candidates</h1>
      <div className="mb-8 p-4 rounded-md border border-primary/20 bg-primary/5 text-sm text-muted-foreground">
        <strong className="block mb-1 text-primary">What to submit?</strong>
        <ul className="list-disc pl-5 space-y-1 mb-2">
          <li>
            Please submit content where the candidate{' '}
            <b>
              actually talks about their stances, views, or anything voters
              would want to know
            </b>{' '}
            about them. Avoid general news like "Candidate was spotted at this
            constituency" and similar.
          </li>
          <li>
            This can include <b>interviews, podcasts, videos, blogposts</b>, and
            similar formats.
          </li>
        </ul>
        <span>
          <b>Submissions are very welcome!</b> The goal is to have a good source
          of information for every candidate. As this project is managed
          singlehandedly, I can't possibly collect all the content myself, so I
          rely on crowdsourcing and your help. There will be a manual
          verification process, so please don't spam. Thank you for helping
          voters stay informed!
        </span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-card p-6 rounded-lg border"
      >
        <div>
          <label
            htmlFor="candidate-multiselect"
            className="block mb-2 font-medium"
          >
            Candidates
          </label>
          <MultiSelect
            options={candidateOptions}
            selected={selectedCandidates}
            onChange={handleCandidatesChange}
            placeholder="Select candidates..."
            className=""
          />
        </div>
        <div>
          <label htmlFor="content-url" className="block mb-2 font-medium">
            Content URL
          </label>
          <Input
            id="content-url"
            type="url"
            value={url}
            onChange={handleUrlChange}
            placeholder="https://example.com/content"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={submitting || !url || selectedCandidates.length === 0}
        >
          {submitting ? 'Submitting...' : 'Submit'}
        </Button>
        {success && (
          <div className="text-green-600 text-center font-medium mt-2">
            Content submitted successfully!
          </div>
        )}
        {error && (
          <div className="text-red-600 text-center font-medium mt-2">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default CandidateSubmitContent;
