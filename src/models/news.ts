import { z } from 'zod';

export const newsSchema = z.object({
  url: z.string().url(),
  title: z.string(),
  isOfficial: z.boolean(),
  partyIds: z.array(z.string()).default([]),
  electoralDivisionIds: z.array(z.string()).default([]),
  profileIds: z.array(z.string()).default([]),
  date: z.string().date(),
  summary: z.string(),
});

export type News = z.infer<typeof newsSchema>;
