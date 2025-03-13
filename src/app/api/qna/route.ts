import { OPENAI_API_KEY, OPENAI_ASSISTANT_ID } from '@/lib/env';
import { AssistantResponse } from 'ai';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export async function POST(req: Request) {
  // Parse the request body
  const input: {
    threadId: string | null;
    message: string;
  } = await req.json();

  // Create a thread if needed
  const threadId = input.threadId ?? (await openai.beta.threads.create({})).id;

  // Add a message to the thread
  const createdMessage = await openai.beta.threads.messages.create(threadId, {
    role: 'user',
    content: input.message,
  });

  return AssistantResponse(
    { threadId, messageId: createdMessage.id },
    async ({ forwardStream }) => {
      // Run the assistant on the thread
      const runStream = openai.beta.threads.runs.stream(threadId, {
        assistant_id: OPENAI_ASSISTANT_ID || '',
      });

      // forward run status would stream message deltas
      await forwardStream(runStream);
    },
  );
}
