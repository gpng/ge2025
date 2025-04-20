'use client';

import { useQnaWidget } from '@/app/_components/contexts/qna-widget-context';
import { Button } from '@/app/_components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';
import { Textarea } from '@/app/_components/ui/textarea';
import ChatBubble from '@/app/map/_components/qna-widget/chat-bubble';
import { cn } from '@/lib/utils';
import { type Message, useAssistant } from '@ai-sdk/react';
import {
  ChatBubbleIcon,
  Cross1Icon,
  ThickArrowRightIcon,
} from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './qna-widget.module.css';

const QnaWidget = () => {
  const messagesRef = useRef<Message[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const { isOpen, setIsOpen } = useQnaWidget();

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

  if (!isOpen) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-12 right-4 z-40 rounded-full h-16 w-16"
        onClick={() => setIsOpen(true)}
      >
        <ChatBubbleIcon className="h-8 w-8" />
      </Button>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={cn(
            styles.qnaWidget,
            'fixed bottom-0 sm:bottom-12 right-0 sm:right-4 z-50',
          )}
          initial={{ height: 0, width: 0, opacity: 0 }}
          animate={{
            height: 'var(--widget-height)',
            width: 'var(--widget-width)',
            opacity: 1,
          }}
        >
          <Card className="w-full h-full flex flex-col bg-gray-50">
            <CardHeader className="relative">
              <CardTitle>Manifesto Q&A</CardTitle>
              <CardDescription>
                Ask anything about any party&apos;s manifesto
              </CardDescription>
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
                    content: `Hello! You can ask me about party manifestos.

Currently, I only have manifestos for the following parties:
 - **People's Action Party (PAP)**
 - **Workers Party (WP)**
 - **People's Power Party (PPP)**
 - **Progress Singapore Party (PSP)**
 - **People's Alliance for Reform (PAR)**
 - **Singapore People's Party (SPP)**
 - **Red Dot United (RDU)**
 
 Other parties' manifestos will be added as they become available.
 
 ***Please*** *don't abuse this chat, this site is a hobby project and I'm paying for the LLM credits out of my own pocket.*

*LLMs can be inaccurate, so please verify any information I give you with the original manifesto documents.*
 `,
                  }}
                />
              </div>
              <div className="h-16 relative">
                <form onSubmit={handleSubmit} ref={formRef}>
                  <Textarea
                    className="resize-none h-full pr-8 bg-white"
                    placeholder="Type your question here"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={(ev) => {
                      if (ev.key === 'Enter' && !ev.shiftKey) {
                        ev.preventDefault();
                        formRef.current?.dispatchEvent(
                          new Event('submit', {
                            bubbles: true,
                            cancelable: true,
                          }),
                        );
                      }
                    }}
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
      )}
    </AnimatePresence>
  );
};

export default QnaWidget;
