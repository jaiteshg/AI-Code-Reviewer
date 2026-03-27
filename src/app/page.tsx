"use client";

import { useState } from "react";
import CodeEditor from "@/components/CodeEditor";
import axios from "axios";

export default function Home() {
  const [code, setCode] = useState(`function hello() {
  console.log("Hello world")
}`);
  const [result, setResult] = useState<{ bugs: string[]; improvements: string[]; fixedCode: string } | null>(null);
  const [loading, setLoading] = useState(false);

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
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">AI Code Reviewer</h1>

      <CodeEditor code={code} setCode={setCode} />

      <button
        onClick={analyzeCode}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Analyzing..." : "Analyze Code"}
      </button>

      {result && (
          <div className="space-y-4">
            
            <div className="p-4 bg-red-100 rounded">
              <h2 className="font-bold">🐞 Bugs</h2>
              <ul>
                {result.bugs.map((bug: string, i: number) => (
                  <li key={i}>• {bug}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-yellow-100 rounded">
              <h2 className="font-bold">✨ Improvements</h2>
              <ul>
                {result.improvements.map((imp: string, i: number) => (
                  <li key={i}>• {imp}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-green-100 rounded">
              <h2 className="font-bold">✅ Fixed Code</h2>
              <pre className="whitespace-pre-wrap">{result.fixedCode}</pre>
            </div>

          </div>
        )}
    </main>
  );
}