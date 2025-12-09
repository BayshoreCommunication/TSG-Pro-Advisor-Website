"use client";

import Image from "next/image";
import Link from "next/link";

import { memo } from "react";
import { PiStarFourLight } from "react-icons/pi";

const WhyChoose = () => {
  return (
    <section>
      <div className="relative max-w-[1640px] mx-auto px-8 w-full py-10 lg:py-16">
        <div className="max-w-4xl mx-auto mb-6">
          <h1 className="text-center text-4xl md:text-5xl lg:text-[52px] font-semibold mb-5 text-black arya-font">
            Our Services
          </h1>
          <p className="text-center">
            The tools and support you need to build and grow your tax and
            accounting business. TSG ProAdvisor provides education, mentorship,
            and professional tax software to help you work with more confidence
            and improve your results at every stage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div>
            <div className="relative rounded-xl overflow-hidden bg-black/50 group">
              {/* Image */}
              <div className=" w-full">
                <Image
                  src="/images/servicesPage/AccountingEducation.jpg" // replace with your image path
                  alt="Tax & Accounting Education"
                  width={1000}
                  height={1000}
                  className="object-cover"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6">
                {/* Paragraph Section */}
                <p className="mt-4 text-base text-gray-700 leading-relaxed">
                  Industry-Leading Training Stay ahead with training that covers
                  tax, accounting, bookkeeping, leadership, marketing, and
                  business growth. Learn at your own pace and gain the skills
                  needed for long-term success.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative rounded-xl overflow-hidden bg-black/50 group">
              {/* Image */}
              <div className=" w-full">
                <Image
                  src="/images/servicesPage/BusinessMentorship.jpg" // replace with your image path
                  alt="Tax & Accounting Education"
                  width={1000}
                  height={1000}
                  className="object-cover"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white text-2xl font-semibold group-hover:text-primary duration-300">
                  Professional <br /> TaxSoftware
                </h4>
              </div>
            </div>

            {/* Paragraph Section */}
            <div className=" flex flex-col gap-2 mt-4">
              <p className="text-base text-gray-700 leading-relaxed flex items-center gap-2">
                <PiStarFourLight size={24} color="#F26422" /> Business Growth &
                Strategy
              </p>
              <p className="text-base text-gray-700 leading-relaxed flex items-center gap-2">
                <PiStarFourLight size={24} color="#F26422" /> Business Growth &
                Strategy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(WhyChoose);
