'use client';

import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import {
  MultiSelect,
  type Option as MultiSelectOption,
} from '@/app/_components/ui/multiselect';
import { useData } from '@/app/map/_components/contexts/data-context';
import { useState } from 'react';

function mockSubmit({
  candidates,
  url,
}: { candidates: string[]; url: string }) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ success: true }), 1000),
  );
}

const CandidateSubmitContent = () => {
  const { profiles, parties } = useData();
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
  const [url, setUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

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
    await mockSubmit({ candidates: selectedCandidates, url });
    setSubmitting(false);
    setSuccess(true);
    setSelectedCandidates([]);
    setUrl('');
  };

  return (
    <div className="container max-w-lg py-12">
      <h1 className="text-2xl font-bold mb-6">Submit Content for Candidates</h1>
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
            onChange={setSelectedCandidates}
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
            onChange={(e) => setUrl(e.target.value)}
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
      </form>
    </div>
  );
};

export default CandidateSubmitContent;
