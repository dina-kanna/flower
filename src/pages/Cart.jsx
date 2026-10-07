
import { Link, useNavigate } from "react-router-dom";
import { Minus,Plus,Trash2,ShoppingBag,ArrowRight, Leaf, ShieldCheck,Truck,} from "lucide-react";
import { useShop } from "../context/ShopContext";

const Cart = () => {
  const {
    cart = [],
    updateQuantity,
    removeFromCart,
  } = useShop();

  const navigate = useNavigate();

  const cartTotal = cart.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;

    return total + price * quantity;
  }, 0);

  const increaseQuantity = (item) => {
    const currentQuantity = Number(item.quantity) || 1;

    updateQuantity(
      item.id,
      currentQuantity + 1
    );
  };

  const decreaseQuantity = (item) => {
    const currentQuantity = Number(item.quantity) || 1;

    if (currentQuantity > 1) {
      updateQuantity(
        item.id,
        currentQuantity - 1
      );
    }
  };

  if (cart.length === 0) {
    return (
      <main className="min-h-screen pt-28 pb-20 bg-gradient-to-br from-green-50 via-white to-lime-50">

        <div className="max-w-6xl mx-auto px-5 text-center">

          <div className="mx-auto w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
            <ShoppingBag
              size={42}
              className="text-green-700"
            />
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            VerdantNest
          </p>

          <h1 className="mt-2 text-4xl sm:text-5xl font-black text-green-950">
            Your Cart is Empty
          </h1>

          <p className="mt-4 text-gray-500">
            Discover beautiful plants and bring more nature into your home.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 mt-8 px-7 py-4 rounded-2xl
            bg-gradient-to-r from-green-600 to-emerald-700
            text-white font-bold shadow-lg
            hover:-translate-y-1 transition-all"
          >
            <Leaf size={19} />
            Shop Plants
            <ArrowRight size={18} />
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-20 bg-gradient-to-br from-green-50 via-white to-lime-50">

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8">

          <div className="flex items-center gap-2 text-green-600 text-sm font-bold uppercase tracking-[0.15em]">
            <Leaf size={16} />
            VerdantNest
          </div>

          <h1 className="mt-2 text-4xl sm:text-5xl font-black text-green-950">
            Your Shopping Cart
          </h1>

          <p className="mt-2 text-gray-500">
            {cart.length}{" "}
            {cart.length === 1 ? "product" : "products"} in your cart
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <section className="lg:col-span-2 space-y-4">

            {cart.map((item) => {

              const quantity =
                Number(item.quantity) || 1;

              const price =
                Number(item.price) || 0;

              const itemTotal =
                price * quantity;

              return (
                <article
                  key={item.id}
                  className="group bg-white rounded-[1.75rem]
                  border border-green-100
                  p-4 sm:p-5
                  shadow-sm hover:shadow-xl
                  transition-all duration-300"
                >

                  <div className="flex flex-col sm:flex-row gap-5">

                    <Link
                      to={`/product/${item.id}`}
                      className="relative w-full sm:w-32 md:w-36
                      h-48 sm:h-32 md:h-36
                      flex-shrink-0 overflow-hidden rounded-2xl bg-green-50"
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover
                        group-hover:scale-110
                        transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80";
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-green-950/30 to-transparent" />

                    </Link>

                    <div className="flex-1 min-w-0">

                      <div className="flex items-start justify-between gap-3">

                        <div>

                          <p className="text-xs font-bold uppercase tracking-wider text-green-600">
                            {item.category || "Plant"}
                          </p>

                          <Link to={`/product/${item.id}`}>
                            <h2 className="mt-1 text-xl font-extrabold text-green-950 hover:text-green-700 transition">
                              {item.name}
                            </h2>
                          </Link>

                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                          className="w-10 h-10 flex-shrink-0 rounded-xl
                          bg-red-50 text-red-500
                          flex items-center justify-center
                          hover:bg-red-500 hover:text-white
                          transition-all"
                        >
                          <Trash2 size={18} />
                        </button>

                      </div>

                      <p className="mt-2 text-lg font-bold text-green-700">
                        ₹{price.toLocaleString("en-IN")}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-5 mt-5">
                        <div>

                          <p className="text-xs text-gray-400 mb-2">
                            Quantity
                          </p>

                          <div className="flex items-center
                          border-2 border-green-200
                          rounded-xl overflow-hidden
                          bg-green-50">

                            <button
                              type="button"
                              onClick={() =>
                                decreaseQuantity(item)
                              }
                              disabled={quantity <= 1}
                              className="w-11 h-11
                              flex items-center justify-center
                              text-green-700
                              hover:bg-green-200
                              disabled:opacity-40
                              disabled:cursor-not-allowed
                              transition-all"
                            >
                              <Minus size={17} />
                            </button>

                            <div className="w-12 h-11
                            flex items-center justify-center
                            bg-white
                            border-x border-green-200">

                              <span className="text-lg font-black text-green-950">
                                {quantity}
                              </span>

                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                increaseQuantity(item)
                              }
                              className="w-11 h-11
                              flex items-center justify-center
                              text-green-700
                              hover:bg-green-200
                              transition-all"
                            >
                              <Plus size={17} />
                            </button>

                          </div>

                        </div>

                        <div className="text-right">

                          <p className="text-xs text-gray-400">
                            Total
                          </p>

                          <p className="text-2xl font-black text-green-950">
                            ₹{itemTotal.toLocaleString("en-IN")}
                          </p>

                          <p className="text-xs text-gray-400 mt-1">
                            {quantity} × ₹
                            {price.toLocaleString("en-IN")}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </article>
              );
            })}

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-3
              text-green-700 font-bold
              hover:gap-3 transition-all"
            >
              ← Continue Shopping
            </Link>

          </section>

          <aside>

            <div className="lg:sticky lg:top-28
            bg-white rounded-[2rem]
            border border-green-100
            shadow-xl shadow-green-950/5
            p-6 sm:p-7">

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl
                bg-gradient-to-br from-green-500 to-emerald-700
                flex items-center justify-center text-white">

                  <ShoppingBag size={20} />

                </div>

                <div>

                  <h2 className="text-xl font-black text-green-950">
                    Order Summary
                  </h2>

                  <p className="text-xs text-gray-400">
                    Updated automatically
                  </p>

                </div>

              </div>

              <div className="flex justify-between mt-8">

                <span className="text-gray-600">
                  Subtotal
                </span>

                <span className="font-bold text-gray-900">
                  ₹{cartTotal.toLocaleString("en-IN")}
                </span>

              </div>

              <div className="flex justify-between mt-4">

                <span className="text-gray-600">
                  Delivery
                </span>

                <span className="font-bold text-green-600">
                  FREE
                </span>

              </div>

              <div className="h-px bg-green-100 my-6" />

              <div className="flex items-center justify-between">

                <span className="text-lg font-bold text-green-950">
                  Total
                </span>

                <span className="text-2xl font-black text-green-700">
                  ₹{cartTotal.toLocaleString("en-IN")}
                </span>

              </div>

              <button
                type="button"
                onClick={() => navigate("/checkout")}
                className="w-full mt-7
                flex items-center justify-center gap-2
                bg-gradient-to-r from-green-600 to-emerald-700
                text-white py-4 px-5 rounded-2xl
                font-bold
                shadow-lg shadow-green-700/20
                hover:from-green-700 hover:to-green-800
                hover:-translate-y-0.5
                active:scale-[0.98]
                transition-all duration-300"
              >
                Proceed to Checkout
                <ArrowRight size={18} />
              </button>

              <div className="mt-7 pt-6 border-t border-green-100 space-y-4">

                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-lg bg-green-50
                  flex items-center justify-center text-green-700">
                    <Truck size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-green-950">
                      Free Plant Delivery
                    </p>

                    <p className="text-xs text-gray-400">
                      Safe & secure delivery
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-lg bg-green-50
                  flex items-center justify-center text-green-700">
                    <ShieldCheck size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-green-950">
                      Secure Checkout
                    </p>

                    <p className="text-xs text-gray-400">
                      Your payment is protected
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </aside>

        </div>
      </div>
    </main>
  );
};

export default Cart;
