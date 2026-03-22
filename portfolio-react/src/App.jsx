import { useState } from 'react'
import { useDarkMode } from './hooks/useDarkMode'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

export default function App() {
  const [dark, setDark] = useDarkMode()
  const [contactOpen, setContactOpen] = useState(false)

  return (
    // Each section manages its own full-width background.
    // No max-width wrapper here — that lives inside each section.
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar
        dark={dark}
        toggleDark={() => setDark((d) => !d)}
        onContactClick={() => setContactOpen(true)}
      />

      <Hero onContactClick={() => setContactOpen(true)} />
      <About />
      <Projects />
      <Work />
      <Contact onContactClick={() => setContactOpen(true)} />
      <Footer onContactClick={() => setContactOpen(true)} />

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}
