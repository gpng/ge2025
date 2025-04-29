import { z } from 'zod';

export const candidateSchema = z.object({
  partyId: z.string(),
  profiles: z.array(z.string()),
  isConfirmed: z.boolean().default(false),
  isIncumbent: z.boolean().default(false),
  isWinner: z.boolean().default(false),
  sampleCount: z.number().default(0),
  actualCount: z.number().default(0),
  countPerc: z.number().default(0),
});

const candidatesSchema = z.record(z.string(), z.array(candidateSchema));

export type Candidate = z.infer<typeof candidateSchema>;
