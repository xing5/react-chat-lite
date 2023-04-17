export interface CommandData {
  command: 'open' | 'toggle' | 'close' | 'addMessage' | 'setTyping';
  data?: any;
}

export interface Message {
  role: Role;
  content: string;
}

export type Role = 'assistant' | 'user';
