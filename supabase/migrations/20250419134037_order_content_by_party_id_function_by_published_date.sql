create or replace function content_by_party_id(party text, page integer, page_size integer)
returns setof content as $$
select *
from content
where is_approved = true and exists (
  select 1
  from unnest(profile_ids) as pid
  where split_part(pid, '.', 1) = party
)
order by published_date desc, id desc
limit page_size offset (page - 1) * page_size;
$$ language sql stable;
