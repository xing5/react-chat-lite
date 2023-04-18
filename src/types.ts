export interface CommandData {
  command: 'open' | 'toggle' | 'close' | 'addMessage' | 'setTyping';
  data?: any;
}

export interface Message {
  role: Role;
  content: string;
}

export type Role = 'assistant' | 'user';

export interface ButtonTheme {
  size?: 'md' | 'lg';
  bgColor?: string;
  iconColor?: string;
  customIconSrc?: string;
}

export interface ChatProps {
  initialMessages: Message[];
  title?: string;
  disableSendWhileTyping?: boolean;
  onSend: (message: Message) => void;
}

export interface ChatWidgetProps extends ChatProps {
  theme?: BubbleTheme;
  onOpen?: () => void;
  onClose?: () => void;
}

export interface BubbleTheme {
  button?: ButtonTheme;
  bgColor?: string;
}
