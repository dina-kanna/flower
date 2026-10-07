import {
  Flower2,
  Globe,
  Share2,
  MessageCircle,
  ArrowUp,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-950 px-5 pb-8 pt-16 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand & Bio */}
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-rose-500 p-2">
                <Flower2 />
              </div>

              <h2 className="text-2xl font-black">
                Terra<span className="text-rose-400">Bloom</span>
              </h2>
            </div>

            <p className="mt-5 leading-7 text-gray-400">
              Bringing fresh flowers, beautiful emotions and unforgettable
              moments straight to your doorstep across Salem and beyond.
            </p>

            <div className="mt-5 flex gap-3">
              {[Globe, Share2, MessageCircle].map((Icon, i) => (
                <button
                  key={i}
                  className="rounded-full bg-gray-800 p-3 transition hover:-translate-y-1 hover:bg-rose-500"
                >
                  <Icon size={17} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-white">Quick Links</h3>

            <div className="mt-5 space-y-3 text-gray-400">
              <a href="#home" className="block transition hover:text-rose-400">Home</a>
              <a href="#flowers" className="block transition hover:text-rose-400">Flowers Collection</a>
              <a href="#categories" className="block transition hover:text-rose-400">Categories</a>
              <a href="#about" className="block transition hover:text-rose-400">About Us</a>
            </div>
          </div>

          {/* Contact Details (Salem, India) */}
          <div>
            <h3 className="font-bold text-lg text-white">Contact Us</h3>

            <div className="mt-5 space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-rose-500 shrink-0 mt-1" />
                <p>42, 4th Cross St, Fairlands, Salem, Tamil Nadu 636016, India</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-rose-500 shrink-0" />
                <p>+91 98765 43210 / +91 427 2345678</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-rose-500 shrink-0" />
                <p>support@terrabloom.in</p>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="text-rose-500 shrink-0 mt-1" />
                <p>Mon - Sun: 8:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg text-white">Newsletter</h3>

            <p className="mt-5 text-gray-400">
              Get flower inspiration and exclusive seasonal offers.
            </p>

            <div className="mt-4 flex overflow-hidden rounded-xl bg-white">
              <input
                placeholder="Your email address"
                className="min-w-0 flex-1 px-4 py-3 text-gray-900 outline-none text-sm"
              />

              <button className="bg-rose-500 px-5 font-bold text-white hover:bg-rose-600 transition">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-gray-800 pt-6 text-sm text-gray-500 sm:flex-row items-center">
          <p>© 2026 TerraBloom. All rights reserved. Crafted with love in Salem, India 🌸</p>

          <a
            href="#home"
            className="flex items-center gap-2 hover:text-white transition"
          >
            Back to top
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}