import SectionTitle from "../../../components/SectionTitle";
import { motion } from "framer-motion";
import { CalendarDays, Sparkles, Music } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    title: "Jazz Night",
    date: "Every Friday • 8:00 PM",
    icon: Music,
    highlight: "Live Performance",
  },
  {
    title: "Chef’s Table",
    date: "First Saturday of the Month",
    icon: Sparkles,
    highlight: "Exclusive Dining",
  },
  {
    title: "Afternoon Tea",
    date: "Every Sunday • 4:00 PM",
    icon: CalendarDays,
    highlight: "Signature Experience",
  },
];

const Events = () => {
  return (
    <section className="relative z-10 mt-24 border-t border-white/5 bg-black py-40 px-6 md:px-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-amber-300/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <SectionTitle subtitle="Special Evenings" title="Event Calendar" />

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {events.map((event, i) => {
            const Icon = event.icon;

            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10">
                  <Icon className="h-5 w-5 text-amber-300" />
                </div>

                {/* Tag */}
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-amber-300/80">
                  {event.highlight}
                </p>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white">
                  {event.title}
                </h3>

                {/* Date */}
                <p className="mt-3 text-gray-300 leading-7">{event.date}</p>

                {/* Bottom accent line */}
                <div className="mt-6 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

                {/* CTA hint */}
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/40 group-hover:text-amber-300 transition">
                  <Link
                    to="/reservations"
                    className="mt-4 inline-block text-xs uppercase tracking-[0.25em] text-white/40 transition group-hover:text-amber-300"
                  >
                    Reserve your seat →
                  </Link>
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
