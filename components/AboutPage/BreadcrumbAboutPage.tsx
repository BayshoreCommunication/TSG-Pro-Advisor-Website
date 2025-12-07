import Image from "next/image";
import React from "react";
import Reveal from "../motion/Reveal";

const BreadcrumbAboutPage = () => {
  return (
    <div>
      <section className="relative w-full flex items-center justify-center min-h-[480px]">
        {/* Background Image */}
        <Image
          src="/images/hero/hero-bg.png"
          alt="Hero Background"
          width={1920}
          height={480}
          className="absolute inset-0 w-full h-full object-cover object-bottom"
          priority
        />

        {/* Content Container */}
        <div className="relative max-w-[1640px] mx-auto px-8 w-full py-10 lg:py-24">
          <div className="flex flex-col items-center text-center gap-6">
            {/* Headline */}
            <Reveal y={80} opacityFrom={0} duration={1.6}>
              <div className="">
                <h1
                  className="text-5xl lg:text-[140px] font-semibold text-transparent stroke-white leading-snug md:leading-tight"
                  style={{ WebkitTextStroke: "3px white" }}
                >
                  About <br /> TSG PROADVISOR
                </h1>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BreadcrumbAboutPage;
