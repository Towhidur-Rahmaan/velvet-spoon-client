import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  ChefHat,
  Star,
  Award,
  Clock3,
  Wine,
  Sparkles,
  X,
  ArrowRight,
  Globe,
  UtensilsCrossed,
} from "lucide-react";
import SectionTitle from "../../../components/SectionTitle";

const experiences = [
  {
    id: 1,
    title: "The Grand Tasting Journey",
    subtitle: "12-Course Signature Experience",
    description:
      "A cinematic progression of twelve masterfully crafted courses paired with rare wines and interactive storytelling from our executive chef.",
    duration: "3.5 Hours",
    price: "$295",
    guests: "2–8 Guests",
    badge: "Most Exclusive",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "12 Curated Courses",
      "Premium Wine Pairing",
      "Chef Interaction",
      "Priority Seating",
      "Luxury Gift",
    ],
    icon: Star,
    gradient: "from-amber-300/30 via-yellow-500/10 to-transparent",
  },
  {
    id: 2,
    title: "Chef's Private Counter",
    subtitle: "Behind the Culinary Curtain",
    description:
      "Experience the artistry of our kitchen from the chef's counter while every course is introduced personally.",
    duration: "2.5 Hours",
    price: "$180",
    guests: "2–4 Guests",
    badge: "Interactive",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Live Preparation",
      "Exclusive Counter Seating",
      "Seasonal Ingredients",
      "Personalized Menu",
    ],
    icon: ChefHat,
    gradient: "from-emerald-300/20 via-green-500/10 to-transparent",
  },
  {
    id: 3,
    title: "Velvet Noir Pairing",
    subtitle: "Wine & Gastronomy Ritual",
    description:
      "A romantic tasting experience featuring five signature dishes with sommelier-selected pairings.",
    duration: "2 Hours",
    price: "$145",
    guests: "2 Guests",
    badge: "Romantic",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Sommelier Pairing",
      "Candlelit Seating",
      "Five Signature Courses",
      "Dessert Finale",
    ],
    icon: Wine,
    gradient: "from-rose-300/20 via-pink-500/10 to-transparent",
  },
];

const ChefExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <SectionTitle
          subtitle="Curated Experience"
          title="Chef’s Tasting Journey"
        />

        {/* Intro */}
        <div className="mx-auto mt-6 max-w-3xl text-center">
          <p className="text-lg leading-9 text-gray-300">
            Immersive tasting experiences crafted to transcend traditional
            dining and transform each course into a memorable story.
          </p>
        </div>

        {/* Premium Stats */}
        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {[
            {
              label: "Michelin Inspired",
              value: "12+",
              icon: Award,
            },
            {
              label: "Courses Available",
              value: "3–12",
              icon: UtensilsCrossed,
            },
            {
              label: "Years of Mastery",
              value: "18",
              icon: Globe,
            },
            {
              label: "Exclusive Guests",
              value: "500+",
              icon: Sparkles,
            },
          ].map((stat) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-4xl border border-white/10 bg-white/4 p-6 backdrop-blur-2xl"
              >
                <Icon className="h-5 w-5 text-amber-300" />
                <h3 className="mt-4 text-3xl font-semibold">{stat.value}</h3>
                <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Experience Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.article
                key={experience.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/4 backdrop-blur-2xl"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                  <div
                    className={`absolute inset-0 bg-linear-to-t ${experience.gradient}`}
                  />

                  {/* Badge */}
                  <div className="absolute left-5 top-5 rounded-full bg-black/60 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-amber-300 backdrop-blur-xl">
                    {experience.badge}
                  </div>

                  {/* Price */}
                  <div className="absolute right-5 top-5 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-xl">
                    {experience.price}
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-xs text-white/80 backdrop-blur-xl">
                    <Icon className="h-4 w-4 text-amber-300" />
                    {experience.subtitle}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {experience.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-300">
                    {experience.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                      <Clock3 className="mb-2 h-4 w-4 text-amber-300" />
                      <p className="text-white">{experience.duration}</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                      <Sparkles className="mb-2 h-4 w-4 text-amber-300" />
                      <p className="text-white">{experience.guests}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.highlights.slice(0, 4).map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-white/10 bg-white/3 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-gray-300"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex  gap-3 ">
                    <button
                      onClick={() => setSelectedExperience(experience)}
                      className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] transition hover:bg-white/10"
                    >
                      Explore
                    </button>

                    <NavLink
                      to="/reservations"
                      className="flex-1 rounded-full bg-amber-300 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:scale-[1.02]"
                    >
                      Reserve
                    </NavLink>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2.5rem] border border-white/10 bg-zinc-950 text-white"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedExperience(null)}
                className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 backdrop-blur-xl"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Hero Image */}
              <div className="relative h-80">
                <img
                  src={selectedExperience.image}
                  alt={selectedExperience.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
                    {selectedExperience.badge}
                  </p>
                  <h3 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                    {selectedExperience.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <p className="text-lg leading-9 text-gray-300">
                  {selectedExperience.description}
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-3xl border border-white/10 bg-white/3 p-6">
                    <p className="text-sm text-white/50">Duration</p>
                    <p className="mt-2 text-xl font-semibold">
                      {selectedExperience.duration}
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/3 p-6">
                    <p className="text-sm text-white/50">Guests</p>
                    <p className="mt-2 text-xl font-semibold">
                      {selectedExperience.guests}
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/3 p-6">
                    <p className="text-sm text-white/50">Investment</p>
                    <p className="mt-2 text-xl font-semibold text-amber-300">
                      {selectedExperience.price}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-sm uppercase tracking-[0.3em] text-white/40">
                    Experience Highlights
                  </h4>

                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {selectedExperience.highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/3 px-4 py-3 text-gray-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <NavLink
                  to="/reservations"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-300 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:scale-[1.02]"
                >
                  Reserve This Experience
                  <ArrowRight className="h-4 w-4" />
                </NavLink>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ChefExperience;
