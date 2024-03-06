import { redirect } from "next/navigation";

export default function Home() {
  if (
    !process.env.MYSQL_HOST ||
    !process.env.MYSQL_USER ||
    !process.env.MYSQL_PASSWORD ||
    !process.env.MYSQL_DATABASE
  ) {
    console.error("Missing MySQL environment variables.");
    redirect("/env");
  } else {
    redirect("/dashboard");
  }
}
