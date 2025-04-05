'use client';

import { useQnaWidget } from '@/app/_components/contexts/qna-widget-context';
import { Button } from '@/app/_components/ui/button';
import { useData } from '@/app/map/_components/contexts/data-context';
import { ChatBubbleIcon, ExternalLinkIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

// Interface matching the data structure provided by the context
interface Party {
  id: string;
  name: string;
  logo?: string;
  manifesto?: string;
  color: string;
}

const Content = () => {
  const { parties } = useData();
  const { setIsOpen } = useQnaWidget();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium mb-4">Party Manifestos</h1>

      <div className="mb-8">
        <Button onClick={() => setIsOpen(true)} className="w-full sm:w-auto">
          <ChatBubbleIcon className="mr-2 h-4 w-4" />
          Ask AI about Manifestos
        </Button>
      </div>

      <div className="space-y-6">
        {Object.values(parties as { [key: string]: Party }).map((party) => (
          <div
            key={party.id}
            className="flex items-center justify-between py-3 border-b border-gray-100"
          >
            <div className="flex items-center gap-3">
              {party.logo && (
                <img
                  src={`/images/logos/${party.logo}`}
                  alt={`${party.name} logo`}
                  className="h-6 w-6 object-contain"
                />
              )}
              <span className="font-medium">{party.name}</span>
            </div>

            {party.manifesto ? (
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href={party.manifesto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <span>View</span>
                  <ExternalLinkIcon className="h-3 w-3" />
                </Link>
              </Button>
            ) : (
              <span className="text-sm text-gray-400">Coming soon</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
