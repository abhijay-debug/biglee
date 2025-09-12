import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const AboutCoach = () => {
  return (
    <section id="About" className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2  gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
           Meet Coach Biglee Murali
          </h2>

          <div className="mb-6">
            <h3 className="font-semibold text-cyan-300 mb-2">Journey from IT professional → Fitness Coach</h3>
           <p className="text-sm text-white">I wasn’t always a fitness coach. In fact, I started out as a stressed IT professional pulling late 
nights on projects. But my passion for fitness kept burning – I’d hit the gym at 5 AM even 
after working till 2 AM. Eventually, I took a leap of faith, quit the corporate grind, and pursued 
my true calling in health and fitness</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-cyan-300 mb-2">Bodybuilding titles (Mr. Tamil Nadu)</h3>
            <p className="text-sm text-white">
              With over 20 years of dedication, I’ve earned a few 
bodybuilding titles (like Mr. Tamil Nadu) and, more importantly, helped thousands of people 
transform their bodies and lifestyles. 
            </p>
          </div>

         <div className="mb-6">
            <h3 className="font-semibold text-cyan-300 mb-2">Philosophy: “No gimmicks, only truth & tough love”</h3>
            <p className="text-sm text-white">
                      My approach is no-nonsense and passionate. I’m not here to sugarcoat or hand out magic 
          pills – I’m here to coach you with truth and tough love. If you’re looking for fad diets or easy 
          hacks, that’s not me. But if you’re ready to work hard and stay consistent, I’ll give you 
          everything you need to succeed. I believe in a practical, sustainable approach to fitness: 
          no crash diets, no extreme workouts – just a plan that fits you. I’ll push you out of your 
          comfort zone when needed, but I’ll also be your biggest cheerleader. Think of me as that 
          friendly coach who won’t let you give up on yourself. 
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <a href="#contact">

            <button className="px-5 py-3 hover:bg-[linear-gradient(100deg,black_0%,white_0%)] hover:text-black transition bg-[linear-gradient(100deg,black_0%,white_240%)] shadow-xl text-white rounded-full text-sm">JOIN US TODAY</button>
            </a>
               <a href="https://www.instagram.com/bigleemurali?igsh=MTlkOXozZ2h4eGdueg=="  className="hover:text-pink-400">
            <button className="px-5 flex items-center  gap-2 py-3 hover:bg-[linear-gradient(100deg,black_0%,white_0%)] hover:text-black transition bg-[linear-gradient(100deg,black_0%,white_240%)] shadow-xl text-white rounded-full text-sm">
                             <FaInstagram className='text-2xl text-pink-500' />
                             FOLLOW ON INSTAGRAM </button>
                           </a> 
          </div>
        </div>

        {/* Right side image & activity card */}
        <div className="relative">
          <img src="/images/nine.jpg" alt="Workout" className="w-full h-[400px] object-cover rounded-2xl" />

          <div className="absolute md:top-6 top-4 right-6 bg-white shadow rounded-xl md:p-4 p-2 text-center w-32">
            <p className="text-sm font-medium text-black mb-2">I’m Coach Biglee Murali</p>
            <div className="flex justify-between text-xs text-gray-600">
              
            </div>
          </div>

         
        </div>
      </section>
  )
}

export default AboutCoach
