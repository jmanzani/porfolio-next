export default function SocialPill({children, url}) {
  return(
    <a
  className={`
    bg-white/5 
      border dark:border-white/10 border-gray-400 rounded-full
      flex justify-center items-center gap-x-2
      py-1 px-2 md:py-2 md:px-4
      text-xs md:text-base
      text-black/70 dark:text-white/50
      transition
      hover:scale-110 hover:bg-white/10
    `}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
  )
}