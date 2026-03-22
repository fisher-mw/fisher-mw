import FadeIn from './FadeIn'

const hobbyImages = [
  { src: '/personal/cfxncopa4zhuypdkbrfo.avif', alt: 'Skiing' },
  { src: '/personal/muh8zmum7oe8kkd2w3n5.avif', alt: 'Hiking' },
  { src: '/personal/esatyb3wtwpjjpvb7nty.avif', alt: 'Climbing' },
  { src: '/personal/qvylmpn3dcqqmvhabof1.avif', alt: 'Kayaking' },
  { src: '/personal/m8tm2nmbkdxmdmwy1glr.avif', alt: 'Outdoors' },
  { src: '/personal/vlhkectsdslvmp4ki1i7.avif', alt: 'Workstation' },
]

const skills = [
  'Python', 'Java', 'C/C++', 'R', 'JavaScript',
  'React',  'Pandas', 'Scikit-Learn', 'Figma', 'Git', 'Tailwind CSS'
]

export default function About() {
  return (
    // Alternates with hero: white / zinc-900
    <section id="about" className="bg-white dark:bg-zinc-900 py-28 transition-colors duration-300">
      <div className="section-inner">

        <FadeIn>
          <p className="font-mono text-sm text-indigo-500 dark:text-indigo-400 mb-2">01. About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-zinc-50 mb-14">
            A little about me
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-14 items-start">

          {/* Bio + skills */}
          <div className="lg:col-span-2">
            <FadeIn delay={100}>
              <div className="space-y-4 text-neutral-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  I'm a software developer, UX designer, and aspiring mathematician
                  studying <span className="text-neutral-800 dark:text-zinc-200 font-medium">Computer Science and Statistics at UBC</span>.
                  My coursework spans statistical methods, computer systems, applied
                  linear algebra, and machine learning.
                </p>
                <p>
                  I'm currently building{' '}
                  <span className="text-neutral-800 dark:text-zinc-200 font-semibold">Release</span>
                  , an app designed to promote the act of disconnecting from our phones through social reinforcement.  
                </p>
                <p>
                  Outside of tech I'm into powerlifting, skiing, climbing, and Brazilian
                  jiu-jitsu. I enjoy reading, films, and strategy games (chess, MtG, Catan).
                </p>
              </div>

              <div className="mt-8">
                <div className="flex flex-wrap gap-2">
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Flowing masonry photo grid */}
          <div className="lg:col-span-3">
            <FadeIn delay={200}>
              <div className="columns-2 md:columns-3 gap-3 space-y-3">
                {hobbyImages.map(({ src, alt }) => (
                  <div key={alt} className="break-inside-avoid overflow-hidden rounded-2xl group">
                    <img
                      src={src}
                      alt={alt}
                      loading="lazy"
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
