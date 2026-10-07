import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingCart, Star, ArrowLeft } from "lucide-react";
import products from "../data/products";
import { useShop } from "../context/ShopContext";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const {
    addToCart,
    toggleWishlist,
    isWishlisted,
  } = useShop();

  if (!product) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>

        <Link
          to="/shop"
          className="text-green-700 mt-5 inline-block"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-28 pb-20">
      <div className="max-w-full mx-auto px-6">

        <Link
          to="/shop"
          className="flex items-center gap-2 text-green-700 mb-8"
        >
          <ArrowLeft size={18} />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[550px] object-cover rounded-[2rem]"
          />

          <div className="flex flex-col justify-center">

            <p className="text-green-600 font-semibold">
              {product.category}
            </p>

            <h1 className="text-5xl font-bold text-green-950 mt-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-5">
              <Star className="fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">
                {product.rating}
              </span>
              <span className="text-gray-500">
                ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-4xl font-bold text-green-700 mt-8">
              ₹{product.price.toLocaleString("en-IN")}
            </p>

            <p className="text-gray-600 leading-8 mt-8">
              {product.description}
            </p>

            <div className="flex gap-4 mt-10">

              <button
                onClick={() => addToCart(product)}
                className="flex-1 bg-green-700 text-white py-4 rounded-xl flex justify-center items-center gap-2 hover:bg-green-800"
              >
                <ShoppingCart />
                Add to Cart
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className="w-14 border rounded-xl flex items-center justify-center"
              >
                <Heart
                  className={
                    isWishlisted(product.id)
                      ? "fill-red-500 text-red-500"
                      : ""
                  }
                />
              </button>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;