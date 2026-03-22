import { courses, jobs } from '../data/work'
import FadeIn from './FadeIn'

export default function Work() {
  return (
    <section id="work" className="bg-white dark:bg-zinc-900 py-28 transition-colors duration-300">
      <div className="section-inner">

        <FadeIn>
          <p className="font-mono text-sm text-indigo-500 dark:text-indigo-400 mb-2">03. Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-zinc-50 mb-14">
            Experience & Education
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Job timeline */}
          <FadeIn delay={100}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-zinc-500 mb-7">
                Work History
              </p>
              <ol className="relative border-l-2 border-neutral-200 dark:border-zinc-700 space-y-8 pl-6">
                {jobs.map((job, i) => (
                  <li key={i} className="relative">
                    <div className="absolute -left-[1.45rem] top-1.5 w-3 h-3 rounded-full border-2 border-indigo-400 dark:border-indigo-500 bg-white dark:bg-zinc-900" />
                    <p className="text-base font-semibold text-neutral-800 dark:text-zinc-100">
                      {job.company}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-zinc-400 mt-0.5">
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

          {/* Coursework */}
          <FadeIn delay={200}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-zinc-500 mb-7">
                Relevant Coursework
              </p>
              <ul className="space-y-1.5">
                {courses.map((course) => (
                  <li key={course.code}>
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 py-2.5 px-3 rounded-xl border border-transparent hover:bg-neutral-50 dark:hover:bg-zinc-800 hover:border-neutral-200 dark:hover:border-zinc-700 transition-all"
                    >
                      <span className="font-mono text-xs font-semibold text-indigo-500 dark:text-indigo-400 w-[4.5rem] shrink-0">
                        {course.code}
                      </span>
                      <span className="text-sm text-neutral-700 dark:text-zinc-300 flex-1">
                        {course.name}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-neutral-300 dark:text-zinc-600 group-hover:text-indigo-400 transition-colors shrink-0">
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
