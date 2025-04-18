'use server';

import { createClient } from '@/lib/supabase/server';

const supabase = createClient();

export const fetchAdminContent = async () => {
  const { data, error } = await supabase
    .from('content')
    .select('*')
    .order('created_at', { ascending: false });
  return { data, error };
};
