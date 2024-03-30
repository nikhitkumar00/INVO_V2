"use client";

import { useChat } from "ai/react";
import Header from "../_components/Header";
import { Input } from "@/components/Input";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex h-full w-full flex-col">
      <Header title="Chat" logout />
      <div className="flex-grow overflow-auto p-4">
        {messages.map((message) => (
          <div
            className={
              `flex w-full items-center gap-4 font-medium ` +
              (message.role === "user" ? "justify-end" : "justify-start")
            }
          >
            {message.role !== "user" && (
              <img src="man.png" alt="user" className="mr-1 size-6" />
            )}
            <div
              key={message.id}
              className={`max-w-lg rounded-lg border border-tertiary px-4 py-2 text-sm `}
            >
              {message.content}
            </div>
            {message.role === "user" && (
              <img src="man.png" alt="bot" className="ml-1 size-6" />
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="w-full bg-gray-100 p-4">
        <Input
          className="w-full rounded-md p-2"
          autoFocus
          value={input}
          placeholder="Ask anything..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
