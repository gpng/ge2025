import type { Database } from '@/models/database';
import { createServerClient } from '@supabase/ssr';

export function createClient() {
  return createServerClient<Database>(
    // biome-ignore lint/style/noNonNullAssertion: env vars are set
    process.env.SUPABASE_URL!,
    // biome-ignore lint/style/noNonNullAssertion: env vars are set
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll() {
          return [];
        },
        setAll(cookiesToSet) {},
      },
    },
  );
}
