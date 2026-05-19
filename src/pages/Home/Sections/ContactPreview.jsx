import { Link } from "react-router-dom";

const ContactPreview = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-100 w-100 -translate-x-1/2 rounded-full bg-amber-300/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-75 w-75 rounded-full bg-white/5 blur-[120px]" />
      </div>

      {/* Glass Card */}
      <div className="mx-auto max-w-4xl text-center rounded-4xl border border-white/10 bg-white/5 backdrop-blur-2xl px-6 py-16 md:px-16 shadow-2xl">
        {/* Top label */}
        <p className="text-xs uppercase tracking-[0.6em] text-amber-400/80">
          Reservations
        </p>

        {/* Title */}
        <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          Book Your
          <span className="block text-amber-300">Experience</span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-base md:text-lg text-white/60 leading-8 max-w-2xl mx-auto">
          Step into a curated dining journey designed for unforgettable
          evenings, crafted with precision, emotion, and elegance.
        </p>

        {/* Availability badge */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
          Open Daily • 10:00 AM – 11:00 PM
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Link to="/reservations">
            <button className="relative group rounded-full bg-amber-300 px-10 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,191,36,0.4)]">
              Reserve Now
              {/* subtle shine effect */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition bg-linear-to-r from-transparent via-white/40 to-transparent blur-xl" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
