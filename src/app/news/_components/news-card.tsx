import { cn } from '@/lib/utils';
import type { News } from '@/models/news';

interface NewsCardProps {
  item: News;
  compact?: boolean;
}

export function NewsCard({ item, compact = false }: NewsCardProps) {
  return (
    <div className="group flex flex-col rounded-lg border p-4 hover:shadow-md transition-all">
      <div className="flex items-center gap-2 mb-2">
        <div
          className={cn('w-2 h-2 rounded-full flex-shrink-0', {
            'bg-primary': item.isOfficial,
            'bg-yellow-500': !item.isOfficial,
          })}
        />
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-muted">
          {item.isOfficial ? 'Official announcement' : 'Rumour'}
        </span>
      </div>

      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary hover:underline font-medium mb-2"
      >
        {item.title}
      </a>

      <div className="mt-auto flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {item.partyIds.length > 0 ? item.partyIds.join(', ') : 'General'}
        </span>
        <span className="text-xs text-muted-foreground">
          {item.electoralDivisionIds.length > 0
            ? item.electoralDivisionIds.join(', ')
            : 'All'}
        </span>
      </div>
    </div>
  );
}
