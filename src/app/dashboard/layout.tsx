"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">ai-code-reviwer</h2>

        <nav className="flex flex-col gap-4">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/editor">Editor</Link>
          <Link href="/dashboard/history">History</Link>
        </nav>

        <button
          onClick={() => signOut()}
          className="mt-10 bg-red-500 px-3 py-2 rounded"
        >
          Logout
        </button>
      </aside>

      <main className="flex-1 p-6 bg-gray-900 text-white">{children}</main>
    </div>
  );
}