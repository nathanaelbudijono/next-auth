import Button from "@/component/button";
import clsx from "clsx";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <main
      className={clsx(
        "flex items-center justify-between",
        "py-6 max-md:py-3 px-16 max-md:px-6",
        "border-b-slate-300 border-b",
        "sticky top-0"
      )}
    >
      <Link href="/">Home</Link>
      <div className="flex gap-2 items-center">
        {session ? (
          <Button
            leftIcon={CiLogout}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Sign Out
          </Button>
        ) : (
          <Button
            leftIcon={AiFillGithub}
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          >
            Sign in
          </Button>
        )}
      </div>
    </main>
  );
}
