import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, Leaf, Sparkles, ArrowRight, X, Check, Filter } from "lucide-react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import products from "../data/products";

const categories = [
  "All",
  "Indoor Plants",
  "Outdoor Plants",
  "Flowering Plants",
  "Vegetable & Edible Plants",
  "Medicinal Plants",
  "Succulents",
  "Decorative Plants",
];

const Shop = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");
    const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    let result = products.filter((product) => {
      const matchesCategory =
        category === "All" ||
        product.category === category ||
        (category === "Vegetable & Edible Plants" && product.category === "Vegetables");

      const matchesSearch =
        product.name.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue);

      const productPrice = product.price || 0;
      const matchesPrice = productPrice <= maxPrice;
      const matchesStock = onlyInStock ? product.inStock !== false : true;

      return matchesCategory && matchesSearch && matchesPrice && matchesStock;
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortBy === "price-high") {
      result.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sortBy === "newest") {
      result.sort((a, b) => (b.id || 0) - (a.id || 0));
    }

    return result;
  }, [category, search, maxPrice, onlyInStock, sortBy]);

  const clearFilters = () => {
    setCategory("All");
    setSearch("");
    setMaxPrice(1000);
    setOnlyInStock(false);
    setSortBy("featured");
  };

  const activeFiltersCount = (category !== "All" ? 1 : 0) + (search ? 1 : 0) + (maxPrice < 1000 ? 1 : 0) + (onlyInStock ? 1 : 0);

  return (
    <main className="min-h-screen bg-[#f5f9f1] pt-24 pb-20 overflow-hidden">

      <section className="relative">
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-green-200/40 blur-3xl" />
        <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-lime-200/30 blur-3xl" />

        <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] min-h-[360px] sm:min-h-[400px] flex items-center">
            <img
              src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1800&q=90"
              alt="Beautiful collection of plants"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-900/75 to-green-900/30" />
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-lime-400/10 blur-3xl" />

            <div className="relative z-10 p-7 sm:p-10 lg:p-14 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-lime-200 text-xs font-bold uppercase tracking-[0.15em]">
                <Sparkles size={14} />
                TerraBloom Collection
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05]">
                Find your
                <span className="block text-lime-300">perfect plant.</span>
              </h1>
              <p className="mt-5 text-white/70 text-base sm:text-lg leading-7 max-w-xl">
                Explore beautiful, healthy plants carefully selected to bring more life, freshness and character into your home.
              </p>
              <div className="flex flex-wrap gap-3 mt-7">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                  <Leaf size={15} className="text-lime-300" />
                  <span className="text-sm text-white font-medium">16+ Varieties</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                  <Sparkles size={15} className="text-lime-300" />
                  <span className="text-sm text-white font-medium">Fresh & Healthy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-8">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] border border-green-100 shadow-xl shadow-green-950/5 p-4 sm:p-5">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              
              <div className="flex-1">
                <SearchBar value={search} onChange={setSearch} />
              </div>

              <div className="flex items-center justify-between lg:justify-end gap-3 flex-wrap">
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-700">
                    <SlidersHorizontal size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Showing</p>
                    <p className="font-black text-green-950">{filteredProducts.length} Plants</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setFilterDrawerOpen(true)}
                  className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-green-200 bg-green-50/50 text-green-950 text-sm font-bold hover:bg-green-100/60 transition-all"
                >
                  <Filter size={16} className="text-green-600" />
                  <span>Filters</span>
                  {activeFiltersCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[10px] text-white font-black">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>

                {(search || category !== "All" || maxPrice < 1000 || onlyInStock) && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-50 text-red-500 text-sm font-bold hover:bg-red-500 hover:text-white transition-all"
                  >
                    <X size={15} />
                    Clear
                  </button>
                )}

              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-green-600">Browse By</p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-green-950">Plant Categories</h2>
            </div>
            <Leaf size={28} className="text-green-300 hidden sm:block" />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
            {categories.map((item) => {
              const isActive = category === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`
                    group relative flex-shrink-0 px-5 py-3 rounded-full font-bold text-sm transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg shadow-green-700/20 scale-[1.02]"
                        : "bg-white text-gray-600 border border-green-100 hover:border-green-300 hover:text-green-700 hover:bg-green-50"
                    }
                  `}
                >
                  {item === "All" && <Leaf size={15} className="inline mr-2" />}
                  {item}
                  {isActive && <span className="absolute inset-0 rounded-full ring-2 ring-green-300/30" />}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7">
            <div>
              <p className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-[0.18em]">
                <Leaf size={14} />
                Green Collection
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-green-950">
                {category === "All" ? "All Plants" : category}
              </h2>
            </div>
            <p className="text-sm text-gray-500">
              {filteredProducts.length === 1 ? "1 plant available" : `${filteredProducts.length} plants available`}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="relative overflow-hidden bg-white rounded-[2.5rem] border border-green-100 shadow-sm py-20 px-6 text-center">
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-green-100/60 blur-2xl" />
              <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-lime-100/60 blur-2xl" />
              <div className="relative z-10">
                <div className="mx-auto w-20 h-20 rounded-3xl bg-green-100 flex items-center justify-center text-green-700">
                  <Search size={32} />
                </div>
                <h3 className="mt-7 text-2xl sm:text-3xl font-black text-green-950">No plants found</h3>
                <p className="mt-3 max-w-md mx-auto text-gray-500 leading-7">
                  We couldn't find any plants matching your search or selected filters. Try broadening your criteria.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 mt-7 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold shadow-lg shadow-green-700/20 hover:-translate-y-1 transition-all"
                >
                  Reset All Filters
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-green-800 to-emerald-900 p-7 sm:p-10 lg:p-12">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-lime-400/10 blur-2xl" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-emerald-300/10 blur-2xl" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-7">
            <div>
              <div className="flex items-center gap-2 text-lime-300 text-xs uppercase tracking-[0.18em] font-bold">
                <Leaf size={14} />
                TerraBloom
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white">Ready to grow something beautiful?</h2>
              <p className="mt-3 text-white/60 max-w-xl">Bring home a little more green and create a space that feels alive.</p>
            </div>
            <button
              type="button"
              onClick={clearFilters}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-lime-400 text-green-950 font-black whitespace-nowrap hover:bg-lime-300 hover:-translate-y-1 transition-all"
            >
              Explore Plants
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {filterDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-green-950/40 backdrop-blur-sm transition-opacity">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
            
            <div className="flex items-center justify-between pb-4 border-b border-green-100">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-green-600" />
                <h3 className="text-xl font-black text-green-950">Filter Products</h3>
              </div>
              <button
                type="button"
                onClick={() => setFilterDrawerOpen(false)}
                className="p-2 rounded-xl text-gray-500 hover:bg-green-50 hover:text-green-700 transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Filters */}
            <div className="py-6 space-y-6 flex-1">
                            <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Sort By</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "featured", label: "Featured" },
                    { id: "price-low", label: "Price: Low to High" },
                    { id: "price-high", label: "Price: High to Low" },
                    { id: "newest", label: "Newest Additions" },
                  ].map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSortBy(option.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold border transition ${
                        sortBy === option.id
                          ? "border-green-600 bg-green-50 text-green-700"
                          : "border-gray-200 text-gray-600 hover:border-green-300"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Max Price</label>
                  <span className="text-sm font-black text-green-700">${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-green-600 cursor-pointer"
                />
              </div>

              <div>
                <label className="flex items-center gap-3 cursor-pointer py-2">
                  <input
                    type="checkbox"
                    checked={onlyInStock}
                    onChange={(e) => setOnlyInStock(e.target.checked)}
                    className="w-5 h-5 accent-green-600 rounded cursor-pointer"
                  />
                  <span className="text-sm font-bold text-green-950">In Stock Items Only</span>
                </label>
              </div>

            </div>

            <div className="pt-4 border-t border-green-100 flex gap-3">
              <button
                type="button"
                onClick={() => {
                  clearFilters();
                  setFilterDrawerOpen(false);
                }}
                className="w-1/2 py-3.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-bold hover:bg-gray-50 transition"
              >
                Reset All
              </button>
              <button
                type="button"
                onClick={() => setFilterDrawerOpen(false)}
                className="w-1/2 py-3.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-700 text-white text-sm font-bold shadow-lg shadow-green-700/20 hover:from-green-700 hover:to-emerald-800 transition"
              >
                Apply Filters
              </button>
            </div>

          </div>
        </div>
      )}

    </main>
  );
};

export default Shop;