import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { flowers as products } from "../data/products";

export default function ProductListing({
  selectedCategory = "All",
  wishlist = [],
  onWishlist,
  onAddCart,
  onDetails,
}) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const categoryMatch =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const searchMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, search, sort]);

  return (
    <section id="flowers" className="bg-[#fffafa] px-5 py-24">
      <div className="mx-auto max-w-full">
        <div className="mb-10">
          <p className="font-semibold uppercase tracking-[4px] text-rose-500">
            Our Collection
          </p>

          <div className="mt-3 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-4xl font-black text-gray-900 sm:text-5xl">
                Fresh Flowers
              </h2>

              <p className="mt-3 text-gray-500">
                {filteredProducts.length} beautiful products found
              </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center rounded-2xl border border-gray-200 bg-white px-4">
                <Search size={18} className="text-gray-400" />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search flowers..."
                  className="w-full bg-transparent px-3 py-3 outline-none sm:w-56"
                />
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4">
                <SlidersHorizontal size={18} />

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent py-3 outline-none"
                >
                  <option value="default">Sort By</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.some((item) => item.id === product.id)}
                onWishlist={onWishlist}
                onAddCart={onAddCart}
                onDetails={onDetails}
              />
            ))}
          </motion.div>
        ) : (
          <div className="rounded-3xl bg-white py-20 text-center">
            <h3 className="text-2xl font-bold">No flowers found 🌸</h3>
            <p className="mt-2 text-gray-500">
              Try another search or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}