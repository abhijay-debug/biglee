import React, { useEffect, useState } from "react";
import { Menu, X, Play, Apple, Store } from "lucide-react";
import DigitalTwin from "./DigitalTwin";
import DigitalTwinSteps from "./DigitalTwinSteps";
import Benifit from "./BenefitsSection";
import AboutCoach from "./AboutCoach";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import CallToAction from "./CallToAction";
import ImageMarquee from "./ImageMarwuee";
import useScrollAnimation from "./UseScrollAnimation";



export default function HealthTrackUI() {
  const [menuOpen, setMenuOpen] = useState(false);
   useScrollAnimation()

   const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <div className="font-sans text-white  bg-[linear-gradient(100deg,black_0%,white_100%)] to-transparent  ">
      {/* Navbar */}
     <header className="relative w-full py-6  text-white top-0 left-0 z-50">
      <div className=" px-6 md:px-20  flex justify-between items-center text-[#F2F2F2]">
        
        
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="w-6 h-6 bg-[linear-gradient(270deg,black_0%,white_100%)] rounded-full inline-block"></span>
          Coach Biglee
        </div>

       
        <nav className="hidden md:flex gap-8 items-center fade-up">
          <a href="#About"  className="font-medium hover:text-cyan-300 px-4 py-1 rounded-full hover:bg-white   transition">About</a>
          <a href="#benefits" className="font-medium hover:text-cyan-300 px-4 py-1 rounded-full hover:bg-white transition">Benefits</a>
          <a href="#work" className="font-medium hover:text-cyan-300 px-4 py-1 rounded-full hover:bg-white transition">How It Works</a>
          <a href="#pricing" className="font-medium hover:text-cyan-300 px-4 py-1 rounded-full hover:bg-white transition">Pricing</a>
          <a href="#contact" className="font-medium hover:text-cyan-300 px-4 py-1 rounded-full hover:bg-white transition">Contact</a>
         
          
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white fade-up"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen ? (
            // Hamburger Icon
            <svg xmlns="http://www.w3.org/2000/svg" 
              className="w-7 h-7" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            // Cross Icon
            <svg xmlns="http://www.w3.org/2000/svg" 
              className="w-7 h-7" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div onClick={handleLinkClick} className="md:hidden  bg-[bg-[#398B99]] px-6 py-4 flex flex-col gap-4 text-white rounded-md shadow-md mt-2 mx-4">
          <a href="#About"  className="font-medium hover:text-[#F8B259] transition">About</a>
          <a href="#benefits" className="font-medium hover:text-[#F8B259] transition">Benefits</a>
          <a href="#work" className="font-medium hover:text-[#F8B259] transition">How It Works</a>
          <a href="#pricing" className="font-medium hover:text-[#F8B259] transition">Pricing</a>
          <a href="#contact" className="font-medium hover:text-[#F8B259] transition">Contact</a>
        </div>
      )}
    </header>

      {/* Hero Section */}
      <section id="hero" className="max-w-7xl  mx-auto px-6 py-12 grid lg:grid-cols-2  gap-10 items-center">
        <div>
          <h1 className="text-5xl  text-center md:text-6xl font-bold leading-[10vh] lg:leading-[12vh] mb-6">
           Transform Your Body & Life with My <span className="text-cyan-300">24/7</span> Coaching
          </h1>
          <p className="text-white mb-6">
            Hi, I’m Coach Biglee Murali, here to help you achieve a life-changing transformation through my Digital Twin health coaching program
          </p>
            
          <a href="#contact">
          <button className="px-5 py-3 hover:bg-[linear-gradient(100deg,black_0%,white_20%)] hover:text-black transition bg-[linear-gradient(100deg,black_0%,white_240%)] hover:scale-105 text-white text-sm rounded-full shadow-md">JOIN US TODAY</button>
          </a>
          {/* <span className="ml-4 text-sm text-gray-500">Until 31/04/25</span> */}
        </div>

        {/* Right side small explore box */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-40 h-24 rounded-xl overflow-hidden">
              <img src="/images/hero.jpg" alt="Explore more" className="w-full h-full object-cover" />
            </div>
            <div>
            <a href="#contact">

              <p className="text-sm font-medium">Explore more</p>
            </a>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b pb-1">
              <a href="#About">

              <span>Our Story</span>
              </a>
            </div>
            <div className="flex justify-between border-b pb-1">
              <a href="#services">

              <span>Our Services</span>
              </a>
            </div>
            <div className="flex justify-between border-b pb-1">
              <a href="#work">

              <span>Our Features</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Big Banner */}
      <section  className="max-w-7xl mx-auto px-6 mb-16">
        <div className="rounded-2xl overflow-hidden relative">
          <img src="/images/six.jpg" alt="Health banner" className="w-full h-[350px] object-cover" />
          <div className="absolute bottom-6 p left-6 bg-[linear-gradient(100deg,black_0%,white_200%)] px-4 py-2 rounded-full  text-lg font-medium">
           I’m Coach Biglee Murali
          </div>
          <div className="absolute hidden md:block top-4 md:right-4 flex gap-2 text-xs">
            <span className="px-3 py-1 bg-[linear-gradient(100deg,black_0%,white_220%)] rounded-full ">HONEST COACHING</span>
            <span className="px-3 py-1 bg-[linear-gradient(100deg,black_0%,white_200%)] rounded-full">24/7 GUIDANCE</span>
            <span className="px-3 py-1 bg-[linear-gradient(100deg,black_0%,white_180%)] rounded-full uppercase">PRoven Experience & Transformations</span>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <AboutCoach/>

      {/* Insights */}
     <DigitalTwin/>
     <DigitalTwinSteps/>
     {/* <DigitalTwin/> */}
     <Benifit/>
     <Testimonials/>
     <Pricing/>
     <ImageMarquee/>
     <CallToAction/>
     
    </div>
  );
}
