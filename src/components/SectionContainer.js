export default function SectionContainer({ cssClass, id, children }){
  return(
    <section className={`w-full lg:w-[740px] mx-auto pb-24 ${cssClass}`} id={id}>
      {children}
    </section>
  )
}