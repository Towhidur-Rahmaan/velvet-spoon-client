import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Crown, Sparkles, Leaf, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useMenu from "../../hooks/useMenu";

const categories = [
  "All",
  "Chef's Signature",
  "Seasonal",
  "Coffee",
  "Dessert",
  "Main Course",
];

const categoryColors = {
  All: "bg-white/10 text-white",
  "Chef's Signature": "bg-amber-300 text-black",
  Seasonal: "bg-green-400/20 text-green-300 border border-green-400/30",
  Coffee: "bg-orange-400/20 text-orange-300 border border-orange-400/30",
  Dessert: "bg-pink-400/20 text-pink-300 border border-pink-400/30",
  "Main Course": "bg-blue-400/20 text-blue-300 border border-blue-400/30",
};

const Menu = () => {
  const { menu, loading } = useMenu();
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [activeItem, setActiveItem] = useState(null);

  const filteredMenu = useMemo(() => {
    if (!Array.isArray(menu)) return [];

    return menu.filter((item) => {
      const itemCategory = (item.category || "").toLowerCase().trim();
      const active = activeCategory.toLowerCase().trim();

      const matchCategory = active === "all" || itemCategory === active;

      const matchSearch =
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.description?.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [menu, activeCategory, search]);

  const getIcon = (cat = "") => {
    const v = cat.toLowerCase();
    if (v.includes("signature")) return Crown;
    if (v.includes("season")) return Leaf;
    if (v.includes("coffee")) return Sparkles;
    return Clock;
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        Loading Experience...
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      {/* ================= HERO (VIDEO ONLY HERE) ================= */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/videos/menu-bg.mp4" type="video/mp4" />
          </video>

          {/* soft cinematic overlay */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80" />
        </div>

        <div className="relative z-10 px-6">
          <h1 className="text-6xl md:text-8xl font-semibold">
            The Menu Experience
          </h1>
          <p className="text-white/70 mt-6 max-w-xl mx-auto">
            A cinematic dining journey inspired by luxury product storytelling.
          </p>
        </div>
      </section>

      {/* ================= FILTER BAR ================= */}
      <div className="sticky top-0 z-40 backdrop-blur-xl bg-black/60 border-y border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search dishes..."
            className="w-full md:max-w-md px-4 py-3 rounded-full bg-white/5 border border-white/10 outline-none"
          />

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-full text-xs transition border duration-300 hover:scale-105 ${
                  activeCategory === c
                    ? categoryColors[c] || "bg-amber-300 text-black"
                    : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MENU GRID ================= */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredMenu.map((item) => {
            const Icon = getIcon(item.category);

            return (
              <motion.div
                key={item._id}
                whileHover={{ scale: 1.03 }}
                onClick={() => setActiveItem(item)}
                className="cursor-pointer"
              >
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                  <img src={item.image} className="h-72 w-full object-cover" />

                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent" />

                  <div className="absolute top-4 left-4 flex items-center gap-2 text-amber-300 text-xs">
                    <Icon className="w-4 h-4" />
                    {item.category}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-white/60 text-sm mt-2">
                      {item.description}
                    </p>

                    <div className="flex justify-between mt-6">
                      <span className="text-amber-300">${item.price}</span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveItem(item);
                        }}
                        className="px-4 py-2 bg-amber-300 text-black rounded-full text-xs"
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-6"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="max-w-2xl w-full bg-black/70 border border-white/10 rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={activeItem.image} className="h-72 w-full object-cover" />

            <div className="p-6">
              <h2 className="text-3xl font-semibold">{activeItem.name}</h2>

              <p className="text-white/60 mt-3">{activeItem.description}</p>

              <div className="flex justify-between mt-6">
                <span className="text-amber-300 text-xl">
                  ${activeItem.price}
                </span>

                <button
                  onClick={() => navigate("/reservations")}
                  className="px-6 py-3 bg-amber-300 text-black rounded-full"
                >
                  Reserve Table
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
