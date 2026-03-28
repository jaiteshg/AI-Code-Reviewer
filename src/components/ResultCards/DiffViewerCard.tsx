"use client";

import DiffViewer from "react-diff-viewer-continued";

type DiffViewerCardProps = {
  code: string;
  fixedCode: string;
  darkMode: boolean;
};

export default function DiffViewerCard({
  code,
  fixedCode,
  darkMode,
}: DiffViewerCardProps) {
  return (
    <div className="md:col-span-2 p-4 bg-gray-900 rounded-lg shadow hover:scale-[1.02] transition">
      <h2 className="font-bold text-white mb-4">
        ⚡ Code Diff (Before vs After)
      </h2>

      <DiffViewer
        oldValue={code}
        newValue={fixedCode}
        splitView={true}
        useDarkTheme={darkMode}
      />
    </div>
  );
}