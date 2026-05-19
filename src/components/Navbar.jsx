import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useAuth from "../hooks/useAuth";
import {
  Crown,
  Menu,
  X,
  CalendarDays,
  Clock3,
  Sparkles,
  ArrowRight,
  User,
  LayoutDashboard,
  LogOut,
} from "lucide-react";

const navItems = [
  {
    to: "/",
    label: "Home",
    description: "Luxury dining overview",
  },
  {
    to: "/menu",
    label: "Menu",
    description: "Seasonal signature creations",
  },
  {
    to: "/reservations",
    label: "Reservations",
    description: "Book your private experience",
  },
  {
    to: "/about",
    label: "Our Story",
    description: "The philosophy behind Velvet Spoon",
  },
  {
    to: "/contact",
    label: "Contact",
    description: "Location and concierge details",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { user, logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      localStorage.removeItem("access-token");
      setUserMenuOpen(false);
      setMobileOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close user dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = () => setUserMenuOpen(false);

    if (userMenuOpen) {
      window.addEventListener("click", closeDropdown);
    }

    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, [userMenuOpen]);

  const userPhoto =
    user?.photoURL ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user?.displayName || user?.email || "User",
    )}&background=111827&color=fbbf24`;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed inset-x-0 top-0 z-[9999] px-3 pt-3 sm:px-4 sm:pt-4 md:px-8">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className={`mx-auto max-w-7xl rounded-full border transition-all duration-500 ${
            scrolled
              ? "border-amber-300/20 bg-black/70 shadow-2xl shadow-black/60"
              : "border-white/10 bg-black/45 shadow-xl shadow-black/30"
          } backdrop-blur-3xl`}
        >
          <div className="flex items-center justify-between px-3 py-3 sm:px-5 md:px-8">
            {/* ================= BRAND ================= */}
            <NavLink
              to="/"
              className="group flex items-center gap-3 shrink-0"
              onClick={() => setMobileOpen(false)}
            >
              <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10">
                <div className="absolute inset-0 rounded-full bg-amber-300/10 blur-md" />
                <Crown className="relative h-5 w-5 text-amber-300" />
              </div>

              <div className="leading-none hidden xs:block">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.45em] text-amber-300/80">
                  Fine Dining
                </p>
                <h1 className="mt-1 text-base sm:text-lg md:text-xl font-semibold tracking-[0.16em] text-white transition group-hover:text-amber-200">
                  Velvet Spoon
                </h1>
              </div>
            </NavLink>

            {/* ================= DESKTOP LINKS ================= */}
            <ul className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `group relative rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] transition-all duration-300 ${
                        isActive
                          ? "text-amber-300"
                          : "text-white/70 hover:text-white"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}

                        <span
                          className={`absolute left-1/2 -bottom-1 h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-300 to-transparent transition-all duration-500 ${
                            isActive ? "w-full opacity-100" : "w-0 opacity-0"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* ================= RIGHT SIDE ================= */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Open Status */}
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/55">
                <Clock3 className="h-3.5 w-3.5" />
                Open Today 10AM–11PM
              </div>

              {/* Reserve Button */}
              <NavLink
                to="/reservations"
                className="group inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-gradient-to-r from-amber-300 to-yellow-200 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-black shadow-lg shadow-amber-300/20 transition-all duration-300 hover:scale-105"
              >
                <CalendarDays className="h-4 w-4" />
                Reserve
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </NavLink>

              {/* ================= USER SECTION ================= */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setUserMenuOpen(!userMenuOpen);
                    }}
                    className="group relative"
                    aria-label="User Menu"
                  >
                    <img
                      src={userPhoto}
                      alt="User"
                      className="h-11 w-11 rounded-full border-2 border-amber-300/40 object-cover transition duration-300 group-hover:scale-105"
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-black bg-green-400" />
                  </button>

                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                        className="absolute right-0 mt-4 w-72 overflow-hidden rounded-3xl border border-white/10 bg-black/95 backdrop-blur-3xl shadow-2xl"
                      >
                        {/* Header */}
                        <div className="border-b border-white/5 p-5">
                          <div className="flex items-center gap-4">
                            <img
                              src={userPhoto}
                              alt="User"
                              className="h-14 w-14 rounded-full border border-amber-300/30 object-cover"
                            />
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold text-white">
                                {user.displayName || "Velvet Guest"}
                              </p>
                              <p className="truncate text-xs text-white/50">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Menu Items */}
                        <div className="p-3">
                          <NavLink
                            to="/dashboard"
                            onClick={() => setUserMenuOpen(false)}
                            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                          >
                            <LayoutDashboard className="h-4 w-4 text-amber-300" />
                            Dashboard
                          </NavLink>

                          <NavLink
                            to="/dashboard/my-reservations"
                            onClick={() => setUserMenuOpen(false)}
                            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                          >
                            <CalendarDays className="h-4 w-4 text-amber-300" />
                            My Reservations
                          </NavLink>

                          <button
                            onClick={handleLogout}
                            className="mt-1 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm text-red-300 transition hover:bg-red-500/10"
                          >
                            <LogOut className="h-4 w-4" />
                            Logout
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                  title="Login"
                >
                  <User className="h-5 w-5" />
                </NavLink>
              )}
            </div>

            {/* ================= MOBILE TOGGLE ================= */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:bg-white/10"
              aria-label="Open Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </motion.nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-md lg:hidden"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="fixed top-0 right-0 z-[9999] h-full w-full max-w-sm border-l border-white/10 bg-black/95 backdrop-blur-3xl shadow-2xl lg:hidden"
            >
              <div className="flex h-full flex-col p-6">
                {/* Top Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-300">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-[0.35em]">
                      Concierge
                    </span>
                  </div>

                  <button
                    onClick={() => setMobileOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
                    aria-label="Close Menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Logged User Info */}
                {user && (
                  <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={userPhoto}
                        alt="User"
                        className="h-12 w-12 rounded-full border border-amber-300/30 object-cover"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-white">
                          {user.displayName || "Velvet Guest"}
                        </p>
                        <p className="truncate text-xs text-white/50">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Links */}
                <div className="mt-8 flex-1 space-y-3 overflow-y-auto">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index }}
                    >
                      <NavLink
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-3xl border px-5 py-4 transition-all ${
                            isActive
                              ? "border-amber-300/20 bg-amber-300/10 text-amber-300"
                              : "border-white/5 bg-white/[0.03] text-white/80 hover:bg-white/5 hover:text-white"
                          }`
                        }
                      >
                        <div className="text-sm font-semibold uppercase tracking-[0.22em]">
                          {item.label}
                        </div>
                        <p className="mt-2 text-xs leading-5 text-white/45">
                          {item.description}
                        </p>
                      </NavLink>
                    </motion.div>
                  ))}

                  {/* Mobile Dashboard Links */}
                  {user && (
                    <>
                      <NavLink
                        to="/dashboard"
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-3xl border border-white/5 bg-white/[0.03] px-5 py-4 text-white/80 transition hover:bg-white/5 hover:text-white"
                      >
                        <div className="text-sm font-semibold uppercase tracking-[0.22em]">
                          Dashboard
                        </div>
                        <p className="mt-2 text-xs leading-5 text-white/45">
                          Manage your account
                        </p>
                      </NavLink>

                      <NavLink
                        to="/dashboard/my-reservations"
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-3xl border border-white/5 bg-white/[0.03] px-5 py-4 text-white/80 transition hover:bg-white/5 hover:text-white"
                      >
                        <div className="text-sm font-semibold uppercase tracking-[0.22em]">
                          My Reservations
                        </div>
                        <p className="mt-2 text-xs leading-5 text-white/45">
                          View your booked tables
                        </p>
                      </NavLink>
                    </>
                  )}
                </div>

                {/* Bottom Actions */}
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl border border-red-400/20 bg-red-400/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-red-300"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                ) : (
                  <NavLink
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-300 to-yellow-200 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-black shadow-lg shadow-amber-300/20"
                  >
                    <User className="h-4 w-4" />
                    Login
                  </NavLink>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
