import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">AI Code Reviewer</h1>
      <p className="mt-2">AI-powered code analysis tool</p>

      <Link
        href="/dashboard"
        className="mt-6 bg-black text-white px-4 py-2 rounded"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}