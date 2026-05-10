import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { REVIEWS } from '../data/EDIT_ME'
import useReveal from '../hooks/useReveal'

export default function Reviews() {
  const { ref, inView } = useReveal()
  const [cur, setCur] = useState(0)
  const [dir, setDir] = useState(1)

  const next = useCallback(() => { setDir(1); setCur(c => (c + 1) % REVIEWS.length) }, [])
  const prev = useCallback(() => { setDir(-1); setCur(c => (c - 1 + REVIEWS.length) % REVIEWS.length) }, [])

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next])

  const variants = {
    enter:  d => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
    exit:   d => ({ opacity: 0, x: d > 0 ? -80 : 80, transition: { duration: 0.3 } }),
  }

  const t = REVIEWS[cur]

  return (
    <section id="reviews" className="py-24 lg:py-36 bg-ink px-5 sm:px-8 xl:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-7 bg-gold" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">Testimonials</span>
            <div className="h-px w-7 bg-gold" />
          </div>
          <h2 className="font-serif font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
            Words from Our <em className="text-gold-light font-normal italic">Clients</em>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div aria-hidden className="absolute -top-8 -left-2 font-serif text-[110px] leading-none text-gold/8 select-none pointer-events-none">"</div>

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={t.id}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-center px-2 sm:px-16"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-gold text-[13px]">★</span>
                ))}
              </div>

              <blockquote className="font-mono text-white/88 italic leading-relaxed mb-10"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)' }}>
                "{t.text}"
              </blockquote>

              <div className="flex flex-col items-center gap-3">
                {/* Avatar — fixed size container */}
                <div className="relative rounded-full overflow-hidden border-2 border-gold/30 flex-shrink-0" style={{ width: 52, height: 52 }}>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="font-serif text-[15px] font-semibold text-white">{t.name}</div>
                  <div className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <button onClick={prev} className="text-white/38 hover:text-white transition-colors" aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2 items-center">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > cur ? 1 : -1); setCur(i) }}
                  className={`h-1 rounded-full transition-all duration-400 ${i === cur ? 'w-7 bg-gold' : 'w-2 bg-white/20'}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="text-white/38 hover:text-white transition-colors" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
