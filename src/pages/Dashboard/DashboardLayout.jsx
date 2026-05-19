import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarCheck,
  User,
  Crown,
  UtensilsCrossed,
  PlusCircle,
  Home,
  LogOut,
} from "lucide-react";
import useAuth from "../../hooks/useAuth";

const DashboardLayout = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  // SAFE ROLE CHECK (IMPORTANT FIX)
  const isAdmin = user?.role === "admin" || user?.email === "admin@velvet.com"; // fallback safety

  const handleLogout = async () => {
    await logOut();
    localStorage.removeItem("access-token");
    navigate("/");
  };

  const userLinks = [
    {
      to: "/dashboard",
      label: "My Dashboard",
      icon: LayoutDashboard,
    },
    {
      to: "/dashboard/my-reservations",
      label: "My Reservations",
      icon: CalendarCheck,
    },
    {
      to: "/dashboard/profile",
      label: "My Profile",
      icon: User,
    },
  ];

  const adminLinks = [
    {
      to: "/dashboard",
      label: "Admin Dashboard",
      icon: LayoutDashboard,
    },
    {
      to: "/dashboard/add-menu-item",
      label: "Add Menu Item",
      icon: PlusCircle,
    },
    {
      to: "/dashboard/manage-menu",
      label: "Manage Menu",
      icon: UtensilsCrossed,
    },
    {
      to: "/dashboard/manage-reservations",
      label: "Manage Reservations",
      icon: CalendarCheck,
    },
  ];

  const links = isAdmin ? adminLinks : userLinks;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      {/* ================= SIDEBAR ================= */}
      <aside className="w-full md:w-72 border-r border-white/10 bg-black/60 backdrop-blur-2xl p-6">
        {/* BRAND */}
        <div className="mb-8 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-amber-300/10 border border-amber-300/30 flex items-center justify-center">
            <Crown className="h-5 w-5 text-amber-300" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">
              {isAdmin ? "Admin Panel" : "User Panel"}
            </p>
            <h2 className="text-lg font-semibold">Velvet Spoon</h2>
          </div>
        </div>

        {/* NAV LINKS */}
        <nav className="flex flex-col gap-2">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/dashboard"}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-2xl px-4 py-3 transition border ${
                    isActive
                      ? "bg-amber-300/10 border-amber-300/30 text-amber-300"
                      : "border-transparent text-white/70 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <Icon className="h-5 w-5" />
                <span className="text-sm font-medium">{link.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* FOOTER */}
        <div className="mt-8 text-xs text-white/40">
          {isAdmin ? "Admin Access Enabled" : "Member Experience"}
        </div>
      </aside>

      {/* ================= MAIN AREA ================= */}
      <main className="flex-1 flex flex-col">
        {/* TOP BAR (FIX: missing navbar feeling) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/50 backdrop-blur-xl">
          {/* HOME BUTTON */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/70 hover:text-white transition"
          >
            <Home className="h-4 w-4" />
            Home
          </button>

          {/* USER INFO */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/60">
              {user?.email || "Guest"}
            </span>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-400 hover:text-red-300 transition"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="flex-1 p-6 md:p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
