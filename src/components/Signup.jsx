import { motion } from "framer-motion";
import { Flower2 } from "lucide-react";

export default function Signup({ onLogin, onSuccess }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 to-rose-100 px-5 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl sm:p-10"
      >
        <div className="mx-auto flex w-fit rounded-2xl bg-rose-100 p-3">
          <Flower2 className="text-rose-500" />
        </div>

        <h1 className="mt-5 text-center text-3xl font-black">
          Create Account
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Join the TerraBloom family 🌸
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSuccess();
          }}
          className="mt-8 space-y-4"
        >
          <input
            required
            placeholder="Full name"
            className="input"
          />

          <input
            required
            type="email"
            placeholder="Email address"
            className="input"
          />

          <input
            required
            type="password"
            placeholder="Password"
            className="input"
          />

          <button className="w-full rounded-2xl bg-gray-900 py-4 font-bold text-white transition hover:bg-rose-500">
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <button
            onClick={onLogin}
            className="font-bold text-rose-500"
          >
            Login
          </button>
        </p>
      </motion.div>
    </div>
  );
}