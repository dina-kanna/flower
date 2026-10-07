import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart, ShieldCheck, Truck } from "lucide-react";

export default function Hero({ onShop }) {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50 pt-28"
    >
      {/* Background blobs */}
      <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-full items-center gap-12 px-5 py-16 lg:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-rose-500 shadow-sm">
            <Sparkles size={16} />
            Fresh Flowers • Delivered With Love
          </div>

          <h1 className="text-5xl font-black leading-[1.05] text-gray-900 sm:text-6xl lg:text-7xl">
            Let Your
            <span className="block text-rose-500">Moments Bloom.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Discover hand-picked flowers, elegant bouquets and premium floral
            arrangements created to make every moment unforgettable.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={onShop}
              className="group flex items-center gap-3 rounded-full bg-gray-900 px-7 py-4 font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-rose-500 hover:shadow-rose-200"
            >
              Shop Flowers

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <a
              href="#categories"
              className="rounded-full border border-gray-200 bg-white px-7 py-4 font-bold text-gray-800 transition hover:-translate-y-1 hover:border-rose-300 hover:text-rose-500"
            >
              Explore Collection
            </a>
          </div>

          <div className="mt-10 flex gap-8">
            <div>
              <h3 className="text-2xl font-black">500+</h3>
              <p className="text-sm text-gray-500">Flower Varieties</p>
            </div>

            <div>
              <h3 className="text-2xl font-black">10K+</h3>
              <p className="text-sm text-gray-500">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-2xl font-black">4.9★</h3>
              <p className="text-sm text-gray-500">Customer Rating</p>
            </div>
          </div>
        </motion.div>

        {/* Image & Floating Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Top-right floating icon */}
          <div className="absolute -right-3 top-10 z-10 rounded-2xl bg-white p-4 shadow-xl">
            <Heart className="fill-rose-500 text-rose-500" size={22} />
          </div>

          {/* Top-left quick delivery status badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-16 z-10 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:flex"
          >
            <div className="rounded-xl bg-rose-100 p-2 text-rose-500">
              <Truck size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-400">Express Delivery</p>
              <p className="text-sm font-bold text-gray-900">Within 2 Hours 🚀</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="overflow-hidden rounded-[3rem] shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=85"
              alt="Gorgeous fresh flower bouquet"
              className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>

          <div className="absolute -bottom-6 -left-5 rounded-3xl bg-white p-5 shadow-2xl sm:left-auto sm:right-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-100 p-2 text-emerald-600">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Starting from</p>
                <p className="text-2xl font-black text-gray-900">₹599</p>
              </div>
            </div>
            <p className="mt-1 text-sm text-rose-500 font-medium">100% Fresh Farm Picked 🌸</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}