'use client';

import { Button } from '@/app/_components/ui/button';
import { Checkbox } from '@/app/_components/ui/checkbox';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/app/_components/ui/dialog';
import { Input } from '@/app/_components/ui/input';
import {
  MultiSelect,
  type Option as MultiSelectOption,
} from '@/app/_components/ui/multiselect';
import { Pagination } from '@/app/_components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/_components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/_components/ui/table';
import {
  addContent,
  saveContent,
} from '@/app/candidates/admin/actions/candidate-admin-actions';
import { useData } from '@/app/map/_components/contexts/data-context';
import { ADMIN_CONTENT_PAGE_SIZE } from '@/lib/constants';
import { ContentType } from '@/models/content';
import type { Tables } from '@/models/database';
import { format } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';
import { type ChangeEvent, type FormEvent, useState } from 'react';

type ContentItem = Tables<'content'>;

function formatDate(date: string | null | undefined) {
  if (!date) return '';
  return new Date(date).toLocaleString();
}

function truncate(str: string, n = 40) {
  if (!str) return '';
  return str.length > n ? `${str.slice(0, n)}…` : str;
}

interface Props {
  content: ContentItem[];
  page: number;
}

const CandidateAdminContent = ({ content, page }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { profiles, parties } = useData();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<ContentItem | null>(null); // content item being edited, null means add mode
  const [form, setForm] = useState<{
    title: string;
    type: string;
    url: string;
    author: string;
    profileIds: string[];
    isApproved: boolean;
    published_date: string;
  }>({
    title: '',
    type: '',
    url: '',
    author: '',
    profileIds: [],
    isApproved: false,
    published_date: '',
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Pagination logic
  const hasNext = content.length === ADMIN_CONTENT_PAGE_SIZE;
  const hasPrev = page > 1;

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

  const handleReject = async (item: ContentItem) => {
    await saveContent({
      id: item.id,
      isApproved: false,
      isRejected: true,
      title: item.title,
      type: item.type,
      url: item.url,
      author: item.author,
      profileIds: item.profile_ids || [],
      published_date: item.published_date,
    });
    router.refresh();
  };

  const handleEditClick = (item: ContentItem) => {
    setEditing(item);
    setForm({
      title: item.title || '',
      type: item.type || '',
      url: item.url || '',
      author: item.author || '',
      profileIds: Array.isArray(item.profile_ids) ? item.profile_ids : [],
      isApproved: !!item.is_approved,
      published_date: item.published_date,
    });
    setError(null);
    setDialogOpen(true);
  };

  const handleAddClick = () => {
    setEditing(null);
    setForm({
      title: '',
      type: '',
      url: '',
      author: '',
      profileIds: [],
      isApproved: false,
      published_date: format(new Date(), 'yyyy-MM-dd'),
    });
    setError(null);
    setDialogOpen(true);
  };

  const handleDialogOpenChange = (open: boolean) => {
    setDialogOpen(open);
    if (!open) {
      setError(null);
    }
  };

  const handleDialogSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    let err: string | undefined;
    if (editing) {
      err = await saveContent({
        id: editing.id,
        isApproved: form.isApproved,
        isRejected: false,
        title: form.title,
        type: form.type,
        url: form.url,
        author: form.author,
        profileIds: form.profileIds,
        published_date: form.published_date,
      });
    } else {
      err = await addContent({
        title: form.title,
        type: form.type,
        url: form.url,
        author: form.author,
        profileIds: form.profileIds,
        published_date: form.published_date,
      });
    }
    setSaving(false);
    if (err) {
      setError(err);
      return;
    }
    setDialogOpen(false);
    setEditing(null);
    router.refresh();
  };

  const goToPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(newPage));
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">
          Admin: Candidate Content Submissions
        </h1>
        <Button variant="default" onClick={handleAddClick}>
          Add
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table className="min-w-[1100px] text-xs">
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>URL</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Profile IDs</TableHead>
              <TableHead>Published Date</TableHead>
              <TableHead>Approved</TableHead>
              <TableHead>Rejected</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Updated</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {content.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell title={item.title}>
                  {truncate(item.title, 32)}
                </TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell title={item.url} className="max-w-[180px]">
                  <a
                    href={item.url}
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {truncate(item.url, 32)}
                  </a>
                </TableCell>
                <TableCell title={item.author}>
                  {truncate(item.author, 24)}
                </TableCell>
                <TableCell className="max-w-[120px]">
                  {Array.isArray(item.profile_ids)
                    ? item.profile_ids
                        .map(
                          (pid) =>
                            candidateOptions.find((opt) => opt.value === pid)
                              ?.label || pid,
                        )
                        .join(', ')
                    : ''}
                </TableCell>
                <TableCell>{item.published_date}</TableCell>
                <TableCell>{item.is_approved ? '✔️' : ''}</TableCell>
                <TableCell>{item.is_rejected ? '❌' : ''}</TableCell>
                <TableCell>{formatDate(item.created_at)}</TableCell>
                <TableCell>{formatDate(item.updated_at)}</TableCell>
                <TableCell className="whitespace-nowrap">
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleReject(item)}
                    disabled={item.is_rejected || item.is_approved}
                  >
                    Reject
                  </Button>
                  <Button
                    size="sm"
                    variant="default"
                    className="ml-2"
                    onClick={() => handleEditClick(item)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Pagination className="mt-6">
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
      </Pagination>
      <Dialog open={dialogOpen} onOpenChange={handleDialogOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editing ? 'Edit Content' : 'Add Content'}
            </DialogTitle>
          </DialogHeader>
          {error && (
            <div className="mb-2 p-2 rounded bg-red-100 text-red-700 text-sm">
              {error}
            </div>
          )}
          <form onSubmit={handleDialogSubmit} className="space-y-4">
            <label className="block mb-1 font-medium" htmlFor="admin-title">
              Title
            </label>
            <Input
              id="admin-title"
              placeholder="Title"
              value={form.title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setForm((f) => ({ ...f, title: e.target.value }))
              }
              required
            />
            <label className="block mb-1 font-medium" htmlFor="admin-type">
              Type
            </label>
            <Select
              value={form.type}
              onValueChange={(value) => setForm((f) => ({ ...f, type: value }))}
              required
            >
              <SelectTrigger id="admin-type" className="w-full">
                <SelectValue placeholder="Select type..." />
              </SelectTrigger>
              <SelectContent>
                {Object.values(ContentType).map((type) => (
                  <SelectItem key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* Date field */}
            <label
              className="block mb-1 font-medium"
              htmlFor="admin-published-date"
            >
              Published Date
            </label>
            <Input
              id="admin-published-date"
              type="date"
              value={
                form.published_date
                  ? format(form.published_date, 'yyyy-MM-dd')
                  : ''
              }
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setForm((f) => ({
                  ...f,
                  published_date: e.target.value,
                }))
              }
              required
            />
            <label className="block mb-1 font-medium" htmlFor="admin-url">
              URL
            </label>
            <Input
              id="admin-url"
              placeholder="URL"
              value={form.url}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setForm((f) => ({ ...f, url: e.target.value }))
              }
              required
            />
            <label className="block mb-1 font-medium" htmlFor="admin-author">
              Author
            </label>
            <Input
              id="admin-author"
              placeholder="Author"
              value={form.author}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setForm((f) => ({ ...f, author: e.target.value }))
              }
              required
            />
            <label
              className="block mb-1 font-medium"
              htmlFor="admin-candidates"
            >
              Candidates
            </label>
            <MultiSelect
              options={candidateOptions}
              selected={form.profileIds}
              onChange={(profileIds) => setForm((f) => ({ ...f, profileIds }))}
              placeholder="Select candidates..."
              className=""
            />
            <div className="flex items-center gap-2">
              <Checkbox
                id="admin-approved"
                checked={form.isApproved}
                onCheckedChange={(checked) =>
                  setForm((f) => ({ ...f, isApproved: !!checked }))
                }
              />
              <label
                htmlFor="admin-approved"
                className="text-sm font-medium select-none cursor-pointer"
              >
                Approved
              </label>
            </div>
            <DialogFooter className="sm:justify-start">
              <Button type="submit" disabled={saving}>
                {saving ? 'Saving...' : 'Save'}
              </Button>
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setDialogOpen(false)}
                >
                  Cancel
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CandidateAdminContent;
