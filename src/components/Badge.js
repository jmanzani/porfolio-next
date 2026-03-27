export default function Badge({ children, variant }) {
  if (variant === "active") {
    return (
      <span className="flex items-center gap-x-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-900/30 text-green-300 border border-green-700/40">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        {children}
      </span>
    );
  }
  return (
    <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-blue-600 text-white dark:bg-blue-900 dark:text-blue-300">
      {children}
    </span>
  );
}