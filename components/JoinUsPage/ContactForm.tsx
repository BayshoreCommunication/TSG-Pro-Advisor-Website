"use client";

import React, { useRef } from "react";
import Reveal from "../motion/Reveal";
const ContactPage = () => {
  const formRef = useRef(null);

  return (
    <div className="w-full  ">
      <div className=" max-w-[1640px] mx-auto px-8 w-full py-10 lg:py-16">
        <Reveal y={100} opacityFrom={0} duration={3}>
          <h1 className="text-center text-4xl md:text-5xl lg:text-[52px] font-semibold mb-10 text-black arya-font">
            Your success starts with a conversation.
          </h1>
        </Reveal>
        <div className="w-full bg-[#F5F6F4] rounded-3xl shadow-sm p-10 mx-auto">
          <form ref={formRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Name */}
            <div>
              <label className="text-lg font-medium text-gray-800">
                First name <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-300 focus:border-black outline-none py-3 mt-2 bg-transparent"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="text-lg font-medium text-gray-800">
                Last name <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-300 focus:border-black outline-none py-3 mt-2 bg-transparent"
              />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="text-lg font-medium text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border-b border-gray-300 focus:border-black outline-none py-3 mt-2 bg-transparent"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-lg font-medium text-gray-800">
                Phone number <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                placeholder="+1 23456789"
                className="w-full border-b border-gray-300 focus:border-black outline-none py-3 mt-2 bg-transparent"
              />
            </div>

            {/* Business Revenue */}
            <div>
              <label className="text-lg font-medium text-gray-800">
                Annual Business Revenue{" "}
                <span className="text-orange-500">*</span>
              </label>
              <select className="w-full border-b border-gray-300 focus:border-black outline-none py-3 mt-2 bg-transparent">
                <option>Select</option>
                <option>$0 - $50,000</option>
                <option>$50,000 - $250,000</option>
                <option>$250,000 - $1M</option>
                <option>$1M+</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-6">
              <button
                type="submit"
                className="
                relative px-10 py-4 bg-primary text-white hover:text-primary font-bold text-lg rounded-xl 
                inline-flex items-center overflow-hidden group
                transition-colors duration-300
              "
              >
                <span className="relative z-10">Submit</span>

                {/* Creative Hover Animation */}
                <span
                  className="
                  absolute inset-0 bg-black 
                  translate-y-full group-hover:translate-y-0 
                  transition-transform duration-300
                "
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
