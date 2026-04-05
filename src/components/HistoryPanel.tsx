"use client";

type HistoryItem = {
  code: string;
  result: any;
  time: string;
};

type HistoryPanelProps = {
  history: HistoryItem[];
  onSelect: (item: HistoryItem) => void;
  onDelete: (index: number) => void;
};

export default function HistoryPanel({ history, onSelect, onDelete }: HistoryPanelProps) {
  
  return (
    <div className="p-4 rounded-lg shadow bg-gray-800 text-white">
      <h2 className="font-bold mb-3">🕒 History</h2>

      {history.length === 0 && (
        <p className="text-sm text-gray-400">No history yet</p>
      )}
      
      <div className="space-y-2">
        {(history || []).map((item, i) => (
        <div
          key={i}
          className="p-2 bg-gray-700 rounded flex justify-between items-center hover:bg-gray-600 transition"
        >
          {/* Click to open */}
          <div onClick={() => onSelect(item)} className="cursor-pointer flex-1">
            <p className="text-xs text-gray-300">{item.time}</p>
            <p className="text-sm truncate">
              {item.code.slice(0, 50)}...
            </p>
          </div>

          {/* Delete button */}
          <button
            onClick={() => onDelete(i)}
            className="text-red-400 hover:text-red-500 text-sm ml-2"
          >
            ✕
          </button>
        </div>
      ))}
      </div>
    </div>
  );
}