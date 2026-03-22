import { useEffect, useRef, useState } from 'react'

const phrases = [
  'UBC Computer Science & Statistics Student.',
  'A developer building for digital wellness.',
  'UX/UI designer.',
  'Alpine skier, rock climber & BJJ athlete.',
  'Enjoyer of Random Forests (and Random Walks)',
]

export default function AnimatedText() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [chars, setChars] = useState([])
  const timeoutRef = useRef(null)

  useEffect(() => {
    const phrase = phrases[phraseIndex]
    const charList = phrase.split('').map((c, i) => ({ char: c, id: i }))
    setChars(charList)

    const displayDuration = 1400 + phrase.length * 60

    timeoutRef.current = setTimeout(() => {
      setPhraseIndex((i) => (i + 1) % phrases.length)
    }, displayDuration)

    return () => clearTimeout(timeoutRef.current)
  }, [phraseIndex])

  return (
    <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 min-h-[2rem] leading-relaxed">
      {chars.map(({ char, id }) => (
        <span
          key={`${phraseIndex}-${id}`}
          className="animated-char"
          style={{ animationDelay: `${id * 0.04}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </p>
  )
}
