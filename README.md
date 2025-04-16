# Singapore General Elections 2025

# Table of Contents

1. [Contribution Guide](#contribution-guide)
1. [Indidual Profiles](#individual-profiles)
1. [Setup](#setup)
1. [Databse](#database)
1. [Component Library](#component-library)

# Contribution Guide

Create a GitHub issue.

To create a PR and update the data, follow the guide below.

## Updating Data

Refer to the [setup guide](#setup) below to configure your dev environment.

All data are in JSON files. A pre-commit script [validateData.ts](src/scripts/validate-data.ts) validates the json files using zod schemas.

The website fetches the data from the main branch in the GitHub repo, and refreshes the data every 30 minutes, see [fetch-data.ts](src/app/actions/fetch-data.ts). So any updates to the data pushed to main can be seen in production after 30 minutes at most.

### Individual Candidates

1. Add or modify candidate details in [data/profiles.json](data/profiles.json)
1. Profile images should be added to [public/images/profiles](public/images/profiles/).

### Parties

1. Add or modify party details in [data/parties.json](data/parties.json)

### Electoral Divisions

1. Add or modify electoral division details in [data/electoral-divisions.json](data/electoral-divisions.json)

### News

Usual process for updating news

1. Add news article in [data/news.json](data/news.json)
1. If profile doesn't exist, add to [data/profiles.json](data/profiles.json)
2. Update changes to the relevant electoral divisions in [data/electoral-divisions.json](data/electoral-divisions.json)

# Setup

## Pre-requisites

1. [pnpm](https://pnpm.io/)

## Run dev server

```sh
pnpm run dev
```

or if you have access to vercel

```sh
vercel dev
```

# Component Library

Components are generated from [shadcn/ui](https://ui.shadcn.com/).

## Adding components

All components can be found in in the [shadcn/ui components documentation](https://ui.shadcn.com/docs/components/accordion).

Components will be installed using the shadcn/ui cli, which will look like

```sh
pnpm dlx shadcn@latest add accordion
```

The component will be created in the `src/app/_components/ui` folder.
