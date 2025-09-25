import { useState } from "react";

export default function DonateSection() {
  const [selectedAmount, setSelectedAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("One-Time");

  const activeAmount = customAmount || selectedAmount;

  return (
    <section className="bg-gradient-to-br from-ivory to-sand p-8 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-charcoal mb-2 text-center">
        Sow Into the Harvest
      </h2>
      <p className="text-slate mb-6 text-center">
        Your generosity helps us take the gospel to the nations. Every gift
        empowers ministry, revival, and freedom across the globe.
      </p>

      <div className="space-y-4">
        {/* $25 / $50 / $100 */}
        <div className="grid grid-cols-3 gap-3">
          {["25", "50", "100"].map((amount) => (
            <button
              key={amount}
              type="button"
              aria-pressed={selectedAmount === amount}
              className={`px-4 py-3 rounded-lg font-semibold border-2 transition-colors duration-300 ${
                selectedAmount === amount
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
              }`}
              onClick={() => {
                setSelectedAmount(amount);
                setCustomAmount("");
              }}
            >
              ${amount}
            </button>
          ))}
        </div>

        {/* Custom amount */}
        <input
          type="number"
          inputMode="decimal"
          min="1"
          placeholder="Custom amount"
          className="w-full px-4 py-3 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
        />

        {/* One-Time / Monthly */}
        <div className="flex gap-3">
          <button
            type="button"
            className={`flex-1 px-6 py-3 rounded-lg font-semibold border-2 transition-colors duration-300 ${
              frequency === "One-Time"
                ? "bg-primary text-white border-primary"
                : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
            }`}
            onClick={() => setFrequency("One-Time")}
          >
            One-Time
          </button>
          <button
            type="button"
            className={`flex-1 px-6 py-3 rounded-lg font-semibold border-2 transition-colors duration-300 ${
              frequency === "Monthly"
                ? "bg-secondary text-white border-secondary"
                : "bg-white text-secondary border-secondary hover:bg-secondary hover:text-white"
            }`}
            onClick={() => setFrequency("Monthly")}
          >
            Monthly
          </button>
        </div>

        {/* Give Now */}
        <button
          type="button"
          className="w-full bg-gradient-to-r from-primary to-clay text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          onClick={() =>
            window.open(
              "https://buy.stripe.com/YOUR-LINK-HERE?memo=4theOne",
              "_blank",
              "noopener,noreferrer"
            )
          }
          aria-label={`Give ${
            activeAmount ? `$${activeAmount} ` : ""
          }${frequency}`}
        >
          Give Now
        </button>

        {/* Payment options */}
        <div className="grid grid-cols-1 gap-3">
          <a
            href="https://buy.stripe.com/YOUR-LINK-HERE?memo=4theOne"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-primary to-clay text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
          >
            Donate with Card / Apple / Google Pay
          </a>

          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_blank"
          >
            <input
              type="hidden"
              name="business"
              value="4theoneinternational@gmail.com"
            />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="hidden" name="item_name" value="4theOne" />
            <button
              type="submit"
              className="w-full border-2 border-blue-500 text-blue-500 font-bold px-8 py-4 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Donate with PayPal
            </button>
          </form>

          <div className="grid grid-cols-2 gap-2">
            <a
              href="https://venmo.com/PraiseTabernacle?txn=pay&amount=&note=4theOne"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 font-bold underline text-left"
            >
              Venmo
            </a>
            <a
              href="https://cash.app/$YourTag?note=4theOne"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-bold underline text-left"
            >
              Cash App
            </a>

            <button
              type="button"
              className="text-left font-bold text-yellow-700 underline"
              title="Copy BTC address"
              onClick={() => {
                navigator.clipboard.writeText(
                  "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa (4theOne)"
                );
                alert("BTC address copied!");
              }}
            >
              Bitcoin (BTC)
            </button>

            <button
              type="button"
              className="text-left font-bold text-orange-700 underline"
              onClick={() =>
                alert("Search donate@4theone.org in Amazon Pay (memo: 4theOne)")
              }
            >
              Amazon Pay
            </button>
          </div>
        </div>

        <p className="text-xs text-slate text-center mt-2">
          Secure donation processing via Stripe. Your information is protected.
        </p>
      </div>
    </section>
  );
}
