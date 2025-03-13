import { z } from 'zod';

export const candidateSchema = z.object({
  partyId: z.string(),
  profiles: z.array(z.string()),
  isConfirmed: z.boolean().default(false),
  announcementUrl: z.string().url().optional(),
  isIncumbent: z.boolean().default(false),
});

export const candidatesSchema = z.record(z.string(), z.array(candidateSchema));

export type Candidate = z.infer<typeof candidateSchema>;
export type Candidates = z.infer<typeof candidatesSchema>;
