
import { X, ShoppingCart, Star } from "lucide-react";
import { useShop } from "../context/ShopContext";

export default function ProductModal({ product, onClose }) {
  const { addToCart } = useShop();

  if (!product) return null;

  const handleCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-full w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full min-h-[350px] object-cover"
          />

          <div className="p-7 relative">
            <button
              onClick={onClose}
              className="absolute right-5 top-5 p-2 rounded-full bg-gray-100"
            >
              <X size={20} />
            </button>

            <p className="text-green-700 font-medium">
              {product.category}
            </p>

            <h2 className="text-3xl font-bold text-green-950 mt-3">
              {product.name}
            </h2>

            <div className="flex items-center gap-2 mt-4">
              <Star
                size={18}
                className="text-yellow-500"
                fill="currentColor"
              />
              <span>{product.rating}</span>
              <span className="text-gray-400">
                ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-3xl font-bold text-green-700 mt-6">
              ₹{product.price.toLocaleString("en-IN")}
            </p>

            <p className="text-gray-600 leading-7 mt-5">
              {product.description}
            </p>

            <button
              onClick={handleCart}
              className="mt-7 w-full py-4 rounded-xl bg-green-700 text-white font-semibold flex justify-center items-center gap-2 hover:bg-green-800"
            >
              <ShoppingCart size={19} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
