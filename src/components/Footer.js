export default function Footer() {
  return (
    <footer className="rounded-lg shadow m-4 bg-black/5 dark:bg-black/20 backdrop-blur-lg w-full xl:w-[1120px] mx-auto mb-10">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center text-yellow-800/90 dark:text-yellow-200/90">
          © 2024{" "}
          <a href="https://jmanzani.com/" className="hover:underline">
            jmanzani
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
          <li>
            <a href="#sobre-mi" className="hover:underline me-4 md:me-6">
              Sobre mí
            </a>
            <a href="#contacto" className="hover:underline me-4 md:me-6">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
