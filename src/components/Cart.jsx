import { motion } from "framer-motion";
import {
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

export default function Cart({
  cart,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
}) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = subtotal >= 1000 ? 0 : 79;
  const total = subtotal + delivery;

  return (
    <section className="min-h-screen bg-[#fffafa] px-5 pb-20 pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="font-semibold uppercase tracking-widest text-rose-500">
            Your Bag
          </p>

          <h1 className="mt-2 text-4xl font-black">
            Shopping Cart
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-3xl bg-white py-24 text-center shadow-sm">
            <ShoppingBag
              size={60}
              className="mx-auto text-gray-300"
            />

            <h2 className="mt-5 text-2xl font-bold">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500">
              Add some beautiful flowers to continue.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="space-y-4">
              {cart.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  className="flex gap-4 rounded-3xl bg-white p-4 shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-28 rounded-2xl object-cover"
                  />

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-sm text-gray-400">
                        {item.category}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-black">
                        ₹{item.price.toLocaleString("en-IN")}
                      </span>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => onDecrease(item.id)}
                          className="rounded-full bg-gray-100 p-2 hover:bg-rose-100"
                        >
                          <Minus size={15} />
                        </button>

                        <span className="font-bold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => onIncrease(item.id)}
                          className="rounded-full bg-gray-100 p-2 hover:bg-rose-100"
                        >
                          <Plus size={15} />
                        </button>

                        <button
                          onClick={() => onRemove(item.id)}
                          className="ml-2 text-gray-400 hover:text-red-500"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <div className="h-fit rounded-3xl bg-white p-7 shadow-sm">
              <h2 className="text-xl font-black">Order Summary</h2>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString("en-IN")}</span>
                </div>

                <div className="flex justify-between text-gray-500">
                  <span>Delivery</span>
                  <span>
                    {delivery === 0
                      ? "FREE"
                      : `₹${delivery}`}
                  </span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-black">
                    <span>Total</span>
                    <span>₹{total.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onCheckout}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 py-4 font-bold text-white transition hover:bg-rose-500"
              >
                Checkout
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}