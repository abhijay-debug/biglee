import React from "react";
export default function Pricing() {
  return (
    <section id="pricing" className="relative min-h-screen bg-[linear-gradient(100deg,black_0%,white_320%)] text-white py-20 px-6">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold bg-clip-text text-white bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          Plans & Pricing
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          I offer flexible plans to fit your needs. No matter which one you choose, 
          you’ll get my full commitment and support throughout your journey.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Monthly Plan */}
        <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold text-cyan-300">Monthly Plan</h3>
          <p className="mt-2 text-3xl font-extrabold">₹6999</p>
          <p className="mt-4 text-gray-100 text-sm">
            Pay per month for ongoing coaching. Includes full access to my Digital Twin 24/7 support,
            weekly check-ins, and plan adjustments.
          </p>
          <p className="mt-4 text-gray-300 text-sm italic">
            Perfect for short-term goals or trying it month-by-month. Cancel anytime (but you’ll probably stay ).
          </p>
        </div>

        {/* 3-Month Transformation */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-black-600/40 to-blue-300/30 backdrop-blur-md border border-purple-400/30 shadow-2xl hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold text-purple-300">3-Month Transformation</h3>
          <p className="mt-2 text-3xl font-extrabold">₹17999</p>
          <p className="mt-4 text-gray-200 text-sm">
            Commit to 12 weeks of intensive coaching at a discounted package rate. 
            Ideal for serious transformations and lasting changes.
          </p>
          <p className="mt-4 text-gray-400 text-sm italic">
            Most clients see dramatic improvements in 3 months. You’ll save money and gain consistency.
          </p>
        </div>

        {/* One-Time Personalized Plan */}
        <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold text-cyan-300">One-Time Personalized Plan</h3>
          <p className="mt-2 text-3xl font-extrabold">₹2999</p>
          <p className="mt-4 text-gray-100 text-sm">
            A one-time consultation plus a fully personalized diet & workout plan crafted for you. 
            No ongoing coaching – just the roadmap.
          </p>
          <p className="mt-4 text-gray-200 text-sm italic">
            Perfect for self-starters or tighter budgets who still want expert guidance.
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto mt-16 text-center text-gray-400">
        <p>
          Not sure which plan is right for you?{" "}
          <span className="text-cyan-300 font-semibold">Reach out</span> and I’ll help you 
          choose the best option for your goals.
        </p>
      </div>
    </section>
  );
}
