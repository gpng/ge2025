#!/usr/bin/env tsx

import {
  type ElectoralDivisions,
  electoralDivisionsSchema,
} from '@/models/electoral-division';
import { type News, newsSchema } from '@/models/news';
import { type Parties, partiesSchema } from '@/models/party';
import { type PartyProfile, partyProfileSchema } from '@/models/profile';
import { z } from 'zod';

// Import data files directly
import electoralDivisionsData from '@data/electoral-divisions.json';
import newsData from '@data/news.json';
import partiesData from '@data/parties.json';
import profilesData from '@data/profiles.json';

// Validation results
const errors: string[] = [];

// Helper function to validate data against a schema
function validate<T>(
  data: unknown,
  schema: z.ZodType,
  filename: string,
): T | null {
  const result = schema.safeParse(data);

  if (!result.success) {
    const formattedErrors = result.error.errors
      .map((err) => `  - ${err.path.join('.')}: ${err.message}`)
      .join('\n');

    errors.push(`Validation failed for ${filename}:\n${formattedErrors}`);
    return null;
  }

  return result.data as T;
}

// Validate all data files
console.log('Validating data files with Zod schemas...');

const electoralDivisions = validate<ElectoralDivisions>(
  electoralDivisionsData,
  electoralDivisionsSchema,
  'electoral-divisions.json',
);

const parties = validate<Parties>(partiesData, partiesSchema, 'parties.json');

const profiles = validate<PartyProfile>(
  profilesData,
  partyProfileSchema,
  'profiles.json',
);

const newsItems = validate<News[]>(newsData, z.array(newsSchema), 'news.json');

// If any schema validation failed, exit early
if (errors.length > 0) {
  console.error('❌ Schema validation errors:');
  for (const error of errors) {
    console.error(error);
  }
  process.exit(1);
}

console.log('✅ All data files passed schema validation');

// Now validate relationships between models
console.log('\nValidating relationships between models...');

/**
 * Profile IDs are stored in the format of <PARTY_ID>.<PROFILE_ID>
 * This is how they are structured in the profiles.json file
 */

// Check electoral divisions for valid party IDs and profile IDs
if (electoralDivisions && parties && profiles) {
  for (const division of electoralDivisions) {
    for (const candidate of division.candidates) {
      // Check party ID exists
      if (candidate.partyId && !parties[candidate.partyId]) {
        errors.push(
          `Invalid partyId "${candidate.partyId}" in electoral division "${division.id}"`,
        );
      }

      // Check profile IDs exist
      for (const profileId of candidate.profiles) {
        const [partyId, profileKey] = profileId.split('.');

        if (!partyId || !profileKey) {
          errors.push(
            `Invalid profile ID format "${profileId}" in electoral division "${division.id}"`,
          );
          continue;
        }

        if (!profiles[partyId]) {
          errors.push(
            `Invalid party ID "${partyId}" in profile ID "${profileId}" in electoral division "${division.id}"`,
          );
          continue;
        }

        if (!profiles[partyId][profileKey]) {
          errors.push(
            `Profile "${profileKey}" doesn't exist for party "${partyId}" in electoral division "${division.id}"`,
          );
        }
      }
    }
  }
}

// Check news items for valid party IDs, electoral division IDs, and profile IDs
if (newsItems && parties && electoralDivisions && profiles) {
  for (const news of newsItems) {
    // Check party IDs
    for (const partyId of news.partyIds) {
      if (!parties[partyId]) {
        errors.push(
          `Invalid partyId "${partyId}" in news item "${news.title}"`,
        );
      }
    }

    // Check electoral division IDs
    for (const divisionId of news.electoralDivisionIds) {
      const divisionExists = electoralDivisions.some(
        (division) => division.id === divisionId,
      );
      if (!divisionExists) {
        errors.push(
          `Invalid electoralDivisionId "${divisionId}" in news item "${news.title}"`,
        );
      }
    }

    // Check profile IDs
    for (const profileId of news.profileIds) {
      const [partyId, profileKey] = profileId.split('.');

      if (!partyId || !profileKey) {
        errors.push(
          `Invalid profile ID format "${profileId}" in news item "${news.title}"`,
        );
        continue;
      }

      if (!profiles[partyId]) {
        errors.push(
          `Invalid party ID "${partyId}" in profile ID "${profileId}" in news item "${news.title}"`,
        );
        continue;
      }

      if (!profiles[partyId][profileKey]) {
        errors.push(
          `Profile "${profileKey}" doesn't exist for party "${partyId}" in news item "${news.title}"`,
        );
      }
    }
  }
}

// Report any relationship validation errors
if (errors.length > 0) {
  console.error('❌ Relationship validation errors:');
  for (const error of errors) {
    console.error(error);
  }
  process.exit(1);
} else {
  console.log('✅ All data relationships are valid');
  process.exit(0);
}
