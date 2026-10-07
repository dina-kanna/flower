
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flower2,
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  User,
  Grid2X2,
  Home,
  Flower,
  Info,
  Phone,
} from "lucide-react";

export default function Navbar({
  cartCount = 0,
  wishlistCount = 0,
  onCart,
  onWishlist,
  onProfile,
  onHome,
  onFlowers,
  onCategories,
  onAbout,
  onContact,
}) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const links = [
    {
      name: "Home",
      icon: Home,
      action: onHome,
    },
    {
      name: "Flowers",
      icon: Flower,
      action: onFlowers,
    },
    {
      name: "Categories",
      icon: Grid2X2,
      action: onCategories,
    },
    {
      name: "About",
      icon: Info,
      action: onAbout,
    },
    {
      name: "Contact",
      icon: Phone,
      action: onContact,
    },
  ];

  const handleNavigation = (action) => {
    setMobileMenu(false);

    if (action) {
      action();
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-rose-100 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-full items-center justify-between px-5 py-4">
        {/* ================= LOGO ================= */}
        <button
          onClick={() => handleNavigation(onHome)}
          className="group flex items-center gap-3"
        >
          <motion.div
            whileHover={{
              rotate: 15,
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            className="rounded-2xl bg-rose-100 p-2.5 transition group-hover:bg-rose-200"
          >
            <Flower2
              className="text-rose-500"
              size={25}
            />
          </motion.div>

          <div className="text-left">
            <h1 className="text-xl font-black text-gray-900">
              Terra
              <span className="text-rose-500">
                Bloom
              </span>
            </h1>

            <p className="text-[9px] tracking-[3px] text-gray-400">
              BLOOM WITH LOVE
            </p>
          </div>
        </button>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <button
                key={link.name}
                onClick={() =>
                  handleNavigation(link.action)
                }
                className="group relative flex items-center gap-1.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-rose-500"
              >
                <Icon
                  size={15}
                  className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                />

                {link.name}

                {/* Animated underline */}
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-rose-500 transition-all duration-300 group-hover:w-full" />
              </button>
            );
          })}
        </nav>

        {/* ================= ACTIONS ================= */}
        <div className="flex items-center gap-1">
          {/* Search */}
          <button
            className="hidden rounded-full p-3 text-gray-700 transition-all duration-300 hover:scale-110 hover:bg-rose-50 hover:text-rose-500 sm:block"
          >
            <Search size={19} />
          </button>

          {/* Wishlist */}
          <button
            onClick={onWishlist}
            className="group relative rounded-full p-3 text-gray-700 transition-all duration-300 hover:scale-110 hover:bg-rose-50 hover:text-rose-500"
          >
            <Heart
              size={20}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            {wishlistCount > 0 && (
              <motion.span
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                className="badge"
              >
                {wishlistCount}
              </motion.span>
            )}
          </button>

          {/* Cart */}
          <button
            onClick={onCart}
            className="group relative rounded-full p-3 text-gray-700 transition-all duration-300 hover:scale-110 hover:bg-rose-50 hover:text-rose-500"
          >
            <ShoppingBag
              size={20}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            {cartCount > 0 && (
              <motion.span
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                className="badge"
              >
                {cartCount}
              </motion.span>
            )}
          </button>

          {/* Profile */}
          <button
            onClick={onProfile}
            className="hidden rounded-full p-3 text-gray-700 transition-all duration-300 hover:scale-110 hover:bg-rose-50 hover:text-rose-500 sm:block"
          >
            <User size={20} />
          </button>

          {/* Mobile button */}
          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="rounded-full p-3 transition-all duration-300 hover:bg-rose-50 hover:text-rose-500 lg:hidden"
          >
            <AnimatePresence mode="wait">
              {mobileMenu ? (
                <motion.div
                  key="close"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                  }}
                >
                  <X />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                  }}
                >
                  <Menu />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden border-t border-rose-100 bg-white px-5 py-4 shadow-lg lg:hidden"
          >
            {links.map((link, index) => {
              const Icon = link.icon;

              return (
                <motion.button
                  key={link.name}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  onClick={() =>
                    handleNavigation(link.action)
                  }
                  className="group flex w-full items-center gap-3 border-b border-gray-100 py-4 text-left font-medium text-gray-800 transition hover:pl-2 hover:text-rose-500"
                >
                  <Icon
                    size={18}
                    className="text-gray-400 transition group-hover:text-rose-500"
                  />

                  {link.name}
                </motion.button>
              );
            })}

            {/* Mobile Profile */}
            <motion.button
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.25,
              }}
              onClick={() =>
                handleNavigation(onProfile)
              }
              className="flex w-full items-center gap-3 py-4 font-medium text-gray-800 transition hover:pl-2 hover:text-rose-500"
            >
              <User size={18} />
              Profile
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
