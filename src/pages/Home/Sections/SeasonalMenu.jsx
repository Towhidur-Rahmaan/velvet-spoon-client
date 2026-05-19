// src/pages/Home/Sections/SeasonalMenu.jsx

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import {
  Sparkles,
  Snowflake,
  Sun,
  Leaf,
  Flower2,
  Clock3,
  Star,
  ChevronRight,
} from "lucide-react";

const seasons = [
  {
    id: 1,
    season: "Spring",
    title: "Spring Blossom",
    tagline: "Floral Elegance",
    description:
      "Cherry blossom desserts, rose-infused lattes, and delicate botanical creations inspired by the renewal of nature.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    accent: "from-pink-400/30 to-rose-300/10",
    icon: Flower2,
    availability: "March – May",
    dishes: ["Sakura Cheesecake", "Rose Pistachio Latte", "Lavender Macarons"],
    chefNote:
      "A poetic collection celebrating blossoms, fragrance, and refined sweetness.",
    tabActiveClass:
      "bg-gradient-to-r from-pink-400 to-rose-300 text-black shadow-[0_10px_40px_rgba(244,114,182,0.35)]",
  },
  {
    id: 2,
    season: "Summer",
    title: "Summer Riviera",
    tagline: "Mediterranean Freshness",
    description:
      "Citrus-forward beverages, chilled espresso creations, and vibrant coastal flavors.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    accent: "from-cyan-400/30 to-sky-300/10",
    icon: Sun,
    availability: "June – August",
    dishes: ["Cold Brew Tonic", "Lemon Burrata", "Sea Salt Gelato"],
    chefNote: "Light, refreshing, and crafted for golden summer evenings.",
    tabActiveClass:
      "bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 text-black shadow-[0_10px_40px_rgba(251,146,60,0.35)]",
  },
  {
    id: 3,
    season: "Autumn",
    title: "Autumn Harvest",
    tagline: "Earthy Luxury",
    description:
      "Truffle-infused dishes, pumpkin spice creations, and warm seasonal indulgence.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    accent: "from-amber-400/30 to-orange-300/10",
    icon: Leaf,
    availability: "September – November",
    dishes: [
      "Black Truffle Risotto",
      "Pumpkin Spice Affogato",
      "Roasted Fig Tart",
    ],
    chefNote:
      "A deeply aromatic menu inspired by forest richness and harvest abundance.",
    tabActiveClass:
      "bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-[0_10px_40px_rgba(245,158,11,0.35)]",
  },
  {
    id: 4,
    season: "Winter",
    title: "Winter Noir",
    tagline: "Dark Decadence",
    description:
      "Dark chocolate tasting menus, spiced espresso, and comforting candlelit indulgence.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
    accent: "from-slate-400/20 to-zinc-300/5",
    icon: Snowflake,
    availability: "December – February",
    dishes: [
      "Noir Chocolate Sphere",
      "Cinnamon Mocha",
      "Chestnut Mille-Feuille",
    ],
    chefNote: "Intense, elegant, and designed for unforgettable winter nights.",
    tabActiveClass:
      "bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 text-black shadow-[0_10px_40px_rgba(56,189,248,0.35)]",
  },
];

