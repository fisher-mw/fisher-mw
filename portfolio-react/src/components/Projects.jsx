import { projects } from '../data/projects'
import FadeIn from './FadeIn'

function Tag({ label }) {
  return (
    <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/60">
      {label}
    </span>
  )
}

function TrophyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
      <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 000 4.5h9.75a2.25 2.25 0 000-4.5h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.798 49.798 0 00-6.093-.377.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  )
}

function FeaturedProject({ project, index }) {
  const flip = index % 2 === 1

  return (
    <FadeIn delay={index * 150}>
      <article className="group grid lg:grid-cols-5 rounded-2xl overflow-hidden border border-neutral-200 dark:border-zinc-700/60 bg-white dark:bg-zinc-800/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-neutral-200/60 dark:hover:shadow-zinc-950/60 transition-all duration-500">

        {/* Image — 3 cols */}
        <div className={`relative lg:col-span-3 h-64 sm:h-80 lg:h-auto overflow-hidden bg-neutral-100 dark:bg-zinc-800 ${flip ? 'lg:order-last' : ''}`}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Content — 2 cols */}
        <div className={`lg:col-span-2 flex flex-col justify-center p-8 lg:p-10 ${flip ? 'lg:order-first' : ''}`}>
          <p className="font-mono text-xs text-indigo-500 dark:text-indigo-400 mb-2 uppercase tracking-wider">
            Featured Project
          </p>

          {project.award && (
            <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-medium mb-3">
              <TrophyIcon />
              <span>{project.award}</span>
            </div>
          )}

          <h3 className="text-2xl font-bold text-neutral-900 dark:text-zinc-50 mb-4">
            {project.title}
          </h3>

          <p className="text-sm text-neutral-500 dark:text-zinc-400 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            {project.linkLabel}
            <ExternalLinkIcon />
          </a>
        </div>
      </article>
    </FadeIn>
  )
}

function ProjectCard({ project, index }) {
  return (
    <FadeIn delay={index * 120}>
      <article className="group flex flex-col h-full bg-white dark:bg-zinc-800/40 rounded-2xl border border-neutral-200 dark:border-zinc-700/60 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-200/50 dark:hover:shadow-zinc-950/50 transition-all duration-300">
        <div className="overflow-hidden h-48 bg-neutral-100 dark:bg-zinc-800 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${project.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'}`}
            style={{ objectPosition: project.imagePosition || 'center', transform: project.imageScale ? `scale(${project.imageScale})` : undefined }}
          />
        </div>
        <div className="flex flex-col flex-1 p-6 gap-3">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-zinc-50">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-500 dark:text-zinc-400 leading-relaxed flex-1">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline mt-1"
          >
            {project.linkLabel} <ExternalLinkIcon />
          </a>
        </div>
      </article>
    </FadeIn>
  )
}

export default function Projects() {
  const featured = projects.slice(0, 1)
  const others = projects.slice(1)

  return (
    <section id="projects" className="py-28 bg-neutral-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="section-inner">
        <FadeIn>
          <p className="font-mono text-sm text-indigo-500 dark:text-indigo-400 mb-2">02. Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-zinc-50 mb-14">
            Things I've built
          </h2>
        </FadeIn>

        <div className="space-y-8 mb-12">
          {featured.map((p, i) => <FeaturedProject key={p.id} project={p} index={i} />)}
        </div>
      </div>

      {others.length > 0 && (
        <>
          <div className="px-6 sm:px-10 lg:px-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn className="sm:col-span-2 lg:col-span-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400 dark:text-zinc-500 mb-6">
                Other Noteworthy Projects
              </p>
            </FadeIn>
            {others.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        </>
      )}
    </section>
  )
}
