import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#top", label: "Inicio" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="flex flex-col px-4 text-sm font-medium py-5 w-full xl:w-[1120px] mx-auto">
      <div className="flex items-center justify-between">
        <a
          href="#top"
          className="text-xl font-bold text-red-600 dark:text-red-400 tracking-widest"
        >
          JMI
        </a>
        {/* Desktop nav */}
        <nav className="hidden md:flex flex-row gap-x-4 opacity-80">
          {links.map(({ href, label }) => (
            <a
              key={href}
              className="hover:bg-white/10 rounded-full px-2 transition"
              href={href}
            >
              {label}
            </a>
          ))}
        </nav>
        {/* Hamburger button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col mt-3 gap-y-1 opacity-80">
          {links.map(({ href, label }) => (
            <a
              key={href}
              className="hover:bg-white/10 rounded-lg px-3 py-2 transition"
              href={href}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
