import { Typography } from '@/app/_components/ui/typography';
import { cn } from '@/lib/utils';
import type { News } from '@/models/news';
import { format } from 'date-fns';

interface Props {
  item: News;
  compact?: boolean;
}

const NewsCard = ({ item, compact = false }: Props) => {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-foreground hover:text-foreground"
    >
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
          <span className="text-xs text-muted-foreground ml-auto">
            {format(new Date(item.date), "d MMM ''yy")}
          </span>
        </div>

        <span className="font-medium hover:text-primary hover:underline truncate">
          {item.title}
        </span>
        <Typography variant="mutedText" className="mt-2 line-clamp-2">
          {item.summary}
        </Typography>
      </div>
    </a>
  );
};

export default NewsCard;
