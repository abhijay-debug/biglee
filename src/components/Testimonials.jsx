import React from 'react';
export default function Testimonials() {
  return (
    <section className="relative min-h-screen bg-[linear-gradient(100deg,black_0%,white_180%)] text-white py-16 px-6">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-4xl text-white font-bold">
          Real People. Real Results. Real Transformations.
        </h2>
        <p className="mt-4 text-lg text-gray-100">
          From reversing diabetes to regaining confidence, these stories speak louder than words.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="max-w-6xl  mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition-transform">
          <p className="text-gray-200 italic">
            "I had tried everything and lost hope. In just 3 months with <span className="font-semibold text-cyan-300">Biglee</span>, I lost 21 kg 
            and even reversed my diabetes. This new lifestyle has become an addiction!"
          </p>
          <p className="mt-4 font-semibold text-cyan-300 ">– Ishwaryaa (lost 21 kg and regained her health)</p>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition-transform">
          <p className="text-gray-200 italic">
            "He made my dreams come true. I call him the <span className="font-semibold text-cyan-300">Transformation King</span> because 
            he’s transformed so many people. You can close your eyes and trust him!"
          </p>
          <p className="mt-4 font-semibold text-cyan-300">– Anuradha Rao</p>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition-transform">
          <p className="text-gray-200 italic">
            "Biglee brought me back from a depressed, overweight state and made me look forward to workouts again. 
            Now I feel strong, energetic, and even my colleagues are amazed at my transformation!"
          </p>
          <p className="mt-4 font-semibold text-cyan-300">– Dr. Premkumar B. (Surgeon & busy professional)</p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto mt-12 text-center text-gray-400">
        <p>
          (Plus, I’ve got hundreds more success stories – from working moms and dads to senior executives to athletes.  
          <span className="text-cyan-300 font-semibold"> Your story could be the next one!</span>)
        </p>
      </div>
    </section>
  );
}
