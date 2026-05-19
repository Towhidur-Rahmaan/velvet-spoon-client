import LuxurySection from "../../../components/LuxurySection";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba",
    "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  ];

  return (
    <LuxurySection subtitle="Ambiance" title="Spectacular Special Evenings">
      {/* Masonry-style immersive grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 ${
              i === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            {/* Image */}
            <img
              src={img}
              alt="Gallery"
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Cinematic overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition" />

            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />
            </div>

            {/* Hover label */}
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                Velvet Experience
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA strip */}
      <div className="mt-14 text-center">
        <p className="text-white/50 text-sm">
          Every evening is designed like a cinematic dining experience.
        </p>

        <button className="mt-6 rounded-full border border-amber-300/20 bg-amber-300/10 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300 transition hover:bg-amber-300 hover:text-black">
          Explore Full Gallery
        </button>
      </div>
    </LuxurySection>
  );
};

export default Gallery;
