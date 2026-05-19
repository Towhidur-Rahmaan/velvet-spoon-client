import { useState } from "react";
import { motion } from "framer-motion";
import { Crown, Utensils, Sparkles, CalendarCheck, X } from "lucide-react";

/* =========================
   MODAL
========================= */
const MembershipModal = ({ open, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  if (!open) return null; // ✅ IMPORTANT FIX (prevents DOM error)

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 backdrop-blur-xl px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-black/90 p-8 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-white/10 p-2 hover:bg-white/10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Title */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300">
            Velvet Society
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Join the <span className="text-amber-300">Exclusive Circle</span>
          </h2>

          <p className="mt-3 text-sm text-white/60">
            Priority reservations, private chef access & exclusive events.
          </p>
        </div>

        {/* Success */}
        {submitted ? (
          <div className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-6 text-center text-amber-300">
            Request submitted ✨ We will contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              required
              placeholder="Full Name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
            />
            <input
              placeholder="Phone (optional)"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-amber-300 py-3 text-sm font-semibold uppercase text-black"
            >
              Request Membership
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

/* =========================
   MAIN SECTION
========================= */
const Membership = () => {
  const [open, setOpen] = useState(false);

  const perks = [
    {
      title: "Priority Reservations",
      desc: "Early access to exclusive tables.",
      icon: CalendarCheck,
    },
    {
      title: "Private Chef Experience",
      desc: "Live curated tasting sessions.",
      icon: Utensils,
    },
    {
      title: "Seasonal Exclusives",
      desc: "Limited menu access before public launch.",
      icon: Sparkles,
    },
    {
      title: "Concierge Access",
      desc: "Personalized dining service.",
      icon: Crown,
    },
  ];

  return (
    <>
      {/* IMPORTANT FIX: solid bg prevents fading/overlap */}
      <section className="relative z-10 py-40 px-6 md:px-16 bg-black border-t border-white/5 overflow-hidden">
        {/* soft glow (safe version) */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 h-100 w-100 -translate-x-1/2 bg-amber-300/10 blur-[120px]" />
        </div>

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.5em] text-amber-400">
            Velvet Society
          </p>

          <h2 className="mt-4 text-5xl md:text-7xl font-semibold">
            Exclusive <span className="text-amber-300">Dining Access</span>
          </h2>

          <p className="mt-6 text-white/60 max-w-2xl mx-auto">
            A private membership experience designed for elite dining access.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2">
          {perks.map((p) => {
            const Icon = p.icon;

            return (
              <div
                key={p.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <Icon className="text-amber-300 mb-4" />
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-white/60 mt-2">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => setOpen(true)}
            className="rounded-full bg-amber-300 px-10 py-4 text-sm font-semibold uppercase text-black hover:scale-105 transition"
          >
            Join Velvet Society
          </button>
        </div>
      </section>

      {/* MODAL */}
      <MembershipModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Membership;
