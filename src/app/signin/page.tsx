"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">

      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md text-center">

        <h1 className="text-2xl font-bold mb-4">
          ⚡ AI Code Reviewer
        </h1>

        <p className="text-gray-400 mb-6">
          Sign in to continue
        </p>

        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="w-full bg-white text-black py-2 rounded-lg font-semibold hover:scale-105 transition"
        >
          Continue with Google
        </button>

      </div>
    </div>
  );
}