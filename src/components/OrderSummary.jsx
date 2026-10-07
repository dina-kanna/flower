export default function OrderSummary({ cart }) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const delivery = subtotal >= 1000 ? 0 : 79;

  return (
    <div className="rounded-3xl bg-white p-7 shadow-sm">
      <h2 className="text-xl font-black">Order Summary</h2>

      <div className="mt-6 space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between gap-4 text-sm"
          >
            <span className="text-gray-500">
              {item.name} × {item.quantity}
            </span>

            <span className="font-semibold">
              ₹{(item.price * item.quantity).toLocaleString("en-IN")}
            </span>
          </div>
        ))}

        <div className="border-t pt-4">
          <div className="flex justify-between text-gray-500">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString("en-IN")}</span>
          </div>

          <div className="mt-3 flex justify-between text-gray-500">
            <span>Delivery</span>
            <span>
              {delivery === 0 ? "FREE" : `₹${delivery}`}
            </span>
          </div>

          <div className="mt-5 flex justify-between text-xl font-black">
            <span>Total</span>
            <span>
              ₹{(subtotal + delivery).toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}