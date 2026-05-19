import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      // 1. Firebase login
      const result = await signIn(data.email, data.password);

      // 2. Get JWT from backend
      const res = await api.post("/jwt", {
        email: result.user.email,
      });

      // 3. Save token
      localStorage.setItem("access-token", res.data.token);

      toast.success("Welcome back 👋");

      // 4. Redirect
      navigate("/dashboard");
    } catch (error) {
      const msg =
        error?.code === "auth/invalid-credential"
          ? "Invalid email or password"
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
        <h1 className="text-4xl font-bold text-center mb-2">Welcome Back</h1>
        <p className="text-center text-white/50 mb-8">
          Sign in to continue your Velvet Spoon experience
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 backdrop-blur-xl"
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none"
            {...register("email", { required: true })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none"
            {...register("password", { required: true })}
          />

          <button
            disabled={loading}
            className="w-full py-3 rounded-full bg-amber-300 text-black font-semibold hover:scale-[1.02] transition disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Login"}
          </button>

          {/* REGISTER LINK */}
          <p className="text-center text-sm text-white/50 mt-4">
            New here?{" "}
            <Link to="/register" className="text-amber-300 hover:underline">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
