"use client";

import { useState } from "react";
import CodeEditor from "@/components/CodeEditor";
import axios from "axios";
import DiffViewer from "react-diff-viewer-continued";
import Header from "@/components/Header";
import AnalyzeButton from "@/components/AnalyzeButton";
import BugsCard from "@/components/ResultCards/BugsCard";
import ImprovementsCard from "@/components/ResultCards/ImprovementsCard";
import DiffViewerCard from "@/components/ResultCards/DiffViewerCard";
import FixedCodeCard from "@/components/ResultCards/FixedCodeCard";

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
      <div className="max-w-5xl mx-auto space-y-6">        
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className={`p-4 rounded-xl shadow ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}>
          <CodeEditor code={code} setCode={setCode} />
        </div>

        <AnalyzeButton loading={loading} onClick={analyzeCode} />

        {result && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <BugsCard bugs={result.bugs} darkMode={darkMode} />
            <ImprovementsCard improvements={result.improvements} darkMode={darkMode} />
            <DiffViewerCard
              code={code}
              fixedCode={result.fixedCode}
              darkMode={darkMode}
            />
            <FixedCodeCard
              fixedCode={result.fixedCode}
              darkMode={darkMode}
              copyToClipboard={copyToClipboard}
            />
          </div>
        )} 
      </div>  
    </main>
  );
}