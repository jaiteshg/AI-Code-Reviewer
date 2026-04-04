type ImprovementsCardProps = {
  improvements: string[];
  darkMode: boolean;
};

export default function ImprovementsCard({ improvements, darkMode }: ImprovementsCardProps) {
  return (
    <div
      className={`p-4 rounded-lg shadow h-full hover:scale-[1.02] transition ${
        darkMode
          ? "bg-green-500/10 text-green-300 border border-green-500/20"
          : "bg-green-50 text-green-800 border border-green-200"
      }`}
    >
      <h2 className="font-bold mb-2">✨ Improvements</h2>

      <ul className="list-disc pl-5 space-y-1 text-sm">
        {(improvements || []).map((imp, i) => (
          <li key={i}>{imp}</li>
        ))}
      </ul>
    </div>
  );
}