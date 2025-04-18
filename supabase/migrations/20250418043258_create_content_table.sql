create table if not exists content (
  id bigint primary key generated always as identity,
  profile_ids text[] not null,
  url text not null,
  title text not null,
  type text not null,
  author text not null,
  is_approved boolean not null default false,
  is_rejected boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz default now()
);
