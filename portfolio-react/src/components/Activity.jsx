import { GitHubCalendar } from 'react-github-calendar'
import { useIsDark } from '../hooks/useIsDark'
import FadeIn from './FadeIn'

// Matches the neutral/zinc palette used throughout the portfolio
const calendarTheme = {
  light: [
    '#e5e5e5', // zinc-200 — no contribution
    '#c6e48b',
    '#7bc96f',
    '#239a3b',
    '#196127',
  ],
  dark: [
    '#27272a', // zinc-800 — no contribution
    '#0e4429',
    '#006d32',
    '#26a641',
    '#39d353',
  ],
}

export default function Activity() {
  const isDark = useIsDark()

  return (
    <section className="bg-neutral-50 dark:bg-zinc-950 py-24 transition-colors duration-300">
      <div className="section-inner">
        <FadeIn>
          <p className="font-mono text-sm text-indigo-500 dark:text-indigo-400 mb-2">
            GitHub Activity
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-zinc-50 mb-10">
            Contribution history
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          {/* overflow-x-auto so the calendar scrolls gracefully on small screens */}
          <div className="w-full overflow-x-auto pb-2">
            <GitHubCalendar
              username="fisher-mw"
              colorScheme={isDark ? 'dark' : 'light'}
              theme={calendarTheme}
              blockSize={14}
              blockMargin={4}
              blockRadius={3}
              fontSize={13}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
