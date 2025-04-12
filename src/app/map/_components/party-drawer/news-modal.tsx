import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/app/_components/ui/dialog';
import { Typography } from '@/app/_components/ui/typography';
import { useData } from '@/app/map/_components/contexts/data-context';
import NewsCard from '@/app/news/_components/news-card';
import { useState } from 'react';

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
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-4">
            {filteredNews.map((item) => (
              <NewsCard key={item.url} item={item} compact />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewsModal;
