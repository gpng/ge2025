import { z } from 'zod';

/**
 * Profile IDs are referenced using the format <PARTY_ID>.<PROFILE_ID>
 * For example: "PAP.LEE_HSIEN_LOONG" refers to a profile with key "LEE_HSIEN_LOONG" under the "PAP" party.
 * This format is used across the application, including in electoral-divisions.json and news.json.
 */
const profileSchema = z.object({
  name: z.string(),
  image: z.string().optional(),
});

export const partyProfileSchema = z.record(
  z.string(),
  z.record(z.string(), profileSchema),
);

export type PartyProfile = z.infer<typeof partyProfileSchema>;
