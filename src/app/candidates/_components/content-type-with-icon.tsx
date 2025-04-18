import { Badge } from '@/app/_components/ui/badge';
import { FileText, Mic, User } from 'lucide-react';

const ContentTypeWithIcon = ({ type }: { type: string }) => {
  const icon = (() => {
    switch (type) {
      case 'Podcast':
        return <Mic className="h-4 w-4" />;
      case 'Interview':
        return <User className="h-4 w-4" />;
      case 'Speech':
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  })();

  return (
    <Badge
      variant="outline"
      className="font-normal flex items-center gap-1.5 py-1 bg-primary/5"
    >
      {icon}
      <span>{type}</span>
    </Badge>
  );
};

export default ContentTypeWithIcon;
