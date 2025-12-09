"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { memo } from "react";
import { PiStarFourLight } from "react-icons/pi";

const UpcomingEvents = () => {
  return (
    <section className="relative w-full flex items-center justify-center ">
      {/* Background Image */}
      <Image
        src="/images/eventPage/event-bg.png"
        alt="Hero Background"
        fill
        className="absolute inset-0 w-full h-full object-cover object-top"
        priority
      />

      {/* Content Container */}
      <div className="relative max-w-[1640px] mx-auto px-8 w-full py-10 lg:py-24">
        {/* top section */}
        <div className="w-full ">
          {/* Header Section */}
          <div className="flex items-center justify-between  mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black arya-font">
              Upcoming Events
            </h1>

            <select className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 cursor-pointer">
              <option>Date</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>

          {/* Event Card */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-5 rounded-3xl overflow-hidden shadow-xl mb-6">
              {/* Left: Image Section */}
              <div className="relative col-span-3">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/eventPage/event-main.png"
                    alt="Event"
                    width={1500}
                    height={500}
                    className="w-full h-full object-cover"
                  />

                  {/* Black Gradient Overlay (bottom → top) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent" />
                </div>

                {/* Date Badge */}
                <div className="absolute top-6 left-6 lg:left-10 lg:top-10 bg-primary text-white rounded-lg px-3 py-2 text-center shadow-md">
                  <p className="text-[10px] font-bold">NOV</p>
                  <p className="text-xl font-bold -mt-1">14</p>
                </div>

                {/* Event Title */}
                <div className="absolute bottom-6 left-6 lg:left-10 lg:bottom-10 ">
                  <h3 className="text-2xl font-semibold text-white ">
                    2025 Tax Pro Summit
                  </h3>
                </div>
              </div>

              {/* Right: Content Section */}
              <div className="p-8 bg-[linear-gradient(110.71deg,#451A06_0%,#CF5720_49.46%)] text-white col-span-2">
                <h2 className="text-3xl font-semibold mb-4 pb-2 border-b-1 border-white">
                  2025 Tax Pro Summit
                </h2>

                <p className="mb-6 text-base leading-relaxed">
                  Join TSG ProAdvisor for the 2025 Tax Pro Summit. The premier
                  event for tax and accounting professionals ready to build and
                  scale their practice.
                </p>

                <p className="mb-6 text-base leading-relaxed">
                  Learn from industry experts, network with peers, and gain
                  tools you can apply immediately to grow your business. Secure
                  your spot now and step into your next level of professional
                  success.
                </p>

                <button className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            <div className=" rounded-2xl text-white">
              <div className="p-5 lg:p-8 bg-[#4E4E4E] bg-[linear-gradient(180deg,rgba(217,217,217,0.3)_0%,rgba(242,100,34,0.3)_100%)] flex flex-col gap-3 rounded-2xl">
                <h4 className="text-2xl lg:text-4xl font-semibold border-b-1 border-white pb-4 mb-3">
                  <span className="text-primary">TSG</span> ProAdvisor Services
                </h4>
                <p>
                  Discover learning opportunities, workshops, and gatherings
                  designed to help you grow your tax and accounting business.
                  Connect with professionals, build new skills, and stay ahead
                  with events created to support your success. Each event is
                  designed to help you learn from experienced professionals and
                  connect with others who share your goals. Build your
                  confidence, expand your knowledge, and stay motivated as you
                  continue growing your tax business with the guidance and
                  support of the TSG ProAdvisor community.
                </p>
              </div>
            </div>
            {/* Services */}

            {/* ===== Card 1 ===== */}
            <div>
              <div className="relative rounded-xl overflow-hidden group shadow-lg">
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-[#F26422] text-white px-4 py-2 rounded-md text-center z-20">
                  <p className="text-xs font-semibold">NOV</p>
                  <p className="text-2xl font-bold leading-none">14</p>
                </div>

                {/* Image */}
                <Image
                  src="/images/servicesPage/AccountingEducation.jpg"
                  alt="Tax & Accounting Education"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-64 group-hover:scale-110 duration-500"
                />

                {/* Black Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/90" />

                {/* Text on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white text-xl font-semibold leading-snug group-hover:text-primary duration-300">
                    BootCamp impuestos Corporativos
                  </h4>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-base text-gray-700 leading-relaxed">
                You can leverage the expertise of our Business Mentors to start
                or grow your business.
              </p>

              {/* Button */}
              <Link
                href="/contact"
                className="
                relative px-8 py-4 bg-primary text-white hover:text-primary font-semibold text-base rounded-xl 
                inline-flex items-center overflow-hidden group
                transition-colors duration-300 mt-4"
              >
                <span className="relative z-10 inline-block">Join Now</span>

                {/* Creative Hover Animation */}
                <span
                  className="
                  absolute inset-0 bg-black 
                  translate-y-full group-hover:translate-y-0 
                  transition-transform duration-300
                "
                />
              </Link>
            </div>

            {/* ===== Card 2 ===== */}
            <div>
              <div className="relative rounded-xl overflow-hidden group shadow-lg">
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-[#F26422] text-white px-4 py-2 rounded-md text-center z-20">
                  <p className="text-xs font-semibold">NOV</p>
                  <p className="text-2xl font-bold leading-none">19</p>
                </div>

                {/* Image */}
                <Image
                  src="/images/servicesPage/BusinessMentorship.jpg"
                  alt="Business Mentorship"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-64 group-hover:scale-110 duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/90" />

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white text-xl font-semibold leading-snug group-hover:text-primary duration-300">
                    Become a Tax Preparer. Last chance
                  </h4>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-base text-gray-700 leading-relaxed">
                You can leverage the expertise of our Business Mentors to start
                or grow your business.
              </p>

              {/* Button */}
              <Link
                href="/contact"
                className="
                relative px-8 py-4 bg-primary text-white hover:text-primary font-semibold text-base rounded-xl 
                inline-flex items-center overflow-hidden group
                transition-colors duration-300 mt-4"
              >
                <span className="relative z-10 inline-block">Join Now</span>

                {/* Creative Hover Animation */}
                <span
                  className="
                  absolute inset-0 bg-black 
                  translate-y-full group-hover:translate-y-0 
                  transition-transform duration-300
                "
                />
              </Link>
            </div>

            {/* ===== Card 3 ===== */}
            <div>
              <div className="relative rounded-xl overflow-hidden group shadow-lg">
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-[#F26422] text-white px-4 py-2 rounded-md text-center z-20">
                  <p className="text-xs font-semibold">NOV</p>
                  <p className="text-2xl font-bold leading-none">22</p>
                </div>

                {/* Image */}
                <Image
                  src="/images/servicesPage/ProfessionalTaxSoftware.jpg"
                  alt="Professional Tax Software"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-64 group-hover:scale-110 duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/90" />

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white text-xl font-semibold leading-snug group-hover:text-primary duration-300">
                    Conviértase en un profesional de impuestos.
                  </h4>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-base text-gray-700 leading-relaxed">
                You can leverage the expertise of our Business Mentors to start
                or grow your business.
              </p>

              {/* Button */}
              <Link
                href="/contact"
                className="
                relative px-8 py-4 bg-primary text-white hover:text-primary font-semibold text-base rounded-xl 
                inline-flex items-center overflow-hidden group
                transition-colors duration-300 mt-4"
              >
                <span className="relative z-10 inline-block">Join Now</span>

                {/* Creative Hover Animation */}
                <span
                  className="
                  absolute inset-0 bg-black 
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

export default memo(UpcomingEvents);
