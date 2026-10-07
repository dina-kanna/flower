import { Heart, ShoppingCart, Star, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function ProductCard({ product, onView }) {
  const { addToCart, toggleWishlist, isWishlisted } = useShop();

  const liked = isWishlisted(product.id);

  return (
    <article className="group relative bg-white rounded-[2rem] overflow-hidden border border-green-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

      <div className="relative h-80 overflow-hidden bg-green-50">

        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover object-center
            group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent opacity-80" />
        </Link>

        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-md text-green-800 text-xs font-bold shadow-lg">
            <Sparkles size={13} />
            {product.category}
          </span>
        </div>

        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-label={
            liked
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          className={`absolute top-4 right-4 w-11 h-11 rounded-full
          backdrop-blur-md bg-white/90 flex items-center justify-center
          shadow-lg transition-all duration-300
          hover:scale-110 active:scale-95
          ${
            liked
              ? "text-red-500"
              : "text-green-900 hover:text-red-500"
          }`}
        >
          <Heart
            size={20}
            fill={liked ? "currentColor" : "none"}
            className="transition-transform duration-300"
          />
        </button>

        <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
          <div>
            <p className="text-white/80 text-xs font-medium">
              Naturally grown
            </p>
            <p className="text-white font-semibold text-sm">
              Healthy & Fresh
            </p>
          </div>

          <Link
            to={`/product/${product.id}`}
            className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center
            text-green-800 shadow-lg
            hover:bg-green-700 hover:text-white
            transition-all duration-300
            group-hover:rotate-6"
          >
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>

      <div className="p-5 sm:p-6">

        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-green-500">
         TerraBloom Nursery Collection
        </p>

        <Link to={`/product/${product.id}`}>
          <h3 className="mt-1.5 text-xl font-extrabold text-green-950
          group-hover:text-green-700 transition-colors duration-300">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-yellow-50">
            <Star
              size={15}
              className="text-yellow-500"
              fill="currentColor"
            />

            <span className="text-sm font-bold text-yellow-700">
              {product.rating}
            </span>
          </div>

          <span className="text-sm text-gray-400">
            {product.reviews} reviews
          </span>
        </div>

        <div className="h-px bg-green-100 my-5" />

        <div className="flex items-center justify-between gap-3">

          <div>
            <p className="text-xs text-gray-400 mb-0.5">
              Starting from
            </p>

            <span className="text-2xl font-black text-green-800">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
          </div>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className="group/cart flex items-center gap-2
            px-4 py-3 rounded-2xl
            bg-gradient-to-r from-green-600 to-emerald-700
            text-white font-bold text-sm
            shadow-lg shadow-green-700/20
            hover:from-green-700 hover:to-green-800
            hover:shadow-xl hover:shadow-green-700/30
            active:scale-95
            transition-all duration-300"
          >
            <ShoppingCart
              size={17}
              className="group-hover/cart:-rotate-6 transition-transform"
            />

            <span>Add</span>
          </button>
        </div>

        
        {onView && (
          <button
            type="button"
            onClick={() => onView(product)}
            className="w-full mt-4 py-2.5 rounded-xl
            border border-green-200
            text-green-700 text-sm font-semibold
            hover:bg-green-50 hover:border-green-300
            transition-all duration-300"
          >
            Quick View
          </button>
        )}
      </div>

      <div className="absolute inset-0 rounded-[2rem] ring-1 ring-transparent
      group-hover:ring-green-300 pointer-events-none transition-all duration-500" />
    </article>
  );
}