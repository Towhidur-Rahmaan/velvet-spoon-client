import { motion } from "framer-motion";

const LuxurySection = ({ title, subtitle, children }) => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* background depth layers */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 bg-amber-400/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-white/5 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-amber-400 tracking-[0.4em] uppercase text-sm"
        >
          {subtitle}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mt-4 mb-16"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default LuxurySection;
