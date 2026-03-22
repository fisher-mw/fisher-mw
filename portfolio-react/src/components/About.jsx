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
  { label: 'Python' },
  { label: 'Java' },
  { label: 'R' },
  { label: 'JavaScript' },
  { label: 'React' },
  { label: 'React Native' },
  { label: 'Firebase' },
  { label: 'Pandas' },
  { label: 'Scikit-Learn' },
  { label: 'Figma' },
  { label: 'Git' },
  { label: 'Tailwind CSS' },
]

export default function About() {
  return (
    <section id="about" className="bg-slate-50 dark:bg-slate-900/50 py-28 transition-colors duration-300">
      <div className="section-inner">

        <FadeIn>
          <p className="font-mono text-sm text-indigo-500 dark:text-indigo-400 mb-2">01. About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-14">
            A little about me
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-14 items-start">

          {/* ── Left: bio + skills ── */}
          <div className="lg:col-span-2">
            <FadeIn delay={100}>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  I'm a software developer, UX designer, and aspiring mathematician
                  studying <span className="text-slate-800 dark:text-slate-200 font-medium">Computer Science and Statistics at UBC</span>. My
                  coursework spans statistical methods, computer systems, applied linear
                  algebra, and machine learning.
                </p>
                <p>
                  I'm currently building{' '}
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">Release</span>
                  {' '}— a mobile app dedicated to reducing passive screen time. Started as
                  React + Firebase, now migrating to fully native code ahead of App Store
                  and Play Store launches.
                </p>
                <p>
                  Outside of tech I'm into powerlifting, skiing, climbing, and Brazilian
                  jiu-jitsu. I enjoy reading, films, and strategy games (chess, MtG, Catan).
                </p>
              </div>

              {/* Skills */}
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map(({ label }) => (
                    <span
                      key={label}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── Right: flowing photo mosaic ── */}
          <div className="lg:col-span-3">
            <FadeIn delay={200}>
              {/* CSS masonry via columns — images render at their natural aspect ratio */}
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
