import { addMessage } from '@/lib/controls';
import { Message } from '@/types';
import { ChangeEvent, FC, KeyboardEvent, useEffect, useRef, useState } from 'react';

interface Props {
  onSend: (message: Message) => void;
  disabled?: boolean;
}

export const ChatInput: FC<Props> = ({ onSend, disabled = false }) => {
  const [content, setContent] = useState<string>();

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length > 4000) {
      alert('Message limit is 4000 characters');
      return;
    }

    setContent(value);
  };

  const handleSend = () => {
    if (!content) {
      return;
    }
    const message: Message = { role: 'user', content };
    addMessage(message);
    onSend(message);
    setContent('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (textareaRef?.current) {
      textareaRef.current.style.height = 'inherit';
      textareaRef.current.style.height = `${textareaRef.current?.scrollHeight}px`;
    }
  }, [content]);

  return (
    <div className="relative">
      <textarea
        ref={textareaRef}
        className="min-h-[44px] pl-4 pr-12 py-2 w-full focus:outline-none focus:ring-1 focus:ring-neutral-300 border-2 border-neutral-200 chatlite-input"
        style={{ resize: 'none' }}
        placeholder="Type a message..."
        value={content}
        rows={1}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <button
        className="chatlite-button absolute right-2 bottom-3 h-8 w-12 hover:cursor-pointer rounded-md p-1 hover:opacity-80 text-sm align-middle text-center"
        onClick={() => handleSend()}
        disabled={disabled}
      >
        <span>Send</span>
      </button>
    </div>
  );
};
