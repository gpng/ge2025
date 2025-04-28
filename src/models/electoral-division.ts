import { candidateSchema } from '@/models/candidate';
import { z } from 'zod';

// {
//   "year": 2020,
//   "name": "Jurong GRC",
//   "electors": 131058,
//   "results": [
//     { "name": "PAP", "votes": 91846, "votesPerc": 74.61 },
//     { "name": "RDU", "votes": 31260, "votesPerc": 25.39 }
//   ]
// },

const resultSchema = z.object({
  name: z.string(),
  votes: z.number(),
  votesPerc: z.number(),
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
  candidates: z.array(candidateSchema),
  history: z.array(historySchema).default([]),
});

export const electoralDivisionsSchema = z.array(electoralDivisionSchema);

export type ElectoralDivision = z.infer<typeof electoralDivisionSchema>;
export type ElectoralDivisions = z.infer<typeof electoralDivisionsSchema>;
