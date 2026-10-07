import { motion } from "framer-motion";
import {
  Heart,
  ShoppingBag,
  Star,
  Eye,
} from "lucide-react";

export default function ProductCard({
  product,
  isWishlisted,
  onWishlist,
  onAddCart,
  onDetails,
}) {
  // If product is undefined or null, don't render anything to prevent crashing
  if (!product) return null;

  // Safe calculation in case oldPrice is missing
  const discount = product.oldPrice
    ? Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
      )
    : 0;

  return (
    <motion.article
      layout
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-500 hover:shadow-2xl hover:shadow-rose-100"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden bg-rose-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-rose-500 shadow">
            {product.badge}
          </span>
        )}

        {/* Discount - Only shown if oldPrice exists */}
        {product.oldPrice && (
          <span className="absolute bottom-4 left-4 rounded-full bg-gray-900 px-3 py-1 text-xs font-bold text-white">
            {discount}% OFF
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={() => onWishlist(product)}
          className="absolute right-4 top-4 rounded-full bg-white p-3 shadow-md transition hover:scale-110 hover:bg-rose-500 hover:text-white"
        >
          <Heart
            size={18}
            className={isWishlisted ? "fill-current text-rose-500" : ""}
          />
        </button>

        {/* Hover buttons */}
        <div className="absolute bottom-4 right-4 flex translate-y-14 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={() => onDetails(product)}
            className="rounded-full bg-white p-3 shadow-lg hover:bg-gray-900 hover:text-white"
          >
            <Eye size={18} />
          </button>

          <button
            onClick={() => onAddCart(product)}
            className="rounded-full bg-rose-500 p-3 text-white shadow-lg hover:bg-rose-600"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-rose-400">
          {product.category}
        </p>

        <h3 className="mt-2 text-lg font-bold text-gray-900 transition group-hover:text-rose-500">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center gap-1 text-sm text-amber-500">
            <Star size={15} className="fill-current" />
            {product.rating}
          </div>

          <span className="text-xs text-gray-400">
            ({product.reviews} reviews)
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-xl font-black text-gray-900">
              ₹{product.price?.toLocaleString("en-IN")}
            </span>

            {product.oldPrice && (
              <span className="ml-2 text-sm text-gray-400 line-through">
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={() => onAddCart(product)}
          className="mt-5 w-full rounded-2xl bg-gray-900 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-rose-500 hover:shadow-lg hover:shadow-rose-200"
        >
          Add to Cart
        </button>
      </div>
    </motion.article>
  );
}