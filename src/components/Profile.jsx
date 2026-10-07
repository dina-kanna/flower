import { motion } from "framer-motion";
import {
  User,
  Mail,
  MapPin,
  Package,
  Heart,
  LogOut,
  Phone,
  Calendar,
  ShieldCheck,
  Clock,
  ChevronRight,
} from "lucide-react";

export default function Profile({ onLogout }) {
  const recentOrders = [
    { id: "TB-8492", date: "Oct 4, 2026", items: "Velvet Red Roses (x1)", status: "Delivered", price: "₹1,499" },
    { id: "TB-8210", date: "Sep 18, 2026", items: "Sunshine Garden Bouquet (x2)", status: "Delivered", price: "₹3,198" },
    { id: "TB-7943", date: "Aug 29, 2026", items: "Royal Purple Orchids (x1)", status: "Delivered", price: "₹2,199" },
  ];

  return (
    <section className="min-h-screen bg-[#fffafa] px-5 pb-20 pt-32 text-gray-800">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-[2.5rem] bg-white shadow-xl border border-rose-100"
        >
          {/* Header Banner */}
          <div className="relative h-48 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 px-8 pt-6">
            <div className="flex justify-between items-center text-white/90 text-sm font-medium">
              <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full">
                <ShieldCheck size={16} /> Verified Member
              </span>
              <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full">
                <Calendar size={16} /> Member Since 2025
              </span>
            </div>
          </div>

          <div className="px-6 pb-12 sm:px-10">
            {/* User Info Card */}
            <div className="-mt-16 flex flex-col items-start gap-5 sm:flex-row sm:items-end justify-between">
              <div className="flex items-end gap-5">
                <div className="flex h-32 w-32 items-center justify-center rounded-full border-8 border-white bg-rose-100 shadow-xl overflow-hidden">
                  <User size={55} className="text-rose-500" />
                </div>

                <div className="mb-2">
                  <h1 className="text-3xl font-black text-gray-900">
                    Karthik Sundaram
                  </h1>
                  <p className="text-gray-500 font-medium">
                    Flower Enthusiast & Loyal Collector
                  </p>
                </div>
              </div>

              <button
                onClick={onLogout}
                className="mb-2 flex items-center gap-2 rounded-2xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-rose-600 shadow-md"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>

            {/* Grid Stats */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Info icon={<Mail />} title="Email Address" value="karthik.bloom@gmail.com" />
              <Info icon={<Phone />} title="Phone Number" value="+91 98422 12345" />
              <Info icon={<MapPin />} title="Primary Location" value="Fairlands, Salem, TN" />
              <Info icon={<Package />} title="Total Orders" value="12 Orders Placed" />
            </div>

            {/* Secondary Sections Grid */}
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              
              {/* Saved Delivery Address */}
              <div className="rounded-3xl bg-rose-50/60 border border-rose-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-rose-500" /> Delivery Address
                </h3>
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-gray-900">Karthik Sundaram (Home)</p>
                      <p className="text-sm text-gray-600 mt-1">
                        No. 42, 4th Cross Street, Fairlands,<br />
                        Salem, Tamil Nadu - 636016, India
                      </p>
                    </div>
                    <span className="text-xs bg-rose-100 text-rose-600 font-bold px-2.5 py-1 rounded-full">Default</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
                    <Clock size={12} /> Standard delivery window: 9 AM - 6 PM
                  </p>
                </div>
              </div>

              {/* Wishlist Summary Card */}
              <div className="rounded-3xl bg-rose-50/60 border border-rose-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Heart size={20} className="text-rose-500" /> Saved Wishlist Favorites
                </h3>
                <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-500 font-bold">
                      8+
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Flowers in Wishlist</p>
                      <p className="text-sm text-gray-500">Roses, Peonies, and Orchids saved</p>
                    </div>
                  </div>
                  <span className="text-rose-500 font-bold text-sm flex items-center hover:underline cursor-pointer">
                    View <ChevronRight size={16} />
                  </span>
                </div>
              </div>

            </div>

            {/* Recent Orders Table */}
            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-5">Recent Flower Orders</h3>
              <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm bg-white">
                <div className="divide-y divide-gray-100">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 hover:bg-gray-50 transition gap-3">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-gray-900">{order.id}</span>
                          <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-2.5 py-0.5 rounded-full">
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{order.items}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{order.date}</p>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-4">
                        <span className="font-black text-rose-600 text-lg">{order.price}</span>
                        <button className="text-xs font-semibold bg-gray-100 hover:bg-rose-500 hover:text-white px-4 py-2 rounded-xl transition">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="rounded-3xl bg-gray-50 p-5 transition hover:-translate-y-1 hover:bg-rose-50/50 border border-gray-100">
      <div className="text-rose-500">{icon}</div>
      <p className="mt-3 text-xs font-medium uppercase tracking-wider text-gray-400">{title}</p>
      <p className="mt-1 font-bold text-gray-900">{value}</p>
    </div>
  );
}