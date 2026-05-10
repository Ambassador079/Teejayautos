import { motion } from "framer-motion";
import { FLEET } from "../data/EDIT_ME";
import useReveal from "../hooks/useReveal";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Fleet() {
  const { ref, inView } = useReveal();

  return (
    <section className="py-24 lg:py-36 bg-cream-2 px-5 sm:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-16 text-center"
        >
          <motion.div
            variants={item}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-7 bg-gold" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">
              Fleet Categories
            </span>
            <div className="h-px w-7 bg-gold" />
          </motion.div>
          <motion.h2
            variants={item}
            className="font-serif font-bold text-ink leading-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Choose Your <em className="font-normal italic">Experience</em>
          </motion.h2>
          <motion.p
            variants={item}
            className="font-mono text-stone text-lg mt-4 max-w-md mx-auto leading-relaxed"
          >
            From executive transfers to bespoke luxury — a vehicle for every
            occasion.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {FLEET.map((f) => (
            <motion.div
              key={f.id}
              variants={item}
              className="group relative overflow-hidden cursor-pointer"
              style={{ height: 340 }}
              whileHover={{ scale: 1.015, transition: { duration: 0.35 } }}
            >
              {/* Image fills entire card */}
              <img
                src={f.image}
                alt={f.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/25 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <h3 className="font-serif font-semibold text-white text-2xl sm:text-3xl mb-2">
                  {f.title}
                </h3>
                <p className="font-mono text-white font-bold text-[15px] leading-relaxed max-w-xs mb-5">
                  {f.desc}
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="h-px w-5 bg-gold" />
                  <span className="font-sans text-[9.5px] tracking-[0.3em] uppercase text-gold">
                    Explore
                  </span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 border-t-[34px] border-r-[34px] border-t-gold/25 border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
