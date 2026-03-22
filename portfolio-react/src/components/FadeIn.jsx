import { useEffect, useRef, useState } from 'react'

export default function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {
        // Only fire when the element is at least 60px past the bottom of the
        // viewport — so items don't animate before the user sees them.
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.01,
      },
    )
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        visible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-[0.97]'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
