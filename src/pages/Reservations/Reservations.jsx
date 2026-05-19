import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../services/api";
import { toast, Toaster } from "react-hot-toast";

const steps = ["Details", "Time", "Confirm"];

const Reservation = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    guests: 2,
    date: "",
    time: "",
    occasion: "Dinner",
    specialRequest: "",
  });

  /* =========================
     Navigation
  ========================= */
  const next = () => {
    // Step 1 validation
    if (step === 0) {
      if (!form.name.trim()) {
        toast.error("Please enter your full name.");
        return;
      }

      if (!form.email.trim()) {
        toast.error("Please enter your email address.");
        return;
      }
    }

    // Step 2 validation
    if (step === 1) {
      if (!form.date) {
        toast.error("Please select a date.");
        return;
      }

      if (!form.time) {
        toast.error("Please select a time.");
        return;
      }
    }

    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prev = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  /* =========================
     Submit Reservation
  ========================= */
  const confirmReservation = async () => {
    try {
      if (!user?.email) {
        toast.error("Please login to make a reservation.");
        navigate("/login");
        return;
      }

      setSubmitting(true);

      const reservationData = {
        ...form,
        email: user.email, // always use logged-in user's email
        status: "Pending",
        createdAt: new Date().toISOString(),
      };

      await api.post("/reservations", reservationData);

      toast.success("Reservation confirmed successfully!");

      // Reset form
      setForm({
        name: user?.displayName || "",
        email: user?.email || "",
        guests: 2,
        date: "",
        time: "",
        occasion: "Dinner",
        specialRequest: "",
      });

      setStep(0);

      // Redirect to dashboard after a short delay
      setTimeout(() => {
        navigate("/dashboard/my-reservations");
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message || "Failed to submit reservation.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <Toaster position="top-right" />

      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/reservation-bg.jpg"
          alt="Reservation Background"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/30 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_30%)]" />
      </div>

      {/* ================= PAGE CONTENT ================= */}
      <div className="relative z-10">
        {/* Hero */}
        <section className="px-6 pt-24 pb-8 text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-amber-300">
            Private Dining
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            Reserve Your
            <span className="block text-amber-300">Experience</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            Secure your table for an unforgettable culinary journey.
          </p>
        </section>

        {/* Step Indicator */}
        <section className="px-6">
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
            {steps.map((item, index) => (
              <div
                key={item}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition ${
                  index === step
                    ? "border-amber-300 bg-amber-300 text-black"
                    : index < step
                      ? "border-amber-300/20 bg-amber-300/10 text-amber-300"
                      : "border-white/10 bg-white/5 text-white/50"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Form Card */}
        <section className="px-6 py-10 pb-20">
          <div className="mx-auto max-w-3xl">
            <AnimatePresence mode="wait">
              {/* ================= STEP 1 ================= */}
              {step === 0 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10"
                >
                  <h2 className="text-3xl font-semibold">Your Details</h2>
                  <p className="mt-2 text-white/60">
                    Tell us who will be joining us.
                  </p>

                  <div className="mt-8 grid gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/40"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/40"
                    />

                    <div>
                      <label className="mb-2 block text-sm text-white/60">
                        Number of Guests
                      </label>

                      <select
                        value={form.guests}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            guests: Number(e.target.value),
                          })
                        }
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 outline-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((n) => (
                          <option key={n} value={n} className="bg-black">
                            {n} Guests
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={next}
                      className="rounded-full bg-amber-300 px-8 py-3 font-semibold text-black transition hover:scale-105"
                    >
                      Continue
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ================= STEP 2 ================= */}
              {step === 1 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:p-10"
                >
                  <h2 className="text-3xl font-semibold">Date & Time</h2>
                  <p className="mt-2 text-white/60">
                    Choose your preferred reservation slot.
                  </p>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) =>
                        setForm({ ...form, date: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 outline-none"
                    />

                    <select
                      value={form.time}
                      onChange={(e) =>
                        setForm({ ...form, time: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 outline-none"
                    >
                      <option value="" className="bg-black">
                        Select Time
                      </option>
                      {[
                        "6:00 PM",
                        "6:30 PM",
                        "7:00 PM",
                        "7:30 PM",
                        "8:00 PM",
                        "8:30 PM",
                        "9:00 PM",
                      ].map((time) => (
                        <option key={time} value={time} className="bg-black">
                          {time}
                        </option>
                      ))}
                    </select>

                    <div className="md:col-span-2">
                      <select
                        value={form.occasion}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            occasion: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 outline-none"
                      >
                        {[
                          "Dinner",
                          "Birthday",
                          "Anniversary",
                          "Business Meeting",
                          "Proposal",
                          "Celebration",
                        ].map((occasion) => (
                          <option
                            key={occasion}
                            value={occasion}
                            className="bg-black"
                          >
                            {occasion}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <textarea
                        rows="4"
                        placeholder="Special Requests (optional)"
                        value={form.specialRequest}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            specialRequest: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/40"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={prev}
                      className="text-white/60 transition hover:text-white"
                    >
                      Back
                    </button>

                    <button
                      onClick={next}
                      className="rounded-full bg-amber-300 px-8 py-3 font-semibold text-black transition hover:scale-105"
                    >
                      Continue
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ================= STEP 3 ================= */}
              {step === 2 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:p-10"
                >
                  <h2 className="text-3xl font-semibold">
                    Confirm Reservation
                  </h2>
                  <p className="mt-2 text-white/60">
                    Review your reservation details.
                  </p>

                  <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-black/30 p-6">
                    {[
                      ["Name", form.name],
                      ["Email", form.email],
                      ["Guests", form.guests],
                      ["Date", form.date || "Not selected"],
                      ["Time", form.time || "Not selected"],
                      ["Occasion", form.occasion],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between gap-4">
                        <span className="text-white/50">{label}</span>
                        <span className="text-right">{value}</span>
                      </div>
                    ))}

                    {form.specialRequest && (
                      <div className="pt-2">
                        <p className="mb-1 text-white/50">Special Request</p>
                        <p className="text-white/80">{form.specialRequest}</p>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={confirmReservation}
                    disabled={submitting}
                    className="mt-8 w-full rounded-full bg-amber-300 py-4 font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting
                      ? "Confirming Reservation..."
                      : "Confirm Booking"}
                  </button>

                  <button
                    onClick={prev}
                    disabled={submitting}
                    className="mt-4 w-full text-white/60 transition hover:text-white disabled:opacity-50"
                  >
                    Back
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reservation;
