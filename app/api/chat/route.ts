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
      "INVO is an inventory and invoice management web app tailored for small-scale shopkeepers, offering customizable columns, CCTV support, and a user-friendly interface. Navigate through the left-sided navbar, featuring tabs like Dashboard, where you can access statistics such as income per month, expense per month, total bill orders, bill orders per day, and restock items below the threshold, sorted by default using a special algorithm. The Dashboard also includes a graphical representation of income and orders, with flexible graph styles. In the Stocks tab, manage inventory with a sortable table containing all stock details, searchable and editable directly from the table, alongside an add button for new items, which opens a dynamic form in a popup dialog. As the INVO chatbot, I'm here to provide assistance with any queries you have regarding navigation, features, or troubleshooting. Give a short welcome message",
    messages: asChatMessages(messages),
  };
  const textStream = await streamText({ model, prompt });
  return new StreamingTextResponse(ModelFusionTextStream(textStream));
}
