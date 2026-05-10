import { motion } from 'framer-motion'
import { ABOUT, ABOUT_IMAGE } from '../data/EDIT_ME'
import useReveal from '../hooks/useReveal'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }
const item    = { hidden: { opacity: 0, y: 38 }, show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }

export default function About() {
  const { ref, inView } = useReveal()

  return (
    <section id="about" className="py-24 lg:py-36 bg-cream-2 px-5 sm:px-8 xl:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* Image column */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Fixed-height container — image always fills */}
          <div className="relative w-full overflow-hidden" style={{ height: 520 }}>
            <img
              src={ABOUT_IMAGE}
              alt="About Teejay Miso Autos"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
          {/* Decorative borders */}
          <div aria-hidden className="absolute -bottom-5 -right-5 w-28 h-28 border border-gold/40 pointer-events-none" />
          <div aria-hidden className="absolute -top-5 -left-5 w-20 h-20 border border-gold/20 pointer-events-none" />
          {/* Floating stat badge */}
          <div className="absolute bottom-8 left-8 bg-cream px-6 py-5 shadow-lg">
            <div className="font-serif text-4xl font-bold text-gold leading-none">5+</div>
            <div className="font-sans text-[8.5px] tracking-[0.32em] uppercase text-stone mt-1.5">Years of Excellence</div>
          </div>
        </motion.div>

        {/* Text column */}
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <motion.div variants={item} className="flex items-center gap-3 mb-5">
            <div className="h-px w-7 bg-gold flex-shrink-0" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">Our Story</span>
          </motion.div>
          <motion.h2 variants={item} className="font-serif font-bold text-ink leading-tight mb-8"
            style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}>
            {ABOUT.heading}
          </motion.h2>
          {ABOUT.paragraphs.map((p, i) => (
            <motion.p key={i} variants={item} className="font-mono text-stone text-[16px] leading-relaxed mb-4">
              {p}
            </motion.p>
          ))}

          <motion.div variants={item} className="my-8 h-px w-14 bg-gradient-to-r from-gold to-transparent" />

          <motion.div variants={item} className="grid grid-cols-2 gap-5">
            {ABOUT.stats.map(s => (
              <div key={s.label} className="border-l-2 border-gold/35 pl-4">
                <div className="font-serif text-3xl font-bold text-ink leading-none">{s.value}</div>
                <div className="font-sans text-[8.5px] tracking-[0.3em] uppercase text-stone mt-2">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
