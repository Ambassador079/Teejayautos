import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { BRAND, NAV } from '../data/EDIT_ME'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href) => {
    setOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, open ? 300 : 0)
  }

  const waUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMsg)}`

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/97 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.08)] border-b border-gold/15'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 h-[70px] flex items-center justify-between">

          {/* Logo */}
          <button onClick={() => go('#hero')} className="flex flex-col leading-none text-left">
            <span className={`font-serif font-semibold text-[15px] tracking-wide transition-colors duration-400 ${scrolled ? 'text-ink' : 'text-white'}`}>
              Teejay × Miso
            </span>
            <span className={`font-sans text-[8.5px] tracking-[0.38em] uppercase mt-[2px] transition-colors duration-400 ${scrolled ? 'text-gold' : 'text-gold-light'}`}>
              Premium Autos
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-9">
            {NAV.map(n => (
              <li key={n.href}>
                <button
                  onClick={() => go(n.href)}
                  className={`font-sans text-[11px] tracking-[0.26em] uppercase transition-colors duration-300 hover:text-gold ${scrolled ? 'text-ink' : 'text-white/90'}`}
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href={waUrl}
            target="_blank" rel="noopener noreferrer"
            className={`hidden lg:inline-flex items-center font-sans text-[10px] tracking-[0.26em] uppercase px-6 py-2.5 border transition-all duration-300 ${
              scrolled
                ? 'border-gold text-gold hover:bg-gold hover:text-ink'
                : 'border-white/60 text-white hover:bg-white hover:text-ink'
            }`}
          >
            Book Now
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(v => !v)}
            className={`lg:hidden p-1 transition-colors ${scrolled ? 'text-ink' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center gap-7"
          >
            {NAV.map((n, i) => (
              <motion.button
                key={n.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                onClick={() => go(n.href)}
                className="font-serif text-[38px] text-white hover:text-gold transition-colors"
              >
                {n.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 }}
              href={waUrl}
              target="_blank" rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 border border-gold text-gold font-sans text-[10px] tracking-[0.3em] uppercase px-10 py-3.5 hover:bg-gold hover:text-ink transition-all"
            >
              Book Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
