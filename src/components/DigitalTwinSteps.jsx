import React from "react";
import { MessageCircle, Target, UserCheck, CheckCircle2 } from "lucide-react";

const Card = ({ Icon, title, points }) => (
  <div className="bg-white/10 backdrop-blur-lg hover:scale-105 rounded-2xl p-8 shadow hover:shadow-lg transition text-center">
    <Icon className="mx-auto text-cyan-300 w-12 h-12 mb-4" />
    <h3 className="text-xl font-semibold mb-5">{title}</h3>
    <ul className="space-y-3 text-white text-sm text-left max-w-xs mx-auto">
      {points.map((point, idx) => (
        <li key={idx} className="flex items-start space-x-2">
          <CheckCircle2 className="text-cyan-300 w-4 h-4 mt-1 flex-shrink-0" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function DigitalTwinSteps() {
  return (
    <section id="work" className="w-full relative py-20 px-6 md:px-16 bg-fixed bg-center bg-cover ">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(140deg,black_0%,white_180%)]"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto  text-center mb-12 text-white">
        <h2 className="text-4xl md:text-5xl font-bold">
           How the Digital Twin Works
        </h2>
      </div>

      <div className="relative grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card
          Icon={MessageCircle}
          title="How You Use It"
          points={[
            "Connect via WhatsApp",
            "Log meals with photos",
            "Ask workout / stress / sleep queries",
            "Get instant support anytime",
          ]}
        />
        <Card
          Icon={Target}
          title="What You Get"
          points={[
            "Personalized feedback & tips",
            "Guidance tailored to your goals",
            "Motivation during cravings/stress",
            "Lifestyle-focused coaching",
          ]}
        />
        <Card
          Icon={UserCheck}
          title="Coach’s Role"
          points={[
            "Monitors your progress",
            "Regularly adjusts plans",
            "Ensures accountability",
            "Always by your side",
          ]}
        />
      </div>
    </section>
  );
}
