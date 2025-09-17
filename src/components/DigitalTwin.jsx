import React from "react";

export default function DigitalTwin() {
  return (
    <section id="services" className="w-full  py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Your Digital Twin <br /> 
            <span className="text">Coach Biglee On-Demand</span>
          </h2>
          <p className="text-white leading-relaxed mb-6">
            My Digital Twin is essentially <strong className="text-cyan-300 pr-2">“Coach Biglee on-demand.”</strong> 
            It’s a digital coaching assistant powered by my knowledge, methods, 
            and personality – available to you <strong className="text-cyan-300">24/7</strong>. I created this 
            because I can’t physically be with every client at all times, but with the 
            Digital Twin, you get my <strong className="text-cyan-300 pr-2">guidance, accountability, and motivation</strong> 
             whenever you need it.
          </p>
          <p className="text-white leading-relaxed mb-8">
            From nutrition tracking, workout adjustments, mindset coaching, to 
            answering your fitness queries instantly – the Digital Twin is like having 
            me in your pocket.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-3   gap-6 mb-10">
             <div className="bg-[linear-gradient(150deg,black_0%,white_240%)] hover:scale-105 rounded-2xl  shadow hover:shadow-md transition">
              <div className="w-full h-[100%]  rounded-2xl p-6 backdrop-blur-lg shadow-lg bg-white/10">
                <h3 className="font-semibold text-white mb-2">24/7 Availability</h3>
              <p className="text-white text-sm">
                  Always accessible, anytime you need guidance.
              </p>
              </div>
            </div>
           
            <div className="bg-[linear-gradient(150deg,black_0%,white_240%)] hover:scale-105 rounded-2xl  shadow hover:shadow-md transition">
              <div className="w-full h-[100%]  rounded-2xl p-6 backdrop-blur-lg shadow-lg bg-white/10">
                <h3 className="font-semibold text-white mb-2">Personalized Coaching</h3>
              <p className="text-white text-sm">
                Customized workouts, nutrition, and mindset tips.
              </p>
              </div>
            </div>
             <div className="bg-[linear-gradient(150deg,black_0%,white_240%)] hover:scale-105 rounded-2xl  shadow hover:shadow-md transition">
              <div className="w-full h-[100%]  rounded-2xl p-6 backdrop-blur-lg shadow-lg  bg-white/10">
                <h3 className="font-semibold text-white mb-2">Real Coach Knowledge</h3>
              <p className="text-white text-sm">
              Backed by 20+ years of expertise and proven methods.
              </p>
              </div>
            </div>
          
          </div>

          {/* CTA */}
          <a href="#contact">

          <button className="px-8 py-3 hover:bg-[linear-gradient(100deg,black_0%,white_20%)] hover:text-black transition bg-[linear-gradient(100deg,black_0%,white_240%)] text-white rounded-full shadow-lg hover:bg-indigo-700 transition">
            Activate Your Digital Twin
          </button>
          </a>
        </div>

        {/* Right Image / Illustration */}
        <div className="relative flex justify-center items-center">
          <img
            src="/images/two.jpg"
            alt="Coach Biglee Digital Twin"
            className="rounded-3xl shadow-xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-black text-white text-sm px-4 py-2 rounded-full shadow-lg">
            Powered by Coach Biglee
          </div>
        </div>
      </div>
    </section>
  );
}
