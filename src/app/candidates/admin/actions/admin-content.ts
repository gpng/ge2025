'use server';

import { ADMIN_CONTENT_PAGE_SIZE } from '@/lib/constants';
import { createClient } from '@/lib/supabase/server';

const supabase = createClient();

export const fetchAdminContent = async (page: number) => {
  const { data, error } = await supabase
    .from('content')
    .select('*')
    .order('id', { ascending: false })
    .range(
      (page - 1) * ADMIN_CONTENT_PAGE_SIZE,
      page * ADMIN_CONTENT_PAGE_SIZE,
    );
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
    return error?.message;
  }
  return;
};
