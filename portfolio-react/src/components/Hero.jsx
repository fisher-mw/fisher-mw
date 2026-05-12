import AnimatedText from './AnimatedText'
import FadeIn from './FadeIn'

export default function Hero({ onContactClick }) {
  return (
    // hero-bg puts the dot grid directly on this full-width section element
    <section id="hero" className="hero-bg relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">

      {/* Subtle gradient orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-indigo-200/40 via-purple-200/20 to-transparent dark:from-indigo-900/20 dark:via-purple-900/10 dark:to-transparent blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-pink-200/25 to-transparent dark:from-pink-900/10 dark:to-transparent blur-3xl" />

      <div className="section-inner relative w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <p className="font-mono text-sm text-indigo-500 dark:text-indigo-400 mb-3 tracking-wide">
                Hi, my name is
              </p>
            </FadeIn>

            <FadeIn delay={80}>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] mb-5">
                <span className="gradient-text">Fisher<br />Munson&#8209;Warnken.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={180}>
              <div className="mb-8">
                <AnimatedText />
              </div>
            </FadeIn>

            <FadeIn delay={280}>
              <p className="text-neutral-500 dark:text-zinc-400 text-base leading-relaxed max-w-lg mb-10">
                Computer Science & Statistics student at the University of British Columbia.
              </p>
            </FadeIn>

            <FadeIn delay={360}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 dark:bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-600 active:scale-95 transition-all shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/10"
                >
                  View My Work
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </a>
                <button
                  onClick={onContactClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-neutral-300 dark:border-zinc-600 text-neutral-700 dark:text-zinc-300 text-sm font-semibold hover:border-indigo-400 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 active:scale-95 transition-all"
                >
                  Get In Touch
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right: profile photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <FadeIn delay={120}>
              <div className="relative">
                {/* Glow blob */}
                <div aria-hidden="true" className="absolute inset-0 scale-[1.3] rounded-full bg-gradient-to-br from-indigo-400/30 via-purple-400/20 to-pink-400/15 dark:from-indigo-700/20 dark:via-purple-800/15 dark:to-pink-800/10 blur-2xl" />
                {/* Gradient border ring */}
                <div className="relative rounded-full p-[3px] bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                  <img
                    src="/personal/wab5enxgtchdbrlpavpc.avif"
                    alt="Fisher Munson-Warnken"
                    className="w-full h-full rounded-full object-cover object-top bg-neutral-200 dark:bg-zinc-800"
                  />
                </div>
                {/* Dashed outer ring */}
                <div aria-hidden="true" className="absolute inset-0 scale-[1.1] rounded-full border border-dashed border-indigo-300/50 dark:border-indigo-700/30 pointer-events-none" />
              </div>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-300 dark:text-zinc-700 animate-bounce">
        <div className="w-px h-8 bg-current" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  )
}
