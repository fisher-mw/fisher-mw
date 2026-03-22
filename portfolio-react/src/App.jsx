import { useState } from 'react'
import { useDarkMode } from './hooks/useDarkMode'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Work from './components/Work'
import Activity from './components/Activity'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

export default function App() {
  const [dark, setDark] = useDarkMode()
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-zinc-950 transition-colors duration-300">
      <Navbar
        dark={dark}
        toggleDark={() => setDark((d) => !d)}
        onContactClick={() => setContactOpen(true)}
      />

      <Hero onContactClick={() => setContactOpen(true)} />
      <About />
      <Projects />
      <Work />
      <Activity />
      <Contact onContactClick={() => setContactOpen(true)} />
      <Footer />

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}
