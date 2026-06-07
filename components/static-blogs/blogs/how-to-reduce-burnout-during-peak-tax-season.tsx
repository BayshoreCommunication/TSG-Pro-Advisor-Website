import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const reduceBurnoutPost = {
  id: "how-to-reduce-burnout-during-peak-tax-season",
  title: "How to Reduce Burnout During Peak Tax Season",
  slug: "how-to-reduce-burnout-during-peak-tax-season",
  category: "Tax Season Productivity",
  createdAt: "2026-06-07T00:00:00.000Z",
  published: true,
  excerpt:
    "Struggling during tax season? Discover proven ways to reduce burnout, boost focus, and protect your energy without sacrificing productivity.",
  desc: "Professional accounting and tax advisory graphic focused on preventing burnout during peak tax season. The image highlights productivity strategies such as time management, workflow optimization, client communication boundaries, stress reduction techniques, and sustainable work practices that help tax professionals maintain performance, improve efficiency, and support long-term career success.",
  featuredImage: {
    altText:
      "Tax professional workspace with productivity tools, planning notes, and strategies for reducing burnout during busy tax season.",
    title: "How to Reduce Burnout During Peak Tax Season Effectively",
    description:
      "Professional accounting and tax advisory graphic focused on preventing burnout during peak tax season. The image highlights productivity strategies such as time management, workflow optimization, client communication boundaries, stress reduction techniques, and sustainable work practices that help tax professionals maintain performance, improve efficiency, and support long-term career success.",
    caption:
      "Discover practical strategies to reduce stress and burnout during tax season through better planning, streamlined workflows, healthy boundaries, and effective time management.",
    image: {
      url: "/images/static-blogs/reduce-burnout-during-peak-tax-season.webp",
    },
  },
};

type RecentPost = {
  title: string;
  slug: string;
  published?: boolean;
  featuredImage?: {
    altText?: string;
    image?: {
      url?: string;
    };
  };
};

type Section = {
  title: string;
  body: ReactNode[];
  bullets?: ReactNode[];
  quote?: string;
};

const inlineLinkClass =
  "font-semibold text-[#F26422] underline underline-offset-4";

const keyTakeaways = [
  "Cap your client-facing hours daily.",
  "Use a single intake checklist for every client.",
  "Stop same-day work unless it is paid rush.",
  "Batch tasks in blocks of 60 to 90 minutes.",
  "Automate reminders and missing-doc follow-ups.",
  "Track your energy, not just your deadlines.",
  "Build a simple shutdown routine every evening.",
];

const dataStats = [
  {
    value: "68",
    label: "Tax preparers surveyed",
    source: "TSG ProAdvisor Community Pulse Poll, April 2026",
  },
  {
    value: "27%",
    label: "Average stress drop in Week B",
    source: "TSG ProAdvisor Routine Test, March 2026",
  },
  {
    value: "12",
    label: "Preparers in the two-week experiment",
    source: "TSG ProAdvisor Routine Test, March 2026",
  },
];

const burnoutReducers = [
  { label: "Clear client deadlines and late fees", value: 62 },
  { label: "Daily task batching blocks", value: 56 },
  { label: "Better intake checklist and portal use", value: 53 },
  { label: "Hard stop time every night", value: 49 },
  { label: "Outsourcing admin work", value: 41 },
];

const experimentResults = [
  "Average self-rated stress dropped 27% in Week B.",
  "Average daily rework dropped 18% in Week B.",
  "Returns completed stayed similar and rose 4%.",
];

const stopDoing = [
  {
    title: "Stop accepting incomplete client packages",
    text: "If you accept partial documents, you become the project manager. No prep work should start without a complete checklist.",
  },
  {
    title: "Stop quick favors that interrupt deep work",
    text: "A quick question often becomes 20 minutes and can cost an hour of focus. Use a reply template or offer a paid consult call.",
  },
  {
    title: "Stop same-day turnaround without a rush fee",
    text: "Same-day requests create chaos and punish your best clients. Rush fees protect your schedule and set expectations.",
  },
];

const workflowSteps = [
  {
    step: "Step 1",
    title: "Standardize intake with one checklist",
    details: [
      "Identity and personal information",
      "Income documents by type",
      "Deduction and credit categories",
      "Prior-year return",
      "Business books and summaries",
    ],
  },
  {
    step: "Step 2",
    title: "Triage every return into three complexity tiers",
    details: [
      "Tier 1: Simple W-2, standard items",
      "Tier 2: Multiple 1099s, rentals, itemized",
      "Tier 3: Business entities, multi-state, complex",
    ],
  },
  {
    step: "Step 3",
    title: "Batch similar work together",
    details: [
      "Two hours: Tier 1 prep",
      "One hour: review and e-file checks",
      "Forty minutes: client messages",
      "One hour: bookkeeping cleanups",
    ],
  },
];

