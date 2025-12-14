"use client";

import React, { useRef } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import { sendForm } from "emailjs-com";
import Swal from "sweetalert2";
import Reveal from "../motion/Reveal";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useState,useEffect } from "react";
import { send } from "emailjs-com";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactFormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};
const ContactPage = () => {
  const [showTitleOne, setShowTitleOne] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTitleOne((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [emailForm, setEmailForm] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

  const validate = (values: ContactFormState): ContactFormErrors => {
    const errors: ContactFormErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) errors.name = "Name is required!";
    if (!values.email) errors.email = "Email is required!";
    else if (!regex.test(values.email)) errors.email = "Invalid email format!";
    if (!values.phone) errors.phone = "Phone number is required!";
    // if (!values.date) errors.date = "Date is required!";
    if (!values.message) errors.message = "Message is required!";

    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const errors = validate(emailForm);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      send(
        "service_6x5cpjm",
        "template_g8p45zg",
        emailForm,
        "hs3WVDN7AYB4zTkhu"
      )
        .then(() => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            text: "Thank you for reaching out. We will respond shortly.",
            confirmButtonColor: "#131b2a",
          }).then(() => {
            setEmailForm({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
          });
        })
        .catch((err) => {
          console.error("Email error:", err);
          setLoading(false);
          Swal.fire({
            icon: "error",
            text: "Something went wrong! Please try again.",
          });
        });
    } else {
      setLoading(false);
    }
  };

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
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  onChange={(e) =>
                    setEmailForm({
                      ...emailForm,
                      name: e.target.value,
                    })
                  }
                  placeholder="Your name"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none"
                />
                {formErrors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    {formErrors.name}
                  </span>
                )}
                <input
                  type="text"
                  name="phone"

                  onChange={(e) =>
                    setEmailForm({
                      ...emailForm,
                      phone: e.target.value,
                    })
                  }
                  placeholder="Phone number"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none"
                />
                {formErrors.phone && (
                  <span className="text-red-500 text-sm mt-1">
                    {formErrors.phone}
                  </span>
                )}
              </div>

              <input
                type="email"
                name="email"
                onChange={(e) =>
                    setEmailForm({
                      ...emailForm,
                      email: e.target.value,
                    })
                  }
                placeholder="Your email"
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none"
              />
              {formErrors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {formErrors.email}
                </span>
              )}
              <textarea
                name="message"
                placeholder="Message"
                onChange={(e) =>
                    setEmailForm({
                      ...emailForm,
                      message: e.target.value,
                    })
                  }

                className="border border-gray-300 rounded-xl px-4 py-3 h-40 focus:outline-none resize-none"
              ></textarea>
              {formErrors.message && (
                <span className="text-red-500 text-sm mt-1">
                  {formErrors.message}
                </span>
              )}
              

              {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className={`bg-[#F97316] text-white font-semibold py-3 rounded-xl hover:bg-[#EA580C] transition"
 ${
                        loading
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-orange-400"
                      }`}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
