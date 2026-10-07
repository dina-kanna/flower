
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CheckCircle,Leaf, Truck, ShieldCheck, ArrowRight, ShoppingBag,} from "lucide-react";
import { useShop } from "../context/ShopContext";
import Payment from "../components/Payment";

const Checkout = () => {
  const { cart = [], cartTotal = 0 } = useShop();
  const navigate = useNavigate();

  const [placed, setPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaced(true);
  };

  if (cart.length === 0 && !placed) {
    return (
      <main className="min-h-screen pt-32 pb-20 bg-[#f5f9f1]">

        <div className="max-w-xl mx-auto px-6 text-center">

          <div className="w-24 h-24 mx-auto rounded-[2rem] bg-green-100 flex items-center justify-center text-green-700">
            <ShoppingBag size={42} />
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-green-600">
            VerdantNest
          </p>

          <h1 className="mt-2 text-4xl font-black text-green-950">
            Your cart is empty
          </h1>

          <p className="mt-4 text-gray-500">
            Add some beautiful plants before continuing to checkout.
          </p>

          <Link
            to="/shop"
            className="
              inline-flex
              items-center
              gap-2
              mt-8
              px-7 py-4
              rounded-2xl
              bg-gradient-to-r
              from-green-600 to-emerald-700
              text-white
              font-bold
              shadow-lg
              hover:-translate-y-1
              transition
            "
          >
            <Leaf size={18} />
            Explore Plants
            <ArrowRight size={18} />
          </Link>

        </div>

      </main>
    );
  }

  
  if (placed) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f5f9f1] px-5">

        <div
          className="
            relative
            overflow-hidden
            bg-white
            w-full
            max-w-lg
            rounded-[2.5rem]
            border border-green-100
            shadow-2xl
            p-8 sm:p-12
            text-center
          "
        >

          <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-green-100 blur-3xl" />

          <div className="relative z-10">

            <div
              className="
                mx-auto
                w-24 h-24
                rounded-[2rem]
                bg-green-100
                flex items-center justify-center
              "
            >
              <CheckCircle
                size={52}
                className="text-green-600"
              />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-green-600">
              VerdantNest
            </p>

            <h1 className="mt-2 text-4xl sm:text-5xl font-black text-green-950">
              Order Placed!
            </h1>

            <p className="mt-4 text-gray-500 leading-7">
              Thank you for choosing VerdantNest.
              Your plants are getting ready for their journey
              to your home.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-8">

              <div className="p-4 rounded-2xl bg-green-50 text-left">
                <Truck
                  size={19}
                  className="text-green-700"
                />
                <p className="mt-2 text-xs text-gray-400">
                  Delivery
                </p>
                <p className="font-bold text-green-950">
                  On the way soon
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-green-50 text-left">
                <ShieldCheck
                  size={19}
                  className="text-green-700"
                />
                <p className="mt-2 text-xs text-gray-400">
                  Payment
                </p>
                <p className="font-bold text-green-950">
                  Secure
                </p>
              </div>

            </div>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="
                w-full
                mt-8
                h-14
                rounded-2xl
                bg-gradient-to-r
                from-green-600 to-emerald-700
                text-white
                font-bold
                shadow-lg
                hover:-translate-y-0.5
                transition
              "
            >
              Continue Shopping
            </button>

          </div>

        </div>

      </main>
    );
  }
  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#f5f9f1]">

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8">

          <div className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-[0.18em]">
            <Leaf size={15} />
             TerraBloom Checkout
          </div>

          <h1 className="mt-2 text-4xl sm:text-5xl font-black text-green-950">
            Complete Your Order
          </h1>

          <p className="mt-2 text-gray-500">
            You're one step away from bringing more green home.
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="grid lg:grid-cols-3 gap-7">
            <div className="lg:col-span-2 space-y-6">

              <section
                className="
                  bg-white
                  rounded-[2rem]
                  border border-green-100
                  shadow-sm
                  p-6 sm:p-8
                "
              >

                <div className="flex items-center gap-3 mb-7">

                  <div className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                    <Truck size={20} />
                  </div>

                  <div>

                    <h2 className="text-xl sm:text-2xl font-black text-green-950">
                      Delivery Information
                    </h2>

                    <p className="text-sm text-gray-400">
                      Where should we deliver your plants?
                    </p>

                  </div>

                </div>

                <div className="grid sm:grid-cols-2 gap-5">

                  <div className="sm:col-span-2">

                    <label className="block text-sm font-bold text-green-950 mb-2">
                      Full Name
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      className="
                        w-full h-13
                        px-4
                        rounded-xl
                        bg-green-50/50
                        border border-green-100
                        outline-none
                        focus:bg-white
                        focus:border-green-500
                        focus:ring-4
                        focus:ring-green-500/10
                        transition
                      "
                    />

                  </div>

                  <div>

                    <label className="block text-sm font-bold text-green-950 mb-2">
                      Email Address
                    </label>

                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      className="
                        w-full h-13
                        px-4
                        rounded-xl
                        bg-green-50/50
                        border border-green-100
                        outline-none
                        focus:bg-white
                        focus:border-green-500
                        focus:ring-4
                        focus:ring-green-500/10
                        transition
                      "
                    />

                  </div>

                  <div>

                    <label className="block text-sm font-bold text-green-950 mb-2">
                      Phone Number
                    </label>

                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="
                        w-full h-13
                        px-4
                        rounded-xl
                        bg-green-50/50
                        border border-green-100
                        outline-none
                        focus:bg-white
                        focus:border-green-500
                        focus:ring-4
                        focus:ring-green-500/10
                        transition
                      "
                    />

                  </div>

                  <div className="sm:col-span-2">

                    <label className="block text-sm font-bold text-green-950 mb-2">
                      Delivery Address
                    </label>

                    <textarea
                      required
                      rows="4"
                      placeholder="House number, street, area, city, state, PIN code"
                      className="
                        w-full
                        px-4 py-3
                        rounded-xl
                        bg-green-50/50
                        border border-green-100
                        outline-none
                        resize-none
                        focus:bg-white
                        focus:border-green-500
                        focus:ring-4
                        focus:ring-green-500/10
                        transition
                      "
                    />

                  </div>

                </div>

              </section>

              <section
                className="
                  bg-white
                  rounded-[2rem]
                  border border-green-100
                  shadow-sm
                  p-6 sm:p-8
                "
              >

                <Payment
                  value={paymentMethod}
                  onChange={setPaymentMethod}
                />

              </section>
              <button
                type="submit"
                className="
                  group
                  w-full
                  h-16
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-green-600
                  to-emerald-700
                  text-white
                  text-lg
                  font-black
                  shadow-xl
                  shadow-green-700/20
                  hover:from-green-700
                  hover:to-green-800
                  hover:-translate-y-1
                  active:scale-[0.99]
                  transition-all
                "
              >
                Place Order

                <ArrowRight
                  size={21}
                  className="group-hover:translate-x-1 transition"
                />

              </button>

            </div>

            <aside>

              <div
                className="
                  lg:sticky
                  lg:top-28
                  bg-white
                  rounded-[2rem]
                  border border-green-100
                  shadow-xl
                  shadow-green-950/5
                  p-6 sm:p-7
                "
              >

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 text-white flex items-center justify-center">
                    <ShoppingBag size={20} />
                  </div>

                  <div>

                    <h2 className="text-xl font-black text-green-950">
                      Order Summary
                    </h2>

                    <p className="text-xs text-gray-400">
                      {cart.length}{" "}
                      {cart.length === 1 ? "item" : "items"}
                    </p>

                  </div>

                </div>

                <div className="mt-7 space-y-4 max-h-[380px] overflow-y-auto pr-1">

                  {cart.map((item) => {

                    const quantity = Number(item.quantity) || 1;
                    const price = Number(item.price) || 0;

                    return (
                      <div
                        key={item.id}
                        className="
                          flex
                          gap-3
                          p-3
                          rounded-2xl
                          bg-green-50
                        "
                      >

                        <img
                          src={item.image}
                          alt={item.name}
                          className="
                            w-16 h-16
                            rounded-xl
                            object-cover
                            flex-shrink-0
                          "
                        />

                        <div className="flex-1 min-w-0">

                          <p className="font-bold text-green-950 text-sm truncate">
                            {item.name}
                          </p>

                          <p className="text-xs text-gray-400 mt-1">
                            Qty: {quantity}
                          </p>

                          <p className="text-sm font-black text-green-700 mt-1">
                            ₹{(price * quantity).toLocaleString("en-IN")}
                          </p>

                        </div>

                      </div>
                    );
                  })}

                </div>

                <div className="h-px bg-green-100 my-6" />

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-bold text-green-950">
                    ₹{cartTotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between text-sm mt-3">

                  <span className="text-gray-500">
                    Delivery
                  </span>

                  <span className="font-bold text-green-600">
                    FREE
                  </span>

                </div>

                <div className="h-px bg-green-100 my-5" />

                <div className="flex items-center justify-between">

                  <span className="text-lg font-bold text-green-950">
                    Total
                  </span>

                  <span className="text-2xl font-black text-green-700">
                    ₹{cartTotal.toLocaleString("en-IN")}
                  </span>

                </div>

                <div className="mt-7 pt-6 border-t border-green-100 space-y-4">

                  <div className="flex items-center gap-3">

                    <ShieldCheck
                      size={18}
                      className="text-green-600"
                    />

                    <span className="text-xs text-gray-500">
                      Secure checkout
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <Truck
                      size={18}
                      className="text-green-600"
                    />

                    <span className="text-xs text-gray-500">
                      Safe plant delivery
                    </span>

                  </div>

                </div>

              </div>

            </aside>

          </div>

        </form>

      </div>

    </main>
  );
};

export default Checkout;
