import { CommandData, Message } from '@/types';
import { FC, useEffect, useRef, useState } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { ChatLoader } from './ChatLoader';
import '@/styles/main.css';

export interface ChatProps {
  initialMessages: Message[];
  title?: string;
  disableSendWhileTyping?: boolean;
  onSend: (message: Message) => void;
}

export const Chat: FC<ChatProps> = ({ initialMessages, onSend, disableSendWhileTyping = true, title }) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [typing, setTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('message', processIncomingEvent);
    return () => {
      window.removeEventListener('message', processIncomingEvent);
    };
  });

  const processIncomingEvent = (event: MessageEvent<CommandData>) => {
    const { command, data } = event.data;
    if (command === 'addMessage') {
      setMessages((prevMessages) => [...prevMessages, data as Message]);
    } else if (command === 'setTyping') {
      setTyping(data as boolean);
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chatlite-container flex flex-col rounded-lg sm:border border-neutral-300 h-full">
      {title && <div className="absolute chatlite-header rounded-t-lg w-full flex items-center justify-center h-8"><p>{title}</p></div>}
      <div className="px-2 sm:p-4 flex flex-col h-full justify-between flex-grow">
        <div className="mt-10 sm:mt-6 flex flex-col overflow-y-auto scrollable-container">
          {messages.map((message, index) => (
            <div key={index} className="my-1 sm:my-1.5">
              <ChatMessage message={message} />
            </div>
          ))}

          {typing && (
            <div className="my-1 sm:my-1.5">
              <ChatLoader />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="mt-2 sm:mt-4 bottom-[56px] left-0 w-full">
          <ChatInput onSend={onSend} disabled={disableSendWhileTyping ? typing : false} />
        </div>
      </div>
    </div>
  );
};
