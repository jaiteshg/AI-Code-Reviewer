type BugsCardProps = {
  bugs: string[];
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

      <ul className="list-disc pl-5 space-y-1 text-sm">
        {bugs.map((bug, i) => (
          <li key={i}>{bug}</li>
        ))}
      </ul>
    </div>
  );
}