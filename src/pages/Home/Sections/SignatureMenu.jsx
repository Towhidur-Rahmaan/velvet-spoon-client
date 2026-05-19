import { useMemo, useState } from "react";
import {
  Search,
  Filter,
  Crown,
  Sparkles,
  Leaf,
  Clock3,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";

const categories = [
  "All",
  "Chef's Signature",
  "Seasonal",
  "Coffee",
  "Dessert",
  "Main Course",
];

const SignatureMenu = () => {
  const { menu, loading } = useMenu();
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  // Filter menu
  const filteredMenu = useMemo(() => {
    if (!Array.isArray(menu)) return [];

    return menu.filter((item) => {
      const category = item.category || "";
      const badge = item.badge || "";

      const matchesCategory =
        activeCategory === "All" ||
        category === activeCategory ||
        badge === activeCategory;

      const term = search.toLowerCase();

      const matchesSearch =
        !term ||
        item.name?.toLowerCase().includes(term) ||
        item.description?.toLowerCase().includes(term) ||
        category.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [menu, activeCategory, search]);

  // Show only first 6 items on Home page
  const previewMenu = filteredMenu.slice(0, 6);

  const getBadge = (item) => {
    if (item.badge) return item.badge;
    if (item.featured) return "Chef's Signature";
    if (item.seasonal) return "Seasonal";
    return item.category || "Exclusive";
  };

  const getIcon = (badge) => {
    const value = badge.toLowerCase();

    if (value.includes("signature")) return Crown;
    if (value.includes("season")) return Leaf;
    if (value.includes("coffee")) return Sparkles;

    return Clock3;
  };

  if (loading) {
    return (
      <section className="py-24 px-6 relative z-10 text-center">
        <p className="text-amber-400 uppercase tracking-[0.5em] text-sm">
          Signature Menu
        </p>
        <h2 className="mt-4 text-5xl md:text-7xl font-semibold">
          Loading Culinary Experience...
        </h2>
      </section>
    );
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center">
          <p className="text-amber-400 uppercase tracking-[0.5em] text-sm">
            Signature Menu
          </p>

          <h2 className="mt-4 text-5xl md:text-7xl font-semibold tracking-tight">
            Our Signature
            <span className="block text-amber-300">Menu</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-9 text-gray-300">
            A curated preview of our most celebrated creations.
          </p>
        </div>

        {/* ================= SEARCH + FILTERS ================= */}
        <div className="mt-12 rounded-4xl border border-white/10 bg-white/4 p-4 backdrop-blur-2xl">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-white/10 bg-black/40 py-3 pl-11 pr-4 text-white outline-none placeholder:text-white/40"
              />
            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-2">
              <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/40 mr-2">
                <Filter className="h-3.5 w-3.5" />
                Filter
              </div>

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${
                    activeCategory === category
                      ? "bg-amber-300 text-black"
                      : "border border-white/10 bg-white/5 text-white/70 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ================= MENU GRID (ONLY 6 ITEMS) ================= */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {previewMenu.map((item, index) => {
            const badge = getBadge(item);
            const Icon = getIcon(badge);

            return (
              <motion.article
                key={item._id || index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.03,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                }}
                className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 shadow-2xl backdrop-blur-xl will-change-transform"
                style={{
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Ambient Glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />
                  <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
                </div>

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-amber-300/20 bg-black/55 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.25em] text-amber-300 backdrop-blur-xl">
                    <Icon className="h-3.5 w-3.5" />
                    {badge}
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-5 right-5 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl">
                    ${item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {item.name}
                  </h3>

                  <p className="mt-4 line-clamp-3 leading-8 text-gray-300">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <button
                    onClick={() => navigate("/menu")}
                    className="mt-6 w-full rounded-full border border-amber-300/20 bg-amber-300/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300 transition-all duration-300 hover:bg-amber-300 hover:text-black"
                  >
                    View Full Menu
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ================= VIEW ALL BUTTON ================= */}
        {filteredMenu.length > 6 && (
          <div className="mt-16 text-center">
            <Link
              to="/menu"
              className="group inline-flex items-center gap-3 rounded-full border border-amber-300/20 bg-amber-300/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300 transition-all duration-300 hover:bg-amber-300 hover:text-black hover:scale-105"
            >
              Explore Full Menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <p className="mt-4 text-sm text-white/50">
              Discover all {filteredMenu.length} signature dishes and seasonal
              creations.
            </p>
          </div>
        )}

        {/* ================= EMPTY STATE ================= */}
        {!loading && filteredMenu.length === 0 && (
          <div className="mt-12 rounded-4xl border border-white/10 bg-white/3 p-16 text-center">
            <p className="text-white/60">No dishes matched your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SignatureMenu;
