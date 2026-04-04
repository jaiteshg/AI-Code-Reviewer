import Link from "next/link";
import { Code, History } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      
      <div>
        <h1 className="text-3xl font-bold">AI Code Reviewer</h1>
        <p className="text-gray-500">Welcome back 👋</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <Link
          href="/dashboard/editor"
          className="rounded-xl border border-gray-700 p-6 bg-gray-800 shadow hover:shadow-lg hover:bg-gray-700 transition"
        >
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Code size={20} />
            Open Editor
          </h2>
          <p className="text-sm text-gray-300 mt-2">
            Analyze your code using AI
          </p>
        </Link>

        <Link
          href="/dashboard/history"
          className="rounded-xl border border-gray-700 p-6 bg-gray-800  shadow hover:shadow-lg hover:bg-gray-700 transition"
        >
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <History size={20} />
            View History
          </h2>
          <p className="text-sm text-gray-300 mt-2">
            Check your past code reviews
          </p>
        </Link>

      </div>
    </div>
  );
}