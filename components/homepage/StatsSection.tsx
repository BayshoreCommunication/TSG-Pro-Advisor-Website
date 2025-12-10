"use client";

import { useEffect } from "react";
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
          <p className="text-lg text-gray-700">
            Get the support, education, and resources you need to build a
            successful tax and accounting business.
          </p>

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

          {/* Section Title */}
          <h3 className="text-2xl md:text-3xl font-bold mt-16">
            Education and support designed to help you grow at every stage.
          </h3>

          <p className="max-w-3xl mx-auto mt-4 text-gray-600">
            Whether you are starting a tax business or improving an existing
            one, TSG ProAdvisor gives you the training and guidance to help you
            move forward with confidence.
          </p>

          {/* Laptop Image */}
          <div className="mt-12 flex justify-center">
            <Image
              src="/images/homepage/stats/image.png" // change path
              alt="Laptop Display"
              width={1000}
              height={800}
              className="w-full max-w-[650px]"
            />
          </div>

          {/* Bottom Highlight Box */}
          <div className="mt-12 border border-orange-400 bg-white/80 backdrop-blur-md rounded-xl py-6 px-4 max-w-3xl mx-auto">
            <p className="text-gray-700">
              Join the growing network of tax professionals who are learning,
              building, and transforming their businesses with TSG ProAdvisor.
            </p>

            <h4 className="font-semibold mt-3 text-lg md:text-xl border-t pt-3 border-orange-600">
              We’ve helped thousands build, grow, and succeed.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
