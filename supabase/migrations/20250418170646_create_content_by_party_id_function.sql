create or replace function content_by_party_id(party text)
returns setof content as $$
select *
from content
where is_approved = true and exists (
  select 1
  from unnest(profile_ids) as pid
  where split_part(pid, '.', 1) = party
);
$$ language sql stable;
