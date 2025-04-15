
import ExperienceItem from "./ExperienceItem";
export default function Experience() {
  const experiences = [
    {
      date: "Marzo 2022 - Abril 2024",
      title: "Junior Engineer - NTT DATA",
      description: "Durante las prácticas y hasta Junio del 2023 estuve trabajando en un proyecto de ERP desarrollado en C# y ASP.Net. Además utilizando Transact-SQL para procedimientos almacenados y manejo de las tablas del proyecto. Para pruebas de API utilizaba JUnit y Postman. Después me cambiaron de proyecto a uno de SalesForce donde estuve realizando labores de mantenimiento y actualización conforme a los requerimientos que nos marcaba el cliente."
    },
    {
      date: "Abril 2024 - Marzo 2025",
      title: "Associate Software Engineer - COFORGE",
      description: "Proyecto de aplicación Windows utilizando WinUI 3, C#, Entity Framework y SQL para el cliente y mantenimiento de aplicacion Web ASP.NET. Además se atienden soportes de los clientesa través de telefono y correo electronico."
    },
    {
      date: "Abril 2025 - Actualidad",
      title: "Tecnico de Desarrollo - SOLIMAT",
      description: "Proyecto de aplicación Windows utilizando WinUI 3, C#, Entity Framework y SQL para el cliente y mantenimiento de aplicacion Web ASP.NET. Además se atienden soportes de los clientesa través de telefono y correo electronico."
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