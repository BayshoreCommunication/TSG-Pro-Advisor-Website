"use client";

import React, { useEffect, useState, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

interface BreadcrumbSectionProps {
  title: string;
  buttonText?: string;
  buttonLink?: string;
  bgImage: string;
  className?: string;
}

const BreadcrumbSection: React.FC<BreadcrumbSectionProps> = ({
  title,
  buttonText,
  buttonLink = "/contact",
  bgImage,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(title.slice(0, index));
      index++;
      if (index > title.length) {
        clearInterval(interval);
        setIsDone(true); // hide cursor after typing
      }
    }, 70);

    return () => clearInterval(interval);
  }, [title]);

  return (
    <section
      className={`relative w-full flex items-center justify-center min-h-[480px] lg:min-h-[480px] ${className}`}
    >
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Hero Background"
        fill
        className="absolute inset-0 w-full h-full object-cover object-top"
        priority
      />

      {/* Content Container */}
      <div className="relative max-w-[1640px] mx-auto px-8 w-full py-10 lg:py-24">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Headline */}
          <Reveal y={80} opacityFrom={0} duration={1.6}>
            <div className="px-6 lg:px-10 rounded-2xl">
              <h1
                className="text-5xl lg:text-[80px] font-semibold text-transparent leading-snug md:leading-none arya-font"
                style={{ WebkitTextStroke: "2px white" }}
              >
                {displayedText}
                {!isDone && <span className="animate-pulse">|</span>}
              </h1>
            </div>
          </Reveal>

          {/* Optional Button */}
          {buttonText && (
            <Reveal y={80} opacityFrom={0} duration={2.2}>
              <Link
                href={buttonLink}
                className="relative px-10 py-4 bg-primary text-white hover:text-primary font-bold text-lg rounded-xl 
                  inline-flex items-center overflow-hidden group transition-colors duration-300 mt-6"
              >
                <span className="relative z-10">{buttonText}</span>
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(BreadcrumbSection);
