// ╔══════════════════════════════════════════════════════════════════╗
// ║  EDIT_ME.js  —  ALL your content lives here. Edit freely.       ║
// ║                                                                  ║
// ║  HOW TO USE YOUR OWN IMAGES:                                     ║
// ║  1. Put your image files inside the  /public/assets/  folder    ║
// ║  2. Reference them like this:  '/assets/your-photo.jpg'         ║
// ║  3. Or use any https:// URL from the internet                   ║
// ╚══════════════════════════════════════════════════════════════════╝

// ─── BRAND & CONTACT ─────────────────────────────────────────────
export const BRAND = {
  name: "Teejay × Miso Autos",
  tagline: "Arrive in Style. Move with Power.",
  sub: "Premium car rentals for comfort, class, and unforgettable experiences.",
  location: "Lead City, Ibadan · Lagos",
  phone: "+234 801 234 5678", // ← your phone
  phone2: "+234 901 234 5678", // ← second phone (delete line if not needed)
  email: "hello@teejaymisoautos.com",
  whatsapp: "2348012345678", // ← WhatsApp number digits only, no + or spaces
  whatsappMsg:
    "Hello! I'd like to book a premium car with Teejay Autos × Miso Autos.",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  twitter: "https://twitter.com/",
};

// ─── NAVIGATION ──────────────────────────────────────────────────
export const NAV = [
  { label: "Fleet", href: "#fleet" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

// ─── HERO BACKGROUND ─────────────────────────────────────────────
// To use your own image:  '/assets/hero.jpg'
export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&q=90";

// ─── FEATURED CARS ───────────────────────────────────────────────
export const CARS = [
  {
    id: 1,
    name: "Toyota Land Cruiser Prado",
    tag: "Luxury SUV",
    desc: "Commanding presence on every road — rugged capability wrapped in refined luxury.",
    // To use local image: '/assets/prado.jpg'
    image:
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&q=80",
  },
  {
    id: 2,
    name: "Mercedes-Benz GLE",
    tag: "Premium SUV",
    desc: "Athletic performance meets plush comfort — crafted for the discerning driver.",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
  },
  {
    id: 3,
    name: "Cadillac Escalade",
    tag: "Ultra Luxury SUV",
    desc: "Bold, spacious, unmistakably elite. The pinnacle of American grandeur.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
  },
  {
    id: 4,
    name: "Rolls-Royce Cullinan",
    tag: "Bespoke Luxury",
    desc: "Silence. Prestige. Perfection. A journey that needs no words.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
];

// ─── FLEET CATEGORIES ────────────────────────────────────────────
export const FLEET = [
  {
    id: 1,
    title: "Standard Rides",
    desc: "Reliable, comfortable vehicles for everyday journeys and airport transfers.",
    image: prado,
  },
  {
    id: 2,
    title: "Luxury Rides",
    desc: "Premium sedans and SUVs for elevated comfort — business or leisure.",
    image: gle,
  },
  {
    id: 3,
    title: "Group Rides",
    desc: "Spacious vehicles for executive teams, families, and special groups.",
    image: sp,
  },
  {
    id: 4,
    title: "Premium Luxury",
    desc: "Our finest — Rolls-Royce, Bentley, flagship vehicles for the extraordinary.",
    image: fl1,
  },
];

// ─── GALLERY ─────────────────────────────────────────────────────
// IMPORTANT: both 'image' (full) and 'thumb' (thumbnail) must point to a real image.
// If you only have one file per photo, just use the same path for both:
//   image: '/assets/g1.jpg',
//   thumb: '/assets/g1.jpg',
//
// 'tall: true' makes the card taller in the masonry grid (good for portrait photos).
// 'tall: false' makes a square card (good for landscape photos).

import fl1 from "../assets/cars/fle1.jpg";
import gle from "../assets/cars/450.jpg";
import glei from "../assets/cars/450i.jpg";
import esc from "../assets/cars/escalade.jpg";
import esci from "../assets/cars/escaladei.jpg";
import rr from "../assets/cars/cullina.jpg";
import rri from "../assets/cars/cullina.jpg";
import prado from "../assets/cars/prado.jpg";
import pradoi from "../assets/cars/pradoi.jpg";
import cb from "../assets/cars/coaster.jpg";
import cbi from "../assets/cars/coasteri.jpg";
import ph from "../assets/cars/phantom.jpg";
import phi from "../assets/cars/phatomi.jpg";
import sp from "../assets/cars/sprint.jpg";
import spi from "../assets/cars/sprinti.jpg";
import gh from "../assets/cars/ghost.jpg";
import ghi from "../assets/cars/ghosti.jpg";

import ts1 from "../assets/test/ts1.png";
import ts2 from "../assets/test/ts2.png";
import ts3 from "../assets/test/ts3.png";
import ts4 from "../assets/test/ts4.png";

export const GALLERY = [
  {
    id: 1,
    image: rri,
    thumb: rr,
    caption: "Rolls-Royce — The Art of Arrival",
    tall: true,
  },
  {
    id: 2,
    image: glei,
    thumb: gle,
    caption: "Mercedes-Benz GLE — Refined Power",
    tall: false,
  },
  {
    id: 3,
    image: esci,
    thumb: esc,
    caption: "Cadillac Escalade — Bold & Grand",
    tall: false,
  },
  {
    id: 4,
    image: cbi,
    thumb: cb,
    caption: "coaster bus",
    tall: true,
  },
  {
    id: 5,
    image: phi,
    thumb: ph,
    caption: "Night Drive — Luxury After Dark",
    tall: false,
  },
  {
    id: 6,
    image: pradoi,
    thumb: prado,
    caption: "Prado — Commanding Every Road",
    tall: false,
  },
  {
    id: 7,
    image: ghi,
    thumb: gh,
    caption: "Premium Fleet Ready",
    tall: true,
  },
  {
    id: 8,
    image: spi,
    thumb: sp,
    caption: "Elegance in Every Detail",
    tall: false,
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────
export const REVIEWS = [
  {
    id: 1,
    name: "Adebayo Okonkwo",
    role: "CEO · Lagos",
    text: "Teejay Autos redefined what a car rental should feel like. The Escalade arrived pristine, the driver was impeccably professional, and every detail was perfection.",
    avatar: ts1,
    stars: 5,
  },
  {
    id: 2,
    name: "Chidinma Eze",
    role: "Wedding Planner · Abuja",
    text: "We booked a fleet for a high-profile wedding in Ibadan. Spotless cars, responsive team, and guests were completely blown away. Truly luxury from start to finish.",
    avatar: ts2,
    stars: 5,
  },
  {
    id: 3,
    name: "Emmanuel Fashola",
    role: "Executive Director · Ibadan",
    text: "I've used many car services across Nigeria. Miso Autos stands in a class of its own. The GLE was flawless. This is how business travel should feel.",
    avatar: ts3,
    stars: 5,
  },
  {
    id: 4,
    name: "Fatima Al-Hassan",
    role: "Diplomat · Abuja",
    text: "For protocol-sensitive occasions, trust and quality are non-negotiable. Teejay × Miso delivered both. The Rolls-Royce arrangement was absolutely flawless.",
    avatar: ts4,
    stars: 5,
  },
  {
    id: 5,
    name: "Tunde Adesanya",
    role: "Music Executive · Lagos",
    text: "Style matters in my industry and these guys understand that completely. Every car is maintained to exceptional standard. Already recommended to my entire team.",
    avatar: ts1,
    stars: 5,
  },
];

// ─── ABOUT SECTION ───────────────────────────────────────────────
// To use your own image: '/assets/about.jpg'
export const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=900&q=85";

export const ABOUT = {
  heading: "More Than Cars — We Deliver Experiences",
  paragraphs: [
    "Teejay Autos × Miso Autos was built on one belief: every journey deserves to feel extraordinary. We are not just a rental company — we are curators of elite mobility.",
    "From Ibadan to Lagos and beyond, we serve executives, dignitaries, couples, and everyone who refuses ordinary. Our fleet is hand-selected. Our drivers are impeccably trained.",
    "When you choose us, you are not hiring a car. You are choosing to arrive differently.",
  ],
  stats: [
    { value: "5+", label: "Years of Excellence" },
    { value: "500+", label: "Happy Clients" },
    { value: "12+", label: "Premium Vehicles" },
    { value: "100%", label: "Satisfaction Rate" },
  ],
};

// ─── CTA BANNER BACKGROUND ───────────────────────────────────────
// To use your own image: '/assets/cta.jpg'
export const CTA_IMAGE =
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=85";

// ─── WHY CHOOSE US ────────────────────────────────────────────────
export const WHY = [
  {
    icon: "◆",
    title: "Professional Drivers",
    desc: "Trained, courteous, and discreet chauffeurs ensuring every journey is seamless and stress-free.",
  },
  {
    icon: "◈",
    title: "Immaculate Vehicles",
    desc: "Meticulously maintained, detailed, and inspected before every single booking. No exceptions.",
  },
  {
    icon: "◉",
    title: "Comfort Guaranteed",
    desc: "Premium interiors, climate control, and seamless comfort throughout your entire ride.",
  },
  {
    icon: "✦",
    title: "24/7 Availability",
    desc: "Whether dawn or midnight — luxury has no off-hours, and neither do we.",
  },
  {
    icon: "◇",
    title: "Discreet & Reliable",
    desc: "Privacy, punctuality, and professionalism are the pillars of every journey we undertake.",
  },
  {
    icon: "◎",
    title: "Tailored Experiences",
    desc: "Airport transfers to weddings — every service is personalised exactly to your needs.",
  },
];
