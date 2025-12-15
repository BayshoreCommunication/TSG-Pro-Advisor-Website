"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { memo } from "react";
import { PiStarFourLight } from "react-icons/pi";

const OurServices = () => {
  return (
    <section>
      <div className="relative max-w-[1640px] mx-auto px-8 w-full py-10 lg:py-16">
        <div className="max-w-4xl mx-auto mb-6">
          <Reveal y={100} opacityFrom={0} duration={2}>
            <h1 className="text-center text-4xl md:text-5xl lg:text-[52px] font-semibold mb-5 text-black arya-font">
              Our Services
            </h1>
          </Reveal>
          <Reveal y={100} opacityFrom={0} duration={2}>
            <p className="text-center">
              The tools and support you need to build and grow your tax and
              accounting business. TSG ProAdvisor provides education,
              mentorship, and professional tax software to help you work with
              more confidence and improve your results at every stage.
            </p>
          </Reveal>
        </div>
        <Reveal y={100} opacityFrom={0} duration={3}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            <div className=" rounded-2xl text-white">
              <div className="p-5 lg:p-8 bg-[#4E4E4E] bg-[linear-gradient(180deg,rgba(217,217,217,0.3)_0%,rgba(242,100,34,0.3)_100%)] flex flex-col gap-3 rounded-2xl">
                <h4 className="text-2xl lg:text-4xl font-semibold border-b-1 border-white pb-4 mb-3">
                  <span className="text-primary">TSG</span> ProAdvisor Services
                </h4>
                <p>
                  TSG ProAdvisor offers Tax & Accounting Education, Professional
                  Tax Software, and Business Mentorship designed to help you
                  start or grow your business. Whether you’re launching a new
                  venture or scaling an existing one, you get training, tools,
                  and guidance that support your success.
                </p>
                <Link
                  href="/contact"
                  className="
                relative px-8 py-4 bg-primary text-white hover:text-primary font-semibold text-base rounded-xl 
                inline-flex items-center overflow-hidden group
                transition-colors duration-300 mt-4"
                >
                  <span className="relative z-10 inline-block">
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
            {/* Services */}
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
                  <h4 className="text-white text-2xl font-semibold group-hover:text-primary duration-300">
                    Tax & Accounting <br /> Education
                  </h4>
                </div>
              </div>

              {/* Paragraph Section */}
              <p className="mt-4 text-base text-gray-700 leading-relaxed">
                Build your skills with training that strengthens your knowledge,
                improves accuracy, and helps you serve your clients more
                effectively.
              </p>
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
                  <PiStarFourLight size={24} color="#F26422" /> Business Growth
                  & Strategy
                </p>
                <p className="text-base text-gray-700 leading-relaxed flex items-center gap-2">
                  <PiStarFourLight size={24} color="#F26422" /> Business Growth
                  & Strategy
                </p>
              </div>
            </div>
            <div>
              <div className="relative rounded-xl overflow-hidden bg-black/50 group">
                {/* Image */}
                <div className=" w-full">
                  <Image
                    src="/images/servicesPage/ProfessionalTaxSoftware.jpg" // replace with your image path
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
                    Tax & Accounting <br /> Education
                  </h4>
                </div>
              </div>

              {/* Paragraph Section */}
              <p className="mt-4 text-base text-gray-700 leading-relaxed">
                Access reliable, professional-grade tax software designed to
                help you work smoothly, accurately, and efficiently.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default memo(OurServices);
