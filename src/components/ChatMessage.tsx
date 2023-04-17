import { Message } from "@/types";
import { FC } from "react";

interface Props {
  message: Message;
}

export const ChatMessage: FC<Props> = ({ message }) => {
  return (
    <div className={`flex flex-col ${message.role === "assistant" ? "chatlite-host-bubble items-start" : "chatlite-guest-bubble items-end"}`}>
      <div
        className="flex items-center bubble-typing rounded-2xl px-3 py-2 max-w-[67%] whitespace-pre-wrap"
        style={{ overflowWrap: "anywhere" }}
      >
        {message.content}
      </div>
    </div>
  );
};