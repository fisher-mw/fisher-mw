import { useScrollSpy } from '../hooks/useScrollSpy'

const navItems = [
  { id: 'hero', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'work', label: 'Work' },
]

export default function SideNav() {
  const active = useScrollSpy(navItems.map((n) => n.id))

  return (
    <aside className="hidden lg:flex flex-col gap-1 sticky top-24 w-24 shrink-0 pt-8">
      {navItems.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`text-xs font-medium py-1 pl-3 border-l-2 transition-all duration-200 ${
            active === id
              ? 'border-accent dark:border-accent-dark text-slate-900 dark:text-slate-100 font-semibold'
              : 'border-transparent text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          {label}
        </a>
      ))}
    </aside>
  )
}