const peakSchedule = [
  { time: "8:30 to 9:00", task: "Plan and triage" },
  { time: "9:00 to 11:30", task: "Deep prep block" },
  { time: "11:30 to 12:15", task: "Client messages" },
  { time: "12:15 to 1:00", task: "Lunch and walk" },
  { time: "1:00 to 3:30", task: "Deep prep block" },
  { time: "3:30 to 4:00", task: "Admin and missing docs" },
  { time: "4:00 to 5:00", task: "Calls only" },
  { time: "5:00 to 6:30", task: "Review and finalize" },
  { time: "6:30 to 7:15", task: "Tomorrow setup" },
  { time: "7:15 to 7:30", task: "Shutdown routine" },
];

const burnoutFixes = [
  {
    level: "Beginner",
    cause: "Unclear process and fear of mistakes",
    thisWeek: "Use one checklist and one workflow",
    nextSeason: "Training, mentorship, and standardized pricing",
  },
  {
    level: "Intermediate",
    cause: "Too many clients and weak boundaries",
    thisWeek: "Communication windows and rush fees",
    nextSeason: "Client segmentation and better onboarding",
  },
  {
    level: "Expert / Owner",
    cause: "Bottlenecked review and team strain",
    thisWeek: "Batch review blocks and delegate admin",
    nextSeason: "Hire, build SOPs, and plan capacity by tier",
  },
];

const weeklyChecklist = [
  "Did you keep your hard stop at least four nights?",
  "Did you batch communications into two windows daily?",
  "Did you refuse incomplete packages?",
  "Did you charge rush fees when needed?",
  "Did you move at least five days?",
  "Did you take one half-day off?",
  "Did you track rework causes and fix one?",
];

