"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-3">

        <Image
          src={session.user?.image || "/default-avatar.png"}
          alt="avatar"
          width={32}
          height={32}
          className="rounded-full"
        />

        <button
          onClick={() => signOut()}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm transition"
        >
          Logout
        </button>

      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
    >
      Sign in
    </button>
  );
}