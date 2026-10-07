import { motion } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  ShoppingBag,
  Star,
  Truck,
  ShieldCheck,
} from "lucide-react";

export default function ProductDetails({
  product,
  onBack,
  onAddCart,
  isWishlisted,
  onWishlist,
}) {
  if (!product) return null;

  return (
    <section className="min-h-screen bg-[#fffafa] px-5 pb-20 pt-32">
      <div className="mx-auto max-w-full">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 font-semibold text-gray-600 transition hover:text-rose-500"
        >
          <ArrowLeft size={18} />
          Back to Flowers
        </button>

        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-xl md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-[500px] overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 md:p-12"
          >
            <p className="font-semibold uppercase tracking-widest text-rose-500">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-black text-gray-900">
              {product.name}
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <span className="flex items-center gap-1 text-amber-500">
                <Star size={18} className="fill-current" />
                {product.rating}
              </span>

              <span className="text-gray-400">
                ({product.reviews} reviews)
              </span>
            </div>

            <div className="mt-6">
              <span className="text-4xl font-black">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              <span className="ml-3 text-lg text-gray-400 line-through">
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </span>
            </div>

            <p className="mt-6 leading-7 text-gray-600">
              {product.description}
            </p>

            <div className="my-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-rose-50 p-4">
                <Truck className="text-rose-500" />
                <p className="mt-2 text-sm font-semibold">Fast Delivery</p>
              </div>

              <div className="rounded-2xl bg-green-50 p-4">
                <ShieldCheck className="text-green-500" />
                <p className="mt-2 text-sm font-semibold">Fresh Guarantee</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => onAddCart(product)}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gray-900 py-4 font-bold text-white transition hover:bg-rose-500"
              >
                <ShoppingBag size={19} />
                Add to Cart
              </button>

              <button
                onClick={() => onWishlist(product)}
                className="rounded-2xl border border-gray-200 px-5 transition hover:border-rose-300 hover:text-rose-500"
              >
                <Heart
                  className={isWishlisted ? "fill-rose-500 text-rose-500" : ""}
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}