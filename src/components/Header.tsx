"use client";

type HeaderProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold tracking-tight">
        ⚡ AI Code Reviewer
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-3 py-1 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition shadow-lg shadow-blue-500/20"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
}