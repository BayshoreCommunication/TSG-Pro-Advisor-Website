"use client";

import React, { useRef } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Reveal from "../motion/Reveal";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const formRef = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm(
  //         "YOUR_SERVICE_ID", // <-- replace
  //         "YOUR_TEMPLATE_ID", // <-- replace
  //         formRef.current,
  //         "YOUR_PUBLIC_KEY" // <-- replace
  //       )
  //       .then(
  //         () => {
  //           Swal.fire({
  //             icon: "success",
  //             title: "Message Sent!",
  //             text: "We have received your message.",
  //             confirmButtonColor: "#F97316",
  //           });
  //           formRef.current.reset();
  //         },
  //         () => {
  //           Swal.fire({
  //             icon: "error",
  //             title: "Oops...",
  //             text: "Something went wrong. Try again!",
  //             confirmButtonColor: "#F97316",
  //           });
  //         }
  //       );
  //   };

  return (
    <div className="w-full  bg-[#F5F6F4]">
      <div className=" max-w-[1640px] mx-auto px-8 w-full py-10 lg:py-16">
        <Reveal y={100} opacityFrom={0} duration={3}>
        <h1 className="text-center text-4xl md:text-5xl lg:text-[52px] font-semibold mb-10 text-black arya-font">
          Your success starts with a conversation.
        </h1>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT SIDE */}
          <div className="bg-white rounded-2xl overflow-hidden  relative">
            <div className=" w-full ">
              <Image
                src="/images/contactPage/contact-page.png" // your uploaded image
                alt="Contact Preview"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-0 p-7 lg:p-10 flex flex-col gap-6">
              {/* ADDRESS */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex justify-center items-center bg-white shrink-0">
                  <FaMapMarkerAlt className="text-[#EA580C] text-xl" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Address</p>
                  <p className="text-base lg:text-lg font-semibold text-white leading-tight">
                    1211 Tech Blvd Suite 120, Tampa, FL 33619
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex justify-center items-center bg-white shrink-0">
                  <FaPhoneAlt className="text-[#EA580C] text-xl" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Phone Number</p>
                  <p className="text-base lg:text-lg font-semibold text-white">
                    (833) 874-7767
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex justify-center items-center bg-white shrink-0">
                  <FaEnvelope className="text-[#EA580C] text-xl" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-base lg:text-lg font-semibold text-white break-all">
                    Memberservices@Tsgproadvisor.Com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – CONTACT FORM */}
          <div className="bg-white rounded-2xl p-7 lg:p-10  border border-gray-200">
            <h2 className="text-4xl font-semibold mb-8 text-black">
              Connect With Us
            </h2>

            {/* <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-5"
          > */}
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none"
              />

              <textarea
                name="message"
                placeholder="Message"
                required
                className="border border-gray-300 rounded-xl px-4 py-3 h-40 focus:outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-[#F97316] text-white font-semibold py-3 rounded-xl hover:bg-[#EA580C] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
