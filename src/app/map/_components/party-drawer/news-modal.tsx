import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/app/_components/ui/dialog';
import { Typography } from '@/app/_components/ui/typography';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useData } from '../../_components/contexts/data-context';

interface Props {
  partyId: string;
  electoralDivisionId: string;
}

const NewsButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="text-xs text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
  >
    <svg
      className="w-3 h-3"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <title>News and announcements icon</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
      />
    </svg>
    News
  </button>
);

const NewsModal = ({ partyId, electoralDivisionId }: Props) => {
  const { news, parties, electoralDivisions } = useData();

  const [isOpen, setIsOpen] = useState(false);

  const party = parties[partyId];
  const electoralDivision = electoralDivisions.find(
    (ed) => ed.id === electoralDivisionId,
  );

  const filteredNews = news.filter(
    (item) =>
      item.partyIds.includes(partyId) &&
      item.electoralDivisionIds.includes(electoralDivisionId),
  );

  if (filteredNews.length === 0) return null;

  return (
    <>
      <NewsButton onClick={() => setIsOpen(true)} />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="z-[50]">
          <DialogHeader>
            <DialogTitle>News & Announcements</DialogTitle>
            <Typography variant="mutedText" className="text-sm">
              {party?.name} • {electoralDivision?.name}
            </Typography>
          </DialogHeader>
          <div className="space-y-4">
            {filteredNews.toReversed().map((item) => (
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
                    {item.title}
                  </a>
                  <Typography variant="mutedText" className="text-xs mt-1">
                    {item.isOfficial ? 'Official Announcement' : 'Rumours'}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewsModal;
