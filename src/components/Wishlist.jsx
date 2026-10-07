import { Heart, ArrowLeft } from "lucide-react";
import ProductCard from "./ProductCard";

export default function Wishlist({
  wishlist,
  onBack,
  onWishlist,
  onAddCart,
  onDetails,
}) {
  return (
    <section className="min-h-screen bg-[#fffafa] px-5 pb-20 pt-32">
      <div className="mx-auto max-w-full">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 font-semibold hover:text-rose-500"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="mb-10">
          <Heart className="text-rose-500" />
          <h1 className="mt-3 text-4xl font-black">
            My Wishlist
          </h1>
        </div>

        {wishlist.length === 0 ? (
          <div className="rounded-3xl bg-white py-24 text-center">
            <Heart size={55} className="mx-auto text-gray-200" />
            <h2 className="mt-5 text-2xl font-bold">
              Your wishlist is empty
            </h2>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlist.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted
                onWishlist={onWishlist}
                onAddCart={onAddCart}
                onDetails={onDetails}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}