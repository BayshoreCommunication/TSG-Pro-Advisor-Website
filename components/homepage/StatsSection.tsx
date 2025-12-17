"use client";

import { useState,useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export default function StatsSection() {
  // Counter animation
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    const controls = animate(count, 6092, {
      duration: 2.5,
      ease: "easeOut",
    });

    return controls.stop;
  }, []);
  const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // animation time (ms)
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

  return (
    <section className="relative w-full flex items-center justify-center min-h-[480px] lg:min-h-[480]">
      {/* Background Image */}
      <Image
        src="/images/homepage/stats/bg.png"
        alt="Hero Background"
        fill
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        priority
      />

      {/* Content Container */}
      <div className="relative max-w-[1640px] mx-auto px-8 w-full py-10 lg:py-24">
        <div className="max-w-[1640px] mx-auto text-center">
          {/* Intro Text */}
          <Reveal y={100} opacityFrom={0} duration={3}>
          <p className="text-lg text-gray-700">
            Get the support, education, and resources you need to build a
            successful tax and accounting business.
          </p>
          </Reveal>

          {/* 🔥 Animated Counter */}
          <h2 className="text-6xl md:text-8xl font-extrabold text-black my-6">
            <motion.span>{rounded}</motion.span>
          </h2>

          {/* Button */}
          <Reveal y={80} opacityFrom={0} duration={2.2}>
            <Link
              href="/services"
              className="
                relative px-10 py-4 bg-primary text-white hover:text-primary font-bold text-lg rounded-xl
                inline-flex items-center overflow-hidden group
                transition-colors duration-300
              "
            >
              <span className="relative z-10">Explore Our Services</span>

              {/* Creative Hover Animation */}
              <span
                className="
                  absolute inset-0 bg-black
                  translate-y-full group-hover:translate-y-0
                  transition-transform duration-300
                "
              />
            </Link>
          </Reveal>

          <div className="w-full  py-16">
      <div className="max-w-[1640px] mx-auto px-4 text-center">
        {/* Subtitle */}
        <p className="text-gray-600 mb-12">
          Get the support, education, and resources you need to build a successful
          tax and accounting business.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 max-w-[1640px] mx-auto">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold text-black">
              <Counter end={45000} />
            </h2>
            <p className="mt-2 text-2xl font-semibold text-gray-700">Tax Returns Filed</p>
          </div>

          <div>
            <h2 className="text-6xl md:text-8xl  font-bold text-black">
              <Counter end={3500} suffix="+" />
            </h2>
            <p className="mt-2 text-2xl font-semibold text-gray-700">Students</p>
          </div>

          <div>
            <h2 className="text-6xl md:text-8xl font-bold text-black">
              <Counter end={200} suffix="+" />
            </h2>
            <p className="mt-2 text-2xl font-semibold text-gray-700">Courses</p>
          </div>

          <div>
            <h2 className="text-6xl md:text-8xl font-bold text-black">
              <Counter end={100} suffix="+" />
            </h2>
            <p className="mt-2 text-2xl font-semibold  text-gray-700">
              IRS CE Credits Approved
            </p>
          </div>
        </div>

        {/* Button */}
          <Reveal y={80} opacityFrom={0} duration={2.2}>
            <Link
              href="/services"
              className="
                relative px-10 py-4 bg-primary text-white hover:text-primary font-bold text-lg rounded-xl
                inline-flex items-center overflow-hidden group
                transition-colors duration-300
              "
            >
              <span className="relative z-10">Explore Our Services</span>

              {/* Creative Hover Animation */}
              <span
                className="
                  absolute inset-0 bg-black
                  translate-y-full group-hover:translate-y-0
                  transition-transform duration-300
                "
              />
            </Link>
          </Reveal>
      </div>
    </div>









          {/* Section Title */}

          <Reveal y={100} opacityFrom={0} duration={3}>
          <h3 className="text-2xl md:text-3xl font-bold mt-16">
            Education and support designed to help you grow at every stage.
          </h3>
          </Reveal>
           <Reveal y={100} opacityFrom={0} duration={3}>
          <p className="max-w-3xl mx-auto mt-4 text-gray-600">
            Whether you are starting a tax business or improving an existing
            one, TSG ProAdvisor gives you the training and guidance to help you
            move forward with confidence.
          </p>
          </Reveal>
          {/* Laptop Image */}
          <div className="mt-12 flex justify-center">
             <Reveal y={100} opacityFrom={0} duration={3}>
            <Image
              src="/images/homepage/stats/image.jpg" // change path
              alt="Laptop Display"
              width={1000}
              height={800}
              className="w-full max-w-[850px] rounded-xl"
            />
            </Reveal>
          </div>

          {/* Bottom Highlight Box */}

          <Reveal y={100} opacityFrom={0} duration={3}>
          <div className="mt-6  backdrop-blur-md rounded-xl py-6 px-4 max-w-3xl mx-auto">

           
            <p className="text-gray-700">
              Join the growing network of tax professionals who are learning,
              building, and transforming their businesses with TSG ProAdvisor.
            </p>
            
            <h4 className="font-semibold mt-3 text-lg md:text-xl  pt-3">
              We’ve helped thousands build, grow, and succeed.
            </h4>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
