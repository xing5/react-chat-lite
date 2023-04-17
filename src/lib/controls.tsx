import { CommandData, Message } from "@/types";

export const toggleChat = () => {
  const message: CommandData = { command: "toggle" };
  window.postMessage(message);
}

export const openChat = () => {
  const message: CommandData = { command: "open" };
  window.postMessage(message);
}

export const closeChat = () => {
  const message: CommandData = { command: "close" };
  window.postMessage(message);
}

export const addMessage = (message: Message) => {
  const data: CommandData = { command: "addMessage", data: message };
  window.postMessage(data);
}

export const addResponse= (content: string) => {
  const data: CommandData = { command: "addMessage", data: {
    role: "assistant",
    content
  }};
  window.postMessage(data);
}

export const setTyping = (typing: boolean) => {
  const data: CommandData = { command: "setTyping", data: typing };
  window.postMessage(data);
}