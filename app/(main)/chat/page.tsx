import ChatPage from "./ChatPage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Chat",
}

const page = () => {
  return (
    <ChatPage />
  )
}
export default page