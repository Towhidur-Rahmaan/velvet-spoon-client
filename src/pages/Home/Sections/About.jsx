const About = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-amber-300/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        {/* Label */}
        <p className="mb-5 text-xs uppercase tracking-[0.6em] text-amber-400/80">
          Our Story
        </p>

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
          An Experience
          <span className="block text-amber-300">Beyond Dining</span>
        </h2>

        {/* Divider line */}
        <div className="mx-auto mt-10 h-px w-24 bg-linear-to-r from-transparent via-amber-300/60 to-transparent" />

        {/* Description */}
        <p className="mt-10 text-lg md:text-xl leading-9 text-gray-300 max-w-3xl mx-auto">
          Velvet Spoon transforms every evening into a curated journey of taste,
          atmosphere, and storytelling — where every dish is designed like a
          memory, not just a meal.
        </p>

        {/* Stats / highlights */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-3xl font-semibold text-amber-300">10+</p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">
              Signature Dishes
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-3xl font-semibold text-amber-300">5★</p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">
              Guest Experience
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-3xl font-semibold text-amber-300">365</p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">
              Days Open
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
