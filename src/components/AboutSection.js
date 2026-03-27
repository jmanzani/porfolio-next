export default function AboutSection() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <img
          className="size-16 rounded-full"
          src="https://avatars.githubusercontent.com/u/83214852?v=4"
          alt="Foto de Jesús Manzaneque"
        />
        <div>
          <h3 className="text-xl font-semibold text-black dark:text-white">
            Jesús Manzaneque Iniesta
          </h3>
          <p className="text-sm text-black/50 dark:text-white/50">
            Full Stack Developer
          </p>
        </div>
      </div>
      <p className="max-w-[700px] text-lg text-black dark:text-white text-pretty">
        Llevo ligado al mundo de la informática desde los 11 años, cuando me
        regalaron mi primer ordenador. Desde entonces no he parado: siempre
        estoy al tanto de las últimas novedades en tecnología y me encanta
        saber qué viene después.
        <br />
        <br />
        Desde 2022 trabajo como desarrollador, y en estos años he pasado de
        junior a asumir el liderazgo técnico de un proyecto enterprise en
        solitario. Fuera del código, soy un apasionado de la automoción y la
        música pop asiática. Persona directa, con las ideas claras y ganas de
        seguir creciendo.
      </p>
    </div>
  );
}
