import { motion } from "framer-motion";

const LuxuryCard = ({ title, desc, image }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {image && (
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>
      )}

      <div className="p-8">
        <h3 className="mb-3 text-2xl font-semibold text-amber-300">{title}</h3>
        <p className="leading-8 text-gray-300">{desc}</p>
      </div>
    </motion.div>
  );
};

export default LuxuryCard;
