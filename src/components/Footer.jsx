import { Sprout, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-green-950 text-white"
      id="contact">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=2000&q=90')",
        }}/>

      <div className="absolute inset-0 bg-green-950/90" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-950/90 to-emerald-950/80" />

      <div className="absolute -top-32 -right-32 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-green-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16 p-7 sm:p-10 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl">

          <div className="grid lg:grid-cols-2 gap-8 items-center">

            <div>
              <div className="inline-flex items-center gap-2 text-lime-300 font-semibold text-sm mb-3">
                <Mail size={17} />
                STAY CONNECTED
              </div>

              <h2 className="text-3xl sm:text-4xl font-black">
                Grow Something Beautiful
              </h2>

              <p className="mt-3 text-green-200 max-w-lg">
                Get plant care tips, new arrivals, gardening ideas,
                and exclusive offers delivered to your inbox.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">

              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-green-200 outline-none focus:ring-2 focus:ring-lime-400 backdrop-blur-md"
              />

              <button className="flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-lime-400 to-green-500 text-green-950 font-bold hover:scale-105 transition-all duration-300 shadow-lg">
                Subscribe
                <ArrowRight size={18} />
              </button>

            </div>

          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lime-400 via-green-500 to-emerald-700 flex items-center justify-center text-green-950 shadow-lg shadow-green-950/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Sprout size={27} strokeWidth={2.2} />
                </div>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-lime-300 rounded-full border-2 border-green-950" />
              </div>

              <div>
               <span className="text-[15px] font-black tracking-tight text-white-950 sm:text-xl md:text-[21px]">
                    TerraBloom
                  </span>
                  <span className="text-[15px] font-black text-green-400 sm:text-xl md:text-[21px]">
                    Nursery
                  </span>
                <p className="mt-0.5 whitespace-nowrap text-[7px] font-bold uppercase tracking-[0.12em] text-gray-400 sm:text-[9px] sm:tracking-[0.2em] md:text-[10px]">
                  Grow • Live • Bloom
                </p>
              </div>
            </Link>

            <p className="mt-5 text-green-200 leading-7">
              Bringing beautiful plants, fresh greenery, and
              natural happiness into everyday spaces.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-lime-400 hover:text-green-950 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-lime-400 hover:text-green-950 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.581 9 4.75V8z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-lime-400 hover:text-green-950 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Explore</h3>
            <div className="space-y-3 text-green-200">
              <Link className="group flex items-center gap-2 hover:text-lime-300 transition" to="/">
                <span className="w-0 group-hover:w-3 h-px bg-lime-300 transition-all" />
                Home
              </Link>
              <Link className="group flex items-center gap-2 hover:text-lime-300 transition" to="/shop">
                <span className="w-0 group-hover:w-3 h-px bg-lime-300 transition-all" />
                Shop Plants
              </Link>
              <Link className="group flex items-center gap-2 hover:text-lime-300 transition" to="/wishlist">
                <span className="w-0 group-hover:w-3 h-px bg-lime-300 transition-all" />
                Wishlist
              </Link>
              <Link className="group flex items-center gap-2 hover:text-lime-300 transition" to="/cart">
                <span className="w-0 group-hover:w-3 h-px bg-lime-300 transition-all" />
                Shopping Cart
              </Link>
              <Link className="group flex items-center gap-2 hover:text-lime-300 transition" to="/login">
                <span className="w-0 group-hover:w-3 h-px bg-lime-300 transition-all" />
                My Account
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Plant Care</h3>
            <div className="space-y-3 text-green-200">
              <p className="hover:text-lime-300 transition cursor-pointer">🌱 Watering Guide</p>
              <p className="hover:text-lime-300 transition cursor-pointer">☀️ Sunlight Guide</p>
              <p className="hover:text-lime-300 transition cursor-pointer">🌿 Soil Guide</p>
              <p className="hover:text-lime-300 transition cursor-pointer">🪴 Plant Maintenance</p>
              <p className="hover:text-lime-300 transition cursor-pointer">🍃 Indoor Plant Tips</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
                <Mail size={19} className="text-lime-300 mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-green-300">Email</p>
                  <p className="text-green-100">hello@TerraBloom.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
                <Phone size={19} className="text-lime-300 mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-green-300">Phone</p>
                  <p className="text-green-100">+91 98765 98657</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
                <MapPin size={19} className="text-lime-300 mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-green-300">Nursery</p>
                  <p className="text-green-100">Salem, Tamil Nadu India</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-7">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-green-300 text-center md:text-left">
              © 2026 <span className="text-white font-semibold">TerraBloom Nursery</span>. All rights reserved.
            </p>
            <div className="flex gap-6 text-green-300">
              <Link to="/" className="hover:text-lime-300 transition">Privacy</Link>
              <Link to="/" className="hover:text-lime-300 transition">Terms</Link>
              <Link to="/" className="hover:text-lime-300 transition">Shipping</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}