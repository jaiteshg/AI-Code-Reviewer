"use client";

import { useState } from "react";
import CodeEditor from "@/components/CodeEditor";
import axios from "axios";
import AnalyzeButton from "@/components/AnalyzeButton";
import BugsCard from "@/components/ResultCards/BugsCard";
import ImprovementsCard from "@/components/ResultCards/ImprovementsCard";
import DiffViewerCard from "@/components/ResultCards/DiffViewerCard";
import FixedCodeCard from "@/components/ResultCards/FixedCodeCard";
import { useEffect } from "react";

export default function EditorPage() {
  const [code, setCode] = useState(`function hello() {
  console.log("Hello world")
}`);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
  const selected = localStorage.getItem("selected-history");

  if (selected) {
    const item = JSON.parse(selected);
    setCode(item.code);
    setResult(item.result);

    localStorage.removeItem("selected-history"); // clean up
  }
}, []);

  const analyzeCode = async () => {
    setLoading(true);
    try {
    const saved = localStorage.getItem("code-history");
    const oldHistory = saved ? JSON.parse(saved) : [];

    // Call your backend API to analyze the code
    const response = await axios.post("/api/analyze", { code });
    const parsed = typeof response.data.result === "string"
    ? JSON.parse(response.data.result)
    : response.data.result;

    setResult(parsed);

    const newEntry = {
      code,
      result: parsed,
      time: new Date().toLocaleString(),
    };

    const updatedHistory = [newEntry, ...oldHistory].slice(0, 5);

    localStorage.setItem("code-history", JSON.stringify(updatedHistory));
    } catch (err) {
      setResult(null);
    }
    setLoading(false);
  };

  // Function to copy text to clipboard
  const copyToClipboard = (text: string) => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">AI Code Reviewer</h1>

      <CodeEditor code={code} setCode={setCode} />

      <AnalyzeButton loading={loading} onClick={analyzeCode} />

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <BugsCard bugs={result.bugs} darkMode={darkMode} />
          <ImprovementsCard improvements={result.improvements} darkMode={darkMode} />
          <DiffViewerCard code={code} fixedCode={result.fixedCode} darkMode={darkMode} />
          <FixedCodeCard fixedCode={result.fixedCode} darkMode={darkMode} copyToClipboard={copyToClipboard} />
        </div>
      )}
    </div>
  );
}