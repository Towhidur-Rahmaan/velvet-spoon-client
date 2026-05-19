import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Velvet Avenue", "Gulshan, Dhaka 1212"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+880 1234-567890", "+880 1987-654321"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@velvetspoon.com", "reservations@velvetspoon.com"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Daily: 10:00 AM – 11:00 PM", "Chef's Table: 7:00 PM"],
  },
];

const ContactPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury restaurant interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">
        {/* ================= HERO ================= */}
        <section className="px-6 pt-28 pb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.45em] text-amber-300"
          >
            Contact & Reservations
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight"
          >
            Let’s Create Your
            <span className="block text-amber-300">Perfect Evening</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-white/70"
          >
            Whether you’re planning an intimate dinner, a private celebration,
            or a corporate event, our team is here to craft an unforgettable
            experience.
          </motion.p>
        </section>

        {/* ================= CONTACT CARDS ================= */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-7xl grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-4xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-300">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>

                  <div className="mt-4 space-y-2 text-white/70 leading-7">
                    {item.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ================= CONTACT FORM + MAP ================= */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-10"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-amber-300">
                Send a Message
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                Get in Touch
              </h2>

              <form className="mt-8 space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none placeholder:text-white/40"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none placeholder:text-white/40"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none placeholder:text-white/40"
                />

                <textarea
                  rows="6"
                  placeholder="Tell us about your reservation or event..."
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none placeholder:text-white/40 resize-none"
                />

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-300 px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:scale-[1.02]"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </motion.div>

            {/* Map / CTA */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
                  alt="Dhaka city view"
                  className="h-105 w-full object-cover"
                />
              </div>

              {/* Reservation CTA */}
              <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.4em] text-amber-300">
                  Preferred Option
                </p>

                <h3 className="mt-4 text-3xl md:text-4xl font-semibold">
                  Reserve Your Table Online
                </h3>

                <p className="mt-4 leading-8 text-white/70">
                  For the fastest confirmation and priority seating, use our
                  immersive reservation system.
                </p>

                <NavLink
                  to="/reservations"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-300 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:scale-105"
                >
                  Book Your Experience
                  <ArrowRight className="h-4 w-4" />
                </NavLink>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
