"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <p className="animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <div className="flex flex-col justify-between">
        <Sidebar />
      </div>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-900 text-white overflow-y-auto">
        {children}
      </main>
    </div>
  );
}