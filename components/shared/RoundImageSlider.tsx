import Image from "next/image";
import React from "react";

const RoundImageSlider = () => {
  return (
    <div className="relative w-full mt-10">
      {/* Background Shape */}
      <Image
        src="/images/homepage/service/service-shape.png"
        alt="Shape Background"
        width={1920}
        height={600}
        className="w-full h-auto pointer-events-none"
      />

      {/* Circles Wrapper */}
      <div className="grid grid-cols-3 gap-0 md:gap-20 absolute top-0 left-0 right-0 bottom-0">
        {/* Circle 1 */}
        <div className="">
          <Image
            src="/images/homepage/service/round-1.png"
            alt="Round Icon 1"
            width={220}
            height={220}
            className="w-[80px] sm:w-[180px] lg:w-[220px] h-auto mx-auto"
          />
        </div>

        {/* Circle 2 */}
        <div className=" -mt-16">
          <Image
            src="/images/homepage/service/round-2.png"
            alt="Round Icon 2"
            width={220}
            height={220}
            className="w-[80px] sm:w-[180px] lg:w-[220px] h-auto mx-auto"
          />
        </div>

        {/* Circle 3 */}
        <div className=" -mt-8 ">
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
