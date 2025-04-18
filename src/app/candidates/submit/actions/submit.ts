'use server';

import { createClient } from '@/lib/supabase/server';

const supabase = createClient();

export const submitContent = async (profileIds: string[], url: string) => {
  const { error } = await supabase.from('content').insert({
    profile_ids: profileIds,
    url,
    author: 'unknown',
    title: 'unknown',
    type: 'unknown',
  });

  if (error) {
    console.error(error);
    return 'Error submitting content';
  }

  return;
};
