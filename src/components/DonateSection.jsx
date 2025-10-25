import { useState } from "react";

export default function DonateSection() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("One-Time");

  return (
    <section className="bg-gradient-to-br from-ivory to-sand p-8 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-charcoal mb-4 text-center">
        Sow Into the Harvest
      </h2>
      <p className="text-slate mb-6 text-center">
        Your generosity helps us take the gospel to the nations. Every gift
        empowers ministry, revival, and freedom across the globe.
      </p>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3 mb-2">
          {["25", "50", "100"].map((amount) => (
            <button
              key={amount}
              className={`bg-white border-2 border-primary text-primary px-4 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300 ${
                selectedAmount === amount ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedAmount(amount)}
            >
              ${amount}
            </button>
          ))}
        </div>
        <input
          type="number"
          placeholder="Custom amount"
          className="w-full px-4 py-3 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none mb-2"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
        />
        <div className="flex gap-3 mb-2">
          <button
            className={`flex-1 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-clay transition-colors duration-300 ${
              frequency === "One-Time" ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setFrequency("One-Time")}
          >
            One-Time
          </button>
          <button
            className={`flex-1 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-opacity duration-300 ${
              frequency === "Monthly" ? "ring-2 ring-secondary" : ""
            }`}
            onClick={() => setFrequency("Monthly")}
          >
            Monthly
          </button>
        </div>
        <button className="w-full bg-gradient-to-r from-primary to-clay text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 glow-primary mb-2">
          Give Now
        </button>
        <div className="grid grid-cols-1 gap-3 mt-2">
          <a
            href="https://buy.stripe.com/YOUR-LINK-HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-primary to-clay text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center mb-2"
          >
            Donate with Card / Apple / Google Pay
          </a>
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_blank"
            className="mb-2"
          >
            <input type="hidden" name="business" value="4theoneinternational@gmail.com" />
            <input type="hidden" name="currency_code" value="USD" />
            <button
              type="submit"
              className="border-2 border-blue-500 text-blue-500 font-bold px-8 py-4 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 w-full"
            >
              Donate with PayPal
            </button>
          </form>
          <div className="grid grid-cols-2 gap-2">
            <a
              href="https://venmo.com/PraiseTabernacle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 font-bold underline text-left"
            >
              Venmo
            </a>
            <a
              href="https://cash.app/$YourTag"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-bold underline text-left"
            >
              Cash App
            </a>
            <div className="text-left">
              <span className="font-bold text-yellow-700">Bitcoin (BTC)</span>
              <br />
              <span className="text-xs">
                1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
              </span>
            </div>
            <div className="text-left">
              <span className="font-bold text-orange-700">Amazon Pay</span>
              <br />
              <span className="text-xs">
                Search <span className="underline">donate@4theone.org</span> in
                Amazon Pay
              </span>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate text-center mt-6">
          Secure donation processing via Stripe. Your information is protected.
        </p>
      </div>
    </section>
  );
}
