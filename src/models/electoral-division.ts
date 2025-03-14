import { candidateSchema } from '@/models/candidate';
import { z } from 'zod';

export const electoralDivisionSchema = z.object({
  id: z.string(),
  featureId: z.number(),
  name: z.string(),
  electors: z.number(),
  candidates: z.array(candidateSchema),
});

export const electoralDivisionsSchema = z.array(electoralDivisionSchema);

export type ElectoralDivision = z.infer<typeof electoralDivisionSchema>;
export type ElectoralDivisions = z.infer<typeof electoralDivisionsSchema>;
