"use client";

import Editor from "@monaco-editor/react";

type Props = {
  code: string;
  setCode: (value: string) => void;
};

export default function CodeEditor({ code, setCode }: Props) {
  return (
    <div className="h-[500px] border rounded-lg overflow-hidden">
      <Editor
        height="100%"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value || "")}
      />
    </div>
  );
}