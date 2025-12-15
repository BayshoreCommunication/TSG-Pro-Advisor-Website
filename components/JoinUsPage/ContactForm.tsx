"use client";

import React, { useRef, useState, useEffect } from "react";
import Reveal from "../motion/Reveal";
import Swal from "sweetalert2";
import { send } from "emailjs-com";

type ContactFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  revenue: string;
};

type ContactFormErrors = Partial<ContactFormState>;

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

  const [emailForm, setEmailForm] = useState<ContactFormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    revenue: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEmailForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (values: ContactFormState): ContactFormErrors => {
    const errors: ContactFormErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstName) errors.firstName = "First name is required";
    if (!values.lastName) errors.lastName = "Last name is required";
    if (!values.email) errors.email = "Email is required";
    else if (!regex.test(values.email)) errors.email = "Invalid email format";
    if (!values.phone) errors.phone = "Phone number is required";
    if (!values.revenue) errors.revenue = "Revenue is required";

    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const errors = validate(emailForm);
    setFormErrors(errors);

    if (Object.keys(errors).length !== 0) {
      setLoading(false);
      return;
    }

    send("service_d3buqx8", "template_owon06b", emailForm, "3eLi7b-f8Niw8kjHI")
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "Thank you for reaching out. We will respond shortly.",
          confirmButtonColor: "#131b2a",
        });
        setEmailForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          revenue: "",
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          text: "Something went wrong! Please try again.",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full">
      <div className="max-w-[1640px] mx-auto px-8 py-10 lg:py-16">
        <Reveal y={100} opacityFrom={0} duration={3}>
          <h1 className="text-center text-4xl md:text-5xl lg:text-[52px] font-semibold mb-10">
            Your success starts with a conversation.
          </h1>
        </Reveal>

        <div className="bg-[#F5F6F4] rounded-3xl p-10">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <input
              name="firstName"
              placeholder="First name"
              onChange={(e) =>
                setEmailForm({
                  ...emailForm,
                  firstName: e.target.value,
                })
              }
              className="border-b py-3 bg-transparent"
            />

            {formErrors.firstName && (
              <span className="text-red-500 text-sm mt-1">
                {formErrors.firstName}
              </span>
            )}

            <input
              name="lastName"
              placeholder="Last name"
              onChange={(e) =>
                setEmailForm({
                  ...emailForm,
                  lastName: e.target.value,
                })
              }
              className="border-b py-3 bg-transparent"
            />
            {formErrors.lastName && (
              <span className="text-red-500 text-sm mt-1">
                {formErrors.lastName}
              </span>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email address"
              onChange={(e) =>
                setEmailForm({
                  ...emailForm,
                  email: e.target.value,
                })
              }
              className="md:col-span-2 border-b py-3 bg-transparent"
            />
            {formErrors.email && (
              <span className="text-red-500 text-sm mt-1">
                {formErrors.email}
              </span>
            )}
            <input
              name="phone"
              placeholder="Phone number"
              onChange={(e) =>
                setEmailForm({
                  ...emailForm,
                  phone: e.target.value,
                })
              }
              className="border-b py-3 bg-transparent"
            />
            {formErrors.phone && (
                  <span className="text-red-500 text-sm mt-1">
                    {formErrors.phone}
                  </span>
                )}

            <select
              name="revenue"
              onChange={(e) =>
                setEmailForm({
                  ...emailForm,
                  revenue: e.target.value,
                })
              }
              className="border-b py-3 bg-transparent"
            >
              {formErrors.revenue && (
                  <span className="text-red-500 text-sm mt-1">
                    {formErrors.revenue}
                  </span>
                )}
              <option value="">Select revenue</option>
              <option value="$0 - $50,000">$0 - $50,000</option>
              <option value="$50,000 - $250,000">$50,000 - $250,000</option>
              <option value="$250,000 - $1M">$250,000 - $1M</option>
              <option value="$1M+">$1M+</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 px-10 py-4 bg-primary text-white rounded-xl"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
