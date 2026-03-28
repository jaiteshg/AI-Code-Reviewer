"use client";

type FixedCodeCardProps = {
  fixedCode: string;
  darkMode: boolean;
  copyToClipboard: (text: string) => void;
};

export default function FixedCodeCard({
  fixedCode,
  darkMode,
  copyToClipboard,
}: FixedCodeCardProps) {
  return (
    <div className="md:col-span-2 p-4 bg-green-100 rounded-lg shadow hover:scale-[1.02] transition">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-green-800">✅ Fixed Code</h2>

        <button
          onClick={() => copyToClipboard(fixedCode)}
          className="bg-black text-white px-3 py-1 text-xs rounded hover:bg-gray-800"
        >
          Copy
        </button>
      </div>

      <pre
        className={`p-3 rounded overflow-x-auto text-sm ${
          darkMode ? "bg-black text-green-400" : "bg-gray-200 text-black"
        }`}
      >
        {fixedCode}
      </pre>
    </div>
  );
}