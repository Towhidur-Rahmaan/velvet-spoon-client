import { motion } from "framer-motion";
import { X } from "lucide-react";

const MembershipModal = ({ open, onClose }) => {
  if (!open) return null; // 🔥 critical fix

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
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-white/10 p-2 hover:bg-white/10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* CONTENT */}
        <h2 className="text-2xl font-semibold text-center">
          Join <span className="text-amber-300">Velvet Society</span>
        </h2>

        <p className="text-center text-white/60 mt-3">
          Exclusive dining access membership
        </p>

        <form className="mt-6 space-y-4">
          <input
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3"
            placeholder="Full Name"
          />

          <input
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3"
            placeholder="Email"
          />

          <button
            type="button"
            className="w-full bg-amber-300 text-black py-3 rounded-full font-semibold"
          >
            Request Access
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default MembershipModal;
