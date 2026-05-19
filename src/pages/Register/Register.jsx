import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      // 1. Firebase register
      const result = await createUser(data.email, data.password);

      const userEmail = result.user.email;

      // 2. Save user to DB (IMPORTANT: add name too)
      await api.post("/users", {
        email: result.user.email,
        name: data.name || "Guest User",
        role: "user",
      });

      // 3. Get JWT
      const res = await api.post("/jwt", {
        email: userEmail,
      });

      // 4. Save token
      localStorage.setItem("access-token", res.data.token);

      toast.success("Welcome to Velvet Spoon ✨");

      // 5. Redirect
      navigate("/dashboard");
    } catch (error) {
      const msg =
        error?.code === "auth/email-already-in-use"
          ? "Email already exists"
          : error.message;

      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-black text-white">
      <Toaster position="top-right" />

      <div className="w-full max-w-md">
        {/* HEADER */}
        <h1 className="text-4xl font-bold text-center mb-2">Create Account</h1>
        <p className="text-center text-white/50 mb-8">
          Join Velvet Spoon exclusive experience
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 backdrop-blur-xl"
        >
          {/* NAME */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none"
            {...register("name", { required: true })}
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none"
            {...register("email", { required: true })}
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none"
            {...register("password", { required: true })}
          />

          {/* BUTTON */}
          <button
            disabled={loading}
            className="w-full py-3 rounded-full bg-amber-300 text-black font-semibold hover:scale-[1.02] transition disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Register"}
          </button>

          {/* LOGIN LINK */}
          <p className="text-center text-sm text-white/50 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-amber-300 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
