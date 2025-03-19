import { z } from 'zod';

export const candidateSchema = z.object({
  partyId: z.string(),
  profiles: z.array(z.string()),
  isConfirmed: z.boolean().default(false),
  isIncumbent: z.boolean().default(false),
});

const candidatesSchema = z.record(z.string(), z.array(candidateSchema));

export type Candidate = z.infer<typeof candidateSchema>;
