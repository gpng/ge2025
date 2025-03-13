import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string(),
  image: z.string().optional(),
});

export const partyProfileSchema = z.record(
  z.string(),
  z.record(z.string(), profileSchema),
);

export type Profile = z.infer<typeof profileSchema>;
export type PartyProfile = z.infer<typeof partyProfileSchema>;
