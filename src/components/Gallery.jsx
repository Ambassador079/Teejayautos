import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "../data/EDIT_ME";
import useReveal from "../hooks/useReveal";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Gallery() {
  const { ref, inView } = useReveal();
  const [sel, setSel] = useState(null);

  const nav = (d) => {
    const i = GALLERY.findIndex((g) => g.id === sel.id);
    setSel(GALLERY[(i + d + GALLERY.length) % GALLERY.length]);
  };

  return (
    <section
      id="gallery"
      className="py-24 lg:py-36 bg-cream px-5 sm:px-8 xl:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
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
              Gallery
            </span>
          </motion.div>
          <motion.h2
            variants={item}
            className="font-serif font-bold text-ink leading-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Our <em className="font-normal italic">Collection</em>
          </motion.h2>
          <motion.p
            variants={item}
            className="font-mono text-stone text-lg mt-4 max-w-md leading-relaxed"
          >
            Click any photo to view it in full.
          </motion.p>
        </motion.div>

        {/* ── GALLERY GRID ────────────────────────────────────────────
            Each card uses a fixed-height container with position:relative
            and the <img> is position:absolute inset-0 — this guarantees
            the thumbnail is ALWAYS fully visible regardless of image
            dimensions, local paths, or URL sources.
        ─────────────────────────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3"
        >
          {GALLERY.map((g) => (
            <motion.div
              key={g.id}
              variants={item}
              onClick={() => setSel(g)}
              className="group relative block w-full break-inside-avoid cursor-pointer overflow-hidden"
              style={{ height: g.tall ? 320 : 210 }}
              whileHover={{ opacity: 0.93 }}
            >
              {/* Thumbnail — always fills card */}
              <img
                src={g.thumb}
                alt={g.caption}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-600 group-hover:scale-[1.06]"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/38 transition-all duration-400" />
              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-350">
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white leading-tight">
                  {g.caption}
                </p>
              </div>
              {/* Plus icon */}
              <div className="absolute top-2 right-2 w-6 h-6 border border-white/55 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-350">
                <span className="text-white text-sm leading-none">+</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── LIGHTBOX ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {sel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black/96 flex items-center justify-center"
            onClick={() => setSel(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSel(null)}
              className="absolute top-5 right-5 text-white/55 hover:text-white transition-colors z-10"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nav(-1);
              }}
              className="absolute left-4 sm:left-7 text-white/50 hover:text-gold transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Image */}
            <motion.div
              key={sel.id}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center px-4"
              style={{ maxWidth: "min(900px, 92vw)" }}
            >
              <img
                src={sel.image}
                alt={sel.caption}
                className="w-full object-contain"
                style={{ maxHeight: "78vh" }}
              />
              <p className="font-sans text-[9.5px] tracking-[0.38em] uppercase text-gold mt-4">
                {sel.caption}
              </p>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nav(1);
              }}
              className="absolute right-4 sm:right-7 text-white/50 hover:text-gold transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
