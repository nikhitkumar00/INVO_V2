"use client";

import { useChat } from "ai/react";
import Header from "../_components/Header";
import { Input } from "@/components/Input";
import { ChatIcon, Profile } from "@/svg/Icons";
import ReactMarkdown from "react-markdown";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex h-full w-full flex-col">
      <Header title="Chat" logout />
      <div className="flex-grow overflow-auto p-4">
        {messages.length > 0 ? (
          messages.map((message) => (
            <div
              key={message.id}
              className={
                `flex w-full items-center gap-4 font-medium ` +
                (message.role === "user" ? "justify-end" : "justify-start")
              }
            >
              {message.role !== "user" && (
                <Profile className="size-6 stroke-2" />
              )}
              <div
                key={message.id}
                className="max-w-xl rounded-lg border border-tertiary px-4 py-2"
              >
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </div>
              {message.role === "user" && (
                <Profile className="size-6 stroke-2" />
              )}
            </div>
          ))
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3 rounded-md border border-tertiary px-10 py-5">
              <ChatIcon className="size-10 stroke-2" />
              Chat with the local LLM
              <div className="text-xs text-secondary">
                100% private and secure
              </div>
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="w-full p-4">
        <Input
          className="w-full rounded-md p-4"
          autoFocus
          value={input}
          placeholder="Ask anything..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
