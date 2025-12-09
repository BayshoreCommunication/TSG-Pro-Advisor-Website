"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { memo } from "react";

const BreadcrumbJoinUsPage = () => {
  return (
    <section className="relative w-full flex items-center justify-center min-h-[480px]">
      {/* Background Image */}
      <Image
        src="/images/breadcrumb/breadcrumb-join-us.jpg"
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
          <div className="flex items-center gap-6 lg:gap-10 justify-center">
            <Image
              src="/images/breadcrumb/left.png"
              width={500}
              height={500}
              alt=""
              className="w-40"
            ></Image>
            <Reveal y={80} opacityFrom={0} duration={1.6}>
              <div className="  p-6 lg:p-10 rounded-2xl">
                <h1
                  className="text-5xl lg:text-[80px] font-semibold text-transparent stroke-white leading-snug md:leading-none arya-font"
                  style={{ WebkitTextStroke: "2px #fff" }}
                >
                  Join TSG ProAdvisor and Grow Your Tax Business
                </h1>
              </div>
            </Reveal>
            <Image
              src="/images/breadcrumb/right.png"
              alt=""
              width={500}
              height={500}
              className="w-40"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BreadcrumbJoinUsPage);
