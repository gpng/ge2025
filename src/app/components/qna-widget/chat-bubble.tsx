import { Typography } from '@/app/components/ui/typography';
import { type Message } from 'ai/react';
import { useMemo } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  message: Message;
}

// regex for '【\d+†source】'

const regex = /【\d+:?\d+†source】/g;

const ChatBubble = ({ message }: Props) => {
  const content = useMemo(() => {
    let text = message.content;
    if (message.role === 'data') {
      text = JSON.stringify(message.data, null, 2);
    }

    // replace all sources with empty string as unable to get the
    // assistant to stop adding in the sources
    // e.g. '【1:1†source】' -> ''
    return text.replace(regex, '');
  }, [message]);

  return (
    <div className="border bg-gray-200 rounded-lg py-1 px-2 text-sm">
      <Typography variant="mutedText" className="capitalize mb-1 text-xs">
        {message.role === 'user' ? 'you' : message.role}
      </Typography>
      <div className="space-y-2">
        <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
      </div>
    </div>
  );
};

export default ChatBubble;
