import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import { CalendarCheck } from "lucide-react";

const MyReservations = () => {
  const { user } = useAuth();
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchReservations = async () => {
      try {
        const res = await api.get(`/reservations?email=${user.email}`);
        setReservations(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [user]);

  if (loading) {
    return <p className="text-white">Loading reservations...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto py-10 text-white">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">My Reservations</h1>
        <p className="mt-2 text-white/50">View all your dining experiences.</p>
      </div>

      {reservations.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center">
          <CalendarCheck className="mx-auto h-12 w-12 text-amber-300 mb-4" />
          <h2 className="text-2xl font-semibold">No Reservations Yet</h2>
          <p className="mt-2 text-white/50">
            Book your first Velvet Spoon experience.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {reservations.map((item) => (
            <div
              key={item._id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <p className="text-white/50 text-sm">Date</p>
                  <p className="font-semibold">{item.date}</p>
                </div>

                <div>
                  <p className="text-white/50 text-sm">Time</p>
                  <p className="font-semibold">{item.time}</p>
                </div>

                <div>
                  <p className="text-white/50 text-sm">Guests</p>
                  <p className="font-semibold">{item.guests}</p>
                </div>

                <div>
                  <p className="text-white/50 text-sm">Status</p>
                  <span className="inline-block rounded-full bg-amber-300/10 px-3 py-1 text-sm text-amber-300">
                    {item.status || "Pending"}
                  </span>
                </div>
              </div>

              {item.occasion && (
                <div className="mt-4">
                  <p className="text-white/50 text-sm">Occasion</p>
                  <p>{item.occasion}</p>
                </div>
              )}

              {item.specialRequest && (
                <div className="mt-4">
                  <p className="text-white/50 text-sm">Special Request</p>
                  <p className="text-white/70">{item.specialRequest}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReservations;
