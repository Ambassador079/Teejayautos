import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Send } from "lucide-react";
import { BRAND } from "../data/EDIT_ME";
import useReveal from "../hooks/useReveal";

const WA = (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 flex-shrink-0"
    aria-hidden
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 38 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Contact() {
  const { ref, inView } = useReveal();
  const [f, setF] = useState({ name: "", phone: "", service: "", message: "" });

  const ch = (e) => setF((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const msg = `Hello! Booking enquiry:%0AName: ${f.name}%0APhone: ${f.phone}%0AService: ${f.service}%0AMessage: ${f.message}`;
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${msg}`, "_blank");
  };

  const INFO = [
    {
      icon: <Phone size={16} />,
      label: "Phone",
      val: BRAND.phone,
      href: `tel:${BRAND.phone}`,
      sub: BRAND.phone2,
    },
    {
      icon: <MapPin size={16} />,
      label: "Location",
      val: BRAND.location,
      href: null,
    },
    {
      icon: <Mail size={16} />,
      label: "Email",
      val: BRAND.email,
      href: `mailto:${BRAND.email}`,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 lg:py-36 bg-cream px-5 sm:px-8 xl:px-12"
    >
      <div className="max-w-7xl mx-auto">
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
              Get In Touch
            </span>
          </motion.div>
          <motion.h2
            variants={item}
            className="font-serif font-bold text-ink leading-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Let's Plan Your <em className="font-normal italic">Ride</em>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-9"
          >
            {INFO.map((row, i) => (
              <motion.div
                key={i}
                variants={item}
                className="flex gap-5 items-start"
              >
                <div className="w-11 h-11 border border-gold/35 flex items-center justify-center text-gold flex-shrink-0">
                  {row.icon}
                </div>
                <div>
                  <div className="font-sans text-[9px] tracking-[0.38em] uppercase text-gold mb-1.5">
                    {row.label}
                  </div>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="font-serif text-[17px] text-ink hover:text-gold transition-colors"
                    >
                      {row.val}
                    </a>
                  ) : (
                    <div className="font-serif text-[17px] text-ink">
                      {row.val}
                    </div>
                  )}
                  {row.sub && (
                    <div className="font-mono text-stone text-sm mt-0.5">
                      {row.sub}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div variants={item}>
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white font-sans font-medium text-[10px] tracking-[0.28em] uppercase px-8 py-4
                  hover:bg-[#1cb558] transition-colors duration-300"
              >
                {WA} Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 55 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <form onSubmit={submit} className="space-y-5" noValidate>
              {[
                {
                  name: "name",
                  label: "Full Name",
                  type: "text",
                  ph: "Your full name",
                },
                {
                  name: "phone",
                  label: "Phone / WhatsApp",
                  type: "tel",
                  ph: "+234 800 000 0000",
                },
                {
                  name: "service",
                  label: "Service Type",
                  type: "text",
                  ph: "Airport Transfer · Wedding · Event · Corporate",
                },
              ].map((fd) => (
                <div key={fd.name}>
                  <label
                    htmlFor={fd.name}
                    className="block font-sans text-[9px] tracking-[0.38em] uppercase text-stone mb-2"
                  >
                    {fd.label}
                  </label>
                  <input
                    id={fd.name}
                    type={fd.type}
                    name={fd.name}
                    value={f[fd.name]}
                    onChange={ch}
                    placeholder={fd.ph}
                    required
                    className="w-full bg-transparent border border-ink/18 px-4 py-3.5 font-mono text-ink text-[15px]
                      placeholder-stone/38 focus:outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="block font-sans text-[9px] tracking-[0.38em] uppercase text-stone mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={f.message}
                  onChange={ch}
                  placeholder="Tell us about your occasion, preferred dates, and any requirements..."
                  className="w-full bg-transparent border border-ink/18 px-4 py-3.5 font-mono text-ink text-[15px]
                    placeholder-stone/38 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2.5 bg-ink text-white font-sans font-medium text-[10px] tracking-[0.3em] uppercase py-4
                  hover:bg-gold hover:text-ink transition-all duration-400"
              >
                <Send size={13} aria-hidden /> Send Enquiry via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
