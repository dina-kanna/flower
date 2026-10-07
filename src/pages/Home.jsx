import { useNavigate } from "react-router-dom";
import { ArrowRight, Leaf, Sparkles, Sprout, ShoppingBag, Heart } from "lucide-react";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import products from "../data/products";

const categories = [
  {
    name: "Indoor Plants",
    image:
      "https://res.cloudinary.com/patch-gardens/image/upload/c_fill,h_1000,q_auto:good,w_1000/Group_Baskets_InSitu_CROP_s5lzh5.jpg",
  },
  {
    name: "Outdoor Plants",
    image:
      "https://agribotix.com/wp-content/uploads/2024/09/Fall-Outdoor-Plants.jpg",
  },
  {
    name: "Flowering Plants",
    image: "https://gardenerspath.com/wp-content/uploads/2023/11/Low-Light-Flowering-Houseplants-Feature.jpg",
  },
  {
    name: "Succulents & Cacti",
    image:
      "https://th.bing.com/th/id/OIP.ekONAhF13F4vP6nEvGt3LQHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
  },
  {
    name: "Medicinal & Herbs",
    image: "https://tse3.mm.bing.net/th/id/OIP.4Uzmy7zY2pMgAZEVp7WYtgHaEO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
 {
    name: "Vegetable & Edibles",
    image: "https://ediblegardentips.com/wp-content/uploads/2025/10/Gemini_Generated_Image_fz5l58fz5l58fz5l.jpg",
  },
  {
    name: "seeds",
    image: "https://img.freepik.com/premium-photo/various-seeds-white-background_1151483-5578.jpg",
  },
  {
    name: "seeds Glow",
    image: "https://www.southernliving.com/thmb/zO9sa4N3ZW3RbpJo0yatRRizPL8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/southern-living-seedlings-in-pots-GettyImages-1326944358-95b04685f7834e8caa9991cb7d9be3e4.jpg",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/shop?category=${encodeURIComponent(categoryName)}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#fbfdf8] text-green-950 overflow-hidden">
      <Hero />

      <main>
        <section className="relative py-20 sm:py-24 lg:py-28">
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-100/50 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime-100/50 rounded-full blur-3xl -z-10" />

          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-[0.15em]">
                  <Sprout size={14} />
                  Explore Nature
                </div>

                <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-green-950">
                  Find Your
                  <span className="block text-green-600">Perfect Plant</span>
                </h2>

                <p className="mt-4 max-w-2xl text-gray-500 text-base sm:text-lg leading-relaxed">
                  From calming indoor greens to colourful flowering plants, discover something beautiful for every corner of your space.
                </p>
              </div>

              <button
                onClick={() => {
                  navigate("/shop");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-full border border-green-200 bg-white text-green-700 font-bold hover:bg-green-700 hover:text-white transition-all duration-300"
              >
                Explore All
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <div key={category.name} className={index === 0 ? "lg:col-span-2" : ""}>
                  <div
                    onClick={() => handleCategoryClick(category.name)}
                    className="group relative flex flex-col overflow-hidden rounded-3xl border border-green-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-950/10 sm:p-4 cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-100">
                      <img
                        src={category.image}
                        alt={category.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    <div className="flex flex-col flex-grow pt-4 pb-2 px-2">
                      <h3 className="text-xl font-black text-green-950 transition-colors group-hover:text-green-700">
                        {category.name}
                      </h3>

                      <div className="mt-3 flex items-center gap-2 text-sm font-bold text-green-600 transition-colors group-hover:text-emerald-700">
                        <span>Explore Collection</span>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-green-600 group-hover:text-white">
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <button
                onClick={() => {
                  navigate("/shop");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-700 text-white font-bold shadow-lg shadow-green-700/20"
              >
                Explore All Plants
                <ArrowRight size={17} />
              </button>
            </div>

          </div>
        </section>

        <section className="relative py-20 sm:py-24 bg-gradient-to-br from-[#eef7e9] via-[#f5faef] to-[#e7f2df]">
          <div className="absolute top-10 right-10 w-40 h-40 bg-lime-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-green-400/10 rounded-full blur-3xl" />

          <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur text-green-700 text-xs font-bold uppercase tracking-[0.15em] shadow-sm">
                <Sparkles size={14} />
                Green Collection
              </div>

              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-green-950">
                Plants People
                <span className="text-green-600"> Love</span>
              </h2>

              <p className="mt-4 text-gray-500 text-base sm:text-lg">
                Carefully selected plants to make your home healthier, greener and happier.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => {
                  navigate("/shop");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold shadow-xl shadow-green-700/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <ShoppingBag size={19} />
                View All Plants
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="relative py-20 sm:py-28 bg-white">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              <div className="relative">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=90"
                    alt="VerdantNest nursery"
                    loading="lazy"
                    className="w-full h-[420px] sm:h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-7 left-7 right-7">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur text-green-800 text-xs font-bold">
                      <Leaf size={14} />
                      Growing with Nature
                    </div>
                    <p className="mt-3 text-white text-2xl sm:text-3xl font-black">
                      More green.<br />More life.
                    </p>
                  </div>
                </div>

               <div className="absolute -bottom-7 -right-3 sm:-right-8 bg-white/95 backdrop-blur-xl rounded-3xl p-5 sm:p-6 shadow-2xl border border-green-100 w-56 sm:w-64">
  <div className="flex items-center justify-between mb-3">
    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md">
      <Sprout size={21} />
    </div>
    <span className="px-2.5 py-1 rounded-full bg-lime-100 text-green-800 text-[10px] font-extrabold uppercase tracking-wider">
      Live Care
    </span>
  </div>
  
  <p className="text-xl sm:text-2xl font-black text-green-950">
    Expert Plant Tips
  </p>
  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
    Daily watering reminders & sunlight guides for your indoor oasis.
  </p>

  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-green-700">
    <span>Free Support</span>
    <span className="text-gray-400 font-normal">24/7 Active</span>
  </div>
</div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-[0.15em]">
                  <Leaf size={14} />
                  About TerraBloom
                </div>

                <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-green-950">
                  Growing a
                  <span className="block text-green-600">Greener Future</span>
                </h2>

                <p className="mt-6 text-gray-600 text-base sm:text-lg leading-8">
                  At TerraBloom, we believe plants are more than decoration. They bring life, calm and character into every space.
                </p>

                <p className="mt-4 text-gray-500 leading-7">
                  We carefully grow and source healthy plants while making plant shopping simple, enjoyable and accessible for everyone.
                </p>

                <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-9">
                  <div className="p-4 sm:p-5 rounded-2xl bg-green-50 border border-green-100">
                    <strong className="block text-2xl sm:text-3xl font-black text-green-700">10+</strong>
                    <span className="text-xs sm:text-sm text-gray-500">Years Experience</span>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-lime-50 border border-lime-100">
                    <strong className="block text-2xl sm:text-3xl font-black text-green-700">500+</strong>
                    <span className="text-xs sm:text-sm text-gray-500">Plant Varieties</span>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
                    <strong className="block text-2xl sm:text-3xl font-black text-green-700">10K+</strong>
                    <span className="text-xs sm:text-sm text-gray-500">Happy Customers</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    navigate("/shop");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="group mt-9 inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-green-700 text-white font-bold shadow-lg shadow-green-700/20 hover:bg-green-800 hover:-translate-y-1 transition-all duration-300"
                >
                  Discover Our Plants
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="relative max-w-full mx-auto overflow-hidden rounded-[2.5rem]">
            <img
              src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1600&q=85"
              alt="Green plants"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-green-950/75" />

            <div className="relative px-6 py-16 sm:px-12 lg:px-20 text-center">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-lime-300">
                <Sprout size={27} />
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                Ready to Grow Something Beautiful?
              </h2>

              <p className="max-w-2xl mx-auto mt-4 text-white/70 text-base sm:text-lg">
                Find your next favourite plant and create a greener space with TerraBloom.
              </p>

              <button
                onClick={() => {
                  navigate("/shop");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-lime-400 text-green-950 font-black hover:bg-lime-300 hover:-translate-y-1 transition-all duration-300"
              >
                Start Shopping
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Home;