import { Chat } from '@/components/Chat';
import * as ChatController from '@/lib/controls';
import { Message } from '@/types';

export const Default = () => {
  const handleSendMessage = (message: Message) => {
    ChatController.setTyping(true);
    setTimeout(() => {
      ChatController.setTyping(false);
      ChatController.addResponse(
        `I am an assistant, I received your message [${message.content}]. I will answer you in a few seconds`,
      );
    }, 3000);
  };

  return (
    <div className="container mx-auto bg-white p-4">
      <div className="mx-auto w-1/2">
        <Chat
          onSend={handleSendMessage}
          initialMessages={[
            {
              role: 'assistant',
              content: 'Hello, how can I help you?',
            },
          ]}
        />
      </div>
    </div>
  );
};
