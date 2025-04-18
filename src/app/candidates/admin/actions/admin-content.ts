'use server';
import { ADMIN_CONTENT_PAGE_SIZE } from '@/lib/constants';
import { createClient } from '@/lib/supabase/server';
import { cleanUrl } from '@/lib/url';
import { pageRange } from '@/lib/utils';

const supabase = createClient();

export const fetchAdminContent = async (page: number) => {
  const range = pageRange(page, ADMIN_CONTENT_PAGE_SIZE);
  const { data, error } = await supabase
    .from('content')
    .select('*')
    .order('id', { ascending: false })
    // The from and to values are 0-based and inclusive: range(1, 3) will include the second, third and fourth rows of the query.
    .range(range.from, range.to);
  return { data, error };
};

export const saveContent = async (args: {
  id: number;
  isApproved: boolean;
  isRejected: boolean;
  title: string;
  type: string;
  url: string;
  author: string;
  profileIds: string[];
}) => {
  const { error } = await supabase
    .from('content')
    .update({
      is_approved: args.isApproved,
      is_rejected: args.isRejected,
      profile_ids: args.profileIds,
      title: args.title,
      type: args.type,
      url: args.url,
      author: args.author,
      updated_at: new Date().toISOString(),
    })
    .eq('id', args.id);
  if (error) {
    console.error('Error approving content: ', error);
    return error?.message || 'Error approving content';
  }
  return;
};

export const addContent = async (args: {
  title: string;
  type: string;
  url: string;
  author: string;
  profileIds: string[];
}) => {
  const cleanedUrl = cleanUrl(args.url);

  // check if this url is already in the database
  const { data: existingContent, error: existingContentError } = await supabase
    .from('content')
    .select('id')
    .eq('url', cleanedUrl)
    .maybeSingle();

  if (existingContentError) {
    console.error('Error checking if content exists: ', existingContentError);
    return 'Error checking if content exists';
  }

  if (existingContent) {
    return 'URL already exists';
  }

  const { error } = await supabase.from('content').insert({
    title: args.title,
    type: args.type,
    url: cleanedUrl,
    author: args.author,
    profile_ids: args.profileIds,
    is_approved: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });
  if (error) {
    console.error('Error adding content: ', error);
    return error?.message || 'Error adding content';
  }
  return;
};
