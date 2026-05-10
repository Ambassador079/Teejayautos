import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BRAND, HERO_IMAGE } from '../data/EDIT_ME'

const waUrl = (b) => `https://wa.me/${b.whatsapp}?text=${encodeURIComponent(b.whatsappMsg)}`

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY    = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const textY  = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } } }
  const up = {
    hidden: { opacity: 0, y: 46 },
    show:   { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    // Full-screen — no padding-top — navbar is transparent and floats over this
    <section id="hero" ref={ref} className="relative w-full overflow-hidden" style={{ height: '100dvh', minHeight: 680 }}>

      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-full" aria-hidden>
        <img
          src={HERO_IMAGE}
          alt="Luxury car"
          className="w-full h-full object-cover object-center"
          style={{ transform: 'scale(1.12)' }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 to-transparent" />
      </motion.div>

      {/* Thin gold accent lines */}
      <div aria-hidden className="absolute left-6 sm:left-14 top-1/4 h-32 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
      <div aria-hidden className="absolute right-6 sm:right-14 bottom-32 h-20 w-px bg-gradient-to-b from-transparent via-gold/35 to-transparent" />

      {/* Text content — anchored to bottom */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full flex items-end"
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 xl:px-16 pb-20 sm:pb-28">
          <motion.div variants={stagger} initial="hidden" animate="show">

            {/* Location pill */}
            <motion.div variants={up} className="flex items-center gap-3 mb-7">
              <div className="h-px w-8 bg-gold flex-shrink-0" />
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-light">{BRAND.location}</span>
            </motion.div>

            {/* H1 — two lines */}
            <motion.h1 variants={up} className="font-serif font-bold text-white leading-[1.04] mb-8"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 5.4rem)' }}>
              Arrive in Style.<br />
              <em className="text-gold-light font-semibold not-italic">Move with Power.</em>
            </motion.h1>

            <motion.p variants={up}
              className="font-mono text-white/75 leading-relaxed mb-10 max-w-lg"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }}>
              {BRAND.sub}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={up} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center justify-center bg-gold text-ink font-sans font-medium text-[10px] tracking-[0.3em] uppercase px-9 py-4
                  hover:bg-gold-dark transition-all duration-350 hover:-translate-y-[2px] hover:shadow-[0_10px_32px_rgba(200,168,75,0.45)]"
              >
                Book Now
              </a>
              <a
                href={waUrl(BRAND)}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/55 text-white font-sans font-medium text-[10px] tracking-[0.3em] uppercase px-9 py-4
                  hover:bg-white hover:text-ink transition-all duration-350"
              >
                Send a Message
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={up} className="flex gap-10 mt-14">
              {[['500+', 'Trips'], ['12+', 'Cars'], ['24/7', 'Service']].map(([v, l]) => (
                <div key={l}>
                  <div className="font-serif text-2xl font-bold text-gold leading-none">{v}</div>
                  <div className="font-sans text-[9px] tracking-[0.35em] uppercase text-white/40 mt-1">{l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden
      >
        <span className="font-sans text-[8px] tracking-[0.45em] uppercase text-white/35">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
