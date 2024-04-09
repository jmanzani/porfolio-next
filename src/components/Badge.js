export default function Badge({ children }){
  return(
    <span
  className="text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-blue-600 text-white dark:bg-blue-900 dark:text-blue-300"
>
  {children}
</span>

  )
}