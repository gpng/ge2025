import ChatBubble from '@/app/components/qna-widget/chat-bubble';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Textarea } from '@/app/components/ui/textarea';
import { ChatBubbleIcon, Cross1Icon, ThickArrowRightIcon } from '@radix-ui/react-icons';
import { useAssistant, type Message } from 'ai/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const QnaWidget = () => {
  const messagesRef = useRef<Message[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, submitMessage, handleInputChange } = useAssistant({
    api: '/api/qna',
  });
  const [pendingMessage, setPendingMessage] = useState(false);

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    await submitMessage(ev);
    setPendingMessage(true);
  };

  useEffect(() => {
    if (messagesRef.current.length === messages.length) {
      return;
    }

    messagesRef.current = messages;

    if (pendingMessage) {
      setPendingMessage(false);
    }
  }, [messages, pendingMessage]);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-12 right-4 z-40 rounded-full h-16 w-16"
        onClick={() => setIsOpen(true)}
      >
        <ChatBubbleIcon className="h-8 w-8" />
      </Button>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            className="fixed bottom-12 right-4 z-50"
            initial={{ height: 0, width: 0, opacity: 0 }}
            animate={{ height: 600, width: 450, opacity: 1 }}
          >
            <Card className="w-full h-full flex flex-col bg-gray-50">
              <CardHeader className="relative">
                <CardTitle>Manifesto Q&A</CardTitle>
                <CardDescription>Ask anything about any party&apos;s manifesto</CardDescription>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1 right-2 rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Cross1Icon />
                </Button>
              </CardHeader>
              <CardContent className="flex-grow min-h-1 flex flex-col">
                {/* col-reverse to keep div at bottom as messages are streamed */}
                <div className="flex-grow min-h-1 mb-2 overflow-y-auto flex flex-col-reverse gap-2">
                  {pendingMessage && (
                    <ChatBubble
                      message={{
                        id: 'pending',
                        role: 'assistant',
                        content: 'Thinking...',
                      }}
                    />
                  )}
                  {[...messages].reverse().map((m) => (
                    <ChatBubble key={m.id} message={m} />
                  ))}
                  <ChatBubble
                    message={{
                      id: '0',
                      role: 'assistant',
                      content:
                        'Hello! Ask me anything about the manifestos of PAP, WP, NSP, PSP, PPP, SPP.',
                    }}
                  />
                </div>
                <div className="h-16 relative">
                  <form onSubmit={handleSubmit}>
                    <Textarea
                      className="resize-none h-full pr-8 bg-white"
                      placeholder="Type your question here"
                      value={input}
                      onChange={handleInputChange}
                    />
                    <Button
                      type="submit"
                      variant="outline"
                      size="icon"
                      className="absolute top-1/2 right-1 rounded-full transform -translate-y-1/2"
                    >
                      <ThickArrowRightIcon />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default QnaWidget;
