import { Badge } from '@/app/_components/ui/badge';
import { ContentType } from '@/models/content';
import { FileText, Mic, Newspaper, Speech, User } from 'lucide-react';

const ContentTypeWithIcon = ({ type }: { type: string }) => {
  const icon = (() => {
    switch (type) {
      case ContentType.Podcast:
        return <Mic className="h-4 w-4" />;
      case ContentType.Interview:
        return <User className="h-4 w-4" />;
      case ContentType.Speech:
        return <Speech className="h-4 w-4" />;
      case ContentType.Blog:
        return <FileText className="h-4 w-4" />;
      case ContentType.Article:
        return <Newspaper className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  })();

  return (
    <Badge
      variant="outline"
      className="font-normal flex items-center gap-1.5 py-1 bg-primary/5 capitalize"
    >
      {icon}
      <span>{type}</span>
    </Badge>
  );
};

export default ContentTypeWithIcon;
