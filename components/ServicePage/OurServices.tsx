"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { memo } from "react";
import Stagger from "../motion/Stagger";

const OurServices = () => {
  return (
    <section className="">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-[#4E4E4E] rounded-2xl text-white">
            <div className="p-5 bg-[linear-gradient(180deg,rgba(217,217,217,0.3)_0%,rgba(242,100,34,0.3)_100%)] flex flex-col gap-3 rounded-2xl">
              <h4 className="text-2xl lg:text-4xl font-semibold border-b-1 border-white pb-4 mb-3">
                <span className="text-primary">TSG</span> ProAdvisor Services
              </h4>
              <p>
                TSG ProAdvisor offers Tax & Accounting Education, Professional
                Tax Software, and Business Mentorship designed to help you start
                or grow your business. Whether you’re launching a new venture or
                scaling an existing one, you get training, tools, and guidance
                that support your success.
              </p>
              <Link
                href="/contact"
                className="
                relative px-10 py-4 bg-primary text-white hover:text-primary font-semibold text-base rounded-xl 
                inline-flex items-center overflow-hidden group
                transition-colors duration-300 mt-4"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(OurServices);
