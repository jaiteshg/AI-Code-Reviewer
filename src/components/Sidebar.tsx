"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Code, History, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function Sidebar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `flex items-center gap-2 p-2 rounded ${
      pathname === path ? "bg-gray-700" : "hover:bg-gray-800"
    }`;

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-5 flex flex-col justify-between">
      
      {/* Top */}
      <div>
        <h2 className="text-xl font-bold mb-6">⚡ AI Code Reviewer</h2>

        <nav className="flex flex-col gap-3">
          <Link href="/dashboard" className={linkClass("/dashboard")}>
            <LayoutDashboard size={18} /> Dashboard
          </Link>

          <Link href="/dashboard/editor" className={linkClass("/dashboard/editor")}>
            <Code size={18} /> Editor
          </Link>

          <Link href="/dashboard/history" className={linkClass("/dashboard/history")}>
            <History size={18} /> History
          </Link>
        </nav>
      </div>

      {/* Bottom */}
      <button
        onClick={() => signOut()}
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-3 py-2 rounded transition"
      >
        <LogOut size={18} /> Logout
      </button>
    </aside>
  );
}