import { ChatWidget } from '@/components/ChatWidget';
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
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <button onClick={ChatController.toggleChat}>Toggle chat window</button>
      </div>
      <ChatWidget
        title="Chat with Assistant Bot"
        theme={{
          button: {
            bgColor: '#FF7537',
            iconColor: 'white',
          },
          bgColor: 'white',
        }}
        onSend={handleSendMessage}
        initialMessages={[
          {
            role: 'assistant',
            content: 'Hello, how can I help you?',
          },
        ]}
      />
    </div>
  );
};
