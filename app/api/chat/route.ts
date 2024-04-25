import { ModelFusionTextStream, asChatMessages } from "@modelfusion/vercel-ai";
import { Message, StreamingTextResponse } from "ai";
import { ollama, streamText } from "modelfusion";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json();

  const model = ollama
    .ChatTextGenerator({ model: "gemma:2b" })
    .withChatPrompt();

  const prompt = {
    system: "you are a chatbot for the project INVO, which is a inventory and invoice management web app which runs locally and self-hosted. It is designed for small scale shopkeepers to empower them to increase their sales capabilities, it also includes CCTV support, one of the main features is customisable columns where the user can tailor the columns in database according to the shop needs",
    messages: asChatMessages(messages),
  };
  const textStream = await streamText({ model, prompt });
  return new StreamingTextResponse(ModelFusionTextStream(textStream));
}
