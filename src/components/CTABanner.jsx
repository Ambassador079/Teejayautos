import { motion } from 'framer-motion'
import { BRAND, CTA_IMAGE } from '../data/EDIT_ME'
import useReveal from '../hooks/useReveal'

const WA = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }
const item    = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }

export default function CTABanner() {
  const { ref, inView } = useReveal()
  const url = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMsg)}`

  return (
    <section className="relative py-36 sm:py-44 overflow-hidden">
      {/* BG image fills section */}
      <img src={CTA_IMAGE} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/82" />
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/4" />
      <div aria-hidden className="absolute inset-8 border border-white/5 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <motion.div variants={item} className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-8 bg-gold" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">The Experience Awaits</span>
            <div className="h-px w-8 bg-gold" />
          </motion.div>
          <motion.h2 variants={item} className="font-serif font-bold text-white leading-[1.04] mb-6"
            style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)' }}>
            Ready to Ride<br />
            <em className="text-gold-light font-semibold not-italic">in Luxury?</em>
          </motion.h2>
          <motion.p variants={item} className="font-mono text-white/58 leading-relaxed max-w-lg mx-auto mb-12"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }}>
            Every journey is a statement. Let yours speak volumes.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center justify-center bg-gold text-ink font-sans font-medium text-[10px] tracking-[0.3em] uppercase px-10 py-4
                hover:bg-gold-dark transition-all duration-350 hover:-translate-y-[2px] hover:shadow-[0_10px_32px_rgba(200,168,75,0.45)]"
            >
              Book Now
            </a>
            <a
              href={url}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-white/50 text-white font-sans font-medium text-[10px] tracking-[0.3em] uppercase px-10 py-4
                hover:bg-white hover:text-ink transition-all duration-350"
            >
              {WA} Chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
