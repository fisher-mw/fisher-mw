import { useState } from 'react'

const navLinks = [
  { label: '01. About', href: '#about' },
  { label: '02. Projects', href: '#projects' },
  { label: '03. Work', href: '#work' },
]

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
    </svg>
  )
}

export default function Navbar({ dark, toggleDark, onContactClick }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-zinc-800/80 transition-colors duration-300">
      {/*
        Three-column flex layout:
          [logo]  →  flex-none, left-anchored
          [links] →  flex-1, centered in remaining space
          [actions] → flex-none, right-anchored
        Using px-8/lg:px-16/xl:px-24 with NO max-width cap so the bar
        always fills the full viewport edge-to-edge.
      */}
      <div className="w-full px-8 sm:px-10 lg:px-16 xl:px-24 h-16 flex items-center gap-4">

        {/* ── Logo ── */}
        <a
          href="#hero"
          className="flex-none font-bold text-base text-neutral-900 dark:text-zinc-50 tracking-tight hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          Fisher MW
        </a>

        {/* ── Center nav links (desktop) — fills space and stays centered ── */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="px-3.5 py-1.5 text-sm font-medium text-neutral-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 rounded-md transition-colors"
            >
              <span className="font-mono text-xs text-indigo-500 dark:text-indigo-400 mr-0.5">
                {label.split('.')[0]}.
              </span>
              {label.split('. ')[1]}
            </a>
          ))}
        </nav>

        {/* ── Right actions (desktop) ── */}
        <div className="hidden md:flex flex-none items-center gap-2 ml-auto">
          <a
            href="/personal/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 border border-indigo-400 dark:border-indigo-500 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors"
          >
            Resume ↗
          </a>
          <button
            onClick={onContactClick}
            className="px-4 py-1.5 text-sm font-semibold bg-indigo-600 dark:bg-indigo-500 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
          >
            Contact
          </button>
          <button
            onClick={toggleDark}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-500 dark:text-zinc-400 hover:bg-neutral-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* ── Mobile right ── */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <button onClick={toggleDark} aria-label="Toggle theme" className="w-8 h-8 flex items-center justify-center text-neutral-500 dark:text-zinc-400">
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="p-1.5 text-neutral-600 dark:text-zinc-400 hover:bg-neutral-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {open && (
        <div className="md:hidden bg-neutral-50 dark:bg-zinc-950 border-t border-neutral-200 dark:border-zinc-800 px-8 py-5 flex flex-col gap-3">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-sm font-medium text-neutral-600 dark:text-zinc-400 py-1">
              {label}
            </a>
          ))}
          <div className="border-t border-neutral-100 dark:border-zinc-800 pt-3 flex flex-col gap-2">
            <a href="/personal/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              Resume ↗
            </a>
            <button onClick={() => { onContactClick(); setOpen(false) }} className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 text-left">
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
