import React from "react";
import { ClipboardCheck, Clock, HeartPulse, Users, TrendingUp, Award } from "lucide-react";

// const BenefitCard = ({ Icon, title, description, className, bgImage }) => (
//   <div
//     className={`relative rounded-2xl flex bg-[linear-gradient(140deg,black_0%,white_240%)] shadow-md hover:shadow-xl transition overflow-hidden ${className}`}
//   >
//     {/* Background Image */}
//     <div
//       className="h-[40vh] w-[60vw] bg-red-200"
//       // style={{ backgroundImage: `url(${bgImage})` }}
//     >
//   <img className="h-full w-full bg-cover" src={bgImage} alt="" />
//     </div>

//     {/* Overlay */}
//     <div className="absolute inset-0 "></div>

//     {/* Content */}
//     <div className="relative p-8 text-white">
//       <Icon className="w-10 h-10 mb-4 text-cyan-300" />
//       <h3 className="text-xl font-semibold mb-3">{title}</h3>
//       <p className="text-sm leading-relaxed">{description}</p>
//     </div>
//   </div>
// );

export default function BenefitsSection() {
  return (
    <section id="benefits" className="w-full overflow-hidden bg-[linear-gradient(140deg,black_0%,white_180%)] bg-center bg-cover py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
           Benefits of the Digital Twin Program
        </h2>
        <p className="text-gray/50 mt-4 max-w-2xl mx-auto">
          When you join my Digital Twin program, you’re signing up for a comprehensive transformation experience.
        </p>
      </div>

      {/* Grid unique pattern */}
      <div className="grid md:grid-cols-1 gap-8  max-w-6xl mx-auto">
       {/* first */}
        <div className="md:col-span-6 hover:scale-105 transition-transform lg:flex rounded-xl bg-[linear-gradient(150deg,black_0%,white_240%)]">
            <div
      className="h-[40vh] w-full  "
      // style={{ backgroundImage: `url(${bgImage})` }} 
      >
  <img className="h-full w-full bg-cover lg:rounded-l-lg " src="/images/eight.jpg" alt="" />
    </div>
    <div className="relative p-8 bg-white/10 backdrop-blur-md border border-white/20 lg:rounded-r-xl text-white">
       <Users className="w-10 h-10 mb-4 text-cyan-300" />
       <h3 className="text-xl font-semibold mb-3">Personalized Plans</h3>
       <p className="text-sm lg:w-[40vw] leading-relaxed">
                  A custom diet and workout plan tailored to your body, 
          schedule, and goals. Whether you need to lose fat, build muscle, manage PCOS 
          symptoms, or all of the above – your plan will be made just for you. We factor in your 
          health conditions (yes, even things like thyroid, diabetes, or PCOD), food 
          preferences, and daily routine. No one-size-fits-all nonsense. 
       </p>
   </div>
        </div>
        {/* second */}
        <div className="md:col-span-6 hover:scale-105 transition-transform lg:flex rounded-xl bg-[linear-gradient(150deg,black_0%,white_240%)]">
            <div
      className="h-[42vh] w-full  "
      // style={{ backgroundImage: `url(${bgImage})` }} 
      >
  <img className="h-full w-full bg-cover lg:rounded-l-lg " src="/images/nine.jpg" alt="" />
    </div>
    <div className="relative p-8 bg-white/10 backdrop-blur-md border border-white/20 lg:rounded-r-xl text-white">
       <Clock className="w-10 h-10 mb-4 text-cyan-300" />
       <h3 className="text-xl font-semibold mb-3">24/7 Guidance & Accountability:</h3>
       <p className="text-sm lg:w-[40vw] leading-relaxed">
                 You get daily check-ins and constant support. 
          Log your meals via photos and get feedback. Stuck at a work dinner and not sure 
          what to eat? Message me. Not sure if you’re doing your squats right? Send a quick 
          video for form correction. I (or my Digital Twin) will be there to keep you on track at all 
          hours. It’s like having a coach in your corner 24/7, keeping you accountable and 
          motivated.
       </p>
   </div>
        </div>
        {/* third */}
        <div className="md:col-span-6 hover:scale-105 transition-transform lg:flex rounded-xl bg-[linear-gradient(150deg,black_0%,white_240%)]">
            <div
      className="h-[45vh] w-full  "
      // style={{ backgroundImage: `url(${bgImage})` }} 
      >
  <img className="h-full w-full bg-cover lg:rounded-l-lg " src="/images/three.jpg" alt="" />
    </div>
    <div className="relative p-8 bg-white/10 backdrop-blur-md border border-white/20 lg:rounded-r-xl text-white">
       <HeartPulse className="w-10 h-10 mb-4 text-cyan-300" />
       <h3 className="text-xl font-semibold mb-3">Holistic Health Focus</h3>
       <p className="text-sm lg:w-[40vw] leading-relaxed">
             Fitness is not just about workouts – it’s about your overall 
          well-being. I’ll help you manage stress and anxiety, improve your sleep quality, and 
          tweak your lifestyle habits. If you’re a busy professional, we’ll implement 
          stress-management techniques and quick routines to boost your energy and 
          productivity. If you’re dealing with hormonal issues like PCOS, we’ll focus on nutrition 
          and lifestyle changes to support healing. Expect guidance on everything from 
          emotional health to recovery – because a healthy mind is crucial for a healthy 
          body. 
       </p>
   </div>
        </div>
        {/* fourth */}
        <div className="md:col-span-6 hover:scale-105 transition-transform lg:flex rounded-xl bg-[linear-gradient(150deg,black_0%,white_240%)]">
            <div
      className="h-[42vh] w-full  "
      // style={{ backgroundImage: `url(${bgImage})` }} 
      >
  <img className="h-full w-full bg-cover lg:rounded-l-lg " src="/images/fourteen.jpg" alt="" />
    </div>
    <div className="relative p-8 bg-white/10 backdrop-blur-md border border-white/20 lg:rounded-r-xl text-white">
       <TrendingUp className="w-10 h-10 mb-4 text-cyan-300" />
       <h3 className="text-xl font-semibold mb-3">Family-Friendly Fitness</h3>
       <p className="text-sm lg:w-[40vw] leading-relaxed">
              Healthier living for the whole family! My program isn’t just 
            for you alone – I can involve your spouse or even your kids if you want to make this a 
            family journey. I’ve coached couples and families to get fit together, which makes the 
            process fun and encouraging. Family fitness means setting routines everyone 
            enjoys, like weekend activity challenges or healthy meal plans that even the kids will 
            love. When your family joins in, you get a built-in support system at home. 
       </p>
   </div>
        </div>
        {/* fifth */}
        <div className="md:col-span-6 lg:flex hover:scale-105 transition-transform rounded-xl bg-[linear-gradient(150deg,black_0%,white_240%)]">
            <div
      className="h-[42vh] w-full  "
      // style={{ backgroundImage: `url(${bgImage})` }} 
      >
  <img className="h-full w-full bg-cover lg:rounded-l-lg " src="/images/eighteen.jpg" alt="" />
    </div>
    <div className="relative p-8 bg-white/10 backdrop-blur-md border border-white/20 lg:rounded-r-xl text-white">
       <ClipboardCheck className="w-10 h-10 mb-4 text-cyan-300" />
       <h3 className="text-xl font-semibold mb-3">Continuous Progress Monitoring:</h3>
       <p className="text-sm lg:w-[40vw] leading-relaxed">
             We won’t just set a plan and forget it. I’ll be 
            tracking your progress closely. We’ll do regular progress reviews – checking your 
            weight, measurements, strength gains, or even blood reports if needed. You’ll get a 
            “report card” on how you’re doing. If something isn’t working, we’ll adjust the plan. 
            Plateaued on weight loss? We’ll tweak your calories. Feeling too tired? We’ll optimize 
            your recovery. The program adapts as you improve, so you keep seeing results week 
            after week.
       </p>
   </div>
        </div>
        {/* sixth */}
        <div className="md:col-span-6 hover:scale-105 transition-transform lg:flex rounded-xl bg-[linear-gradient(150deg,black_0%,white_240%)]">
            <div
      className="h-[52vh] w-fit  "
      // style={{ backgroundImage: `url(${bgImage})` }} 
      >
  <img className="h-full w-full bg-cover lg:rounded-l-lg " src="/images/eleven.jpg" alt="" />
    </div>
    <div className="relative p-8 bg-white/10 backdrop-blur-md border border-white/20 lg:rounded-r-xl text-white">
       <Award className="w-10 h-10 mb-4 text-cyan-300" />
       <h3 className="text-xl font-semibold mb-3">Real Results, That Last</h3>
       <p className="text-sm lg:w-[40vw] leading-relaxed">
               This is about transformation – and not just a temporary 
          one. You can expect to see visible changes: dropping those extra kilos, building 
          muscle tone, fitting into clothes better, glowing skin from improved nutrition, and 
          more. If you have medical issues (like high sugar or PCOD symptoms), we aim to 
          improve those markers as well – many of my clients have seen their blood pressure 
          normalize or their PCOS symptoms reduce significantly. Most importantly, you’ll come 
          out of this with habits and knowledge to stay fit for life. My goal is to educate and 
          empower you, so you don’t just transform once – you keep those results and 
          continue getting healthier even after the program. 
       </p>
   </div>
        </div>
      </div>
    </section>
  );
}
          // className="md:col-span-6"
