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
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold">AI Code Reviewer</h1>

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
              <div className="p-4 bg-red-100 rounded-lg shadow">
                <h2 className="font-bold text-red-800 mb-2">🐞 Bugs</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm text-red-900">
                  {result.bugs.map((bug: string, i: number) => (
                    <li key={i}>{bug}</li>
                  ))}
                </ul>
              </div>

              {/* Improvements */}
              <div className="p-4 bg-yellow-100 rounded-lg shadow">
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
                  useDarkTheme={true}
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

                <pre className="bg-black text-green-400 p-3 rounded overflow-x-auto text-sm">
                  {result.fixedCode}
                </pre>
              </div>
            </div>
          )}
    </main>
  );
}