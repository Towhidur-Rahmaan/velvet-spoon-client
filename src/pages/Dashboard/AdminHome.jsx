import { motion } from "framer-motion";
import {
  LayoutDashboard,
  CalendarCheck,
  User,
  Crown,
  Sparkles,
} from "lucide-react";
import useAuth from "../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();

  const displayName =
    user?.displayName || user?.name || user?.email?.split("@")[0] || "Guest";

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-2xl"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-300/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-white/5 blur-[100px]" />
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-amber-300">
              Member Dashboard
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Welcome Back,
              <span className="block text-amber-300">{displayName}</span>
            </h1>

            <p className="mt-5 max-w-2xl text-white/65 leading-8">
              Manage your reservations, view your profile, and enjoy your
              personalized Velvet Spoon experience.
            </p>
          </div>

          {/* Right Badge */}
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 shadow-2xl shadow-amber-300/10">
            <Crown className="h-10 w-10 text-amber-300" />
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "My Dashboard",
            description: "Overview of your account",
            icon: LayoutDashboard,
          },
          {
            title: "My Reservations",
            description: "View all your bookings",
            icon: CalendarCheck,
          },
          {
            title: "My Profile",
            description: "Update your information",
            icon: User,
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -top-8 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />
              </div>

              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10">
                <Icon className="h-5 w-5 text-amber-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>

              <p className="mt-2 text-sm leading-7 text-white/60">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Membership Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="rounded-4xl border border-amber-300/20 bg-amber-300/5 p-8 md:p-10"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-300">
              <Sparkles className="h-3.5 w-3.5" />
              Velvet Society
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Your Culinary Journey Awaits
            </h2>

            <p className="mt-4 max-w-2xl text-white/65 leading-8">
              Enjoy priority reservations, exclusive tasting events, and
              unforgettable dining experiences crafted just for you.
            </p>
          </div>

          <div className="text-left md:text-right">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">
              Membership Status
            </p>
            <p className="mt-2 text-2xl font-semibold text-amber-300">
              Standard Member
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminHome;
