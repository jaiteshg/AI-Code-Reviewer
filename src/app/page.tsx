"use client";

import { useState } from "react";
import CodeEditor from "@/components/CodeEditor";
import axios from "axios";
import DiffViewer from "react-diff-viewer-continued";

export default function Home() {
  const [code, setCode] = useState(`function hello() {
  console.log("Hello world")
}`);
  const [result, setResult] = useState<{ bugs: string[]; improvements: string[]; fixedCode: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const analyzeCode = async () => {
        setLoading(true);
        try {
          const res = await axios.post("/api/analyze", { code });

          // 👇 parse JSON safely
          const parsed = JSON.parse(res.data.result);

          setResult(parsed);
        } catch (err) {
          setResult(null);
        }
        setLoading(false);
      };

  return (
    <main
        className={`min-h-screen p-6 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >      
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">AI Code Reviewer</h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded bg-gray-800 text-white"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      <CodeEditor code={code} setCode={setCode} />

      <button
        onClick={analyzeCode}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Analyzing..." : "Analyze Code"}
      </button>

      {result && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              
              {/* Bugs */}
              <div className={`p-4  rounded-lg shadow ${ darkMode
                  ? "bg-red-500/10 text-red-300 border border-red-500/20"
                  : "bg-red-50 text-red-800 border border-red-200"}`}
                >
                <h2 className="font-bold text-red-800 mb-2">🐞 Bugs</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm text-red-900">
                  {result.bugs.map((bug: string, i: number) => (
                    <li key={i}>{bug}</li>
                  ))}
                </ul>
              </div>

              {/* Improvements */}
              <div className={`p-4  rounded-lg shadow ${ darkMode
                    ? "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20"
                    : "bg-yellow-50 text-yellow-800 border border-yellow-200"}`}
                >
                <h2 className="font-bold text-yellow-800 mb-2">✨ Improvements</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm text-yellow-900">
                  {result.improvements.map((imp: string, i: number) => (
                    <li key={i}>{imp}</li>
                  ))}
                </ul>
              </div>

              {/* Fixed Code (full width) */}
              <div className="md:col-span-2 p-4 bg-gray-900 rounded-lg shadow">
                <h2 className="font-bold text-white mb-4">⚡ Code Diff (Before vs After)</h2>

                <DiffViewer
                  oldValue={code}
                  newValue={result.fixedCode}
                  splitView={true}
                  useDarkTheme={darkMode}
                />
              </div>

              <div className="md:col-span-2 p-4 bg-green-100 rounded-lg shadow relative">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-bold text-green-800">✅ Fixed Code</h2>

                  {/* Copy Button */}
                  <button
                    onClick={() => copyToClipboard(result.fixedCode)}
                    className="bg-black text-white px-3 py-1 text-xs rounded hover:bg-gray-800"
                  >
                    Copy
                  </button>
                </div>

                <pre className={`p-3 rounded overflow-x-auto text-sm ${
                    darkMode ? "bg-black text-green-400" : "bg-gray-200 text-black"
                  }`}>
                  {result.fixedCode}
                </pre>
              </div>
            </div>
          )}
    </main>
  );
}