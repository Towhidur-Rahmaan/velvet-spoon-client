// src/components/Footer.jsx

import { NavLink } from "react-router-dom";
import { Globe, MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  Experience: [
    { name: "Signature Menu", to: "/menu" },
    { name: "Chef's Journey", to: "/about" },
    { name: "Reservations", to: "/reservations" },
    { name: "Private Events", to: "/events" },
  ],
  Discover: [
    { name: "Gallery", to: "/gallery" },
    { name: "Velvet Society", to: "/membership" },
    { name: "Seasonal Stories", to: "/menu" },
    { name: "Gift Experiences", to: "/gift-cards" },
  ],
  Company: [
    { name: "Our Story", to: "/about" },
    { name: "Contact", to: "/contact" },
    { name: "Careers", to: "/careers" },
    { name: "Press", to: "/press" },
  ],
};

// Using Globe for all social icons to avoid lucide export issues.
const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_55%)]" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black to-black" />

      {/* Newsletter / CTA */}
      <section className="relative px-6 pt-24 pb-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] border border-white/10 bg-white/4 p-8 md:p-12 backdrop-blur-2xl"
          >
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-amber-300">
                  Velvet Society
                </p>

                <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                  Join Our World of
                  <span className="block text-amber-300">
                    Exclusive Experiences
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-gray-300 leading-8">
                  Receive chef&apos;s table invitations, seasonal tasting
                  previews, and priority reservation access.
                </p>
              </div>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-full border border-white/10 bg-black/50 px-6 py-4 text-white outline-none placeholder:text-white/40"
                />

                <button className="w-full rounded-full bg-amber-300 px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:scale-[1.02]">
                  Join Velvet Society
                </button>

                <p className="text-xs text-white/40">
                  Invitations only. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer */}
      <section className="relative px-6 pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <NavLink
                to="/"
                className="inline-block text-3xl font-semibold tracking-[0.25em] text-amber-300"
              >
                Velvet Spoon
              </NavLink>

              <p className="mt-6 max-w-md text-gray-400 leading-8">
                An immersive dining destination where culinary craftsmanship,
                cinematic ambiance, and unforgettable storytelling converge.
              </p>

              {/* Social Icons */}
              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-xl transition hover:border-amber-300/30 hover:bg-amber-300/10 hover:text-amber-300"
                  >
                    <Globe className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-10">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-white/40">
                    {title}
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <NavLink
                          to={link.to}
                          className="group inline-flex items-center gap-2 text-gray-300 transition hover:text-amber-300"
                        >
                          {link.name}
                          <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3 space-y-5">
              <h3 className="text-sm uppercase tracking-[0.3em] text-white/40">
                Visit Us
              </h3>

              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                  <p>123 Velvet Avenue, Gulshan, Dhaka</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-amber-300" />
                  <p>+880 1234-567890</p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-amber-300" />
                  <p>hello@velvetspoon.com</p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                  <p>
                    Open daily
                    <br />
                    10:00 AM – 11:00 PM
                  </p>
                </div>
              </div>

              <NavLink
                to="/reservations"
                className="inline-block rounded-full bg-amber-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:scale-[1.03]"
              >
                Book Your Experience
              </NavLink>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Velvet Spoon. Crafted for unforgettable evenings.</p>

            <div className="flex flex-wrap gap-6">
              <NavLink to="/privacy" className="hover:text-white">
                Privacy Policy
              </NavLink>
              <NavLink to="/terms" className="hover:text-white">
                Terms of Service
              </NavLink>
              <NavLink to="/cookies" className="hover:text-white">
                Cookie Preferences
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