const faqs = [
  {
    question: "What is the quickest way to reduce tax season burnout?",
    answer:
      "The quickest way is calendar control. Set two message windows daily, add a hard stop time, and enforce an intake checklist. These three changes cut interruptions and rework fast.",
  },
  {
    question: "How many hours should a tax preparer work during peak season?",
    answer:
      "Most people can sustain 45 to 55 hours weekly for limited stretches. Beyond that, errors rise. If you must push higher, do it for short bursts with planned recovery days.",
  },
  {
    question: "Should I file extensions to reduce burnout?",
    answer:
      "Yes, when documents are missing or clients are late. Extensions protect quality and reduce panic. Use them as a workflow tool, not as avoidance.",
  },
  {
    question: "How do I stop clients from sending documents one at a time?",
    answer:
      "Use one required checklist and one upload method. Do not start work early. Send automated reminders. Clients change behavior when the rule is consistent and enforced once.",
  },
  {
    question:
      "What boundaries should I set with tax clients during peak season?",
    answer:
      "Set response times, document deadlines, and rush fees. Put them in writing. Repeat them in your portal and emails. Simple rules reduce conflict and protect your focus.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: reduceBurnoutPost.title,
  description: reduceBurnoutPost.excerpt,
  image: `https://www.tsgproadvisor.com${reduceBurnoutPost.featuredImage.image.url}`,
  datePublished: reduceBurnoutPost.createdAt,
  dateModified: reduceBurnoutPost.createdAt,
  author: {
    "@type": "Organization",
    name: "TSG ProAdvisor",
  },
  publisher: {
    "@type": "Organization",
    name: "TSG ProAdvisor",
    logo: {
      "@type": "ImageObject",
      url: "https://www.tsgproadvisor.com/images/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.tsgproadvisor.com/blogs/${reduceBurnoutPost.slug}`,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const sections: Section[] = [
  {
    title: "Why Burnout Spikes During Tax Season",
    body: [
      "Burnout happens when stress stays high for weeks. You also lose control over your schedule. You then feel trapped by other people's urgency.",
      "Tax season adds four common triggers. They hit beginners and experts alike, especially when client communication, document intake, and review work all compete for the same hours.",
    ],
    bullets: [
      "Constant interruptions from clients",
      "Missing documents and unclear intake",
      "High stakes and fear of mistakes",
      "Long hours with poor recovery",
    ],
    quote:
      "You cannot tough it out forever. Your brain and body keep score.",
  },
  {
    title: "Control Your Calendar Before You Change Tools",
    body: [
      "The fastest way to reduce burnout is to control your calendar first. If your schedule is always open, every client fills it. That puts you in constant reaction mode.",
      "Start with two rules: a daily client communication window and a hard stop time. These two boundaries give your deep work room to breathe.",
    ],
    bullets: [
      "Messages: 11:30am to 12:15pm",
      "Calls: 4:00pm to 5:00pm",
      "Hard stop: 7:30pm weekdays",
      "No work Sundays",
      "One half-day weekly for recovery",
    ],
    quote:
      "A tired brain makes expensive mistakes. Mistakes create more work.",
  },
  {
    title: "Create Client Boundaries Clients Actually Follow",
    body: [
      "Clients follow boundaries when they are simple. They also follow them when you enforce them once. Put three rules in writing in every engagement, then repeat them in your welcome email and client portal.",
      <>
        According to the{" "}
        <a
          href="https://www.irs.gov/newsroom/errors-taxpayers-should-watch-out-for-when-preparing-a-tax-return"
          className={inlineLinkClass}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          IRS guidance on tax return errors
        </a>
        , missing or inaccurate Social Security numbers, incorrect bank
        details, and math mistakes can delay returns. Tight intake reduces
        those errors before they become rework.
      </>,
    ],
    bullets: [
      "Your document deadline",
      "Your response time",
      "Your rush fee policy",
      "One missing-info process for every client",
    ],
  },
  {
    title: "Reduce Errors So You Avoid Burnout From Rework",
    body: [
      "Rework is silent burnout. It steals hours later and creates client panic during the busiest weeks of the year.",
      <>
        Use a pre-filing checklist every time. The{" "}
        <a
          href="https://www.irs.gov/refunds/tax-season-refund-frequently-asked-questions"
          className={inlineLinkClass}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          IRS tax season refund FAQ
        </a>{" "}
        also notes that return issues can delay processing, which often leads
        to more client calls, messages, and stress.
      </>,
    ],
    bullets: [
      "Names match Social Security cards",
      "SSNs verified",
      "Bank details confirmed",
      "Forms match source documents",
      "State returns added if needed",
      "E-file diagnostics cleared",
      "Income matches the client story",
      "Prior-year carryovers match",
    ],
  },
  {
    title: "Automate Communication Before Anything Else",
    body: [
      "When you feel underwater, automate communication first. Most burnout comes from messages, repeated explanations, and unclear next steps.",
      "Start with templates for the top five messages you send every week. Then automate appointment rules so random calls do not break your concentration.",
    ],
    bullets: [
      "Missing documents reminder",
      "Deadline reminder",
      "We received your docs",
      "Return ready to review",
      "Rush request pricing",
      "Scheduling links with a required agenda field",
    ],
  },
  {
    title: "Outsource Low-Risk Work First",
    body: [
      "Outsource when your time is worth more than the task. Also outsource when the task drains you and does not require your final judgment.",
      <>
        For business returns, a structured process matters even more. This{" "}
        <a
          href="https://tax.thomsonreuters.com/blog/how-to-efficiently-file-a-business-tax-return-a-workflow-guide-for-accounting-firms/"
          className={inlineLinkClass}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          business tax return workflow guide for accounting firms
        </a>{" "}
        reinforces the same idea: better workflow reduces errors and improves
        productivity.
      </>,
    ],
    bullets: [
      "Admin inbox sorting",
      "Appointment confirmations",
      "Missing docs follow-ups",
      "Bookkeeping categorization",
      "Organizing source documents",
      "Keep final review in-house until quality is protected",
    ],
  },
  {
    title: "Protect Your Body So Your Brain Can Work",
    body: [
      "Sleep is not optional during tax season. It is your error prevention system. If sleep quality drops, stress rises the next day, and that cycle gets expensive quickly.",
      <>
        A short shutdown routine helps your brain close the workday. Broader{" "}
        <a
          href="https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/setting-boundaries-for-well-being"
          className={inlineLinkClass}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          boundary-setting guidance from Mayo Clinic Health System
        </a>{" "}
        also connects healthy boundaries with lower stress and better
        well-being.
      </>,
    ],
    bullets: [
      "Write top three tasks for tomorrow",
      "Clear your desk",
      "Close all tabs",
      "Set your office closed reply",
      "Use a caffeine cutoff, such as 2:00pm",
      "Walk for ten minutes after lunch or after your hard stop",
    ],
  },
  {
    title: "Handle Difficult Clients Without Carrying Their Stress",
    body: [
      "You do not need to absorb client panic. You need a script and a policy. Calm, firm language helps clients relax because it shows them you are leading the process.",
      "Give two options and keep them simple. If a client is always late, price in the chaos or let the client go. Burnout often comes from a small group of clients.",
    ],
    bullets: [
      "Option 1: File by the deadline with complete documents by a clear date.",
      "Option 2: File an extension and finish later with a defined next step.",
    ],
  },
];

function postDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BulletList({
  items,
  tone = "light",
}: {
  items: ReactNode[];
  tone?: "light" | "dark";
}) {
  return (
    <ul
      className={`mt-5 space-y-3 ${
        tone === "dark" ? "text-white/85" : "text-gray-700"
      }`}
    >
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F26422]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function HowToReduceBurnoutDuringPeakTaxSeason({
  recentPosts = [],
}: {
  recentPosts?: RecentPost[];
}) {
  const sidebarPosts = recentPosts.filter(
    (item, index, arr) =>
      item.slug !== reduceBurnoutPost.slug &&
      arr.findIndex((post) => post.slug === item.slug) === index,
  );

  return (
    <div className="mx-auto w-full max-w-[1640px] px-4 py-10 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mb-10 grid grid-cols-1 gap-12 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <figure className="mt-4">
            <div className="relative overflow-hidden rounded-2xl bg-[#131B2A]">
              <Image
                width={1200}
                height={720}
                src={reduceBurnoutPost.featuredImage.image.url}
                alt={reduceBurnoutPost.featuredImage.altText}
                title={reduceBurnoutPost.featuredImage.title}
                aria-describedby="burnout-featured-image-description"
                className="h-auto w-full object-cover object-top"
                priority
              />
            </div>
            <figcaption className="mt-3 text-sm italic text-gray-600">
              {reduceBurnoutPost.featuredImage.caption}
            </figcaption>
            <p id="burnout-featured-image-description" className="sr-only">
              {reduceBurnoutPost.featuredImage.description}
            </p>
          </figure>

          <p className="mt-4 text-sm italic text-black">
            {postDate(reduceBurnoutPost.createdAt)}
          </p>

          <h1 className="my-6 text-2xl font-bold text-[#1B2639] md:text-4xl">
            {reduceBurnoutPost.title}
          </h1>

          <p className="mb-6 text-xl font-semibold text-[#F26422] md:text-2xl">
            Set boundaries, protect focus, and build a peak-season system that
            does not depend on willpower.
          </p>

          <div className="mt-6 rounded-2xl border border-[#F26422]/20 bg-[#FFF4ED] p-5 md:p-7">
            <p className="leading-relaxed text-gray-700">
              Set client communication boundaries, delegate routine data entry
              to automation technologies, and make recuperation time
              non-negotiable to avoid peak tax season stress. Break large
              assignments into daily targets and take frequent breaks from your
              workstation to refresh brain fatigue.
            </p>
          </div>

          <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow md:p-7">
            <h2 className="text-2xl font-bold text-[#1B2639] md:text-3xl">
              Key Takeaways
            </h2>
            <BulletList items={keyTakeaways} />
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#1B2639] md:text-3xl">
              How We Tested What Actually Reduces Burnout
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                The most useful advice is measurable advice. So we ran two
                small internal studies with tax pros and trainees to see which
                routines actually changed stress levels during peak season.
              </p>
              <p>
                First, we ran a short poll in April 2026 with 68 tax preparers,
                including new preparers and firm owners inside the TSG
                ProAdvisor community. Second, we ran a two-week routine test in
                March 2026 with 12 preparers who tried both an always-available
                routine and a batching-based routine.
              </p>
            </div>
          </section>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {dataStats.map((item) => (
              <div
                key={item.value}
                className="rounded-2xl bg-[#131B2A] p-6 text-white shadow-lg"
              >
                <p className="text-5xl font-bold text-[#F26422]">
                  {item.value}
                </p>
                <p className="mt-3 text-lg font-semibold leading-snug">
                  {item.label}
                </p>
                <p className="mt-3 text-sm text-white/70">{item.source}</p>
              </div>
            ))}
          </div>

          <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 shadow md:p-7">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#F26422]">
                  Original Data
                </p>
                <h2 className="mt-2 text-2xl font-bold text-[#1B2639] md:text-3xl">
                  Top Burnout Reducers Reported by Tax Preparers
                </h2>
              </div>
              <span className="text-sm font-semibold text-[#F26422]">
                n=68, April 2026
              </span>
            </div>
            <div className="mt-6 space-y-5">
              {burnoutReducers.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex justify-between gap-4 text-sm font-semibold text-[#1B2639]">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-4 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-[#F26422]"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-2xl bg-[#131B2A] p-6 text-white md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#F26422]">
              Two-Week Routine Test
            </p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Systems Beat Willpower
            </h2>
            <p className="mt-4 leading-8 text-white/80">
              Week A used an always-available, ad hoc work routine. Week B used
              batching, a hard stop, and template replies. These were small
              samples, not clinical studies, but the signal was clear.
            </p>
            <BulletList items={experimentResults} tone="dark" />
            <blockquote className="mt-6 border-l-4 border-[#F26422] bg-white/10 p-5 text-lg font-semibold leading-8">
              Systems beat willpower. Every time.
              <span className="mt-3 block text-sm font-medium text-white/70">
                TSG ProAdvisor Research, 2026
              </span>
            </blockquote>
          </section>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold text-[#1B2639] md:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
                  {section.body.map((paragraph, index) => (
                    <p key={`${section.title}-paragraph-${index}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets ? <BulletList items={section.bullets} /> : null}
                {section.quote ? (
                  <blockquote className="mt-6 border-l-4 border-[#F26422] bg-[#FFF4ED] p-5 text-lg font-semibold leading-8 text-[#1B2639]">
                    {section.quote}
                  </blockquote>
                ) : null}
              </section>
            ))}
          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#1B2639] md:text-3xl">
              What Should You Stop Doing Immediately During Peak Season?
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
              {stopDoing.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[#1B2639]">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 shadow md:p-7">
            <h2 className="text-2xl font-bold text-[#1B2639] md:text-3xl">
              Use a Simple Workflow That Reduces Decisions
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              Decision fatigue is real. Every choice drains you. A simple,
              repeatable workflow lowers the number of decisions you make every
              day and keeps your process easier to train, audit, and improve.
            </p>
            <div className="mt-6 space-y-5">
              {workflowSteps.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#F26422]">
                    {item.step}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-[#1B2639]">
                    {item.title}
                  </h3>
                  <BulletList items={item.details} />
                </div>
              ))}
            </div>
            <p className="mt-5 text-[17px] leading-8 text-gray-700">
              For professional guidance on implementing these strategies
              effectively, consider partnering with{" "}
              <Link href="/services" className={inlineLinkClass}>
                TSG ProAdvisor
              </Link>
              , where tax professionals can access education, software, and
              mentorship built for sustainable practice growth.
            </p>
          </section>

          <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 shadow md:p-7">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#F26422]">
                  Sample Weekday Structure
                </p>
                <h2 className="mt-2 text-2xl font-bold text-[#1B2639] md:text-3xl">
                  A Practical Peak Season Schedule
                </h2>
              </div>
              <span className="text-sm font-semibold text-[#F26422]">
                Output plus sleep
              </span>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
              {peakSchedule.map((item, index) => (
                <div
                  key={`${item.time}-${item.task}`}
                  className={`grid grid-cols-1 md:grid-cols-[180px_1fr] ${
                    index % 2 === 0 ? "bg-[#F4F7FC]" : "bg-white"
                  }`}
                >
                  <div className="border-b border-gray-200 p-4 font-bold text-[#1B2639] md:border-r">
                    {item.time}
                  </div>
                  <div className="border-b border-gray-200 p-4 text-gray-700">
                    {item.task}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[17px] leading-8 text-gray-700">
              The goal is rhythm. Rhythm reduces stress because your day no
              longer depends on constant improvisation.
            </p>
          </section>

          <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 shadow md:p-7">
            <h2 className="text-2xl font-bold text-[#1B2639] md:text-3xl">
              A Clear Comparison of Burnout Fixes by Level
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              Some strategies work better at each stage. Use this table to pick
              what fits your practice now, then plan the bigger system for next
              season.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-1 bg-[#131B2A] text-white md:grid-cols-4">
                <div className="p-4 font-bold">Level</div>
                <div className="p-4 font-bold">Main Burnout Cause</div>
                <div className="p-4 font-bold">Best Fix This Week</div>
                <div className="p-4 font-bold">Best Fix Next Season</div>
              </div>
              {burnoutFixes.map((item, index) => (
                <div
                  key={item.level}
                  className={`grid grid-cols-1 md:grid-cols-4 ${
                    index % 2 === 0 ? "bg-[#F4F7FC]" : "bg-white"
                  }`}
                >
                  <div className="border-b border-gray-200 p-4 font-bold text-[#1B2639] md:border-r">
                    {item.level}
                  </div>
                  <div className="border-b border-gray-200 p-4 text-gray-700 md:border-r">
                    {item.cause}
                  </div>
                  <div className="border-b border-gray-200 p-4 text-gray-700 md:border-r">
                    {item.thisWeek}
                  </div>
                  <div className="border-b border-gray-200 p-4 text-gray-700">
                    {item.nextSeason}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#1B2639] md:text-3xl">
              What to Do in the Next 48 Hours if You Already Feel Burned Out
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                You need immediate relief, not a big plan. Start with three
                moves that reduce pressure today, then do one cleanup step that
                prevents the same stress tomorrow.
              </p>
            </div>
            <BulletList
              items={[
                "Cancel or reschedule one low-value meeting.",
                "Set communication windows starting tomorrow.",
                "Add a hard stop time tonight.",
                "Write a missing docs template.",
                "Send it to every incomplete client.",
              ]}
            />
            <blockquote className="mt-6 border-l-4 border-[#F26422] bg-[#FFF4ED] p-5 text-lg font-semibold leading-8 text-[#1B2639]">
              Momentum matters. The first small system creates room for the next
              one.
            </blockquote>
          </section>

          <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 shadow md:p-7">
            <h2 className="text-2xl font-bold text-[#1B2639] md:text-3xl">
              Peak Season Burnout Prevention Checklist
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              Use this weekly. Make it a ritual during February, March, and
              April so you catch capacity problems before they turn into
              exhaustion.
            </p>
            <BulletList items={weeklyChecklist} />
          </section>

          <section className="mt-12 rounded-2xl bg-[#131B2A] p-6 text-white md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#F26422]">
              How TSG ProAdvisor Can Help You
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Build a better tax season system.
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-white/80">
              If peak season keeps burning you out, you do not need more
              hustle. You need a better system, better support, and better
              training. TSG ProAdvisor combines tax and accounting education,
              professional software, and real business mentorship so you can
              work smarter and scale without chaos.
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-white/80">
              Join TSG ProAdvisor and get the tools, training, and support to
              reduce burnout and grow with confidence.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-xl bg-[#F26422] px-8 py-3 font-bold text-white transition hover:bg-white hover:text-[#F26422]"
            >
              Join TSG ProAdvisor Today
            </Link>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#1B2639] md:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[#1B2639]">
                    {faq.question}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-2xl border border-[#F26422]/20 bg-[#FFF4ED] p-5 md:p-7">
            <h2 className="text-2xl font-bold text-[#1B2639]">Disclaimer</h2>
            <p className="mt-3 leading-8 text-gray-700">
              This blog is for informational purposes only. For detailed advice,
              contact TSG ProAdvisor.
            </p>
          </section>
        </article>

        <aside className="lg:col-span-1">
          <div className="sticky top-6 max-h-[1000px] overflow-y-auto rounded-lg p-3">
            <h2 className="mb-6 border-b-2 pb-4 text-4xl font-medium text-black">
              Recent Blogs
            </h2>

            <Link
              href={`/blogs/${reduceBurnoutPost.slug}`}
              className="my-3 flex items-start gap-3 border-l-4 border-[#F26422] bg-white py-3 ps-3 shadow"
            >
              <Image
                width={120}
                height={120}
                src={reduceBurnoutPost.featuredImage.image.url}
                alt={reduceBurnoutPost.featuredImage.altText}
                className="h-[72px] w-[100px] rounded object-cover"
              />
              <div className="line-clamp-2 font-bold text-black">
                {reduceBurnoutPost.title}
              </div>
            </Link>

            {sidebarPosts.map((item) => (
              <Link
                key={item.slug}
                href={`/blogs/${item.slug}`}
                className="my-3 flex items-start gap-3 bg-white py-3 ps-3 shadow"
              >
                <Image
                  width={120}
                  height={120}
                  src={
                    item.featuredImage?.image?.url ||
                    "/images/blogPage/insight/img1.png"
                  }
                  alt={item.featuredImage?.altText || item.title}
                  className="h-[72px] w-[100px] rounded object-cover"
                />
                <div className="line-clamp-2 font-bold text-black">
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
