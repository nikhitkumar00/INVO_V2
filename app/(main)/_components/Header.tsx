import { Logout } from "@/public/Icons";
import Link from "next/link";

const Header = ({ title, logout }: { title: string; logout: boolean }) => {
  return (
    <header className="flex h-fit w-full items-center justify-between p-4">
      <div className="text-3xl font-semibold capitalize">{title}</div>
      <div className="flex gap-4">
        {logout && (
          <Link href="/login">
            <Logout className="size-6 stroke-2" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
