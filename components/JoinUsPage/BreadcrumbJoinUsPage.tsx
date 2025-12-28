"use client";

import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { memo, useEffect, useState } from "react";

const BreadcrumbJoinUsPage = () => {
  const fullText = "Join TSG ProAdvisor and Grow Your Tax Business";
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setIsDone(true); // hide cursor after finish
      }
    }, 70); // typing speed

    return () => clearInterval(interval);
  }, []);

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
          {/* Headline with left and right images */}
          <div className="flex items-center gap-6 lg:gap-10 justify-center">
            <Image
              src="/images/breadcrumb/left.png"
              width={500}
              height={500}
              alt=""
              className="w-40 hidden lg:block"
            />

            <Reveal y={80} opacityFrom={0} duration={1.6}>
              <div className="p-6 lg:p-10 rounded-2xl w-full shrink-0">
                <h1 className="text-5xl lg:text-[80px] font-semibold text-transparent text-white leading-snug md:leading-none arya-font">
                  {displayedText}
                  {!isDone && <span className="animate-pulse">|</span>}
                </h1>
              </div>
            </Reveal>

            <Image
              src="/images/breadcrumb/right.png"
              width={500}
              height={500}
              alt=""
              className="w-40 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BreadcrumbJoinUsPage);
