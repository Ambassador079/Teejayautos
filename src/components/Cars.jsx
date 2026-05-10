import { motion } from 'framer-motion'
import { CARS, BRAND } from '../data/EDIT_ME'
import useReveal from '../hooks/useReveal'

const waUrl = (b) => `https://wa.me/${b.whatsapp}?text=${encodeURIComponent(b.whatsappMsg)}`

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }
const item    = { hidden: { opacity: 0, y: 48 }, show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }

export default function Cars() {
  const { ref, inView } = useReveal()

  return (
    <section id="fleet" className="py-24 lg:py-36 bg-cream px-5 sm:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'} className="mb-16">
          <motion.div variants={item} className="flex items-center gap-3 mb-4">
            <div className="h-px w-7 bg-gold flex-shrink-0" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">Our Fleet</span>
          </motion.div>
          <motion.h2 variants={item} className="font-serif font-bold text-ink leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
            Featured <em className="font-normal italic">Vehicles</em>
          </motion.h2>
          <motion.p variants={item} className="font-mono text-stone text-lg mt-4 max-w-md leading-relaxed">
            Every car in our collection is maintained to the highest standard — because you deserve nothing less.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {CARS.map(car => (
            <motion.article
              key={car.id}
              variants={item}
              whileHover={{ y: -7, transition: { duration: 0.3 } }}
              className="group bg-cream-2 overflow-hidden"
            >
              {/* Image container — fixed height so image always fills it */}
              <div className="relative w-full overflow-hidden" style={{ height: 220 }}>
                <img
                  src={car.image}
                  alt={car.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.07]"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Tag badge */}
                <span className="absolute top-3 left-3 bg-ink/85 text-gold font-sans text-[8.5px] tracking-[0.28em] uppercase px-2.5 py-1">
                  {car.tag}
                </span>
                {/* Enquire button appears on hover */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-350">
                  <a
                    href={waUrl(BRAND)}
                    target="_blank" rel="noopener noreferrer"
                    className="font-sans text-[9px] tracking-[0.28em] uppercase text-white border border-white/65 px-4 py-2 hover:bg-white hover:text-ink transition-all duration-300"
                  >
                    Enquire
                  </a>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 border-b border-gold/20">
                <h3 className="font-serif font-semibold text-ink text-[17px] leading-snug mb-2">{car.name}</h3>
                <p className="font-mono text-stone text-sm leading-relaxed">{car.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
