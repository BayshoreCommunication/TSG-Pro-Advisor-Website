"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { memo } from "react";

const BreadcrumbServicePage = () => {
  return (
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
                className="text-5xl lg:text-[90px] font-semibold text-transparent stroke-white leading-snug md:leading-none"
                style={{ WebkitTextStroke: "2px white" }}
              >
                We Help Tax Professionals <br /> Grow & Scale with Confidence
              </h1>
            </div>
          </Reveal>
          {/* Button */}
          <Reveal y={80} opacityFrom={0} duration={2.2}>
            <Link
              href="/contact"
              className="
                relative px-10 py-4 bg-primary text-white hover:text-primary font-bold text-lg rounded-xl 
                inline-flex items-center overflow-hidden group
                transition-colors duration-300
              "
            >
              <span className="relative z-10">
                Connect with TSG Pro Advisor
              </span>

              {/* Creative Hover Animation */}
              <span
                className="
                  absolute inset-0 bg-white 
                  translate-y-full group-hover:translate-y-0 
                  transition-transform duration-300
                "
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default memo(BreadcrumbServicePage);
