import { z } from 'zod';

const newsSchema = z.object({
  url: z.string().url(),
  isOfficial: z.boolean(),
});

export const candidateSchema = z.object({
  partyId: z.string(),
  profiles: z.array(z.string()),
  isConfirmed: z.boolean().default(false),
  news: z.array(newsSchema).optional(),
  isIncumbent: z.boolean().default(false),
});

const candidatesSchema = z.record(z.string(), z.array(candidateSchema));

export type Candidate = z.infer<typeof candidateSchema>;
export type News = z.infer<typeof newsSchema>;
