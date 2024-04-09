export default function ExperienceItem({ date, title, description }) {
  return (
    <div>
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80">
        {date}
      </time>
      <h3 className="text-lg font-semibold text-red-800 dark:text-blue-200 mt-2">
        {title}
      </h3>
      <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
        {description}
      </p>
    </div>
  );
}
