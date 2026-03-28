"use client";

type AnalyzeButtonProps = {
  loading: boolean;
  onClick: () => void;
};

export default function AnalyzeButton({ loading, onClick }: AnalyzeButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-3 rounded-lg font-medium shadow shadow-lg shadow-blue-500/20"
    >
      {loading ? "Analyzing..." : "🚀 Analyze Code"}
    </button>
  );
}