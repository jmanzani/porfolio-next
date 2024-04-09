import Layout from "@/components/layout";
import Badge from "@/components/Badge";
import SectionContainer from "@/components/SectionContainer";
import SocialPill from "@/components/SocialPill";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";

import LinkedIn from "@/components/icons/LinkedIn";
import GitHub from "@/components/icons/GitHub";
import Email from "@/components/icons/Email";
import Download from "@/components/icons/Download";
import Briefcase from "@/components/icons/Briefcase";
import Person from "@/components/icons/Person";

export default function Home() {
  return (
    <Layout
      title="Porfolio de Jesús - Desarrollador y programador Web"
      description="Descripción"
    >
      <main className="px-4">
        <SectionContainer cssClass="py-44 pb-32">
          <h1 className="flex flex-row gap-x-4 pb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:pb-10 lg:text-5xl dark:text-white">
            Hola! Soy Jesús{" "}
            <a
              href="https://linkedin.com/jesusmanzanequeiniesta"
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center"
            >
              <Badge>Trabajando</Badge>
            </a>
          </h1>
          <h2 className="max-w-[700px] text-wrap text-xl text-black lg:text-2xl dark:text-white">
            2 años de experiencia. Desarrollador Web de La Puebla de Almoradiel,
            España.
          </h2>
          <nav className="mt-8 flex flex-wrap gap-4">
            <SocialPill url="https://www.linkedin.com/in/jesusmanzanequeiniesta/">
              <LinkedIn cssClass="size-4 lg:size-6" />
              Linkedin
            </SocialPill>
            <SocialPill url="https://github.com/JesusManzanequeIniesta">
              <GitHub cssClass="size-4 lg:size-6" />
              Github
            </SocialPill>
            <SocialPill url="mailto:jesusmanzanequeiniesta@gmail.com">
              <Email cssClass="size-4 lg:size-6" />
              jesusmanzanequeiniesta@gmail.com
            </SocialPill>
            <SocialPill url="#">
              <Download cssClass="size-4 lg:size-6" />
              Curriculum Vitae (Próximamente...)
            </SocialPill>
          </nav>
        </SectionContainer>
        <SectionContainer id="experiencia">
          <h2 className="mb-6 flex items-center gap-x-2 text-2xl font-semibold text-black/80 dark:text-white/80">
            <Briefcase cssClass="size-7" /> Experiencia laboral
          </h2>
          <Experience />
        </SectionContainer>
        <SectionContainer id="sobre-mi">
          <h2 className="mb-6 flex items-center gap-x-2 text-2xl font-semibold text-black/80 dark:text-white/80">
            <Person cssClass="size-7" /> Sobre mí
          </h2>
          <div className="flex items-center">
            <img
              className="mb-3 size-20 rounded-full"
              src="https://avatars.githubusercontent.com/u/83214852?v=4"
              alt="Foto de Jesús Manzaneque"
            />
            <h3 className="mx-5 max-w-[700px] text-wrap text-xl text-black lg:text-2xl dark:text-white">
              Jesús Manzaneque Iniesta
            </h3>
          </div>
          <div>
            <p className="max-w-[700px] text-wrap text-lg text-black dark:text-white">
              Nacido el 30 de Agosto del 2002, he estado ligado al mundo de la
              informática desde los 11 años cuando me regalaron mi primer
              ordenador. Siempre estoy conectado al mundo de la tecnología, me
              encanta saber que será lo siguiente y estar al tanto de las
              novedades en este campo.
              <br />
              <br />
              Desde el año 2022 soy desarrollador web, y, a pesar de ser junior,
              siempre estoy tratando de aprender y mejorar mis habilidades como
              programador. Si tuviera que hablar sobre mí, diría que soy un
              apasionado por el mundo de la automoción y la música pop asiática.
              Además soy una persona directa y natural con ideas muy claras
            </p>
          </div>
        </SectionContainer>
        <SectionContainer id="contacto">
          <ContactForm />
        </SectionContainer>
      </main>
    </Layout>
  );
}
