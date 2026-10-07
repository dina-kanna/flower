import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Sparkles, Sprout, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-green-950">

      <div className="absolute inset-0">
        <img
          src="https://beltrannurseryandlandscape.com/wp-content/uploads/2018/12/Plant-Selection-1.jpg"
          alt="Plant Selection Nursery"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-green-950/95 via-green-950/80 to-green-950/95" />

      <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-950/75 to-green-950/40" />

      <div className="absolute top-20 left-0 w-64 h-64 bg-lime-400/20 rounded-full blur-[100px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="text-white text-center lg:text-left">

            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl mb-6">

              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-lime-300 to-green-500 flex items-center justify-center text-green-950">
                <Sprout size={18} />
              </div>

              <div className="text-left">
                <p className="text-xs sm:text-sm font-bold tracking-wide">
                  TerraBloomNursery
                </p>

                <p className="text-[9px] sm:text-[10px] text-green-200 tracking-[0.15em] uppercase">
                  Grow • Live • Bloom
                </p>
              </div>

              <Sparkles
                size={15}
                className="text-lime-300"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black leading-[1] tracking-tight">

              Bring Nature

              <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-lime-200 via-green-200 to-white bg-clip-text text-transparent">
                Into Your Space
              </span>

            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-green-50/90 max-w-full mx-auto lg:mx-0 leading-relaxed">
              Discover beautiful, healthy plants carefully grown
              to transform your home into a peaceful,
              refreshing green sanctuary.
            </p>

            <div className="flex flex-col xs:flex-row sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mt-8">

              <Link
                to="/shop"
                className="group flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-lime-400 to-green-500 text-green-950 font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                Shop Plants

                <span className="w-8 h-8 rounded-full bg-green-950 text-white flex items-center justify-center group-hover:translate-x-1 transition">
                  <ArrowRight size={17} />
                </span>
              </Link>

              <Link
                to="/shop"
                className="flex items-center justify-center px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white hover:text-green-900 transition-all duration-300"
              >
                Explore Collection
              </Link>

            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-10 sm:mt-12 max-w-xl mx-auto lg:mx-0">

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black">
                  500+
                </h3>

                <p className="text-[10px] sm:text-xs lg:text-sm text-green-100 mt-1">
                  Plant Varieties
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black">
                  10K+
                </h3>

                <p className="text-[10px] sm:text-xs lg:text-sm text-green-100 mt-1">
                  Happy Customers
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black">
                  25K+
                </h3>

                <p className="text-[10px] sm:text-xs lg:text-sm text-green-100 mt-1">
                  Plants Delivered
                </p>
              </div>

            </div>

          </div>

          <div className="relative w-full max-w-full mx-auto lg:max-w-none">

            <div className="absolute inset-5 sm:inset-10 bg-lime-300/30 blur-[80px] sm:blur-[110px] rounded-full" />

            <div className="relative p-2 sm:p-3 rounded-[2rem] sm:rounded-[3rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rotate-1 sm:rotate-2 hover:rotate-0 transition-all duration-700">

              <div className="relative overflow-hidden rounded-[1.6rem] sm:rounded-[2.5rem]">

                <img
                  src="https://beltrannurseryandlandscape.com/wp-content/uploads/2018/12/Plant-Selection-1.jpg"
                  alt="Beltran Nursery Plant Selection"
                  className="w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[560px] object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent" />

              </div>
              <div className="absolute left-4 right-4 sm:left-7 sm:right-7 bottom-4 sm:bottom-7">

                <div className="bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl">

                  <div className="flex items-center justify-between gap-2 sm:gap-4">

                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">

                      <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-gradient-to-br from-green-100 to-lime-100 flex items-center justify-center">
                        <Leaf
                          size={22}
                          className="text-green-700"
                        />
                      </div>

                      <div className="min-w-0">

                        <p className="font-extrabold text-green-950 text-sm sm:text-base truncate">
                          Monstera Deliciosa
                        </p>

                        <div className="flex items-center gap-1 mt-1">

                          <Star
                            size={13}
                            className="fill-yellow-400 text-yellow-400"
                          />

                          <span className="text-xs sm:text-sm font-semibold text-gray-700">
                            4.9
                          </span>

                          <span className="hidden sm:inline text-xs text-gray-400">
                            (128 reviews)
                          </span>

                        </div>

                      </div>

                    </div>

                    <div className="text-right shrink-0">

                      <p className="hidden sm:block text-xs text-gray-400">
                        Starting at
                      </p>

                      <p className="text-lg sm:text-xl font-black text-green-700">
                        ₹199
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>
            <div className="absolute -top-4 right-1 sm:-top-7 sm:-right-5 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl animate-bounce [animation-duration:4s]">

              <div className="flex items-center gap-2 sm:gap-3">

                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Sprout
                    size={17}
                    className="text-green-700"
                  />
                </div>

                <div>

                  <p className="text-[10px] sm:text-xs text-gray-500">
                    Freshly Grown
                  </p>

                  <p className="text-xs sm:text-sm font-bold text-green-900">
                    100% Healthy
                  </p>

                </div>

              </div>

            </div>

            <div className="absolute -bottom-4 left-1 sm:-bottom-6 sm:-left-6 bg-green-900 text-white rounded-xl sm:rounded-2xl px-3 sm:px-5 py-3 sm:py-4 shadow-2xl border border-green-800">

              <div className="flex items-center gap-2 sm:gap-3">

                <div className="flex -space-x-2.5 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                    alt="Plant lover"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border-2 border-green-900"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                    alt="Plant lover"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border-2 border-green-900"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
                    alt="Plant lover"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border-2 border-green-900"
                  />
                </div>

                <div>

                  <p className="text-xs sm:text-sm font-bold">
                    10K+ Plant Lovers
                  </p>

                  <p className="hidden sm:block text-xs text-green-200">
                    Growing greener homes
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-950 to-transparent pointer-events-none" />

    </section>
  );
};

export default Hero;