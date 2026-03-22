import { courses, jobs } from '../data/work'
import FadeIn from './FadeIn'

export default function Work() {
  return (
    <section id="work" className="bg-slate-50 dark:bg-slate-900/50 py-28 transition-colors duration-300">
      <div className="section-inner">

        <FadeIn>
          <p className="font-mono text-sm text-indigo-500 dark:text-indigo-400 mb-2">03. Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-14">
            Experience & Education
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16">

          {/* ── Job history timeline ── */}
          <FadeIn delay={100}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-7">
                Work History
              </p>
              <ol className="relative border-l-2 border-slate-200 dark:border-slate-700 space-y-8 pl-6">
                {jobs.map((job, i) => (
                  <li key={i} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-[1.45rem] top-1.5 w-3 h-3 rounded-full border-2 border-indigo-400 dark:border-indigo-500 bg-white dark:bg-slate-900" />
                    <p className="text-base font-semibold text-slate-800 dark:text-slate-100 leading-snug">
                      {job.company}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      {job.role}
                    </p>
                    <p className="text-xs font-mono text-indigo-500 dark:text-indigo-400 mt-1">
                      {job.period}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>

          {/* ── Relevant coursework ── */}
          <FadeIn delay={200}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-7">
                Relevant Coursework
              </p>
              <ul className="space-y-1.5">
                {courses.map((course) => (
                  <li key={course.code}>
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all"
                    >
                      <span className="font-mono text-xs font-semibold text-indigo-500 dark:text-indigo-400 w-[4.5rem] shrink-0">
                        {course.code}
                      </span>
                      <span className="text-sm text-slate-700 dark:text-slate-300 flex-1">
                        {course.name}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 group-hover:text-indigo-400 transition-colors shrink-0"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
