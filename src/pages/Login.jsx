import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf, Mail, Lock, Eye, EyeOff, ArrowRight, Sprout, ShieldCheck, Sparkles, ArrowLeft } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <main className="min-h-screen bg-[#f4f8ef] flex items-center justify-center p-4 sm:p-6 lg:p-10">

      <div className="w-full max-w-full min-h-[650px]
      bg-white rounded-[2.5rem]
      overflow-hidden
      shadow-2xl shadow-green-950/10
      border border-green-100
      grid lg:grid-cols-2">
        
        <div className="relative hidden lg:flex overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1400&q=90"
            alt="Green tropical plants"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-green-950/90 via-green-900/65 to-green-800/50" />

          <div className="absolute -top-20 -left-20 w-72 h-72 bg-lime-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col justify-between p-10 xl:p-14 text-white">

            <Link
              to="/"
              className="inline-flex items-center gap-3 w-fit group"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl
                bg-gradient-to-br from-lime-300 to-emerald-500
                flex items-center justify-center
                shadow-xl
                group-hover:scale-110
                transition-transform duration-300">
                  <Sprout
                    size={26}
                    className="text-green-950"
                  />
                </div>
                <span className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-lime-300 border-2 border-green-900" />
              </div>

              <div>
                <p className="text-2xl font-black tracking-tight">
                  TerraBloom Nursery
                </p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-lime-200 font-bold">
                  Grow • Live • Bloom
                </p>
              </div>
            </Link>

            <div className="max-w-md">
              <div className="inline-flex items-center gap-2
              px-4 py-2 rounded-full
              bg-white/10 backdrop-blur-md
              border border-white/20
              text-lime-200 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} />
                Welcome Back
              </div>

              <h2 className="mt-6 text-5xl xl:text-6xl font-black leading-[1.05]">
                Grow your
                <span className="block text-lime-300">
                  happy place.
                </span>
              </h2>

              <p className="mt-6 text-white/70 text-lg leading-8">
                Sign in to discover beautiful plants, manage your
                orders and continue creating a greener home.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl
              bg-white/10 backdrop-blur-md
              border border-white/20
              flex items-center justify-center">
                <ShieldCheck
                  size={21}
                  className="text-lime-300"
                />
              </div>

              <div>
                <p className="font-bold">
                  Safe & Secure
                </p>
                <p className="text-sm text-white/60">
                  Your account is protected
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12">

          <div className="hidden lg:flex justify-start w-full">
            <Link
              to="/"
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-xl
                bg-green-50
                border
                border-green-100
                text-green-700
                text-xs
                font-bold
                hover:bg-green-100
                transition-all
                duration-200
              "
            >
              <ArrowLeft size={15} />
              Back to Home
            </Link>
          </div>

          <div className="w-full max-w-md mx-auto my-auto py-6">

            <div className="lg:hidden flex justify-start w-full mb-6">
              <Link
                to="/"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-xl
                  bg-green-50
                  border
                  border-green-100
                  text-green-700
                  text-xs
                  font-bold
                  hover:bg-green-100
                  transition-all
                  duration-200
                "
              >
                <ArrowLeft size={14} />
                Back to Home
              </Link>
            </div>

            <div className="lg:hidden flex justify-center mb-8">
              <Link
                to="/"
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-2xl
                bg-gradient-to-br from-green-500 to-emerald-700
                flex items-center justify-center text-white shadow-lg">
                  <Sprout size={25} />
                </div>
                <div className="text-left">
                  <p className="text-xl font-black text-green-950">
                    TerraBloom Nursery
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-green-600 font-bold">
                    Grow • Live • Bloom
                  </p>
                </div>
              </Link>
            </div>

            <div>
            
              <h1 className="mt-5 text-4xl sm:text-5xl font-black text-green-950">
                Welcome back.
              </h1>

              <p className="mt-3 text-gray-500">
                Login to continue your TerraBloom journey.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-green-950 mb-2"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2
                    -translate-y-1/2
                    text-gray-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full h-14
                    pl-12 pr-4
                    rounded-2xl
                    bg-green-50/50
                    border border-green-100
                    text-green-950
                    placeholder:text-gray-400
                    outline-none
                    focus:bg-white
                    focus:border-green-500
                    focus:ring-4
                    focus:ring-green-500/10
                    transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-bold text-green-950"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-bold text-green-700 hover:text-green-900"
                  >
                    Forgot Password?
                  </button>
                </div>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2
                    -translate-y-1/2
                    text-gray-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="w-full h-14
                    pl-12 pr-12
                    rounded-2xl
                    bg-green-50/50
                    border border-green-100
                    text-green-950
                    placeholder:text-gray-400
                    outline-none
                    focus:bg-white
                    focus:border-green-500
                    focus:ring-4
                    focus:ring-green-500/10
                    transition-all"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2
                    -translate-y-1/2
                    text-gray-400
                    hover:text-green-700
                    transition"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-green-700 rounded"
                />
                <span className="text-sm text-gray-500">
                  Remember me
                </span>
              </label>

              <button
                type="submit"
                className="group w-full h-14
                flex items-center justify-center gap-3
                rounded-2xl
                bg-gradient-to-r
                from-green-600
                to-emerald-700
                text-white
                font-bold
                shadow-xl shadow-green-700/20
                hover:from-green-700
                hover:to-green-800
                hover:-translate-y-0.5
                hover:shadow-2xl
                active:scale-[0.98]
                transition-all duration-300"
              >
                Login to TerraBloom

                <ArrowRight
                  size={19}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>

            <div className="flex items-center gap-4 my-7">
              <div className="h-px flex-1 bg-green-100" />
              <span className="text-xs text-gray-400 font-medium">
                NEW TO TerraBloom?
              </span>
              <div className="h-px flex-1 bg-green-100" />
            </div>

            <Link
              to="/signup"
              className="w-full h-14
              flex items-center justify-center
              rounded-2xl
              border-2 border-green-200
              text-green-700
              font-bold
              hover:bg-green-50
              hover:border-green-300
              transition-all duration-300"
            >
              Create an Account
            </Link>

            <p className="text-center text-xs text-gray-400 mt-7">
              By continuing, you agree to our
              <span className="text-green-700 font-semibold">
                {" "}Terms & Privacy Policy
              </span>
            </p>

          </div>

          <div />

        </div>

      </div>
    </main>
  );
};

export default Login;