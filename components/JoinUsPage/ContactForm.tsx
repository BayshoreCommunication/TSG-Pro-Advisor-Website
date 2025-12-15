"use client";

import React, { useRef } from "react";
import Reveal from "../motion/Reveal";
import Swal from "sweetalert2";
import { send } from "emailjs-com";
import { useState, useEffect } from "react";

type ContactFormState = {
  firstname: string;
  lastName: string;
  email: string;
  phone: string;
  revenue: string;
};

type ContactFormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  revenue?: string;
};

const ContactPage = () => {
  const formRef = useRef(null);

  const [showTitleOne, setShowTitleOne] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTitleOne((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [emailForm, setEmailForm] = useState<ContactFormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    revenue: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

  const validate = (values: ContactFormState): ContactFormErrors => {
    const errors: ContactFormErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstName) errors.firstName = "First Name is required!";
    if (!values.lastName) errors.lastName = "Last Name is required!";
    if (!values.email) errors.email = "Email is required!";
    else if (!regex.test(values.email)) errors.email = "Invalid email format!";
    if (!values.phone) errors.phone = "Phone number is required!";
    if (!values.revenue) errors.revenue = "Date is required!";
    // if (!values.message) errors.message = "Message is required!";

    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const errors = validate(emailForm);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      send(
        "service_d3buqx8",
        "template_dc4qdns",
        emailForm,
        "3eLi7b-f8Niw8kjHI"
      )
        .then(() => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            text: "Thank you for reaching out. We will respond shortly.",
            confirmButtonColor: "#131b2a",
          }).then(() => {
            setEmailForm({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              revenue: "",
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
                name="firstName"
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
                name="lastName"
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
                name="email"
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
                name="phone"
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
              <select
                name="revenue" // <-- Add this name
                className="w-full border-b border-gray-300 focus:border-black outline-none py-3 mt-2 bg-transparent"
                required
              >
                <option value="">Select</option>
                <option value="$0 - $50,000">$0 - $50,000</option>
                <option value="$50,000 - $250,000">$50,000 - $250,000</option>
                <option value="$250,000 - $1M">$250,000 - $1M</option>
                <option value="$1M+">$1M+</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-6">
              <button
                type="submit"
                disabled={loading}
                className="
                relative px-10 py-4 bg-primary text-white hover:text-primary font-bold text-lg rounded-xl 
                inline-flex items-center overflow-hidden group
                transition-colors duration-300
              "
              >
                <span className="relative z-10">
                  {loading ? "Submitting..." : "Submit"}
                </span>

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
