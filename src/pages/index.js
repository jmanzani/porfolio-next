import Layout from "@/components/layout";
import SectionContainer from "@/components/SectionContainer";
import HeroSection from "@/components/HeroSection";
import Experience from "@/components/Experience";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Briefcase from "@/components/icons/Briefcase";
import Code from "@/components/icons/Code";
import Person from "@/components/icons/Person";

export default function Home() {
  return (
    <Layout
      title="Portafolio de Jesús - Full Stack Developer"
      description="Portfolio de Jesús Manzaneque Iniesta, Full Stack Developer con más de 3 años de experiencia en Toledo, España."
    >
      <main className="px-4">
        <SectionContainer id="top" cssClass="py-44 pb-32">
          <HeroSection />
        </SectionContainer>

        <SectionContainer id="experiencia">
          <h2 className="mb-6 flex items-center gap-x-2 text-2xl font-semibold text-black/80 dark:text-white/80">
            <Briefcase cssClass="size-7" /> Experiencia laboral
          </h2>
          <Experience />
        </SectionContainer>

        <SectionContainer id="habilidades">
          <h2 className="mb-6 flex items-center gap-x-2 text-2xl font-semibold text-black/80 dark:text-white/80">
            <Code cssClass="size-7" /> Habilidades
          </h2>
          <SkillsSection />
        </SectionContainer>

        <SectionContainer id="sobre-mi">
          <h2 className="mb-6 flex items-center gap-x-2 text-2xl font-semibold text-black/80 dark:text-white/80">
            <Person cssClass="size-7" /> Sobre mí
          </h2>
          <AboutSection />
        </SectionContainer>

        <SectionContainer id="contacto">
          <ContactForm />
        </SectionContainer>
      </main>
    </Layout>
  );
}
