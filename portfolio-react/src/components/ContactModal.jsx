import { useEffect, useRef, useState } from 'react'

const FORMSPREE_URL = 'https://formspree.io/f/mjgejrlk'

const inputCls =
  'w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 dark:border-zinc-600 bg-transparent text-neutral-900 dark:text-zinc-100 placeholder-neutral-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-500 dark:focus:border-indigo-400 transition'

export default function ContactModal({ isOpen, onClose }) {
  const [status, setStatus] = useState('idle')
  const overlayRef = useRef(null)

  useEffect(() => {
    if (isOpen) setStatus('idle')
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('success')
    }
  }

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-zinc-700 p-8 relative">

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-zinc-200 hover:bg-neutral-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-xl font-bold text-neutral-900 dark:text-zinc-50 mb-1">
          Get in touch
        </h2>
        <p className="text-sm text-neutral-500 dark:text-zinc-400 mb-6">
          I'll get back to you as soon as possible.
        </p>

        {status === 'success' ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-600 dark:text-green-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <p className="font-medium text-neutral-800 dark:text-zinc-200">Message sent!</p>
            <p className="text-sm text-neutral-500 dark:text-zinc-400 mt-1">Thanks for reaching out.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-5 text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-zinc-300 mb-1.5">Name</label>
              <input type="text" name="name" required className={inputCls} placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-zinc-300 mb-1.5">Email</label>
              <input type="email" name="email" required className={inputCls} placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-zinc-300 mb-1.5">Message</label>
              <textarea name="message" required rows={4} className={`${inputCls} resize-none`} placeholder="What's on your mind?" />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-500 dark:text-red-400">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-2.5 px-4 rounded-lg bg-indigo-600 dark:bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
