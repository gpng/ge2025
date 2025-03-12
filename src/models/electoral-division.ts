import { z } from 'zod';

export const electoralDivision = z.object({
  id: z.string(),
  featureId: z.number(),
  name: z.string(),
  electors: z.number(),
});

export const electoralDivisions = z.array(electoralDivision);

export type ElectoralDivision = z.infer<typeof electoralDivision>;
export type ElectoralDivisions = z.infer<typeof electoralDivisions>;
