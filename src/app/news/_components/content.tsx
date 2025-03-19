'use client';

import { useData } from '@/app/map/_components/contexts/data-context';
import NewsCard from '@/app/news/_components/news-card';
import NewsFilters from '@/app/news/_components/news-filters';
import { Newspaper } from 'lucide-react';
import { useMemo, useState } from 'react';

const NewsContent = () => {
  const { news, parties, electoralDivisions, profiles } = useData();
  const [filters, setFilters] = useState({
    party: 'all',
    constituency: 'all',
    profile: 'all',
  });

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      // Filter by party
      if (filters.party !== 'all' && !item.partyIds.includes(filters.party)) {
        return false;
      }

      // Filter by constituency
      if (
        filters.constituency !== 'all' &&
        !item.electoralDivisionIds.includes(filters.constituency)
      ) {
        return false;
      }

      // Filter by profile
      if (
        filters.profile !== 'all' &&
        !item.profileIds.includes(filters.profile)
      ) {
        return false;
      }

      return true;
    });
  }, [filters, news]);

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Newspaper className="h-6 w-6 text-primary" />
            Latest Election News
          </h1>
          <p className="text-muted-foreground mt-1">
            Stay updated with the latest news and announcements about the
            Singapore General Election 2025
          </p>
        </div>
      </div>

      <div className="mb-8">
        <NewsFilters
          parties={parties}
          constituencies={electoralDivisions}
          profiles={profiles}
          onFilterChange={setFilters}
          currentFilters={filters}
        />
      </div>

      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <NewsCard key={item.url} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No news found matching your filters.
          </p>
          <p className="text-muted-foreground mt-1">
            Try changing your filter criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsContent;
