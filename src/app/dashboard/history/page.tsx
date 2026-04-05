"use client";

import { useEffect, useState } from "react";
import HistoryPanel from "@/components/HistoryPanel";
import { useRouter } from "next/navigation";

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([]);
  const router = useRouter();

  {history.length === 0 && <p>No history yet</p>}

  useEffect(() => {
    const saved = localStorage.getItem("code-history");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const handleSelect = (item: any) => {
    
  localStorage.setItem("selected-history", JSON.stringify(item));
  router.push("/dashboard/editor");
};
  const handleDelete = (index: number) => {
    const updated = history.filter((_, i) => i !== index);
    setHistory(updated);
    localStorage.setItem("code-history", JSON.stringify(updated));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">History</h1>
      <button
        onClick={() => {
          localStorage.removeItem("code-history");
          setHistory([]);
        }}
        className="text-red-500 text-sm mb-3"
      >
        Clear All
      </button>
      <HistoryPanel 
        history={history} 
        onSelect={handleSelect} 
        onDelete={handleDelete} />
    </div>
  );
}