import Badge from "@/components/Badge";
import SocialPill from "@/components/SocialPill";
import LinkedIn from "@/components/icons/LinkedIn";
import GitHub from "@/components/icons/GitHub";
import Email from "@/components/icons/Email";
import Download from "@/components/icons/Download";

const skillCards = [
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
    title: "Datos",
    tags: ["SQL Server", "Entity Framework", "SSIS"],
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    tags: ["Azure", "Azure DevOps"],
  },
];

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Columna izquierda */}
      <div className="flex flex-col gap-y-4">
        <div>
          <Badge variant="active">Trabajando en Solimat</Badge>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Jesús Manzaneque Iniesta
        </h1>
        <h2 className="text-xl text-black lg:text-2xl dark:text-white">
          Full Stack Developer · Toledo, España
        </h2>
        <p className="text-base text-black/70 dark:text-white/60 max-w-md">
          Más de 3 años desarrollando aplicaciones enterprise. Actualmente en
          Solimat como Técnico de Desarrollo.
        </p>
        <nav className="mt-2 flex flex-wrap gap-3">
          <SocialPill url="https://www.linkedin.com/in/jesusmanzanequeiniesta/">
            <LinkedIn cssClass="size-4 lg:size-5" />
            LinkedIn
          </SocialPill>
          <SocialPill url="https://github.com/jmanzani">
            <GitHub cssClass="size-4 lg:size-5" />
            GitHub
          </SocialPill>
          <SocialPill url="mailto:jesusmanzanequeiniesta@gmail.com">
            <Email cssClass="size-4 lg:size-5" />
            Email
          </SocialPill>
          <SocialPill url="https://drive.google.com/uc?export=download&id=1ZU5BYR1V5QKJZzo2JufFkn6kMWooRhhQ">
            <Download cssClass="size-4 lg:size-5" />
            Curriculum Vitae
          </SocialPill>
        </nav>
      </div>

      {/* Columna derecha — tarjetas de skills */}
      <div className="grid grid-cols-2 gap-3">
        {skillCards.map(({ icon, title, tags }) => (
          <div
            key={title}
            className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-y-2"
          >
            <span className="text-sm font-semibold text-black/80 dark:text-white/80">
              {icon} {title}
            </span>
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-red-900/20 dark:bg-red-800/20 text-red-800 dark:text-red-300 rounded px-1.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
