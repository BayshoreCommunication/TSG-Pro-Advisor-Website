"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function RoundImageSlider() {
  return (
    <div className="relative w-full mt-10 overflow-hidden ">
      {/* Background Shape */}
      <Image
        src="/images/homepage/service/service-shape.png"
        alt="bg-shape"
        width={1920}
        height={600}
        className="w-full h-auto pointer-events-none"
      />

      {/* Images container */}
      <div className="absolute inset-0 flex justify-center items-end pb-10 gap-20">
        {/* Image 1 */}
        <motion.div
          initial={{ x: -200, y: -60, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute md:top-0 top-0 left-16 md:left-30 "
        >
          <Image
            src="/images/homepage/service/round-1.png"
            alt="round-1"
            width={200}
            height={200}
            className="w-[80px] sm:w-[140px] lg:w-[200px]"
          />
        </motion.div>

        {/* Image 2 (lower for curve) */}
        <motion.div
          initial={{ x: -200, y: 0, opacity: 0 }}
          animate={{ x: 0, y: 20, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute md:top-0 "
        >
          <Image
            src="/images/homepage/service/round-2.png"
            alt="round-2"
            width={200}
            height={200}
            className="w-[80px] sm:w-[140px]  lg:w-[200px]"
          />
        </motion.div>

        {/* Image 3 */}
        <motion.div
          initial={{ x: -200, y: -60, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute md:top-0 top-0 right-16 md:right-[200px] "
        >
          <Image
            src="/images/homepage/service/round-3.png"
            alt="round-3"
            width={200}
            height={200}
            className="w-[80px] sm:w-[140px]  lg:w-[200px]"
          />
        </motion.div>
      </div>
    </div>
  );
}
