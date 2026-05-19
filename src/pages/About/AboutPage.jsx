import { motion } from "framer-motion";
import {
  Award,
  ChefHat,
  Sparkles,
  Wine,
  Users,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const stats = [
  { label: "Years of Excellence", value: "12+" },
  { label: "Signature Dishes", value: "48" },
  { label: "Global Awards", value: "9" },
  { label: "Satisfied Guests", value: "25K+" },
];

const values = [
  {
    icon: ChefHat,
    title: "Culinary Artistry",
    description:
      "Every dish is designed with precision, emotion, and storytelling.",
  },
  {
    icon: Sparkles,
    title: "Immersive Ambiance",
    description:
      "A cinematic atmosphere where every detail enhances the experience.",
  },
  {
    icon: Wine,
    title: "Curated Pairings",
    description:
      "Exclusive beverages crafted to complement every tasting journey.",
  },
  {
    icon: Users,
    title: "Personal Hospitality",
    description:
      "Each guest receives tailored service and unforgettable attention.",
  },
];

const awards = [
  "Michelin Inspired Dining",
  "Luxury Lifestyle Award",
  "Best Fine Dining Concept",
  "Chef's Table Recognition",
];

const AboutPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/about-bg.jpg"
          alt="Velvet Spoon Interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.12),transparent_60%)]" />
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
            Our Story
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight"
          >
            Crafted for
            <span className="block text-amber-300">Unforgettable Evenings</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-white/70"
          >
            Velvet Spoon is more than a restaurant. It is an immersive culinary
            destination where artistry, ambiance, and storytelling come together
            to create extraordinary dining moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <NavLink
              to="/reservations"
              className="rounded-full bg-amber-300 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:scale-105"
            >
              Reserve Your Table
            </NavLink>

            <NavLink
              to="/menu"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-amber-300/30 hover:text-amber-300"
            >
              Explore Menu
            </NavLink>
          </motion.div>
        </section>

        {/* ================= STATS ================= */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-7xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 text-center"
              >
                <div className="text-4xl md:text-5xl font-semibold text-amber-300">
                  {stat.value}
                </div>
                <p className="mt-3 text-sm uppercase tracking-[0.25em] text-white/50">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= STORY SECTION ================= */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=80z"
                alt="Chef at work"
                className="w-full rounded-[2.5rem] object-cover shadow-2xl"
              />

              <div className="absolute -bottom-6 -right-6 rounded-3xl border border-white/10 bg-black/70 backdrop-blur-2xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                  Since 2014
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Redefining Fine Dining
                </p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-amber-300">
                Philosophy
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                Every Detail Tells a Story
              </h2>

              <p className="mt-6 leading-9 text-white/70">
                Inspired by world-class hospitality and modern gastronomy,
                Velvet Spoon transforms every dinner into a curated experience.
                From handcrafted tasting menus to cinematic interiors, every
                moment is designed to awaken the senses.
              </p>

              <p className="mt-6 leading-9 text-white/70">
                Our chefs blend seasonal ingredients, innovative techniques, and
                artistic presentation to create dishes that are as memorable as
                they are delicious.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= VALUES ================= */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.4em] text-amber-300">
                What Defines Us
              </p>
              <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
                The Velvet Standard
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-300">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold">
                      {value.title}
                    </h3>

                    <p className="mt-4 leading-8 text-white/60">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= AWARDS ================= */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-12">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-300">
                <Award className="h-8 w-8" />
              </div>

              <h2 className="mt-6 text-4xl md:text-5xl font-semibold">
                Recognized Worldwide
              </h2>

              <p className="mt-4 text-white/60 max-w-2xl mx-auto leading-8">
                Our commitment to innovation and hospitality has earned
                international acclaim and loyal guests from around the world.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {awards.map((award) => (
                <div
                  key={award}
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white/80"
                >
                  {award}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="px-6 pt-10 pb-24">
          <div className="mx-auto max-w-5xl text-center rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 md:p-16">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-300">
              Begin Your Evening
            </p>

            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
              Experience Velvet Spoon
            </h2>

            <p className="mt-6 max-w-2xl mx-auto leading-8 text-white/70">
              Discover a world where cuisine becomes art and every reservation
              turns into a lasting memory.
            </p>

            <NavLink
              to="/reservations"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-300 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:scale-105"
            >
              Book Your Experience
              <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
