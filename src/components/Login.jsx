import { motion } from "framer-motion";
import { Flower2, Mail, Lock, ArrowRight } from "lucide-react";

export default function Login({ onSignup, onSuccess }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-50 to-pink-100 px-5 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="grid w-full max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-2xl md:grid-cols-2"
      >
        <div className="hidden bg-rose-500 p-12 text-white md:block">
          <Flower2 size={45} />

          <h1 className="mt-20 text-5xl font-black">
            Welcome Back.
          </h1>

          <p className="mt-5 leading-7 text-rose-100">
            Sign in to discover beautiful flowers and manage your TerraBloom
            orders.
          </p>
        </div>

        <div className="p-8 sm:p-12">
          <h2 className="text-3xl font-black">Login</h2>
          <p className="mt-2 text-gray-500">
            Welcome back to TerraBloom 🌸
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSuccess();
            }}
            className="mt-8 space-y-5"
          >
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                required
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-gray-200 py-4 pl-12 pr-4 outline-none transition focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
              />
            </div>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                required
                type="password"
                placeholder="Password"
                className="w-full rounded-2xl border border-gray-200 py-4 pl-12 pr-4 outline-none transition focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
              />
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 py-4 font-bold text-white transition hover:bg-rose-500">
              Login
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <button
              onClick={onSignup}
              className="font-bold text-rose-500"
            >
              Sign Up
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}