type Bug = {
  issue: string;
  severity: string;
  fix: string;
};

type BugsCardProps = {
  bugs: Bug[];
  darkMode: boolean;
};

export default function BugsCard({ bugs, darkMode }: BugsCardProps) {
  return (
    <div
      className={`p-4 rounded-lg shadow h-full hover:scale-[1.02] transition ${
        darkMode
          ? "bg-red-500/10 text-red-300 border border-red-500/20"
          : "bg-red-50 text-red-800 border border-red-200"
      }`}
    >
      <h2 className="font-bold mb-2">🐞 Bugs</h2>
        {(bugs || []).length === 0 ? (
          <p className="text-sm text-gray-400">No bugs found 🎉</p>
        ) : (
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {bugs.map((bug, i) => (
              <li key={i}>
                <span className="font-semibold">{bug.issue}</span>
                <span className="ml-2 text-xs text-red-400">({bug.severity})</span>
                <p className="text-xs text-gray-400">{bug.fix}</p>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}