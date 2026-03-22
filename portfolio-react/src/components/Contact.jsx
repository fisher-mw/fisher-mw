import FadeIn from './FadeIn'

export default function Contact({ onContactClick }) {
  return (
    <section className="bg-white dark:bg-zinc-900 py-32 transition-colors duration-300">
      <div className="section-inner">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-mono text-sm text-indigo-500 dark:text-indigo-400 mb-3">
              04. What's Next?
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-zinc-50 mb-6">
              Get In Touch
            </h2>
            <p className="text-neutral-500 dark:text-zinc-400 leading-relaxed mb-10 text-lg">
              Whether you have an opportunity, a project idea, or just want to say
              hi — my inbox is always open.
            </p>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-indigo-500 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-semibold text-base hover:bg-indigo-50 dark:hover:bg-indigo-950/40 active:scale-95 transition-all"
            >
              Say Hello
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
