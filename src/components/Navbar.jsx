import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, Heart, Sprout, ArrowRight, UserRound } from "lucide-react";
import { useShop } from "../context/ShopContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const { cartCount = 0, wishlist = [] } = useShop();
  const wishlistCount = wishlist.length;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const closeAll = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };

  const handleNavigation = () => {
    closeAll();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const value = search.trim();
    if (!value) return;

    closeAll();
    setSearch("");
    navigate(`/shop?search=${encodeURIComponent(value)}`);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  const navLinkClass = ({ isActive }) => `
    relative px-2.5 lg:px-4 py-2 rounded-xl text-xs lg:text-sm font-bold transition-all duration-300 whitespace-nowrap
    ${
      isActive
        ? "bg-green-50 text-green-700"
        : "text-gray-600 hover:bg-green-50 hover:text-green-700"
    }
  `;

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full overflow-x-hidden">
      <nav className="mx-auto w-full max-w-full px-2 pt-2 sm:px-4 sm:pt-3 md:px-6 lg:px-8">
        <div className="relative overflow-visible rounded-[1.25rem] border border-green-100 bg-white/95 shadow-lg shadow-green-950/5 backdrop-blur-xl sm:rounded-[1.5rem] lg:rounded-[2rem]">
          
          {/* Main Bar */}
          <div className="flex min-h-[64px] items-center justify-between gap-2 px-3 sm:h-[72px] sm:px-5 md:px-6">
            
            {/* Logo & Brand Wrapper */}
            <Link
              to="/"
              onClick={handleNavigation}
              className="group flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
              aria-label="TerraBloom Nursery Home"
            >
              <div className="relative shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-400 via-green-500 to-emerald-700 text-green-950 shadow-lg shadow-green-950/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 sm:h-11 sm:w-11 lg:h-12 lg:w-12">
                  <Sprout size={22} strokeWidth={2.2} className="sm:h-[24px] sm:w-[24px]" />
                </div>
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-green-950 bg-lime-300" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-0.5 whitespace-nowrap sm:gap-1">
                  <span className="text-sm font-black tracking-tight text-green-950 sm:text-lg lg:text-[21px]">
                    TerraBloom
                  </span>
                  <span className="text-sm font-black text-green-600 sm:text-lg lg:text-[21px]">
                    Nursery
                  </span>
                </div>
                <p className="mt-0.5 whitespace-nowrap text-[7px] font-bold uppercase tracking-[0.12em] text-gray-400 sm:text-[8px] lg:text-[10px] lg:tracking-[0.2em]">
                  Grow • Live • Bloom
                </p>
              </div>
            </Link>

            {/* Tablet & Desktop Navigation Links (Visible on 768px+ / tablet & up) */}
            <div className="hidden items-center gap-0.2 md:flex lg:gap-0.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={handleNavigation}
                  className={navLinkClass}
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span
                        className={`absolute bottom-1 left-2.5 right-2.5 lg:left-4 lg:right-4 h-0.5 origin-left rounded-full bg-green-600 transition-transform duration-300 ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Action Buttons & Icons */}
            <div className="flex shrink-0 items-center gap-1 sm:gap-1.5 lg:gap-2">
              
              {/* Search Toggle */}
              <button
                type="button"
                onClick={() => {
                  setSearchOpen((prev) => !prev);
                  setMenuOpen(false);
                }}
                aria-label={searchOpen ? "Close search" : "Open search"}
                aria-expanded={searchOpen}
                className="flex h-9 w-9 items-center justify-center rounded-xl text-gray-600 transition-all hover:bg-green-50 hover:text-green-700 sm:h-10 sm:w-10"
              >
                {searchOpen ? <X size={18} /> : <Search size={18} />}
              </button>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                onClick={handleNavigation}
                aria-label={`Wishlist with ${wishlistCount} items`}
                className="relative flex h-9 w-9 items-center justify-center rounded-xl text-gray-600 transition-all hover:bg-red-50 hover:text-red-500 sm:h-10 sm:w-10"
              >
                <Heart size={18} />
                {wishlistCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-[17px] min-w-[17px] items-center justify-center rounded-full border-2 border-white bg-red-500 px-1 text-[9px] font-black text-white shadow-sm">
                    {wishlistCount > 99 ? "99+" : wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                onClick={handleNavigation}
                aria-label={`Cart with ${cartCount} items`}
                className="relative flex h-9 w-9 items-center justify-center rounded-xl text-gray-600 transition-all hover:bg-green-50 hover:text-green-700 sm:h-10 sm:w-10"
              >
                <ShoppingCart size={19} />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-[17px] min-w-[17px] items-center justify-center rounded-full border-2 border-white bg-gradient-to-r from-green-600 to-emerald-700 px-1 text-[9px] font-black text-white shadow-md">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </Link>

              {/* Profile Icon (Visible on 768px+ tablet/desktop) */}
              <Link
                to="/profile"
                onClick={handleNavigation}
                aria-label="Profile"
                className="hidden h-8 w-6 lg:h-10 lg:w-9 items-center justify-center rounded-xl border border-green-100 bg-green-50 text-green-700 transition-all duration-300 hover:border-green-600 hover:bg-green-600 hover:text-white md:flex"
              >
                <UserRound size={17} />
              </Link>

              {/* Login Button (Visible on 768px+ tablet/desktop) */}
              <Link
                to="/login"
                onClick={handleNavigation}
                className="ml-0.3 hidden items-center gap-0.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-700 px-0.5 lg:px-2.5 py-2 text-xs lg:text-sm font-black text-white shadow-lg shadow-green-700/20 transition-all hover:-translate-y-0.5 md:inline-flex"
              >
                Login
                <ArrowRight size={14} />
              </Link>

              {/* Mobile Menu Toggle (Visible strictly below 768px mobile breakpoint) */}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen((prev) => !prev);
                  setSearchOpen(false);
                }}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="flex h-9 w-9 items-center justify-center rounded-xl text-gray-700 transition hover:bg-green-50 sm:h-10 sm:w-10 md:hidden"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

            </div>
          </div>

          {/* Search Dropdown */}
          {searchOpen && (
            <form onSubmit={handleSearch} className="border-t border-green-100 px-3 py-3 sm:px-5 sm:py-4 md:px-6">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600" />
                <input
                  autoFocus
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search your next favorite plant..."
                  className="h-11 w-full rounded-xl border border-green-100 bg-green-50 pl-11 pr-4 text-sm font-medium text-green-950 outline-none transition placeholder:text-gray-400 focus:border-green-400 focus:bg-white focus:ring-4 focus:ring-green-500/10 sm:h-12"
                />
              </div>
            </form>
          )}

          {/* Mobile Dropdown Menu (Strictly below 768px) */}
          {menuOpen && (
            <div className="border-t border-green-100 px-3 py-4 sm:px-4 md:hidden max-h-[calc(100vh-90px)] overflow-y-auto">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={handleNavigation}
                    className={({ isActive }) => `
                      flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition
                      ${
                        isActive
                          ? "bg-green-100 text-green-700"
                          : "text-green-950 hover:bg-green-50 hover:text-green-700"
                      }
                    `}
                  >
                    {({ isActive }) => (
                      <>
                        <span className="flex items-center gap-3">{link.name}</span>
                        <ArrowRight
                          size={16}
                          className={`transition-transform ${
                            isActive ? "translate-x-1 text-green-600" : ""
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                ))}

                <div className="my-3 h-px bg-green-100" />

                <NavLink
                  to="/profile"
                  onClick={handleNavigation}
                  className={({ isActive }) => `
                    flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition
                    ${isActive ? "bg-green-100 text-green-700" : "text-green-950 hover:bg-green-50 hover:text-green-700"}
                  `}
                >
                  <span className="flex items-center gap-3">
                    <UserRound size={18} />
                    Profile
                  </span>
                  <ArrowRight size={16} />
                </NavLink>

                <NavLink
                  to="/wishlist"
                  onClick={handleNavigation}
                  className={({ isActive }) => `
                    flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition
                    ${isActive ? "bg-red-50 text-red-600" : "text-green-950 hover:bg-green-50"}
                  `}
                >
                  <span className="flex items-center gap-3">
                    <Heart size={18} />
                    Wishlist
                  </span>
                  <span className="flex items-center gap-2">
                    {wishlistCount > 0 && (
                      <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-red-500 px-2 text-xs font-black text-white">
                        {wishlistCount > 99 ? "99+" : wishlistCount}
                      </span>
                    )}
                    <ArrowRight size={16} />
                  </span>
                </NavLink>

                <NavLink
                  to="/cart"
                  onClick={handleNavigation}
                  className={({ isActive }) => `
                    flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition
                    ${isActive ? "bg-green-100 text-green-700" : "text-green-950 hover:bg-green-50"}
                  `}
                >
                  <span className="flex items-center gap-3">
                    <ShoppingCart size={18} />
                    Shopping Cart
                  </span>
                  <span className="flex items-center gap-2">
                    {cartCount > 0 && (
                      <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-green-600 px-2 text-xs font-black text-white">
                        {cartCount > 99 ? "99+" : cartCount}
                      </span>
                    )}
                    <ArrowRight size={16} />
                  </span>
                </NavLink>

                <Link
                  to="/login"
                  onClick={handleNavigation}
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-700 px-4 py-3.5 text-sm font-black text-white shadow-lg shadow-green-700/10 transition hover:from-green-700 hover:to-emerald-800"
                >
                  Login
                  <ArrowRight size={16} />
                </Link>

              </div>
            </div>
          )}

        </div>
      </nav>
    </header>
  );
};

export default Navbar;