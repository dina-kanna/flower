import { motion } from "framer-motion";
import {
  MapPin,
  CreditCard,
  CheckCircle2,
} from "lucide-react";
import OrderSummary from "./OrderSummary";

export default function Checkout({ cart, onSuccess }) {
  return (
    <section className="min-h-screen bg-[#fffafa] px-5 pb-20 pt-32">
      <div className="mx-auto max-w-full">
        <h1 className="text-4xl font-black">Checkout</h1>

        <p className="mt-2 text-gray-500">
          Complete your order securely.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={(e) => {
              e.preventDefault();
              onSuccess();
            }}
            className="space-y-6"
          >
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <MapPin className="text-rose-500" />
                <h2 className="text-xl font-black">
                  Delivery Details
                </h2>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input required placeholder="First name" className="input" />
                <input required placeholder="Last name" className="input" />

                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="input sm:col-span-2"
                />

                <input
                  required
                  placeholder="Phone number"
                  className="input sm:col-span-2"
                />

                <input
                  required
                  placeholder="Address"
                  className="input sm:col-span-2"
                />

                <input required placeholder="City" className="input" />
                <input required placeholder="PIN Code" className="input" />
              </div>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <CreditCard className="text-rose-500" />
                <h2 className="text-xl font-black">
                  Payment Method
                </h2>
              </div>

              <div className="mt-6 space-y-3">
                <label className="flex cursor-pointer items-center gap-3 rounded-2xl border p-4 hover:border-rose-400">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                  />
                  <span className="font-semibold">
                    Cash on Delivery
                  </span>
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-2xl border p-4 hover:border-rose-400">
                  <input type="radio" name="payment" />
                  <span className="font-semibold">
                    UPI / Card / Net Banking
                  </span>
                </label>
              </div>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 py-4 font-bold text-white transition hover:bg-rose-500">
              <CheckCircle2 size={19} />
              Place Order
            </button>
          </motion.form>

          <OrderSummary cart={cart} />
        </div>
      </div>
    </section>
  );
}