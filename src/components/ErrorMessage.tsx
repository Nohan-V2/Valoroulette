"use client";

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 text-center text-valorant-red text-base md:text-xl px-4 py-3 md:p-4 bg-black/80 rounded-lg shadow-lg z-50 max-w-[90%] md:max-w-none"
      role="alert"
      aria-live="assertive"
    >
      {message}
    </div>
  );
}
