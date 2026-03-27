export default function ExperienceItem({
  date,
  title,
  company,
  description,
  isActive,
  leadershipBadge,
}) {
  return (
    <div>
      <div
        className={`absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border ${
          isActive
            ? "bg-amber-400 border-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.6)]"
            : "bg-gray-200 border-white dark:border-gray-900 dark:bg-gray-700"
        }`}
      />
      <time className="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80">
        {date}
      </time>
      <h3 className="text-lg font-semibold text-red-800 dark:text-blue-200 mt-2">
        {title}
      </h3>
      {company && (
        <p className="text-sm text-black/50 dark:text-white/50 mb-1">{company}</p>
      )}
      {leadershipBadge && (
        <span className="inline-block mb-2 text-xs bg-amber-900/30 text-amber-300 border border-amber-700/40 rounded-full px-3 py-0.5">
          ★ {leadershipBadge}
        </span>
      )}
      <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
        {description}
      </p>
    </div>
  );
}
