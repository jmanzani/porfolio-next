const skillCategories = [
  {
    icon: "⚙",
    title: "Backend",
    tags: ["C#", "ASP.NET Framework", "ASP.NET Core", "WCF", "gRPC"],
  },
  {
    icon: "🖥",
    title: "Frontend",
    tags: ["WinUI 3", "MAUI", "React", "Next.js", "Tailwind CSS"],
  },
  {
    icon: "🗄",
    title: "Bases de datos",
    tags: ["SQL Server", "Entity Framework", "SSIS"],
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    tags: ["Azure", "Azure DevOps"],
  },
  {
    icon: "🔧",
    title: "Otros",
    tags: ["Salesforce", "Postman", "Git"],
    fullWidth: true,
  },
];

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {skillCategories.map(({ icon, title, tags, fullWidth }) => (
        <div
          key={title}
          className={`bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-y-3 ${
            fullWidth ? "col-span-full" : ""
          }`}
        >
          <span className="text-base font-semibold text-black/80 dark:text-white/80">
            {icon} {title}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-red-900/20 dark:bg-red-800/20 text-red-800 dark:text-red-300 rounded-md px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
