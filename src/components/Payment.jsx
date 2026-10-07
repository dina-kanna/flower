import { useState } from "react";
import { CreditCard, Smartphone, Banknote, Check, Lock } from "lucide-react";

const paymentMethods = [
  {
    id: "upi",
    title: "UPI",
    description: "Google Pay, PhonePe, Paytm & more",
    icon: Smartphone,
  },
  {
    id: "card",
    title: "Card Payment",
    description: "Credit or Debit Card",
    icon: CreditCard,
  },
  {
    id: "cod",
    title: "Cash on Delivery",
    description: "Pay when your plants arrive",
    icon: Banknote,
  },
];

const Payment = ({ value, onChange }) => {
  const [upiId, setUpiId] = useState("");
  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  const handleCardChange = (e) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
            <Lock size={19} />
          </div>

          <div>
            <h2 className="text-xl font-black text-green-950 sm:text-2xl">
              Payment Method
            </h2>
            <p className="text-sm text-gray-400">
              Choose how you'd like to pay
            </p>
          </div>
        </div>
      </div>

      {/* Payment Options Selection */}
      <div className="space-y-3">
        {paymentMethods.map((method) => {
          const Icon = method.icon;
          const selected = value === method.id;

          return (
            <button
              key={method.id}
              type="button"
              onClick={() => onChange(method.id)}
              className={`
                w-full text-left
                flex items-center gap-4
                p-4
                rounded-2xl
                border-2
                transition-all duration-300
                ${
                  selected
                    ? "border-green-600 bg-green-50 shadow-md"
                    : "border-green-100 bg-white hover:border-green-300 hover:bg-green-50/50"
                }
              `}
            >
              {/* Icon */}
              <div
                className={`
                  flex h-12 w-12 flex-shrink-0 items-center justify-center
                  rounded-xl
                  ${
                    selected
                      ? "bg-gradient-to-br from-green-600 to-emerald-700 text-white"
                      : "bg-green-100 text-green-700"
                  }
                `}
              >
                <Icon size={21} />
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <p className="font-bold text-green-950">{method.title}</p>
                <p className="mt-0.5 text-xs text-gray-400 sm:text-sm">
                  {method.description}
                </p>
              </div>

              {/* Radio Indicator */}
              <div
                className={`
                  flex h-6 w-6 flex-shrink-0 items-center justify-center
                  rounded-full
                  border-2
                  ${
                    selected
                      ? "border-green-600 bg-green-600"
                      : "border-gray-300"
                  }
                `}
              >
                {selected && (
                  <Check size={14} className="text-white" strokeWidth={3} />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* UPI Form Section */}
      {value === "upi" && (
        <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
          <label className="mb-2 block text-sm font-bold text-green-950">
            UPI ID
          </label>
          <input
            type="text"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            placeholder="example@upi"
            className="
              h-12 w-full
              rounded-xl
              border border-green-200
              bg-white
              px-4
              outline-none
              transition
              focus:border-green-500
              focus:ring-4
              focus:ring-green-500/10
            "
          />
          <p className="mt-2 text-xs text-gray-400">
            Enter your UPI ID to continue.
          </p>
        </div>
      )}

      {/* Card Form Section */}
      {value === "card" && (
        <div className="space-y-4 rounded-2xl border border-green-100 bg-green-50 p-5">
          <div>
            <label className="mb-2 block text-sm font-bold text-green-950">
              Card Number
            </label>
            <input
              name="number"
              value={cardData.number}
              onChange={handleCardChange}
              type="text"
              inputMode="numeric"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              className="
                h-12 w-full
                rounded-xl
                border border-green-200
                bg-white
                px-4
                outline-none
                transition
                focus:border-green-500
                focus:ring-4
                focus:ring-green-500/10
              "
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm font-bold text-green-950">
                Expiry
              </label>
              <input
                name="expiry"
                value={cardData.expiry}
                onChange={handleCardChange}
                type="text"
                placeholder="MM/YY"
                maxLength={5}
                className="
                  h-12 w-full
                  rounded-xl
                  border border-green-200
                  bg-white
                  px-4
                  outline-none
                  transition
                  focus:border-green-500
                  focus:ring-4
                  focus:ring-green-500/10
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-green-950">
                CVV
              </label>
              <input
                name="cvv"
                value={cardData.cvv}
                onChange={handleCardChange}
                type="password"
                inputMode="numeric"
                placeholder="•••"
                maxLength={3}
                className="
                  h-12 w-full
                  rounded-xl
                  border border-green-200
                  bg-white
                  px-4
                  outline-none
                  transition
                  focus:border-green-500
                  focus:ring-4
                  focus:ring-green-500/10
                "
              />
            </div>
          </div>
        </div>
      )}

      {/* Cash on Delivery Section */}
      {value === "cod" && (
        <div className="rounded-2xl border border-lime-200 bg-lime-50 p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-lime-100 text-green-700">
              <Banknote size={18} />
            </div>

            <div>
              <p className="font-bold text-green-950">Cash on Delivery</p>
              <p className="mt-1 text-sm text-gray-500">
                Pay securely when your plants are delivered to your doorstep.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Security Note */}
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <Lock size={13} className="text-green-600" />
        Your payment information is protected and secure.
      </div>
    </div>
  );
};

export default Payment;