import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/app/_components/ui/dialog';
import { Typography } from '@/app/_components/ui/typography';
import { cn } from '@/lib/utils';
import type { News } from '@/models/candidate';

interface Props {
  news: News[];
  isOpen: boolean;
  onClose: () => void;
  partyName: string;
  electoralDivisionName: string;
}

const NewsModal = ({
  news,
  isOpen,
  onClose,
  partyName,
  electoralDivisionName,
}: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="z-[50]">
        <DialogHeader>
          <DialogTitle>News & Announcements</DialogTitle>
          <Typography variant="mutedText" className="text-sm">
            {partyName} • {electoralDivisionName}
          </Typography>
        </DialogHeader>
        <div className="space-y-4">
          {news.map((item) => (
            <div
              key={item.url}
              className="flex items-start gap-3 p-3 rounded-lg border hover:bg-gray-50"
            >
              <div
                className={cn('mt-1 w-2 h-2 rounded-full flex-shrink-0', {
                  'bg-green-500': item.isOfficial,
                  'bg-yellow-500': !item.isOfficial,
                })}
              />
              <div className="min-w-0">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline block break-all"
                >
                  {item.url}
                </a>
                <Typography variant="mutedText" className="text-xs mt-1">
                  {item.isOfficial ? 'Official Announcement' : 'News Article'}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsModal;
