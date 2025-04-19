'use server';

import { createClient } from '@/lib/supabase/server';
import { cleanUrl } from '@/lib/url';
const supabase = createClient();

export const submitContent = async (profileIds: string[], url: string) => {
  const cleanedUrl = cleanUrl(url);

  // check if this url is already in the database
  const { data: existingContent, error: existingContentError } = await supabase
    .from('content')
    .select('id')
    .eq('url', cleanedUrl)
    .maybeSingle();

  if (existingContentError) {
    console.error('Error checking if content exists: ', existingContentError);
    return 'Error submitting content';
  }

  if (existingContent) {
    // we want users to feel like they're submitting content, so we don't want to
    // show them a message that the content already exists
    console.log('Content already exists');
    return;
  }

  const { error } = await supabase.from('content').insert({
    profile_ids: profileIds,
    url: cleanedUrl,
    author: getAuthorfromUrl(cleanedUrl),
    title: 'unknown',
    type: 'unknown',
  });

  if (error) {
    console.error(error);
    return 'Error submitting content';
  }

  return;
};

const authorByUrl: Record<string, string> = {
  'straitstimes.com': 'The Straits Times',
  'channelnewsasia.com': 'Channel News Asia',
  'mothership.sg': 'Mothership',
};

const getAuthorfromUrl = (url: string) => {
  const urlObj = new URL(url);
  const hostname = urlObj.hostname.replace('www.', '');

  if (hostname in authorByUrl) {
    return authorByUrl[hostname];
  }

  return 'unknown';
};
