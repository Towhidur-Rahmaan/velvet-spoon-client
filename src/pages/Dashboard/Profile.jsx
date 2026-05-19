import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import { User, Mail, Calendar, Shield } from "lucide-react";

const Profile = () => {
  const { user } = useAuth();

  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState({
    totalReservations: 0,
  });

  const [loading, setLoading] = useState(true);

  // =========================
  // Fetch USER PROFILE (NAME)
  // =========================
  useEffect(() => {
    if (!user?.email) return;

    const fetchProfile = async () => {
      try {
        const res = await api.get(`/users?email=${user.email}`);
        setProfile(res.data);
      } catch (err) {
        console.log("Profile error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  // =========================
  // Fetch RESERVATIONS
  // =========================
  useEffect(() => {
    if (!user?.email) return;

    api
      .get(`/reservations?email=${user.email}`)
      .then((res) => {
        setStats({
          totalReservations: res.data.length,
        });
      })
      .catch((err) => {
        console.log("Reservation fetch error:", err);
      });
  }, [user]);

  if (loading) {
    return (
      <div className="text-center text-white py-20">Loading profile...</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-20 px-6 text-white">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">My Profile</h1>
        <p className="text-white/50 mt-3">
          Manage your Velvet Spoon experience
        </p>
      </div>

      {/* PROFILE GRID */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-full bg-amber-300/20 flex items-center justify-center">
              <User className="text-amber-300" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                {profile?.name || "Guest User"}
              </h2>
              <p className="text-white/60 text-sm">Velvet Spoon Member</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white/70">
              <Mail className="w-4 h-4" />
              <span>{user?.email}</span>
            </div>

            <div className="flex items-center gap-3 text-white/70">
              <Shield className="w-4 h-4" />
              <span>
                {profile?.role === "admin"
                  ? "Admin Account"
                  : "Verified Account"}
              </span>
            </div>

            <div className="flex items-center gap-3 text-white/70">
              <Calendar className="w-4 h-4" />
              <span>Member since 2026</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h3 className="text-xl font-semibold mb-6">Activity Overview</h3>

          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
              <p className="text-white/60 text-sm">Total Reservations</p>
              <p className="text-4xl font-bold text-amber-300 mt-2">
                {stats.totalReservations}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
              <p className="text-white/60 text-sm">Membership Status</p>
              <p className="text-xl font-semibold text-white mt-2">
                {profile?.role === "admin" ? "Elite Member" : "Standard Member"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