const SeasonalMenu = () => {
  const [activeSeason, setActiveSeason] = useState("Spring");
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const currentSeason = useMemo(
    () => seasons.find((item) => item.season === activeSeason) || seasons[0],
    [activeSeason],
  );

  const ActiveIcon = currentSeason.icon;

  return (
    <section className="relative overflow-hidden py-32 px-6 md:px-10">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_55%)]" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.55em] text-amber-300">
            Limited Editions
          </p>

          <h2 className="mt-5 text-5xl md:text-7xl font-semibold tracking-tight text-white">
            Seasonal Story
            <span className="block bg-linear-to-r from-white to-amber-300 bg-clip-text text-transparent">
              Menu
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-white/65">
            Four curated collections, each inspired by the mood, ingredients,
            and sensory character of the season.
          </p>
        </div>

        {/* Season Tabs */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {seasons.map((season) => {
            const Icon = season.icon;
            const isActive = activeSeason === season.season;

            return (
              <button
                key={season.id}
                onClick={() => setActiveSeason(season.season)}
                className={`group flex items-center gap-3 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] transition-all duration-300 ${
                  isActive
                    ? season.tabActiveClass
                    : "border border-white/10 bg-white/5 text-white/70 backdrop-blur-xl hover:border-white/20 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                {season.season}
              </button>
            );
          })}
        </div>

        {/* Main Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSeason.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-16 grid gap-8 lg:grid-cols-2"
          >
            {/* Image Card */}
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl">
              <img
                src={currentSeason.image}
                alt={currentSeason.title}
                loading="lazy"
                className="h-130 w-full object-cover transition duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />
              <div
                className={`absolute inset-0 bg-linear-to-br ${currentSeason.accent}`}
              />

              <div className="absolute left-8 top-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">
                  <ActiveIcon className="h-4 w-4 text-amber-300" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-amber-300">
                    {currentSeason.tagline}
                  </span>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                  Availability
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {currentSeason.availability}
                </p>
              </div>
            </div>

            {/* Content Card */}
            <div className="rounded-[2.5rem] border border-white/10 bg-white/4 p-8 md:p-10 backdrop-blur-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/10">
                  <ActiveIcon className="h-6 w-6 text-amber-300" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Curated Collection
                  </p>
                  <p className="text-white font-medium">
                    {currentSeason.season}
                  </p>
                </div>
              </div>

              <h3 className="mt-8 text-4xl md:text-5xl font-semibold tracking-tight text-white">
                {currentSeason.title}
              </h3>

              <p className="mt-6 text-lg leading-9 text-white/65">
                {currentSeason.description}
              </p>

              {/* Featured Dishes */}
              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Featured Creations
                </p>

                <div className="mt-5 space-y-3">
                  {currentSeason.dishes.map((dish, index) => (
                    <motion.div
                      key={dish}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <Star className="h-4 w-4 text-amber-300" />
                        <span className="text-white/90">{dish}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-white/30" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Chef Note */}
              <div className="mt-10 rounded-3xl border border-amber-300/10 bg-amber-300/4 p-6">
                <div className="flex items-center gap-2 text-amber-300">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-[0.25em]">
                    Chef's Note
                  </span>
                </div>

                <p className="mt-4 leading-8 text-white/75">
                  {currentSeason.chefNote}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setOpenModal(true)}
                  className="flex-1 rounded-full bg-amber-300 px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:scale-[1.02]"
                >
                  Explore This Season
                </button>

                <button
                  onClick={() => navigate("/reservations")}
                  className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-white/10"
                >
                  Reserve a Table
                </button>
              </div>

              {/* Metadata */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/40">
                <div className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  Limited availability
                </div>

                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Chef curated
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-xl p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-black shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpenModal(false)}
                className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-xl transition hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Hero Image */}
              <div className="relative">
                <img
                  src={currentSeason.image}
                  alt={currentSeason.title}
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
                    {currentSeason.tagline}
                  </p>
                  <h3 className="mt-3 text-4xl font-semibold text-white">
                    {currentSeason.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <p className="text-lg leading-9 text-white/70">
                  {currentSeason.description}
                </p>

                {/* Featured Dishes */}
                <div className="mt-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Featured Creations
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {currentSeason.dishes.map((dish) => (
                      <div
                        key={dish}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/85"
                      >
                        {dish}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chef Note */}
                <div className="mt-8 rounded-3xl border border-amber-300/10 bg-amber-300/4 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-amber-300">
                    Chef's Note
                  </p>
                  <p className="mt-3 leading-8 text-white/75">
                    {currentSeason.chefNote}
                  </p>
                </div>

                {/* Modal CTA */}
                <button
                  onClick={() => navigate("/reservations")}
                  className="mt-8 w-full rounded-full bg-amber-300 px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:scale-[1.02]"
                >
                  Book This Seasonal Experience
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SeasonalMenu;
