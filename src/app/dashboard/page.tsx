import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold">Welcome back 👋</h1>
        <p className="text-gray-400">
          Here’s what’s happening with your code today.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-gray-800/60 backdrop-blur p-5 rounded-xl border border-gray-700">
          <p className="text-gray-400 text-sm">Total Analyses</p>
          <h2 className="text-2xl font-bold mt-1">12</h2>
        </div>

        <div className="bg-gray-800/60 backdrop-blur p-5 rounded-xl border border-gray-700">
          <p className="text-gray-400 text-sm">Bugs Fixed</p>
          <h2 className="text-2xl font-bold mt-1">34</h2>
        </div>

        <div className="bg-gray-800/60 backdrop-blur p-5 rounded-xl border border-gray-700">
          <p className="text-gray-400 text-sm">Improvements Made</p>
          <h2 className="text-2xl font-bold mt-1">21</h2>
        </div>

      </div>

      {/* Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <Link
            href="/dashboard/editor"
            className="group rounded-xl border border-gray-700 p-6 bg-gray-800/60 backdrop-blur hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold">🧠 Open Editor</h2>
            <p className="text-sm text-gray-400 mt-2">
              Analyze your code using AI
            </p>

            <p className="mt-4 text-blue-400 group-hover:underline">
              Start now →
            </p>
          </Link>

          <Link
            href="/dashboard/history"
            className="group rounded-xl border border-gray-700 p-6 bg-gray-800/60 backdrop-blur hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold">🕒 View History</h2>
            <p className="text-sm text-gray-400 mt-2">
              Check your past code reviews
            </p>

            <p className="mt-4 text-blue-400 group-hover:underline">
              View history →
            </p>
          </Link>

        </div>
      </div>

    </div>
  );
}