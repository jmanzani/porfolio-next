export default function Footer() {
  return (
    <footer className="rounded-lg shadow m-4 bg-black/5 dark:bg-black/20 backdrop-blur-lg w-full xl:w-[1120px] mx-auto mb-10">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center text-yellow-800/90 dark:text-yellow-200/90">
          © {new Date().getFullYear()}{" "}
          <a href="https://jmanzani.com/" className="hover:underline">
            jmanzani
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
          <li><a href="#top" className="hover:underline me-4 md:me-6">Inicio</a></li>
          <li><a href="#experiencia" className="hover:underline me-4 md:me-6">Experiencia</a></li>
          <li><a href="#habilidades" className="hover:underline me-4 md:me-6">Habilidades</a></li>
          <li><a href="#sobre-mi" className="hover:underline">Sobre mí</a></li>
        </ul>
      </div>
    </footer>
  );
}
