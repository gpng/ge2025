# Singapore General Elections 2025

# Table of Contents

1. [Setup](#setup)
1. [Databse](#database)
1. [Component Library](#component-library)

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
