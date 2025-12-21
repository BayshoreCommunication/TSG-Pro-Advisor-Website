"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { memo } from "react";
import Stagger from "../motion/Stagger";

const WhatYouAchieve = () => {
  return (
    <section className="relative w-full flex items-center justify-center min-h-[300px] lg:min-h-[480px]">
      {/* Background Image */}
      <Image
        src="/images/join-us/WhatYouAchieveBg.png"
        alt="Hero Background"
        fill
        className="absolute inset-0 w-full h-full object-cover object-top min-h-[100px]"
        priority
      />

      {/* Content Container */}
      <div className="relative max-w-[1640px] mx-auto px-8 w-full ">
        <div className="grid lg:grid-cols-2 items-center md:gap-10 gap-6">
          {/* Left Image */}
          <div className="flex flex-col">
            <Reveal y={100} opacityFrom={0} duration={3}>
              <div className="grid grid-cols-2 gap-4 mt-4 mb-8 ">
                <div className="flex items-start gap-4 flex-col">
                  <h3 className="text-4xl lg:text-5xl font-bold arya-font">
                    1.
                  </h3>
                  <p className="text-base">
                    Training that helps you improve your tax and accounting
                    skills
                  </p>
                </div>
                <div className="flex items-start gap-2 flex-col py-4 ">
                  <h3 className="text-4xl lg:text-5xl font-bold arya-font">
                    2.
                  </h3>
                  <p className="text-base">
                    Mentorship that supports your business growth
                  </p>
                </div>

                <div className="flex items-start gap-2 flex-col py-4 ">
                  <h3 className="text-4xl lg:text-5xl font-bold arya-font">
                    3.
                  </h3>
                  <p className="text-base">
                    Tools and software designed to help you work with confidence
                  </p>
                </div>
                <div className="flex items-start gap-2 flex-col py-4 ">
                  <h3 className="text-4xl lg:text-5xl font-bold arya-font">
                    4.
                  </h3>
                  <p className="text-base">
                    A community committed to learning, growth, and results
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Content */}
          <div className=" overflow-hidden">
            <div className="lg:flex items-center gap-2 hidden ">
              <div className="flex flex-col items-center gap-2">
                <Reveal y={-100} opacityFrom={0} duration={3}>
                  <div className="overflow-hidden group">
                    <Image
                    src="/images/join-us/part-1.png"
                    alt="Our Team"
                    className="w-auto h-auto transform transition-all duration-500 ease-in-out group-hover:scale-110"
                    width={630}
                    height={470}
                  />
                  </div>
                  {" "}
                </Reveal>
                <Reveal y={100} opacityFrom={0} duration={3}>
                  <div className="overflow-hidden group">
                    <Image
                    src="/images/join-us/part-2.png"
                    alt="Our Team"
                    className="w-auto h-auto transform transition-all duration-500 ease-in-out group-hover:scale-110"
                    width={630}
                    height={470}
                  />
                  </div>{" "}
                </Reveal>
              </div>
              <div>
                <div className="flex flex-col items-center gap-2">
                  <Reveal x={100} opacityFrom={0} duration={3}>
                    <div className="overflow-hidden group">

                      <Image
                      src="/images/join-us/part-3.png"
                      alt="Our Team"
                      className="w-auto h-auto transform transition-all duration-500 ease-in-out group-hover:scale-110"
                      width={630}
                      height={470}
                    />
                    </div>
                    {" "}
                  </Reveal>
                  <Reveal y={-100} opacityFrom={0} duration={3}>
                    <div className="overflow-hidden group">
                      <Image
                      src="/images/join-us/part-4.png"
                      alt="Our Team"
                      className="w-auto h-auto transform transition-all duration-500 ease-in-out group-hover:scale-110"
                      width={630}
                      height={470}
                    />
                      </div>{" "}
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(WhatYouAchieve);
