"use client";

import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";

import { useToast } from "@/hooks/use-toast";

export default function SignOutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "Logging out..." });
  };

  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleLogout}>
        Logout
      </Link>
    </SignOutButton>
  );
}
