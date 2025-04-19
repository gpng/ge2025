alter table content
  add column published_date date not null default now();
