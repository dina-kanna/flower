import { useState } from "react";
import { User, Package, Heart, ShoppingCart, Leaf, ArrowRight, MapPin, ShieldCheck, Settings, Sprout, Mail, Phone, Calendar, CheckCircle2, Clock, Truck, Plus, Trash2, Edit2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

const Profile = () => {
  const { cart = [], wishlist = [] } = useShop();
  const [activeTab, setActiveTab] = useState("overview"); // 'overview', 'orders', 'addresses', 'settings'

  const cartCount = cart.reduce(
    (total, item) => total + (Number(item.quantity) || 1),
    0
  );

  const [userProfile, setUserProfile] = useState({
    name: "Dinesh",
    email: "dinesh@terrabloom.com",
    phone: "+91 98765 98657",
    memberSince: "January 2025",
  });

  const [orders, setOrders] = useState([
    {
      id: "ORD-8492",
      date: "May 14, 2026",
      status: "Delivered",
      total: "₹645",
      itemsCount: 3,
      items: ["Monstera Deliciosa", "Snake Plant", "Ceramic Pot"],
    },
    {
      id: "ORD-7931",
      date: "April 02, 2026",
      status: "Processing",
      total: "₹320",
      itemsCount: 1,
      items: ["Fiddle Leaf Fig"],
    },
  ]);

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      title: "Home",
      address: "742 Evergreen Terrace, Springfield, OR 97477",
      isDefault: true,
    },
    {
      id: 2,
      title: "Office",
      address: "100 Tech Innovation Blvd, Suite 400, Portland, OR 97201",
      isDefault: false,
    },
  ]);

  const [newAddressInput, setNewAddressInput] = useState("");
  const [showAddAddress, setShowAddAddress] = useState(false);

  const handleAddAddress = (e) => {
    e.preventDefault();
    if (!newAddressInput.trim()) return;
    setAddresses([
      ...addresses,
      { id: Date.now(), title: "Other", address: newAddressInput.trim(), isDefault: false }
    ]);
    setNewAddressInput("");
    setShowAddAddress(false);
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#f4f8ef]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <section className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1800&q=90"
            alt="TerraBloom Nursery plants"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-900/75 to-green-900/40" />

          <div className="absolute -top-20 right-10 w-72 h-72 rounded-full bg-lime-300/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-52 h-52 rounded-full bg-emerald-300/10 blur-3xl" />

          <div className="relative z-10 p-5 sm:p-10 lg:p-14">

            <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-lime-300 to-emerald-500 flex items-center justify-center shadow-lg shrink-0">
                  <Sprout size={22} className="text-green-950" />
                </div>
                <div>
                  <p className="text-base sm:text-xl font-black text-white">TerraBloom Nursery</p>
                  <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-lime-200 font-bold">
                    Grow • Live • Bloom
                  </p>
                </div>
              </div>

              <Link
                to="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-bold text-xs sm:text-sm transition shadow-lg shrink-0"
              >
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Link>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
                <div className="relative self-start sm:self-auto">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-[2rem] bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl">
                    <User size={38} className="text-white sm:w-12 sm:h-12" />
                  </div>
                  <span className="absolute bottom-1 right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-lime-400 border-4 border-green-900" />
                </div>

                <div className="min-w-0">
                  <p className="text-lime-300 text-xs sm:text-sm font-bold uppercase tracking-[0.18em]">
                    My Account
                  </p>
                  <h1 className="mt-1 text-2xl sm:text-4xl lg:text-5xl font-black text-white truncate">
                    Welcome Back, {userProfile.name.split(" ")[0]}!
                  </h1>
                  <div className="mt-3 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-white/80 text-xs sm:text-sm">
                    <span className="flex items-center gap-1.5 truncate"><Mail size={14} className="shrink-0" /> {userProfile.email}</span>
                    <span className="flex items-center gap-1.5"><Phone size={14} className="shrink-0" /> {userProfile.phone}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={14} className="shrink-0" /> Member since {userProfile.memberSince}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="relative -mt-6 sm:-mt-8 mx-2 sm:mx-8 lg:mx-14 z-20">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-green-100 p-3 sm:p-5">
            <div className="grid grid-cols-3 divide-x divide-green-100">

              <Link to="/cart" className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 p-2 sm:p-4 hover:bg-green-50/50 rounded-2xl transition text-center sm:text-left">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                  <ShoppingCart size={18} />
                </div>
                <div>
                  <p className="text-lg sm:text-2xl font-black text-green-950">{cartCount}</p>
                  <p className="text-[10px] sm:text-sm text-gray-400">Cart</p>
                </div>
              </Link>

              <Link to="/wishlist" className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 p-2 sm:p-4 hover:bg-red-50/50 rounded-2xl transition text-center sm:text-left">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                  <Heart size={18} fill="currentColor" />
                </div>
                <div>
                  <p className="text-lg sm:text-2xl font-black text-green-950">{wishlist.length}</p>
                  <p className="text-[10px] sm:text-sm text-gray-400">Wishlist</p>
                </div>
              </Link>

              <button onClick={() => setActiveTab("orders")} className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 p-2 sm:p-4 hover:bg-lime-50/50 rounded-2xl transition text-center sm:text-left">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-lime-50 text-green-700 flex items-center justify-center shrink-0">
                  <Package size={18} />
                </div>
                <div>
                  <p className="text-lg sm:text-2xl font-black text-green-950">{orders.length}</p>
                  <p className="text-[10px] sm:text-sm text-gray-400">Orders</p>
                </div>
              </button>

            </div>
          </div>
        </section>

        <div className="mt-8 sm:mt-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 border-b border-green-200 pb-3 min-w-max">
            {[
              { id: "overview", label: "Overview", icon: Leaf },
              { id: "orders", label: `My Orders (${orders.length})`, icon: Package },
              { id: "addresses", label: `Saved Addresses (${addresses.length})`, icon: MapPin },
              { id: "settings", label: "Account Settings", icon: Settings },
            ].map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${
                    isActive 
                      ? "bg-green-700 text-white shadow-md shadow-green-900/10" 
                      : "bg-white text-gray-600 border border-green-100 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  <IconComponent size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {activeTab === "overview" && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <section className="mt-6 sm:mt-8">
              <div className="mb-5">
                <p className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-[0.18em]">
                  <Leaf size={14} /> Your Garden
                </p>
                <h2 className="mt-1 text-2xl sm:text-4xl font-black text-green-950">Quick Access</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                <Link to="/cart" className="group relative overflow-hidden bg-white rounded-2xl sm:rounded-[2rem] border border-green-100 p-5 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center text-white shadow-lg">
                      <ShoppingCart size={22} />
                    </div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-50 flex items-center justify-center text-green-700 group-hover:bg-green-700 group-hover:text-white transition-all">
                      <ArrowRight size={17} />
                    </div>
                  </div>
                  <h3 className="mt-5 sm:mt-7 text-lg sm:text-xl font-black text-green-950">Shopping Cart</h3>
                  <p className="mt-1.5 sm:mt-2 text-gray-500 text-xs sm:text-sm">
                    {cartCount > 0 ? `You have ${cartCount} ${cartCount === 1 ? "plant" : "plants"} waiting in your cart.` : "Your cart is waiting for some beautiful plants."}
                  </p>
                </Link>

                <Link to="/wishlist" className="group relative overflow-hidden bg-white rounded-2xl sm:rounded-[2rem] border border-green-100 p-5 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center text-white shadow-lg">
                      <Heart size={22} fill="currentColor" />
                    </div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                      <ArrowRight size={17} />
                    </div>
                  </div>
                  <h3 className="mt-5 sm:mt-7 text-lg sm:text-xl font-black text-green-950">My Wishlist</h3>
                  <p className="mt-1.5 sm:mt-2 text-gray-500 text-xs sm:text-sm">
                    {wishlist.length > 0 ? `${wishlist.length} ${wishlist.length === 1 ? "plant" : "plants"} saved for later.` : "Save your favourite plants here."}
                  </p>
                </Link>

                <button onClick={() => setActiveTab("orders")} className="text-left group relative overflow-hidden bg-white rounded-2xl sm:rounded-[2rem] border border-green-100 p-5 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-lime-400 to-green-600 flex items-center justify-center text-white shadow-lg">
                      <Package size={22} />
                    </div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-lime-50 flex items-center justify-center text-green-700 group-hover:bg-green-700 group-hover:text-white transition-all">
                      <ArrowRight size={17} />
                    </div>
                  </div>
                  <h3 className="mt-5 sm:mt-7 text-lg sm:text-xl font-black text-green-950">My Orders</h3>
                  <p className="mt-1.5 sm:mt-2 text-gray-500 text-xs sm:text-sm">
                    {orders.length} active or past order history available.
                  </p>
                </button>
              </div>
            </section>
          </div>
        )}

        {activeTab === "orders" && (
          <section className="mt-6 sm:mt-8 space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] font-bold text-green-600">History</p>
                <h2 className="text-2xl font-black text-green-950">Order History</h2>
              </div>
              <span className="text-xs bg-green-100 text-green-800 font-bold px-3 py-1 rounded-full">
                {orders.length} Total
              </span>
            </div>

            {orders.length === 0 ? (
              <div className="bg-white rounded-3xl p-10 text-center border border-green-100">
                <Package size={42} className="mx-auto text-gray-300 mb-3" />
                <h3 className="text-base sm:text-lg font-bold text-green-950">No orders placed yet</h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">Your plants are waiting for a good home!</p>
                <Link to="/shop" className="mt-4 inline-block px-5 py-2.5 bg-green-700 text-white font-bold rounded-xl text-sm">Browse Plants</Link>
              </div>
            ) : (
              orders.map((order) => (
                <div key={order.id} className="bg-white rounded-2xl border border-green-100 p-5 sm:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-black text-green-950 text-base sm:text-lg">{order.id}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold flex items-center gap-1 ${
                        order.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                      }`}>
                        {order.status === "Delivered" ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                        {order.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">Placed on {order.date}</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-700 mt-2">
                      Items: {order.items.join(", ")} ({order.itemsCount})
                    </p>
                  </div>
                  <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-3 md:pt-0 border-green-50">
                    <div className="text-left md:text-right">
                      <p className="text-[10px] sm:text-xs text-gray-400">Total Amount</p>
                      <p className="text-base sm:text-lg font-black text-green-950">{order.total}</p>
                    </div>
                    <button className="px-3.5 py-2 bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-bold rounded-xl text-xs sm:text-sm transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))
            )}
          </section>
        )}

        {activeTab === "addresses" && (
          <section className="mt-6 sm:mt-8 space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] font-bold text-green-600">Logistics</p>
                <h2 className="text-2xl font-black text-green-950">Saved Delivery Addresses</h2>
              </div>
              <button 
                onClick={() => setShowAddAddress(!showAddAddress)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-green-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow hover:bg-green-800 transition"
              >
                <Plus size={16} /> Add Address
              </button>
            </div>

            {showAddAddress && (
              <form onSubmit={handleAddAddress} className="bg-white p-4 sm:p-6 rounded-2xl border border-green-200 shadow-sm flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter full address details..."
                  value={newAddressInput}
                  onChange={(e) => setNewAddressInput(e.target.value)}
                  className="flex-1 px-4 py-3 border border-green-100 rounded-xl bg-green-50/50 outline-none focus:border-green-400 text-xs sm:text-sm"
                />
                <button type="submit" className="px-5 py-3 bg-green-700 text-white font-bold rounded-xl text-xs sm:text-sm">Save Address</button>
              </form>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              {addresses.map((addr) => (
                <div key={addr.id} className="bg-white p-5 sm:p-6 rounded-2xl border border-green-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-black text-green-950 text-sm sm:text-base flex items-center gap-2">
                        <MapPin size={15} className="text-green-600 shrink-0" /> {addr.title}
                      </span>
                      {addr.isDefault && (
                        <span className="bg-green-100 text-green-800 text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">Default</span>
                      )}
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">{addr.address}</p>
                  </div>
                  <div className="mt-5 flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
                    <button className="text-xs font-bold text-gray-500 hover:text-green-700 flex items-center gap-1">
                      <Edit2 size={13} /> Edit
                    </button>
                    {!addr.isDefault && (
                      <button onClick={() => handleDeleteAddress(addr.id)} className="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1">
                        <Trash2 size={13} /> Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "settings" && (
          <section className="mt-6 sm:mt-8 space-y-6 animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl sm:rounded-[2rem] border border-green-100 shadow-sm p-5 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-black text-green-950 mb-5">Account Settings & Security</h2>
              
              <div className="space-y-4 max-w-xl">
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-gray-500 uppercase mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value={userProfile.name} 
                    onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                    className="w-full px-4 py-3 border border-green-100 rounded-xl bg-green-50/50 outline-none focus:border-green-400 font-medium text-green-950 text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-gray-500 uppercase mb-1">Email Address</label>
                  <input 
                    type="email" 
                    value={userProfile.email} 
                    onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                    className="w-full px-4 py-3 border border-green-100 rounded-xl bg-green-50/50 outline-none focus:border-green-400 font-medium text-green-950 text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-gray-500 uppercase mb-1">Phone Number</label>
                  <input 
                    type="text" 
                    value={userProfile.phone} 
                    onChange={(e) => setUserProfile({...userProfile, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-green-100 rounded-xl bg-green-50/50 outline-none focus:border-green-400 font-medium text-green-950 text-xs sm:text-sm"
                  />
                </div>
                <button 
                  onClick={() => alert("Profile updated successfully!")}
                  className="mt-2 w-full sm:w-auto px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-xl text-xs sm:text-sm transition shadow-md shadow-green-900/15"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </section>
        )}

        <section className="mt-12 sm:mt-14">
          <div className="rounded-2xl sm:rounded-[2rem] bg-gradient-to-r from-green-700 to-emerald-800 p-5 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl shadow-green-900/10">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                <Leaf size={22} />
              </div>
              <div>
                <h3 className="font-black text-base sm:text-lg">Keep Growing</h3>
                <p className="text-white/70 text-xs sm:text-sm">Discover something green for your space.</p>
              </div>
            </div>
            <Link
              to="/shop"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-lime-400 text-green-950 font-bold hover:bg-lime-300 hover:-translate-y-0.5 transition-all text-sm shadow-md"
            >
              Shop Plants
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Profile;