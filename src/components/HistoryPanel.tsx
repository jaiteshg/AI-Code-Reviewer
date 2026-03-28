"use client";

type HistoryItem = {
  code: string;
  result: any;
  time: string;
};

type HistoryPanelProps = {
  history: HistoryItem[];
  onSelect: (item: HistoryItem) => void;
};

export default function HistoryPanel({ history, onSelect }: HistoryPanelProps) {
  return (
    <div className="p-4 rounded-lg shadow bg-gray-800 text-white">
      <h2 className="font-bold mb-3">🕒 History</h2>

      {history.length === 0 && (
        <p className="text-sm text-gray-400">No history yet</p>
      )}

      <div className="space-y-2">
        {history.map((item, i) => (
          <div
            key={i}
            onClick={() => onSelect(item)}
            className="p-2 bg-gray-700 rounded cursor-pointer hover:bg-gray-600 transition"
          >
            <p className="text-xs text-gray-300">{item.time}</p>
            <p className="text-sm truncate">
              {item.code.slice(0, 50)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}