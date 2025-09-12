import React from "react";
import { ClipboardCheck } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function CallToAction() {
  return (
    <>
      <section id="contact" className="relative min-h-screen bg-black text-white py-20 px-6">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-extrabold bg-clip-text text-white bg-gradient-to-r from-green-400 via-teal-400 to-blue-400">
            Ready to Transform?
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            I genuinely believe that anyone can change their health and body with the right guidance.  
            If you’ve read this far, it means you’re serious about making a change – and I’m serious about helping you get there.  
            No more “starting next Monday” or waiting for the perfect time.  
            <span className="font-semibold text-cyan-300"> The best time to start is now.</span>
          </p>
        </div>

        {/* Steps Section */}
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
          {/* WhatsApp */}
          <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold flex gap-4 text-green-400">
              <FaWhatsapp className="text-4xl" /> Message me on WhatsApp
            </h3>
            <p className="mt-4 text-gray-300 text-sm">
              Have questions or just want to say hello? Click the WhatsApp link and connect directly to my digital twin.  
              I’m happy to chat about your goals, concerns, or even doubts.  
              <span className="text-green-400">
                WhatsApp is the fastest way to reach me – and yes, I do personally respond!
              </span>
            </p>
           <a href="https://wa.me/916268230392?text=Hi">
             <button className="px-5 flex items-center gap-2 py-2 mt-6 hover:bg-[linear-gradient(100deg,black_0%,white_0%)] hover:text-black transition bg-[linear-gradient(100deg,black_0%,white_240%)]  text-white text-sm rounded-full shadow-md">
              <FaWhatsapp className="text-2xl text-green-500" /> CHAT ON WHATSAPP
            </button>
           </a>
          </div>

          {/* Form */}
          <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:scale-105 transition-transform">
            <h3 className="text-2xl flex gap-4 items-center font-bold text-cyan-300">
              <ClipboardCheck /> Fill the Form
            </h3>
            <p className="mt-4 text-gray-300 text-sm">
              Prefer email? Fill out the short form below with your name, phone, and email.  
              I’ll personally get in touch within 24 hours to discuss your goals and how we can work together.
            </p>
            <a href="https://forms.gle/C6rGQuj1pCUNvGY26">
            <button className="px-5 py-2 mt-6 hover:bg-[linear-gradient(100deg,black_0%,white_0%)] hover:text-black transition bg-[linear-gradient(100deg,black_0%,white_240%)] text-white text-sm rounded-full flex items-center gap-2 shadow-md">
              <ClipboardCheck className="text-sm" /> FILL THE FORM
            </button>

            </a>
          </div>

          {/* Secure Spot */}
          {/* <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-pink-400">🚀 Secure Your Spot</h3>
            <p className="mt-4 text-gray-300 text-sm">
              Ready to commit right away? Awesome! Choose your plan above and hit the payment button to sign up.  
              Once you enroll, we’ll schedule an in-depth onboarding call, and then hit the ground running on your transformation.
            </p>
            <a
              href="#pricing"
              className="inline-block mt-6 px-6 py-3 rounded-xl bg-pink-500 font-semibold hover:bg-pink-400 transition"
            >
              Choose Your Plan
            </a>
          </div> */}

        </div>
        <div className="w-full flex flex-col items-center text-center mt-12">
             <h3 className="text-4xl font-bold text-white"> Secure Your Spot</h3>
             <p className="mt-4 text-gray-100 text-center md:w-1/2 text-sm md:text-md">
              Ready to commit right away? Awesome! Choose your plan above and hit the payment button to sign up.  
              Once you enroll, we’ll schedule an in-depth onboarding call, and then hit the ground running on your transformation.
            </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-10 mt-">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
           Coach Biglee 
          </h1>

          {/* Nav Links */}
          <ul className="flex gap-6 text-gray-300 text-sm mr-10">
            <li><a href="#pricing" className="hover:text-white transition">Plans</a></li>
            <li><a href="#work" className="hover:text-white transition">How It's Work</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl text-white">
            <a href="https://wa.me/916268230392?text=Hi" target="_blank" rel="noreferrer" className="hover:text-green-400">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/bigleemurali?igsh=MTlkOXozZ2h4eGdueg==" target="_blank" rel="noreferrer" className="hover:text-pink-400">
              <FaInstagram />
            </a>
          
          </div>
        </div>

        {/* Bottom Line */}
        <div className=" text-center text-gray-500  text-sm">
          © {new Date().getFullYear()} Biglee Fitness. All rights reserved.
        </div>
      </footer>
    </>
  );
}
