import Image from "next/image";
import React from "react";

const RoundImageSlider = () => {
  return (
    <div className="relative w-full mt-20">
      {/* Background Shape */}
      <Image
        src="/images/homepage/service/service-shape.png"
        alt="Shape Background"
        width={1920}
        height={600}
        className="w-full h-auto pointer-events-none"
      />

      {/* Circles Wrapper */}

      <div className="grid grid-cols-2 gap-0 md:gap-20 absolute top-0 left-32 right-32 bottom-0">
        {/* Circle 1 */}
        {/* <div className=" md:-mt-24 -mt-8 transform transition-transform duration-500 hover:scale-110">
          <Image
            src="/images/homepage/service/round-1.png"
            alt="Round Icon 1"
            width={220}
            height={220}
            className="w-[80px] sm:w-[180px] lg:w-[220px] h-auto mx-auto"
          />
        </div> */}

        {/* Circle 2 */}
        <div className=" md:-mt-32 -mt-16 transform transition-transform duration-500 hover:scale-110">
          <Image
            src="/images/homepage/service/round-2.png"
            alt="Round Icon 2"
            width={220}
            height={220}
            className="w-[80px] sm:w-[180px] lg:w-[220px] h-auto mx-auto"
          />
        </div>

        {/* Circle 3 */}
        <div className=" md:-mt-32 -mt-16 transform transition-transform duration-500 hover:scale-110">
          <Image
            src="/images/homepage/service/round-3.png"
            alt="Round Icon 3"
            width={220}
            height={220}
            className="w-[80px] sm:w-[180px] lg:w-[220px] h-auto mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default RoundImageSlider;
