import { z } from 'zod';

export const candidatesSchema = z.record(
  z.string(),
  z.array(
    z.object({
      partyId: z.string(),
      profiles: z.array(z.string()),
      isConfirmed: z.boolean().default(false),
      announcementUrl: z.string().url().optional(),
      isIncumbent: z.boolean().default(false),
    }),
  ),
);

export type Candidates = z.infer<typeof candidatesSchema>;
