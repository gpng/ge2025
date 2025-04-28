'use server';
import { CANDIDATE_CONTENT_PAGE_SIZE } from '@/lib/constants';
import { createClient } from '@/lib/supabase/server';
import { pageRange } from '@/lib/utils';
import { unstable_cache } from 'next/cache';

const supabase = createClient();

const CACHE_TTL = 1800; // 30 minutes

const fetchContentWithCache = async (candidateId?: string, page = 1) => {
  return unstable_cache(
    async () => {
      const range = pageRange(page, CANDIDATE_CONTENT_PAGE_SIZE);
      let query = supabase
        .from('content')
        .select()
        .eq('is_approved', true)
        .order('published_date', { ascending: false })
        .order('id', { ascending: false })
        .range(range.from, range.to);

      if (candidateId) {
        query = query.contains('profile_ids', [candidateId]);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Failed to fetch content:', error);
        return [];
      }

      return data;
    },
    ['content', candidateId || 'all', page.toString()],
    { revalidate: CACHE_TTL },
  )();
};

const fetchContentByCandidatesWithCache = async (
  candidateIds: string[],
  page = 1,
) => {
  const sortedCandidateIds = candidateIds.sort();
  const keys = ['content', page.toString()];

  if (sortedCandidateIds.length > 0) {
    keys.push(...sortedCandidateIds);
  }

  return unstable_cache(
    async () => {
      const range = pageRange(page, CANDIDATE_CONTENT_PAGE_SIZE);
      let query = supabase
        .from('content')
        .select()
        .eq('is_approved', true)
        .order('published_date', { ascending: false })
        .order('id', { ascending: false })
        .range(range.from, range.to);

      if (sortedCandidateIds.length > 0) {
        query = query.overlaps('profile_ids', sortedCandidateIds);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Failed to fetch content:', error);
        return [];
      }

      return data;
    },
    keys,
    { revalidate: CACHE_TTL },
  )();
};

const fetchContentByPartyIdWithCache = async (partyId: string, page = 1) => {
  return unstable_cache(
    async () => {
      const { data, error } = await supabase.rpc('content_by_party_id', {
        party: partyId,
        page: page,
        page_size: CANDIDATE_CONTENT_PAGE_SIZE,
      });

      if (error) {
        console.error('Failed to fetch content:', error);
        return [];
      }

      return data;
    },
    ['content', partyId, page.toString()],
    { revalidate: CACHE_TTL },
  )();
};

export const fetchContent = async (candidateId?: string, page = 1) => {
  return fetchContentWithCache(candidateId, page);
};

export const fetchContentByPartyId = async (partyId: string, page = 1) => {
  return fetchContentByPartyIdWithCache(partyId, page);
};

export const fetchContentByCandidates = async (
  candidateIds: string[],
  page = 1,
) => {
  return fetchContentByCandidatesWithCache(candidateIds, page);
};
