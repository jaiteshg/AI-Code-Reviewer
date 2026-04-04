"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Code, History } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `flex items-center gap-2 p-2 rounded ${
      pathname === path ? "bg-gray-700" : "hover:bg-gray-800"
    }`;

  return (
    <aside className="w-64 bg-gray-900 text-white p-5">
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
    </aside>
  );
}