import ContentPage from "./ContentPage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Content",
}

const page = () => {
  return (
    <ContentPage />
  )
}
export default page