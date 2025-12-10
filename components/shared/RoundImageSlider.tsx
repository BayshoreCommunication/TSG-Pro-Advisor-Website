import Image from "next/image";
import React from "react";

const IMAGES = [
  "/images/homepage/service/round-1.png",
  "/images/homepage/service/round-2.png",
  "/images/homepage/service/round-3.png",
  "/images/homepage/service/round-1.png",
  "/images/homepage/service/round-2.png",
  "/images/homepage/service/round-3.png",
  "/images/homepage/service/round-1.png",
  "/images/homepage/service/round-2.png",
  "/images/homepage/service/round-3.png",
  
];

const RoundImageSlider = () => {
  return (
    <div className="relative w-full mt-10 overflow-hidden">
      {/* Background Shape */}
      <Image
        src="/images/homepage/service/service-shape.png"
        alt="Shape Background"
        width={1920}
        height={600}
        className="w-full h-auto pointer-events-none"
      />

      {/* Smooth Marquee */}
      <div className="absolute inset-0 flex items-center overflow-hidden">
        <div className="flex items-center space-x-60 animate-marquee mt-[-300px] z-10">
          {/* Original Images */}
          {IMAGES.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`icon-${i}`}
              width={220}
              height={220}
              className="w-[80px] sm:w-[160px] lg:w-[220px] h-auto"
            />
          ))}

          {/* Duplicate Images for Seamless Loop */}
          {IMAGES.map((img, i) => (
            <Image
              key={`dup-${i}`}
              src={img}
              alt={`icon-dup-${i}`}
              width={220}
              height={220}
              className="w-[80px] sm:w-[160px] lg:w-[220px] h-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoundImageSlider;
