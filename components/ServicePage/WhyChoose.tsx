"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";
import { memo } from "react";
import { PiStarFourLight } from "react-icons/pi";

const WhyChoose = () => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="relative max-w-[1640px] mx-auto px-8 w-full py-10 lg:py-16">
        <div className="max-w-4xl mx-auto mb-6">
          <Reveal y={100} opacityFrom={0} duration={3}>
            <h1 className="text-center text-4xl md:text-5xl lg:text-[52px] font-semibold mb-5 text-black arya-font">
              Our Services
            </h1>
          </Reveal>
          <Reveal y={100} opacityFrom={0} duration={3}>
            <p className="text-center">
              The tools and support you need to build and grow your tax and
              accounting business. TSG ProAdvisor provides education,
              mentorship, and professional tax software to help you work with
              more confidence and improve your results at every stage.
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div>
            <div className="relative overflow-hidden bg-black/50 group">
              {/* Image */}
              <div className=" w-full ">
                <Image
                  src="/images/servicesPage/WhyChoose-1.png" // replace with your image path
                  alt="Tax & Accounting Education"
                  width={1000}
                  height={1000}
                  className="object-cover"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

              {/* Content */}
              <div className="absolute bottom-0 left-4  right-6 p-6 ">
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={150}
                  height={100}
                  className="w-[80px] md:w-[90px]"
                ></Image>

                {/* Paragraph Section */}
                <p className="mt-4 mb-6 text-base text-white leading-tight lg:leading-relaxed">
                  Industry-Leading Training Stay ahead with training that covers
                  tax, accounting, bookkeeping, leadership, marketing, and
                  business growth. Learn at your own pace and gain the skills
                  needed for long-term success.
                </p>
                <Link
                  href="#"
                  className="
    relative px-10 py-4 bg-primary text-white font-bold text-lg rounded-xl
    inline-flex items-center overflow-hidden group
    transition-colors duration-300
  "
                >
                  {/* Text stays on top */}
                  <span className="relative z-20 group-hover:text-primary transition-colors">
                    Learn More
                  </span>

                  {/* Hover animation background */}
                  <span
                    className="
      absolute inset-0 bg-white
      translate-y-full group-hover:translate-y-0
      transition-transform duration-300
      z-10
    "
                  />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden bg-black/50 group">
              {/* Image */}
              <div className=" w-full">
                <Image
                  src="/images/servicesPage/WhyChoose-2.png" // replace with your image path
                  alt="Tax & Accounting Education"
                  width={1000}
                  height={1000}
                  className="object-cover"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 p-6">
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={150}
                  height={100}
                  className="w-[80px] md:w-[90px]"
                ></Image>
                {/* Paragraph Section */}
                <p className="mt-4 mb-6 text-base text-white leading-tight lg:leading-relaxed">
                  Community & Support Be part of a supportive community of
                  professionals across the United States. Connect, learn, and
                  grow with people who share your goals and are committed to
                  helping you succeed.
                </p>
                <Link
                  href="#"
                  className="
    relative px-10 py-4 bg-primary text-white font-bold text-lg rounded-xl
    inline-flex items-center overflow-hidden group
    transition-colors duration-300
  "
                >
                  {/* Text stays on top */}
                  <span className="relative z-20 group-hover:text-primary transition-colors">
                    Learn More
                  </span>

                  {/* Hover animation background */}
                  <span
                    className="
      absolute inset-0 bg-white
      translate-y-full group-hover:translate-y-0
      transition-transform duration-300
      z-10
    "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
          <div className="w-full h-full bg-[linear-gradient(110.71deg,#451A06_0%,#CF5720_49.46%)]">
            <div className="p-6 lg:p-10 flex flex-col items-start text-start justify-between">
              <div>
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={150}
                  height={100}
                ></Image>
                {/* Paragraph Section */}
                <p className="mt-4 mb-6 text-base text-white leading-relaxed">
                  Community & Support Be part of a supportive community of
                  professionals across the United States. Connect, learn, and
                  grow with people who share your goals and are committed to
                  helping you succeed.
                </p>
              </div>
              <Link
                href="#"
                className="
    relative px-10 py-4 bg-primary text-white font-bold text-lg rounded-xl
    inline-flex items-center overflow-hidden group
    transition-colors duration-300
  "
              >
                {/* Text stays on top */}
                <span className="relative z-20 group-hover:text-primary transition-colors">
                  Learn More
                </span>

                {/* Hover animation background */}
                <span
                  className="
      absolute inset-0 bg-white
      translate-y-full group-hover:translate-y-0
      transition-transform duration-300
      z-10
    "
                />
              </Link>
            </div>
          </div>
          <div className=" w-full">
            <Image
              src="/images/servicesPage/WhyChoose-3.png" // replace with your image path
              alt="Tax & Accounting Education"
              width={1000}
              height={1000}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(WhyChoose);
