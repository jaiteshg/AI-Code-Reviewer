import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">AI Code Reviewer</h1>
      <p className="mt-3 text-gray-400 text-lg">AI-powered code analysis tool</p>

      <Link
        href="/dashboard"
        className="mt-6 bg-black-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}