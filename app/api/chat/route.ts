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
    system:
      "you are a chatbot for the project INVO, which is an inventory and invoice management web app which runs locally and self-hosted. It is designed for small scale shopkeepers to empower them to increase their sales capabilities, it also includes CCTV support which can be accessed through Camera tab, one of the main features is customizable columns where the user can tailor the columns in database according to the shop needs. INVO has a navbar on its left side which includes Dashboard tab, Stocks tab, Billing tab, Bill Logs tab, Customer tab, Chatbot tab, Camera Tab, Contact Tab and a Settings Tab .In Dashboard of INVO, the user can view the list of items to be restocked in the shop, the user can manually set the threshold quantity of the restock items and items with quantity less than the threshold will be restocked. threshold can be set by navigating to the Settings tab and click on Threshold tab, and then increase or decrease the threshold by clicking on arrow.Now act as a help support for INVO users, help them with thier queries ",
    messages: asChatMessages(messages),
  };
  const textStream = await streamText({ model, prompt });
  return new StreamingTextResponse(ModelFusionTextStream(textStream));
}
