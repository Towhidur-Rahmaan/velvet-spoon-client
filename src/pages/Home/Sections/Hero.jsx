import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Star, Award, Clock3, MapPin } from "lucide-react";

const stats = [
  { value: "50+", label: "Signature Dishes", icon: Star },
  { value: "24/7", label: "Reservations", icon: Clock3 },
  { value: "VIP", label: "Private Events", icon: Award },
  { value: "Dhaka", label: "Gulshan", icon: MapPin },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* ================= BACKGROUND VIDEO ================= */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover scale-110"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* ================= CINEMATIC OVERLAYS ================= */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />

      {/* Floating Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
      <div className="absolute bottom-24 right-12 h-40 w-40 rounded-full bg-amber-300/5 blur-3xl" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-7xl text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 sm:px-5 py-2 text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.45em] text-amber-300 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-amber-300 animate-pulse" />
            Velvet Spoon Experience
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="mt-6 sm:mt-8 text-6xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-semibold tracking-tight leading-[1.05]"
          >
            Taste Meets
            <span className="block bg-linear-to-r from-amber-200 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              Perfection
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1 }}
            className="mt-6 sm:mt-8 mx-auto max-w-3xl px-2 text-base sm:text-lg md:text-xl leading-8 sm:leading-9 text-white/70"
          >
            A cinematic luxury dining experience crafted with precision,
            emotion, and immersive storytelling—where every dish becomes a
            masterpiece.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/reservations"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition duration-300 hover:scale-105"
            >
              Reserve Now
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>

            <Link
              to="/menu"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-xl transition duration-300 hover:border-amber-300/30 hover:text-amber-300"
            >
              <Play className="h-4 w-4" />
              Explore Menu
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 1 }}
            className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl px-4 py-4 sm:px-5 sm:py-5"
                >
                  <div className="flex items-center justify-center gap-2 text-amber-300">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-lg sm:text-2xl font-semibold">
                      {stat.value}
                    </span>
                  </div>

                  <p className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/50">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10 sm:mt-14 flex flex-col items-center text-white/40"
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em]">
              Scroll to Explore
            </span>

            <div className="mt-3 flex h-10 w-6 justify-center rounded-full border border-white/20">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="mt-2 h-2 w-2 rounded-full bg-amber-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
