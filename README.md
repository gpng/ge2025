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
All data are in TypeScript files to ensure typing and shape.

### Individual Candidates

1. Add or modify candidate details in [src/data/profiles.ts](src/data/profiles.ts)
1. Profile images should be added to [public/images/profiles](public/images/profiles/).

### Parties

1. Add or modify party details in [src/data/parties.ts](src/data/parties.ts)

### Electoral Divisions

1. Add or modify electoral division details in [src/data/electoral-divisions.ts](src/data/electoral-division.ts)

# Setup

## Pre-requisites

1. [Docker Compose](https://docs.docker.com/compose/)
1. [pnpm](https://pnpm.io/)

## Run databse

```sh
docker-compose up -d
```

## Run dev server

```sh
pnpm run dev
```

# Component Library

Components are generated from [shadcn/ui](https://ui.shadcn.com/).

## Adding components

All components can be found in in the [shadcn/ui components documentation](https://ui.shadcn.com/docs/components/accordion).

Components will be installed using the shadcn/ui cli, which will look like

```sh
pnpm dlx shadcn-ui@latest add accordion
```

The component will be created in the `src/app/(main)/components/ui` folder.
