import { Instagram, Facebook, Twitter } from "lucide-react";
import { BRAND, NAV } from "../data/EDIT_ME";

export default function Footer() {
  const yr = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] pt-20 pb-10 px-5 sm:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-14 border-b border-white/8">
          {/* Brand */}
          <div>
            <div className="font-serif font-semibold text-xl text-white leading-none mb-0.5">
              Teejay × Miso
            </div>
            <div className="font-sans text-[8.5px] tracking-[0.4em] uppercase text-gold mb-6 mt-0.5">
              Premium Autos
            </div>
            <p className="font-mono text-white text-sm leading-relaxed max-w-[260px]">
              Redefining luxury car rentals in Ibadan, Lagos, and beyond.
              Because how you arrive is part of the experience.
            </p>
            <div className="flex gap-3 mt-8">
              {[
                { Icon: Instagram, href: BRAND.instagram },
                { Icon: Facebook, href: BRAND.facebook },
                { Icon: Twitter, href: BRAND.twitter },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9   flex items-center justify-center text-white
                    hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-sans text-[9px] tracking-[0.4em] uppercase text-gold mb-6">
              Quick Links
            </div>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="font-mono text-white hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-gold/55 hover:text-gold transition-colors duration-300 text-sm"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-sans text-[9px] tracking-[0.4em] uppercase text-gold mb-6">
              Contact
            </div>
            <div className="space-y-5">
              {[
                { lbl: "Phone", val: BRAND.phone, href: `tel:${BRAND.phone}` },
                { lbl: "Location", val: BRAND.location, href: null },
                {
                  lbl: "Email",
                  val: BRAND.email,
                  href: `mailto:${BRAND.email}`,
                },
              ].map((r) => (
                <div key={r.lbl}>
                  <div className="font-sans text-[8px] tracking-widest uppercase text-white mb-1">
                    {r.lbl}
                  </div>
                  {r.href ? (
                    <a
                      href={r.href}
                      className="font-mono text-white hover:text-gold transition-colors text-sm"
                    >
                      {r.val}
                    </a>
                  ) : (
                    <div className="font-mono text-white text-sm">{r.val}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-sans text-[9px] tracking-widest uppercase text-white">
            © {yr} Teejay Autos × Miso Autos. All rights reserved.
          </span>
          <span className="font-mono italic text-white text-sm">
            Luxury is not a price — it is an experience.
          </span>
        </div>
      </div>
    </footer>
  );
}
