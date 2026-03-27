
import ExperienceItem from "./ExperienceItem";
export default function Experience() {
  const experiences = [
    {
      date: "Mar 2022 – Abr 2024",
      title: "Junior Engineer - NTT DATA",
      description: "Entré en prácticas y fui contratado en junio de 2022. Trabajé en un proyecto ERP con C#, ASP.NET y Transact-SQL. Integré y consumí APIs REST con Postman. Elaboré documentación técnica: manuales de usuario y guías de integración. En verano de 2023 me incorporé a un proyecto Salesforce, realizando tareas de mantenimiento y actualización de la plataforma CRM."
    },
    {
      date: "Abr 2024 – Abr 2025",
      title: "Associate Software Engineer - COFORGE",
      description: "Trabajé integrado como externo en las instalaciones de SOLIMAT, en el mismo proyecto que en mi etapa posterior. Desarrollé módulos en ASP.NET Framework, WinUI 3 y Entity Framework. Trabajé con SQL Server y SSIS para la gestión de datos de afiliados, e integré servicios en la nube con WCF y gRPC."
    },
    {
      date: "Abr 2025 – Actualidad",
      title: "Técnico de Desarrollo | Líder de Proyecto en funciones (oct. 2025 – abr. 2026)",
      description: "Me incorporé directamente a SOLIMAT desarrollando y manteniendo dos aplicaciones enterprise de gestión y afiliación de trabajadores, empresas y autónomos. A partir de octubre de 2025, y sin dejar mis tareas de desarrollo, asumí en solitario la dirección técnica completa del proyecto durante 6 meses. Tecnologías: ASP.NET Framework, WinUI 3, MAUI, Entity Framework, WCF, gRPC, SSIS, SQL Server, Azure y Azure DevOps."
    }
  ]
  return(
    <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-3">
      {
        experiences.map(experience => (

          <li className="mb-10 ms-4">
            <ExperienceItem {...experience} />
          </li>
        ))
      }
    </ol>
  )
}
