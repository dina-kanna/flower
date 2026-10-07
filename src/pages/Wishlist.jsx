
import {Heart, Leaf, ShoppingBag, ArrowRight,Sparkles,Sprout,}from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useShop } from "../context/ShopContext";

const Wishlist = () => {
  const { wishlist = [] } = useShop();

  return (
    <main className="min-h-screen bg-[#f5f9f1] pt-24 pb-20 overflow-hidden">

      <section className="relative">
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-green-200/40 blur-3xl" />

        <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-lime-200/30 blur-3xl" />

        <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8">

          <div
            className="
              relative
              overflow-hidden
              rounded-[2.5rem]
              min-h-[350px]
              flex items-center
            "
          >

            <img
              src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1800&q=90"
              alt="Beautiful plants"
              className="
                absolute inset-0
                w-full h-full
                object-cover
              "
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-green-950/95
                via-green-900/80
                to-green-900/35
              "
            />

            <div
              className="
                absolute
                -right-20
                -top-20
                w-80 h-80
                rounded-full
                bg-red-400/10
                blur-3xl
              "
            />

            <div
              className="
                relative z-10
                p-7 sm:p-10 lg:p-14
                max-w-3xl
              "
            >

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4 py-2
                  rounded-full
                  bg-white/10
                  backdrop-blur-md
                  border border-white/20
                  text-lime-200
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                "
              >
                <Heart
                  size={14}
                  fill="currentColor"
                />

                Your Favorites
              </div>

              <h1
                className="
                  mt-6
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-black
                  text-white
                  leading-[1.05]
                "
              >
                Plants you
                <span className="block text-lime-300">
                  love most.
                </span>
              </h1>

              <p
                className="
                  mt-5
                  text-white/70
                  text-base
                  sm:text-lg
                  leading-7
                  max-w-xl
                "
              >
                Keep your favorite plants close.
                Your wishlist makes it easy to save,
                compare and shop the plants you love.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    px-4 py-2
                    rounded-full
                    bg-white/10
                    backdrop-blur-md
                    border border-white/10
                  "
                >

                  <Heart
                    size={15}
                    className="text-red-300"
                    fill="currentColor"
                  />

                  <span className="text-sm text-white font-medium">
                    {wishlist.length}{" "}
                    {wishlist.length === 1
                      ? "Favorite Plant"
                      : "Favorite Plants"}
                  </span>

                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    px-4 py-2
                    rounded-full
                    bg-white/10
                    backdrop-blur-md
                    border border-white/10
                  "
                >

                  <Sparkles
                    size={15}
                    className="text-lime-300"
                  />

                  <span className="text-sm text-white font-medium">
                    Saved for you
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="relative z-10 -mt-7">

        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

          {wishlist.length === 0 ? (
            <div
              className="
                relative
                overflow-hidden
                bg-white
                rounded-[2.5rem]
                border border-green-100
                shadow-xl
                shadow-green-950/5
                py-16
                sm:py-20
                px-6
                text-center
              "
            >
              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-64 h-64
                  rounded-full
                  bg-red-50
                  blur-2xl
                "
              />

              <div
                className="
                  absolute
                  -bottom-24
                  -left-20
                  w-64 h-64
                  rounded-full
                  bg-green-50
                  blur-2xl
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    mx-auto
                    w-24 h-24
                    rounded-[2rem]
                    bg-gradient-to-br
                    from-red-50
                    to-green-50
                    border border-green-100
                    flex items-center justify-center
                  "
                >

                  <Heart
                    size={42}
                    className="text-red-400"
                  />

                </div>

                <p
                  className="
                    mt-7
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    font-bold
                    text-green-600
                  "
                >
                  VerdantNest
                </p>

                <h2
                  className="
                    mt-2
                    text-3xl
                    sm:text-4xl
                    font-black
                    text-green-950
                  "
                >
                  Your wishlist is waiting.
                </h2>

                <p
                  className="
                    mt-4
                    max-w-lg
                    mx-auto
                    text-gray-500
                    leading-7
                  "
                >
                  You haven't saved any plants yet.
                  Explore our collection and tap the heart
                  icon to save your favorites here.
                </p>

                <Link
                  to="/shop"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-8
                    px-7
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-green-600
                    to-emerald-700
                    text-white
                    font-bold
                    shadow-lg
                    shadow-green-700/20
                    hover:-translate-y-1
                    hover:shadow-xl
                    transition-all
                  "
                >

                  <ShoppingBag size={18} />

                  Explore Plants

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          ) : (
            <div>

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                  gap-4
                  mb-7
                "
              >

                <div>

                  <p
                    className="
                      flex
                      items-center
                      gap-2
                      text-green-600
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.18em]
                    "
                  >
                    <Leaf size={14} />

                    Saved Collection
                  </p>

                  <h2
                    className="
                      mt-2
                      text-3xl
                      sm:text-4xl
                      font-black
                      text-green-950
                    "
                  >
                    My Favorite Plants
                  </h2>

                </div>

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-4 py-2
                    rounded-full
                    bg-white
                    border border-green-100
                    text-sm
                    font-bold
                    text-green-700
                    w-fit
                  "
                >

                  <Heart
                    size={15}
                    fill="currentColor"
                    className="text-red-500"
                  />

                  {wishlist.length} Saved

                </div>

              </div>

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-4
                  gap-5
                  sm:gap-6
                "
              >

                {wishlist.map((product) => (

                  <ProductCard
                    key={product.id}
                    product={product}
                  />

                ))}

              </div>

              {/* Continue shopping */}
              <div className="mt-12 text-center">

                <Link
                  to="/shop"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-6
                    py-3.5
                    rounded-2xl
                    bg-white
                    border-2
                    border-green-200
                    text-green-700
                    font-bold
                    hover:bg-green-50
                    hover:border-green-300
                    hover:-translate-y-0.5
                    transition-all
                  "
                >

                  <Sprout size={18} />

                  Discover More Plants

                  <ArrowRight size={17} />

                </Link>

              </div>

            </div>

          )}

        </div>
      </section>

      {wishlist.length > 0 && (
        <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-16">

          <div
            className="
              relative
              overflow-hidden
              rounded-[2.5rem]
              bg-gradient-to-r
              from-green-800
              to-emerald-900
              p-7
              sm:p-10
              lg:p-12
            "
          >

            <div
              className="
                absolute
                -right-20
                -top-20
                w-72 h-72
                rounded-full
                bg-lime-400/10
                blur-3xl
              "
            />

            <div
              className="
                absolute
                -left-20
                -bottom-20
                w-64 h-64
                rounded-full
                bg-emerald-300/10
                blur-3xl
              "
            />

            <div
              className="
                relative z-10
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                gap-7
              "
            >

              <div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-lime-300
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    font-bold
                  "
                >

                  <Sprout size={15} />

                  VerdantNest

                </div>

                <h2
                  className="
                    mt-3
                    text-3xl
                    sm:text-4xl
                    font-black
                    text-white
                  "
                >
                  Found another plant to love?
                </h2>

                <p
                  className="
                    mt-3
                    text-white/60
                    max-w-xl
                  "
                >
                  Explore our complete collection and discover
                  your next green companion.
                </p>

              </div>

              <Link
                to="/shop"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3.5
                  rounded-2xl
                  bg-lime-400
                  text-green-950
                  font-black
                  whitespace-nowrap
                  hover:bg-lime-300
                  hover:-translate-y-1
                  transition-all
                "
              >

                Shop More Plants

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        </section>
      )}

    </main>
  );
};

export default Wishlist;
