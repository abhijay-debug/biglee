import React from "react";

export default function ImageMarquee() {
  const images = [
    "/images/one.",
    "/images/two.jpg",
    "/images/three.jpg",
    "/images/six.jpg",
    "/images/eight.jpg",
    "/images/ten.jpg",
    "/images/eleven.jpg",
    "/images/thirteen.jpg",
    "/images/fourteen.jpg",
    "/images/sixteen.jpg",
    "/images/seventeen.jpg",
    "/images/eighteen.jpg",
    "/images/six.jpg",
    "/images/eight.jpg",
    "/images/ten.jpg",
    "/images/eleven.jpg",
    "/images/thirteen.jpg",
    "/images/nine.jpg",
    "/images/five.jpg",
    "/images/four.jpg",
    "/images/six.jpg",
    "/images/eight.jpg",
    "/images/ten.jpg",
    "/images/eleven.jpg",
    "/images/thirteen.jpg",
    "/images/nine.jpg",
    "/images/five.jpg",
    "/images/four.jpg",
  
    
   
    
    
   
    
   
    
  ];

  return (
    <section className="w-full  bg-[linear-gradient(100deg,black_0%,white_280%)] py-8 overflow-hidden">
      <div className="flex w-[1600%] md:w-[200%] animate-[marquee_20s_linear_infinite] md:animate-[marquee_10s_linear_infinite]">
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`marquee-img-${i}`}
            className="h-60 w-80 mx-4 object-cover  rounded-md"
          />
        ))}
      </div>
    </section>
  );
}
