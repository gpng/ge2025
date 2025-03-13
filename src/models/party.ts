import { z } from 'zod';

export const partySchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string().optional(),
  manifesto: z.string().optional(),
  color: z.string(),
});

export const partiesSchema = z.record(z.string(), partySchema);

export type Party = z.infer<typeof partySchema>;
export type Parties = z.infer<typeof partiesSchema>;
