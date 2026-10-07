import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

import { flowers as products } from "./data/products";

export default function App() {
  const [page, setPage] = useState("home");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [cart, setCart] = useState([]);

  const [wishlist, setWishlist] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);

  // =========================
  // CART
  // =========================

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...current,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (id) => {
    setCart((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  // =========================
  // WISHLIST
  // =========================

  const toggleWishlist = (product) => {
    setWishlist((current) => {
      const exists = current.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return current.filter(
          (item) => item.id !== product.id
        );
      }

      return [...current, product];
    });
  };

  // =========================
  // NAVIGATION
  // =========================

  const showHome = () => {
    setPage("home");
    setSelectedProduct(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showFlowers = () => {
    setPage("home");
    setSelectedProduct(null);

    setTimeout(() => {
      document
        .getElementById("flowers")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  };

  const showCategories = () => {
    setPage("categories");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showCategory = (category) => {
    setSelectedCategory(category);
    setPage("home");

    setTimeout(() => {
      document
        .getElementById("flowers")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  };

  const showAbout = () => {
    setPage("home");

    setTimeout(() => {
      document
        .getElementById("about")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  };

  const showContact = () => {
    setPage("home");

    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  };

  const showDetails = (product) => {
    setSelectedProduct(product);
    setPage("details");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================
  // COUNTERS
  // =========================

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // =========================
  // COMMON NAVBAR
  // =========================

  const navbarProps = {
    cartCount,
    wishlistCount: wishlist.length,

    onCart: () => setPage("cart"),

    onWishlist: () => setPage("wishlist"),

    onProfile: () =>
      setPage(loggedIn ? "profile" : "login"),

    onHome: showHome,

    onFlowers: showFlowers,

    onCategories: showCategories,

    onAbout: showAbout,

    onContact: showContact,
  };

  // =========================
  // CATEGORIES PAGE
  // =========================

  if (page === "categories") {
    return (
      <>
        <Navbar {...navbarProps} />

        <main className="min-h-screen bg-white pt-20">
          <Categories
            onCategory={showCategory}
          />
        </main>

        <Footer />
      </>
    );
  }

  // =========================
  // CART PAGE
  // =========================

  if (page === "cart") {
    return (
      <>
        <Navbar {...navbarProps} />

        <Cart
          cart={cart}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
          onCheckout={() => setPage("checkout")}
        />
      </>
    );
  }

  // =========================
  // WISHLIST PAGE
  // =========================

  if (page === "wishlist") {
    return (
      <>
        <Navbar {...navbarProps} />

        <Wishlist
          wishlist={wishlist}
          onBack={showHome}
          onWishlist={toggleWishlist}
          onAddCart={addToCart}
          onDetails={showDetails}
        />
      </>
    );
  }

  // =========================
  // PRODUCT DETAILS
  // =========================

  if (page === "details") {
    return (
      <>
        <Navbar {...navbarProps} />

        <ProductDetails
          product={selectedProduct}
          onBack={showFlowers}
          onAddCart={addToCart}
          isWishlisted={wishlist.some(
            (item) =>
              item.id === selectedProduct?.id
          )}
          onWishlist={toggleWishlist}
        />
      </>
    );
  }

  // =========================
  // LOGIN
  // =========================

  if (page === "login") {
    return (
      <>
        <Navbar {...navbarProps} />

        <Login
          onSignup={() => setPage("signup")}
          onSuccess={() => {
            setLoggedIn(true);
            setPage("profile");
          }}
        />
      </>
    );
  }

  // =========================
  // SIGNUP
  // =========================

  if (page === "signup") {
    return (
      <>
        <Navbar {...navbarProps} />

        <Signup
          onLogin={() => setPage("login")}
          onSuccess={() => {
            setLoggedIn(true);
            setPage("profile");
          }}
        />
      </>
    );
  }

  // =========================
  // PROFILE
  // =========================

  if (page === "profile") {
    return (
      <>
        <Navbar {...navbarProps} />

        <Profile
          onLogout={() => {
            setLoggedIn(false);
            setPage("home");
          }}
        />
      </>
    );
  }

  // =========================
  // CHECKOUT
  // =========================

  if (page === "checkout") {
    return (
      <>
        <Navbar {...navbarProps} />

        <Checkout
          cart={cart}
          onSuccess={() => {
            alert("🎉 Order placed successfully!");

            setCart([]);
            setPage("home");
          }}
        />
      </>
    );
  }

  // =========================
  // HOME PAGE
  // =========================

  return (
    <>
      <Navbar {...navbarProps} />

      <main>
        {/* HERO */}
        <Hero onShop={showFlowers} />

        {/* CATEGORIES PREVIEW */}
        <Categories
          onCategory={showCategory}
        />

        {/* PRODUCTS */}
        <ProductListing
          selectedCategory={selectedCategory}
          wishlist={wishlist}
          onWishlist={toggleWishlist}
          onAddCart={addToCart}
          onDetails={showDetails}
        />

        {/* ABOUT */}
        <section
          id="about"
          className="bg-white px-5 py-24"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=80"
              alt="Beautiful flowers"
              className="h-[450px] w-full rounded-[3rem] object-cover shadow-xl"
            />

            <div>
              <p className="font-semibold uppercase tracking-[4px] text-rose-500">
                About TerraBloom
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Flowers That Speak From The Heart.
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                At TerraBloom, we believe flowers can turn
                ordinary moments into beautiful memories.
                Every bouquet is carefully selected,
                arranged and delivered with love.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <Stat
                  number="10K+"
                  text="Customers"
                />

                <Stat
                  number="500+"
                  text="Flowers"
                />

                <Stat
                  number="99%"
                  text="Freshness"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="bg-rose-50 px-5 py-24"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-semibold uppercase tracking-[4px] text-rose-500">
              Contact TerraBloom
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Let’s Make Someone Smile 🌸
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
              Have a question about our flowers, delivery,
              or special bouquets? We'd love to hear from
              you.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@terrabloom.com"
                className="rounded-full bg-rose-500 px-7 py-3 font-bold text-white transition hover:bg-rose-600 hover:shadow-lg"
              >
                Email Us
              </a>

              <a
                href="tel:+919999999999"
                className="rounded-full border-2 border-rose-500 px-7 py-3 font-bold text-rose-500 transition hover:bg-rose-500 hover:text-white"
              >
                Call Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// =========================
// STAT COMPONENT
// =========================

function Stat({ number, text }) {
  return (
    <div className="rounded-2xl bg-rose-50 p-4 text-center">
      <p className="text-2xl font-black text-rose-500">
        {number}
      </p>

      <p className="mt-1 text-xs text-gray-500">
        {text}
      </p>
    </div>
  );
}