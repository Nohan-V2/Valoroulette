"use client";

interface ActionButtonsProps {
  onSelectAll: () => void;
  onDeselectAll: () => void;
  onRoll: () => void;
}

export default function ActionButtons({
  onSelectAll,
  onDeselectAll,
  onRoll,
}: ActionButtonsProps) {
  return (
    <div
      className="w-full flex flex-col md:flex-row justify-between items-center gap-3 md:gap-5 mt-8 md:mt-12 lg:mt-16 px-4"
      role="toolbar"
      aria-label="Selection options"
    >
      <button
        type="button"
        onClick={onSelectAll}
        className="w-[85%] xs:w-[75%] md:w-auto bg-white/15 rounded border-2 border-white/15 px-6 sm:px-8 md:px-16 py-3 sm:py-4 md:py-5 cursor-pointer transition-all active:scale-95 hover:opacity-70 text-base sm:text-lg md:text-xl touch-manipulation whitespace-nowrap"
        aria-label="Select all agents"
      >
        Select All
      </button>
      <button
        type="button"
        onClick={onRoll}
        className="w-[85%] xs:w-[75%] md:w-auto bg-valorant-red rounded border-2 border-valorant-red px-6 sm:px-8 md:px-16 py-3 sm:py-4 md:py-5 cursor-pointer transition-all active:scale-95 hover:opacity-70 text-base sm:text-lg md:text-xl touch-manipulation whitespace-nowrap"
        aria-label="Roll for random agent"
      >
        Roll
      </button>
      <button
        type="button"
        onClick={onDeselectAll}
        className="w-[85%] xs:w-[75%] md:w-auto bg-white/15 rounded border-2 border-white/15 px-6 sm:px-8 md:px-16 py-3 sm:py-4 md:py-5 cursor-pointer transition-all active:scale-95 hover:opacity-70 text-base sm:text-lg md:text-xl touch-manipulation whitespace-nowrap"
        aria-label="Deselect all agents"
      >
        Deselect All
      </button>
    </div>
  );
}
