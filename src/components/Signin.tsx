"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-300">
          {session.user?.name}
        </span>

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
      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm transition"
    >
      Sign in
    </button>
  );
}