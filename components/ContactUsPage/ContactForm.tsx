"use client";

import { send } from "emailjs-com";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import Reveal from "../motion/Reveal";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  consentTaxIndustry: string;
  consentMarketing: string;
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
    consentTaxIndustry: "No",
    consentMarketing: "No",
  });
  const [consentTaxIndustry, setConsentTaxIndustry] = useState(false);
  const [consentMarketing, setConsentMarketing] = useState(false);

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

  const validate = (values: ContactFormState): ContactFormErrors => {
    const errors: ContactFormErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) errors.name = "Name is required!";
    if (!values.email) errors.email = "Email is required!";
    else if (!regex.test(values.email)) errors.email = "Invalid email format!";
    if (!values.phone) errors.phone = "Phone number is required!";
    if (!values.message) errors.message = "Message is required!";

    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const payload: ContactFormState = {
      ...emailForm,
      consentTaxIndustry: consentTaxIndustry ? "Yes" : "No",
      consentMarketing: consentMarketing ? "Yes" : "No",
    };

    const errors = validate(payload);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      send("service_d3buqx8", "template_dc4qdns", payload, "3eLi7b-f8Niw8kjHI")
        .then(() => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            text: "Thank you for reaching out. We will respond shortly.",
            confirmButtonColor: "#131b2a",
            customClass: {
              confirmButton: "swal-brand-confirm",
            },
          }).then(() => {
            setEmailForm({
              name: "",
              email: "",
              phone: "",
              message: "",
              consentTaxIndustry: "No",
              consentMarketing: "No",
            });
            setConsentTaxIndustry(false);
            setConsentMarketing(false);
          });
        })
        .catch((err) => {
          console.error("Email error:", err);
          setLoading(false);
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
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-white lg:h-full">
            <div className="group absolute inset-0">
              <Image
                src="/images/contactPage/contact-page.png"
                alt="Contact Preview"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

            <div className="absolute bottom-0 z-10 flex flex-col gap-6 p-7 lg:p-10">
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
          <div className="h-full rounded-2xl border border-gray-200 bg-white p-7 lg:p-10">
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

              <div className="flex flex-col gap-3">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={consentTaxIndustry}
                    onChange={(e) => setConsentTaxIndustry(e.target.checked)}
                    className="mt-1"
                  />
                  <span className="text-sm text-gray-700">
                    By checking this box, I consent to receive non-marketing SMS
                    messages from 10XTAXPRO dba TSG Pro Advisor regarding
                    service-related notifications, account updates, appointment
                    reminders, and support communications. Message frequency may
                    vary. Message & data rates may apply. Reply STOP to opt out
                    or HELP for assistance.
                  </span>
                </label>

                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={consentMarketing}
                    onChange={(e) => setConsentMarketing(e.target.checked)}
                    className="mt-1"
                  />
                  <span className="text-sm text-gray-700">
                    By checking this box, I consent to receive marketing and
                    promotional messages including special offers, discounts,
                    new product updates among others from 10XTAXPRO DBA
                    TSGProAdvisor at the phone number provided. Frequency may
                    vary. Message & data rates may apply. Text HELP for
                    assistance, reply STOP to opt out.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full
    bg-black text-white font-semibold py-3 rounded-xl
    transition
    ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}
  `}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <p className="text-sm text-gray-600 text-center">
                <a
                  href="https://join.tsgproadvisor.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black"
                >
                  Privacy Policy
                </a>{" "}
                |{" "}
                <a
                  href="https://join.tsgproadvisor.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black"
                >
                  Terms of Service
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
