'use server';

import type { DataContextType } from '@/app/map/_components/contexts/data-context';
import { createClient } from '@/lib/supabase/server';
import { electoralDivisionsSchema } from '@/models/electoral-division';
import { newsSchema } from '@/models/news';
import { partiesSchema } from '@/models/party';
import { partyProfileSchema } from '@/models/profile';
import { unstable_cache } from 'next/cache';

const supabase = createClient();

const CACHE_TTL = 1800; // 30 minutes
const BASE_URL =
  'https://raw.githubusercontent.com/gpng/ge2025/refs/heads/main/data';

const fetchDataWithCache = unstable_cache(
  async (): Promise<DataContextType> => {
    try {
      const [parties, news, ed, profiles, boundaries] = await Promise.all([
        fetch(`${BASE_URL}/parties.json`).then((r) => r.json()),
        fetch(`${BASE_URL}/news.json`).then((r) => r.json()),
        fetch(`${BASE_URL}/electoral-divisions.json`).then((r) => r.json()),
        fetch(`${BASE_URL}/profiles.json`).then((r) => r.json()),
        fetch(`${BASE_URL}/boundaries.json`).then((r) => r.json()),
      ]);

      // Validate and return empty arrays/objects if invalid
      return {
        parties: partiesSchema.safeParse(parties).success
          ? partiesSchema.parse(parties)
          : {},
        news: newsSchema.array().safeParse(news).success
          ? newsSchema
              .array()
              .parse(news)
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime(),
              )
          : [],
        electoralDivisions: electoralDivisionsSchema.safeParse(ed).success
          ? electoralDivisionsSchema.parse(ed)
          : [],
        profiles: partyProfileSchema.safeParse(profiles).success
          ? partyProfileSchema.parse(profiles)
          : {},
        boundaries,
      };
    } catch (e) {
      console.error('Failed to fetch data:', e);
      // Return empty data on error
      return {
        parties: {},
        news: [],
        electoralDivisions: [],
        profiles: {},
        boundaries: { type: 'FeatureCollection', features: [] },
      };
    }
  },
  ['electoral-data'],
  { revalidate: CACHE_TTL },
);

function fetchContentWithCache(candidateId?: string) {
  return unstable_cache(
    async () => {
      let query = supabase
        .from('content')
        .select()
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

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
    ['content', candidateId || 'all'],
    { revalidate: CACHE_TTL },
  )();
}

function fetchContentByPartyIdWithCache(partyId: string) {
  return unstable_cache(
    async () => {
      const { data, error } = await supabase.rpc('content_by_party_id', {
        party: partyId,
      });

      if (error) {
        console.error('Failed to fetch content:', error);
        return [];
      }

      return data;
    },
    ['content', partyId],
    { revalidate: CACHE_TTL },
  )();
}

export async function fetchData() {
  return fetchDataWithCache();
}

export async function fetchContent(candidateId?: string) {
  return fetchContentWithCache(candidateId);
}

export async function fetchContentByPartyId(partyId: string) {
  return fetchContentByPartyIdWithCache(partyId);
}
