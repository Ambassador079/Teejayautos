import { motion } from "framer-motion";
import { WHY } from "../data/EDIT_ME";
import useReveal from "../hooks/useReveal";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyUs() {
  const { ref, inView } = useReveal();

  return (
    <section className="py-24 lg:py-36 bg-ink-2 px-5 sm:px-8 xl:px-12 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-28 -right-28 w-72 h-72 border border-gold/8 rounded-full pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-16 -left-16 w-52 h-52 border border-gold/8 rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-4">
            <div className="h-px w-7 bg-gold flex-shrink-0" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">
              The Difference
            </span>
          </motion.div>
          <motion.h2
            variants={item}
            className="font-serif font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Why Choose{" "}
            <em className="text-gold-light font-semibold not-italic">Us</em>
          </motion.h2>
          <motion.p
            variants={item}
            className="font-mono text-white/50 text-lg mt-4 max-w-md leading-relaxed"
          >
            We built our reputation on one principle: every client deserves the
            very best.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {WHY.map((w, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative p-7 border border-white/6 transition-colors duration-500 hover:border-gold/30 overflow-hidden"
            >
              <div className="text-gold text-xl mb-5 select-none">{w.icon}</div>
              <h3 className="font-serif text-[18px] font-semibold text-white mb-3">
                {w.title}
              </h3>
              <p className="font-mono text-white/45 text-[15px] leading-relaxed">
                {w.desc}
              </p>
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gold transition-all duration-600" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
