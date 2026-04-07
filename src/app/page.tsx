import AuthButton from "@/components/Signin";
import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800 backdrop-blur-md bg-black/40 sticky top-0 z-50">

        <h1 className="text-xl font-bold tracking-wide">
          ⚡ AI Code Reviewer
        </h1>

        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition"
          >
            Dashboard
          </Link>

          <AuthButton />
        </div>
      </nav>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 mt-24">

          <h1 className="text-6xl font-bold leading-tight">
            Review Your Code <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              With AI ⚡
            </span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl text-lg">
            Instantly detect bugs, get improvements, and generate cleaner code using AI.
          </p>

          <Link
            href="/dashboard"
            className="mt-8 bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            🚀 Get Started
          </Link>

        </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 mt-20">
        <div className="bg-gray-800/60 backdrop-blur p-6 rounded-xl hover:scale-105 hover:bg-gray-700 transition duration-300 border border-gray-700">
          <h3 className="text-lg font-semibold">🐞 Bug Detection</h3>
          <p className="text-gray-400 mt-2">
            Find hidden issues in your code instantly.
          </p>
        </div>

        <div className="bg-gray-800/60 backdrop-blur p-6 rounded-xl hover:scale-105 hover:bg-gray-700 transition duration-300 border border-gray-700">
          <h3 className="text-lg font-semibold">✨ Smart Improvements</h3>
          <p className="text-gray-400 mt-2">
            Get suggestions to write better code.
          </p>
        </div>

        <div className="bg-gray-800/60 backdrop-blur p-6 rounded-xl hover:scale-105 hover:bg-gray-700 transition duration-300 border border-gray-700">
          <h3 className="text-lg font-semibold">⚡ Auto Fix</h3>
          <p className="text-gray-400 mt-2">
            Generate optimized and clean code instantly.
          </p>
        </div>
      </section>

    </main>
  );
}