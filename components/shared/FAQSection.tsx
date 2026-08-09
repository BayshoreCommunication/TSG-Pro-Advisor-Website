"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import Reveal from "../motion/Reveal";

export type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const defaultFaqs: FAQItem[] = [
  {
    question: "What does a TSG ProAdvisor membership include?",
    answer:
      "Membership gives you access to Tax & Accounting Education, professional tax software, and our Business Mentorship Program, all in one platform designed to help you build or grow a tax and accounting business.",
  },
  {
    question: "Do I need prior tax or accounting experience to join?",
    answer:
      "No. TSG ProAdvisor is built for people from all backgrounds, including real estate agents, salespeople, teachers, insurance agents, stay-at-home parents, and seasoned tax professionals.",
  },
  {
    question: "Are the courses approved for IRS Continuing Education (CE) credits?",
    answer:
      "Yes. TSG ProAdvisor offers 100+ courses approved for IRS CE credits, so your training also counts toward your continuing education requirements.",
  },
  {
    question: "How does the Business Mentorship Program work?",
    answer:
      "You get direct access to experienced mentors who guide you step by step as you start or grow your tax and accounting business, from your first client to scaling your practice.",
  },
  {
    question: "Can I complete the training at my own pace?",
    answer:
      "Yes. Courses and resources are available 24/7, so you can learn on your own schedule, whether you're working full-time or building your practice part-time.",
  },
  {
    question: "I already run a tax practice. Is this still for me?",
    answer:
      "Yes. Whether you're starting a new tax business or improving an existing one, TSG ProAdvisor provides training, software, and mentorship to help you move forward with confidence.",
  },
  {
    question: "How do I become a member?",
    answer: (
      <>
        Visit{" "}
        <Link
          href="https://join.tsgproadvisor.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold underline underline-offset-2"
        >
          Join.TSGProAdvisor.com
        </Link>{" "}
        to explore membership options and get started.
      </>
    ),
  },
  {
    question: "Does TSG ProAdvisor host live events?",
    answer: (
      <>
        Yes. We regularly host workshops, bootcamps, and the annual Tax Pro
        Summit. Check the{" "}
        <Link href="/events" className="text-primary font-semibold underline underline-offset-2">
          Events page
        </Link>{" "}
        for what&apos;s coming up next.
      </>
    ),
  },
];

export default function FAQSection({
  faqs = defaultFaqs,
  dark = false,
}: {
  faqs?: FAQItem[];
  dark?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className={`w-full flex justify-center px-8 py-10 md:py-16 ${
        dark ? "bg-[#131313] text-white" : "bg-white text-[#0B0C0E]"
      }`}
    >
      <div className="max-w-[1000px] w-full">
        <Reveal y={100} opacityFrom={0} duration={3}>
          <h2 className="text-center text-4xl md:text-5xl lg:text-[52px] font-semibold mb-10 arya-font">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border p-5 lg:p-6 transition-colors ${
                  dark
                    ? "border-white/15 bg-white/5"
                    : "border-gray-200 bg-[#F8F8F8]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-lg font-bold">{faq.question}</span>
                  <FaChevronDown
                    className={`shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p
                    className={`mt-3 leading-7 ${
                      dark ? "text-white/80" : "text-gray-700"
                    }`}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
