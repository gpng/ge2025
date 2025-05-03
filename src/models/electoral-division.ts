import { candidateSchema } from '@/models/candidate';
import { z } from 'zod';

const resultSchema = z.object({
  name: z.string(),
  votes: z.number(),
});

const historySchema = z.object({
  year: z.number(),
  name: z.string(),
  electors: z.number(),
  results: z.array(resultSchema),
});

const electoralDivisionSchema = z.object({
  id: z.string(),
  featureId: z.number(),
  name: z.string(),
  electors: z.number(),
  electorsVoted: z.number().optional(),
  candidates: z.array(candidateSchema),
  history: z.array(historySchema).default([]),
  isCalled: z.boolean().default(false),
});

export const electoralDivisionsSchema = z.array(electoralDivisionSchema);

export type ElectoralDivision = z.infer<typeof electoralDivisionSchema>;
export type ElectoralDivisions = z.infer<typeof electoralDivisionsSchema>;
