export default function Header() {
  return (
    <header className="flex px-2 text-sm font-medium justify-center items-center py-5 w-full xl:w-[1120px] mx-auto">    
      <nav className="flex flex-row gap-x-4 opacity-80">
        <a className="hover:bg-white/10 rounded-full px-2 transition" href="#top">Inicio</a>
        <a className="hover:bg-white/10 rounded-full px-2 transition" href="#experiencia">Experiencia</a>
        <a className="hover:bg-white/10 rounded-full px-2 transition" href="#contacto">Contacto</a>
        {/* <a className="hover:bg-white/10 rounded-full px-3 transition" href="#proyectos">Proyectos</a> */}
        <a className="hover:bg-white/10 rounded-full px-2 transition" href="#sobre-mi">Sobre mi</a>
      </nav>
    </header>
  )
}
