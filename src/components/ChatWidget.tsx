import { useEffect, useState } from 'react';
import { BubbleButton } from './BubbleButton';
import { Chat } from './Chat';
import { ChatWidgetProps, CommandData } from '@/types';
import { createRoot } from 'react-dom/client';

const ChatBubble = (props: ChatWidgetProps) => {
  const [isChatOpened, setChatOpened] = useState(false);

  useEffect(() => {
    window.addEventListener('message', processIncomingEvent);
    return () => {
      window.removeEventListener('message', processIncomingEvent);
    };
  });

  const processIncomingEvent = (event: MessageEvent<CommandData>) => {
    const { data } = event;
    if (data.command === 'open') openChat();
    if (data.command === 'close') closeChat();
    if (data.command === 'toggle') toggleChat();
  };

  const openChat = () => {
    if (!isChatOpened) {
      setChatOpened(true);
      props.onOpen?.();
    }
  };

  const closeChat = () => {
    if (isChatOpened) {
      setChatOpened(false);
      props.onClose?.();
    }
  };

  const toggleChat = () => {
    isChatOpened ? closeChat() : openChat();
  };

  return (
    <>
      <BubbleButton {...props.theme?.button} toggleChat={toggleChat} isChatOpened={isChatOpened} />
      <div
        style={{
          height: 'calc(100% - 80px)',
          transition: 'transform 200ms cubic-bezier(0, 1.2, 1, 1), opacity 150ms ease-out',
          transformOrigin: 'bottom right',
          transform: isChatOpened ? 'scale3d(1, 1, 1)' : 'scale3d(0, 0, 1)',
          boxShadow: 'rgb(0 0 0 / 16%) 0px 5px 40px',
          backgroundColor: props.theme?.bgColor,
          zIndex: 42424242,
        }}
        className={
          'chat-widget fixed sm:right-5 rounded-lg w-full sm:w-[400px] max-h-[704px]' +
          (isChatOpened ? ' opacity-1' : ' opacity-0 pointer-events-none') +
          (props.theme?.button?.size === 'lg' ? ' bottom-24' : ' bottom-20')
        }
      >
        <Chat {...props} />
      </div>
    </>
  );
};

export const ChatWidget = (props: ChatWidgetProps) => {
  useEffect(() => {
    const chatBubbleContainer = document.createElement('div');
    document.body.appendChild(chatBubbleContainer);
    createRoot(chatBubbleContainer).render(<ChatBubble {...props} />);
    return () => {
      document.body.removeChild(chatBubbleContainer);
    };
  }, []);

  return null;
};
