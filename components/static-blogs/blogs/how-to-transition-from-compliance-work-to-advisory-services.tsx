"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";

export const transitionComplianceToAdvisoryPost = {
  id: "how-to-transition-from-compliance-work-to-advisory-services",
  title: "How to Transition from Compliance Work to Advisory Services",
  slug: "how-to-transition-from-compliance-work-to-advisory-services",
  category: "Business Advisory",
  createdAt: "2026-06-15T00:00:00.000Z",
  published: true,
  excerpt:
    "Learn how to move beyond compliance reporting and become a trusted advisor through strategic insights and business guidance.",
  desc: "Professional business advisory graphic illustrating the shift from compliance-focused services to strategic advisory solutions. Highlights business performance analysis, client relationship growth, profitability insights, strategic planning, and value-added consulting for accounting and financial professionals.",
  featuredImage: {
    altText:
      "Business advisor presenting performance dashboards and growth strategies for transitioning from compliance work to advisory services",
    image: {
      url: "/images/static-blogs/compliance-to-advisory-services-business-growth.webp",
    },
  },
};

type RecentPost = {
  title: string;
  slug: string;
  featuredImage?: {
    altText?: string;
    image?: {
      url?: string;
    };
  };
};

const inlineLinkClass = "font-semibold text-[#F26422] underline underline-offset-4";

const stats = [
  {
    value: "73%",
    label: "Clients pay more for proactive tax planning",
  },
  {
    value: "62%",
    label: "Stressed by unexpected tax bills",
  },
  {
    value: "59%",
    label: "Want monthly 'what to do next' guidance",
  },
  {
    value: "68%",
    label: "Prefer 30-min call + action list",
  },
];

const keyTakeaways = [
  "Keep compliance. Add advisory as an upgrade.",
  "Start with one niche and one offer.",
  "Sell outcomes. Not hours.",
  "Use monthly meetings and a simple dashboard.",
  "Standardize delivery, then scale it.",
  "Train your advisory skills like a system.",
];

const keyDifferences = [
  {
    area: "Client value",
    compliance: "Accuracy and timeliness",
    advisory: "Better decisions and results",
  },
  {
    area: "Client question",
    compliance: '"Is this filed?"',
    advisory: '"What should we do next?"',
  },
  {
    area: "Pricing",
    compliance: "Per form or per hour",
    advisory: "Package or retainer",
  },
  {
    area: "Scope",
    compliance: "Defined by rules",
    advisory: "Defined by business goals",
  },
  {
    area: "Delivery",
    compliance: "Seasonal spikes",
    advisory: "Monthly rhythm",
  },
  {
    area: "Success metric",
    compliance: "Clean return and clean books",
    advisory: "Cash runway, profit, taxes saved",
  },
];

const advisorySolves = [
  {
    problem: "Cash is tight",
    solution: "Map a 13-week cash plan",
  },
  {
    problem: "Taxes are a surprise",
    solution: "Build quarterly planning",
  },
  {
    problem: "Profit looks fine but bank says otherwise",
    solution: "Explain cash drivers",
  },
  {
    problem: "Payroll feels heavy",
    solution: "Model hiring timing",
  },
  {
    problem: "Growth is fast",
    solution: "Set controls and reporting cadence",
  },
];

const firstOffers = [
  {
    offer: "Quarterly tax planning",
    bestFor: "High-income individuals and owners",
    deliverables: "Projection, estimates, strategy list",
    positioning: '"No more tax surprises"',
  },
  {
    offer: "Monthly profit and cash review",
    bestFor: "Service businesses",
    deliverables: "Dashboard, insights, action plan",
    positioning: '"Know your numbers every month"',
  },
  {
    offer: "Cash flow forecasting",
    bestFor: "Fast-growing businesses",
    deliverables: "13-week forecast, scenario model",
    positioning: '"Protect payroll and growth"',
  },
  {
    offer: "Entity and comp planning",
    bestFor: "S-corp candidates",
    deliverables: "Entity review, salary ranges, plan",
    positioning: '"Pay yourself right"',
  },
  {
    offer: "Pricing and margin review",
    bestFor: "Agencies and trades",
    deliverables: "Job costing insights, margin targets",
    positioning: '"Stop selling at break-even"',
  },
];

const pricingTiers = [
  {
    tier: "Advisory Lite",
    fits: "Owners needing clarity",
    deliverables: "Monthly review, KPI dashboard, action list",
    pricing: "Monthly retainer",
  },
  {
    tier: "Growth Advisory",
    fits: "Owners making decisions",
    deliverables: "Lite plus forecasts, quarterly planning",
    pricing: "Monthly retainer",
  },
  {
    tier: "Fractional CFO",
    fits: "Owners scaling teams",
    deliverables: "Growth plus strategy, lender-ready reporting",
    pricing: "Retainer + project fees",
  },
];

const clientWants = [
  {
    question: "What would you pay extra for?",
    response: "Proactive tax planning",
    percentage: "73%",
  },
  {
    question: "What causes the most stress?",
    response: "Unexpected tax bills",
    percentage: "62%",
  },
  {
    question: "What do you want monthly?",
    response: 'Simple "what to do next" guidance',
    percentage: "59%",
  },
  {
    question: "What report do you actually read?",
    response: "Cash balance and runway",
    percentage: "54%",
  },
  {
    question: "Preferred format",
    response: "30-minute call with action list",
    percentage: "68%",
  },
];

const faqs = [
  {
    question: "Do I need to stop doing compliance work to offer advisory?",
    answer: "No. Keep compliance as your foundation. Add advisory as an upgrade. Use compliance data to drive insights. This lowers risk and makes selling easier.",
  },
  {
    question: "What is the easiest advisory offer to start with?",
    answer: "Quarterly tax planning is the easiest. It fits tax clients well. It has clear deliverables. It also creates obvious value through fewer surprises and better estimates.",
  },
  {
    question: "How do I price advisory if my clients expect hourly rates?",
    answer: "Use packages with clear scope. Anchor on outcomes and cadence. Explain that advisory includes planning and access. Offer three tiers so clients can choose without negotiating.",
  },
  {
    question: "What if my client's books are messy?",
    answer: "Fix the books first, or scope cleanup separately. Advisory needs reliable inputs. You can still start with tax planning if data quality is high enough. Do not advise from bad numbers.",
  },
  {
    question: "How many clients should I start with?",
    answer: "Start with two to five clients. Keep the first month tight. Improve your templates and meeting flow. Then add clients in small batches to protect service quality.",
  },
  {
    question: "What deliverables do clients value most in advisory?",
    answer: "Clients value clarity and next steps. They want a short dashboard, a cash view, and an action list. They also value proactive tax estimates and scenario planning.",
  },
  {
    question: "How do I avoid scope creep in advisory retainers?",
    answer: "Put boundaries in writing. Define meeting cadence, response times, and what counts as a project. Keep requests in a shared list. Review scope quarterly and adjust pricing when needed.",
  },
  {
    question: "Can I offer advisory as a solo practitioner?",
    answer: "Yes. Solo works well with productized packages. Use a repeatable meeting agenda and templates. Keep tools simple. Consider outsourcing compliance tasks as advisory demand grows.",
  },
  {
    question: "How long does it take to feel confident giving advice?",
    answer: "Many pros gain confidence within 60 to 90 days of consistent delivery. Confidence comes from repetition, mentorship, and structured meetings. You do not need perfection to be useful.",
  },
  {
    question: "What if I do not feel 'business-savvy' enough yet?",
    answer: "Start with basic KPI reviews and tax planning. Learn one industry at a time. Use mentorship and training. Your job is progress, not genius. Build skill through real cases.",
  },
];

const selfAssessmentSkills = [
  "I can explain a P&L in plain words",
  "I can explain a balance sheet in plain words",
  "I can explain cash flow without jargon",
  "I can connect numbers to actions",
  "I can lead a structured client meeting",
];

function postDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-5 space-y-3 rounded-2xl bg-gray-50 p-5 text-gray-700">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F26422]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function HowToTransitionFromComplianceWorkToAdvisoryServices({
  recentPosts = [],
}: {
  recentPosts?: RecentPost[];
}) {
  const sidebarPosts = recentPosts.filter(
    (item, index, arr) =>
      item.slug !== transitionComplianceToAdvisoryPost.slug &&
      arr.findIndex((post) => post.slug === item.slug) === index,
  );

  // Self Assessment Score State
  const [scores, setScores] = useState<Record<number, number>>({
    0: 3,
    1: 3,
    2: 3,
    3: 3,
    4: 3,
  });

  const handleScoreChange = (index: number, val: number) => {
    setScores((prev) => ({
      ...prev,
      [index]: val,
    }));
  };

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  return (
    <div className="max-w-[1640px] mx-auto px-8 w-full py-10">
      <div className="grid gap-12 mb-10 grid-cols-1 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <figure className="mt-4">
            <div className="relative overflow-hidden rounded-2xl bg-[#131B2A]">
              <Image
                width={1200}
                height={720}
                src={transitionComplianceToAdvisoryPost.featuredImage.image.url}
                alt={transitionComplianceToAdvisoryPost.featuredImage.altText}
                title={transitionComplianceToAdvisoryPost.title}
                className="w-full h-auto object-cover object-top"
                priority
              />
            </div>
            <figcaption className="mt-3 text-sm italic text-gray-600">
              Learn how to move beyond compliance reporting and become a trusted advisor through strategic insights and business guidance.
            </figcaption>
          </figure>

          <p className="text-sm italic text-black mt-4">
            {postDate(transitionComplianceToAdvisoryPost.createdAt)}
          </p>

          <h1 className="text-2xl md:text-4xl font-bold text-[#1B2639] my-6">
            {transitionComplianceToAdvisoryPost.title}
          </h1>

          <p className="mb-6 text-xl md:text-2xl font-semibold text-[#F26422]">
            Deliver results, not just accomplished chores.
          </p>

          <div className="mt-6 rounded-2xl border border-[#F26422]/20 bg-[#FFF4ED] p-5 md:p-7">
            <p className="text-gray-700 leading-relaxed">
              Build strategic thinking, communication, and problem-solving skills to transition from compliance to consulting services. Move beyond preparing reports and filings to assisting clients in making educated business decisions. Find a specialty and become an expert. Understand your client's goals and become a trusted advisor who delivers results and not just accomplished chores.
            </p>
          </div>

          <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 md:p-7 shadow">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Key Takeaways You Can Apply This Week
            </h2>
            <BulletList items={keyTakeaways} />
          </section>

          {/* Stats section */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((item) => (
              <div
                key={item.value}
                className="rounded-2xl bg-[#131B2A] p-6 text-white shadow-lg flex flex-col justify-between"
              >
                <p className="text-5xl font-bold text-[#F26422]">
                  {item.value}
                </p>
                <p className="mt-3 text-sm font-semibold leading-snug text-white/90">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Key Differences Table */}
          <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 md:p-7 shadow">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Key Differences: Compliance Work vs. Advisory Services
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-3 bg-[#131B2A] text-white font-semibold">
                <div className="p-4 text-sm md:text-base">Area</div>
                <div className="p-4 text-sm md:text-base">Compliance Work</div>
                <div className="p-4 text-sm md:text-base">Advisory Services</div>
              </div>
              {keyDifferences.map((item, index) => (
                <div
                  key={item.area}
                  className={`grid grid-cols-3 ${
                    index % 2 === 0 ? "bg-[#F4F7FC]" : "bg-white"
                  }`}
                >
                  <div className="border-b border-gray-200 p-4 font-semibold text-xs md:text-sm text-[#1B2639] md:border-r">
                    {item.area}
                  </div>
                  <div className="border-b border-gray-200 p-4 text-xs md:text-sm text-gray-700 md:border-r">
                    {item.compliance}
                  </div>
                  <div className="border-b border-gray-200 p-4 text-xs md:text-sm font-semibold text-[#F26422]">
                    {item.advisory}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              What counts as advisory services in tax and accounting?
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Advisory services are proactive guidance based on your client's numbers. You recommend actions. You explain tradeoffs. You help clients plan. You help them stay on track.
              </p>
              <p>
                Common advisory categories include tax planning, CFO-style services, and cash flow coaching. It can also include entity setup, pricing strategy, and KPI tracking. The key is proactive direction.
              </p>
              <p className="font-semibold text-[#1B2639]">
                Ask yourself one question: Are you helping the client decide? If yes, that is advisory.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Why clients pay more for advisory than compliance
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Clients pay more because advisory reduces risk and increases options. It also saves time. They do not want more reports. They want answers.
              </p>
              <p>
                Advisory also feels scarce. Fewer pros do it well. Many pros only file and reconcile. That makes good advisory stand out fast.
              </p>
              <p>
                If you give clients clarity, they stay longer. They also refer more.
              </p>
            </div>
          </section>

          {/* Advisory Solves Table */}
          <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 md:p-7 shadow">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Advisory Solves What Compliance Cannot
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 bg-[#131B2A] text-white font-semibold">
                <div className="p-4">Client Problem</div>
                <div className="p-4">Advisory Solution</div>
              </div>
              {advisorySolves.map((item, index) => (
                <div
                  key={item.problem}
                  className={`grid grid-cols-1 md:grid-cols-2 ${
                    index % 2 === 0 ? "bg-[#F4F7FC]" : "bg-white"
                  }`}
                >
                  <div className="border-b border-gray-200 p-4 text-sm text-gray-700 md:border-r flex items-center gap-2">
                    <span className="text-red-500 font-bold">⚠</span> {item.problem}
                  </div>
                  <div className="border-b border-gray-200 p-4 text-sm font-semibold text-[#1B2639] flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span> {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Self Assessment widget */}
          <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 md:p-7 shadow">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639] text-center">
              Self-Assessment: Are You Ready to Offer Advisory?
            </h2>
            <p className="text-center text-gray-500 mt-2 text-sm">
              Rate yourself 1–5 on each skill below (1 = Weak, 5 = Strong)
            </p>

            <div className="mt-6 space-y-6">
              {selfAssessmentSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <p className="font-semibold text-gray-800 text-sm md:text-base">
                    {skill}
                  </p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => handleScoreChange(index, val)}
                        className={`w-9 h-9 md:w-10 md:h-10 rounded-full border flex items-center justify-center font-bold transition-all text-xs md:text-sm ${
                          scores[index] === val
                            ? "bg-[#F26422] text-white border-[#F26422] shadow-md shadow-[#F26422]/20 scale-105"
                            : "bg-white text-gray-700 border-gray-300 hover:border-[#F26422] hover:text-[#F26422]"
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Total score container */}
            <div className="mt-8 rounded-2xl bg-[#131B2A] p-6 text-white text-center shadow-lg">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wide text-[#F26422]">
                Your Self-Assessment Score
              </p>
              <p className="mt-2 text-5xl font-bold text-[#F26422]">
                {totalScore} <span className="text-2xl text-white/60">/ 25</span>
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div
                  className={`p-4 rounded-xl border transition-all ${
                    totalScore < 15
                      ? "bg-[#F26422]/20 border-[#F26422]"
                      : "bg-white/5 border-white/10 opacity-40"
                  }`}
                >
                  <p className="font-bold text-base md:text-lg text-white">Under 15</p>
                  <p className="text-xs text-white/80 mt-1">Start with basic advisory</p>
                </div>
                <div
                  className={`p-4 rounded-xl border transition-all ${
                    totalScore >= 15 && totalScore <= 20
                      ? "bg-[#F26422]/20 border-[#F26422]"
                      : "bg-white/5 border-white/10 opacity-40"
                  }`}
                >
                  <p className="font-bold text-base md:text-lg text-white">15–20</p>
                  <p className="text-xs text-white/80 mt-1">Add forecasting services</p>
                </div>
                <div
                  className={`p-4 rounded-xl border transition-all ${
                    totalScore > 20
                      ? "bg-[#F26422]/20 border-[#F26422]"
                      : "bg-white/5 border-white/10 opacity-40"
                  }`}
                >
                  <p className="font-bold text-base md:text-lg text-white">Over 20</p>
                  <p className="text-xs text-white/80 mt-1">Build tiered CFO services</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              The fastest path from compliance to advisory is adding a paid "planning layer"
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Add a planning layer first. Do not rebuild your whole firm first. Planning is the easiest advisory on-ramp. It fits tax and bookkeeping clients well. Start with one paid add-on. Then expand.
              </p>
              <p>
                Good starter offers include tax planning, quarterly estimated tax support, and monthly KPI reviews.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#1B2639]">
              Beginner path: Start advisory with one monthly "numbers and next steps" meeting
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Start with one meeting per month. Keep it to 30 minutes. Use one dashboard. Bring three insights. End with three actions. Your goal is not perfection. Your goal is consistent value.
              </p>
              <p>
                Here is a simple meeting structure you can repeat:
              </p>
            </div>
            <BulletList
              items={[
                "Wins and concerns — 5 minutes",
                "Review three KPIs — 10 minutes",
                "Review cash and runway — 10 minutes",
                "Agree on next actions — 5 minutes",
              ]}
            />
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              This alone can justify a retainer. It also creates upsell paths.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#1B2639]">
              Intermediate path: Add forecasting, scenarios, and tax-smart decisions
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Forecasting moves you from reporting to planning. You help clients choose between options. You show what happens if sales drop. You model hiring. You model debt payoff. Tie forecasts to tax planning. Show net cash impact. Clients love that. Deliver one forecast update per quarter at first. Keep it simple.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#1B2639]">
              Expert path: Build a packaged CFO service with clear deliverables
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                At expert level, you sell a full system. You become the financial operating partner. You may still do compliance. But advisory becomes the core value.
              </p>
              <p>
                A strong CFO package includes cash flow forecasting, KPI system, strategic planning, and ongoing tax optimization. You also lead cross-functional decisions. Think pricing, staffing, and capital.
              </p>
            </div>
          </section>

          {/* First Advisory Offers Table */}
          <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 md:p-7 shadow">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              First Advisory Offers That Work Well
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-4 bg-[#131B2A] text-white font-semibold">
                <div className="p-4 text-xs md:text-sm">First Advisory Offer</div>
                <div className="p-4 text-xs md:text-sm">Best For</div>
                <div className="p-4 text-xs md:text-sm">What You Deliver</div>
                <div className="p-4 text-xs md:text-sm">How You Position It</div>
              </div>
              {firstOffers.map((item, index) => (
                <div
                  key={item.offer}
                  className={`grid grid-cols-4 ${
                    index % 2 === 0 ? "bg-[#F4F7FC]" : "bg-white"
                  }`}
                >
                  <div className="border-b border-gray-200 p-4 font-semibold text-xs md:text-sm text-[#1B2639] md:border-r">
                    {item.offer}
                  </div>
                  <div className="border-b border-gray-200 p-4 text-xs md:text-sm text-gray-700 md:border-r">
                    {item.bestFor}
                  </div>
                  <div className="border-b border-gray-200 p-4 text-xs md:text-sm text-gray-700 md:border-r">
                    {item.deliverables}
                  </div>
                  <div className="border-b border-gray-200 p-4 text-xs md:text-sm font-semibold text-[#F26422]">
                    {item.positioning}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[17px] leading-8 text-gray-700">
              Pick one. Commit for 90 days. Improve delivery weekly.
            </p>
          </section>

          {/* CTA middle box */}
          <section className="mt-10 rounded-2xl bg-gradient-to-r from-[#1B2639] to-[#131B2A] p-6 md:p-8 text-white text-center shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold">Ready to Start Offering Advisory Services?</h3>
            <p className="mt-3 text-white/80 max-w-2xl mx-auto">
              You don't need to rebuild your firm. You need one offer and five conversations. Start your advisory journey today.
            </p>
            <p className="mt-4 font-semibold text-[#F26422] text-sm md:text-base">
              Take the Self-Assessment Above &nbsp;→&nbsp; Pick Your First Offer &nbsp;→&nbsp; Launch in 30 Days
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How to price advisory services without guessing
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Price advisory services based on value and scope, not like compliance. Hourly pricing punishes efficiency and confuses clients. Instead, consider value-based pricing. Use packages with clear deliverables, implement tiers, and add an onboarding fee if necessary.
              </p>
            </div>
          </section>

          {/* Three Tier Pricing Structure Table */}
          <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 md:p-7 shadow">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Simple Three-Tier Advisory Pricing Structure
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-4 bg-[#131B2A] text-white font-semibold">
                <div className="p-4 text-xs md:text-sm">Tier</div>
                <div className="p-4 text-xs md:text-sm">Who It Fits</div>
                <div className="p-4 text-xs md:text-sm">Core Deliverables</div>
                <div className="p-4 text-xs md:text-sm">Pricing Model</div>
              </div>
              {pricingTiers.map((item, index) => (
                <div
                  key={item.tier}
                  className={`grid grid-cols-4 ${
                    index % 2 === 0 ? "bg-[#F4F7FC]" : "bg-white"
                  }`}
                >
                  <div className="border-b border-gray-200 p-4 font-semibold text-xs md:text-sm text-[#1B2639] md:border-r">
                    {item.tier}
                  </div>
                  <div className="border-b border-gray-200 p-4 text-xs md:text-sm text-gray-700 md:border-r">
                    {item.fits}
                  </div>
                  <div className="border-b border-gray-200 p-4 text-xs md:text-sm text-gray-700 md:border-r">
                    {item.deliverables}
                  </div>
                  <div className="border-b border-gray-200 p-4 text-xs md:text-sm font-semibold text-[#F26422]">
                    {item.pricing}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[17px] leading-8 text-gray-700">
              Keep your tiers easy to compare. Use one-page scope sheets to put boundaries in writing.
            </p>
          </section>

          <section className="mt-10">
            <h3 className="text-xl md:text-2xl font-bold text-[#1B2639]">
              What to say when a client asks, "Why does advisory cost more?"
            </h3>
            <blockquote className="mt-4 border-l-4 border-[#F26422] bg-[#FFF4ED] p-5 text-lg font-semibold leading-8 text-[#1B2639]">
              "Compliance records the past. Advisory protects your future."
            </blockquote>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Then explain what changes. Mention proactive planning, decision support, and meeting cadence. Clients pay for access and clarity. Then ask a question: "Would you rather pay for forms, or avoid expensive surprises?"
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How to deliver advisory services with a repeatable process
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Consistency sells. Your process should feel like a product. Clients should know what happens each month. To achieve this, leverage a four-step delivery loop:
              </p>
            </div>
            <BulletList
              items={[
                "Collect and clean data.",
                "Build a simple dashboard that provides valuable insights.",
                "Prepare three insights and three actions.",
                "Meet, decide, and document next steps.",
              ]}
            />
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              Then repeat monthly.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              What tools you need for advisory services (and what you do not)
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                You do not need fancy tools to start. You need clean books and a meeting rhythm. Most firms use an accounting system, a reporting tool, and a meeting notes system. You can keep it lean. Avoid tool overload early. Tools do not create value. Your guidance creates value.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How to transition your existing compliance clients into advisory
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Start with your best clients. Do not start with your hardest. Find one risk. Then offer a paid solution.
              </p>
              <blockquote className="mt-4 border-l-4 border-[#F26422] bg-[#FFF4ED] p-5 text-lg font-semibold leading-8 text-[#1B2639]">
                "Your revenue is up. Your cash is down. We should track cash weekly. I can set that up and review it with you monthly."
              </blockquote>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How to run an "advisory audit" using data you already have
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                An advisory audit is a fast review. You look for gaps and opportunities. You do not fix everything yet. You identify what matters. Look at margins, tax exposure, and cash patterns. Look at owner pay. Look at debt and payroll. Then summarize in plain language. End with a simple plan: "Here are the three moves."
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How to sell advisory without feeling salesy
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Sell advisory by diagnosing, not pitching. Ask better questions. Then link answers to outcomes. Use direct questions like these:
              </p>
            </div>
            <BulletList
              items={[
                "What keeps you up at night financially?",
                "Do you know your monthly break-even point?",
                "How far does cash last if sales drop?",
                "Do you set aside money for taxes weekly?",
                "Are you making hiring decisions from a plan?",
              ]}
            />
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              When they say "no," you offer a plan. That is not pushy. That is leadership.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              A practical script you can use on your next client call
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                You can say this in under 20 seconds:
              </p>
              <blockquote className="mt-4 border-l-4 border-[#F26422] bg-[#FFF4ED] p-5 text-lg font-semibold leading-8 text-[#1B2639]">
                "Based on your numbers, you need a plan, not just reports. We can meet monthly, track key metrics like your cash balance and runway, and plan taxes quarterly. That prevents surprises. Want to see what that looks like?"
              </blockquote>
              <p className="mt-4">
                Then stop talking. Let them answer.
              </p>
            </div>
          </section>

          {/* Survey Results Table */}
          <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 md:p-7 shadow">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              What Clients Actually Want From Their Tax Pro
            </h2>
            <p className="text-gray-500 text-sm mt-1">Survey of 37 small business owners · April 2026 · US & Canada</p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-3 bg-[#131B2A] text-white font-semibold">
                <div className="p-4 text-xs md:text-sm">Question</div>
                <div className="p-4 text-xs md:text-sm">Top Response</div>
                <div className="p-4 text-xs md:text-sm">% of Respondents</div>
              </div>
              {clientWants.map((item, index) => (
                <div
                  key={item.question}
                  className={`grid grid-cols-3 ${
                    index % 2 === 0 ? "bg-[#F4F7FC]" : "bg-white"
                  }`}
                >
                  <div className="border-b border-gray-200 p-4 font-semibold text-xs md:text-sm text-[#1B2639] md:border-r">
                    {item.question}
                  </div>
                  <div className="border-b border-gray-200 p-4 text-xs md:text-sm text-gray-700 md:border-r">
                    {item.response}
                  </div>
                  <div className="border-b border-gray-200 p-4 text-xs md:text-sm font-semibold text-[#F26422]">
                    {item.percentage}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-500 italic">
              Source: TSG ProAdvisor internal mini-survey of 37 small business owners, collected April 2026 via Google Forms.
            </p>
          </section>

          <section className="mt-10">
            <p className="text-[17px] leading-8 text-gray-700">
              The message is simple. Clients want fewer PDFs. They want decisions. For more insights into financial management and planning, consider tuning into podcasts like{" "}
              <a
                href="https://www.physiciancents.com/"
                className={inlineLinkClass}
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Physician Cents
              </a>
              , which provide valuable advice for various professionals including those in the medical field regarding financial strategies.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              What skills you must build to succeed in advisory
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                You need three skill sets. Technical knowledge alone is not enough. Advisory is communication plus judgment.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h3 className="text-xl md:text-2xl font-bold text-[#1B2639]">
              Communication skills matter more than perfect spreadsheets
            </h3>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                You must explain numbers simply. You must stay calm. You must guide decisions. Clients do not want lectures. Practice short explanations. Use examples. Avoid jargon.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h3 className="text-xl md:text-2xl font-bold text-[#1B2639]">
              Business acumen turns reporting into advice
            </h3>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Learn how businesses make money. Learn unit economics. Learn pricing drivers. Learn payroll leverage. You can learn this by reviewing real client cases. You can also learn through mentorship.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h3 className="text-xl md:text-2xl font-bold text-[#1B2639]">
              Meeting leadership keeps advisory profitable
            </h3>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                A messy meeting kills margins. You need an agenda. You need timeboxes. You need clear next steps. End every meeting with owners and deadlines.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How to protect scope and avoid becoming "on-call" for everything
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Advisory retainers can fail if boundaries are weak. Your scope must be clear. Put response times in writing. Put meeting frequency in writing. Define what counts as a project. If you do this, clients respect your time. They also trust your process more.
              </p>
            </div>
          </section>

          {/* Rollout Plan section */}
          <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 md:p-7 shadow">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Your 30-Day Advisory Launch Rollout Plan
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-[#F26422] text-lg">Week 1</h4>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>• Pick one offer</li>
                  <li>• Write scope</li>
                  <li>• Create pricing tiers</li>
                </ul>
              </div>
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-[#F26422] text-lg">Week 2</h4>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>• Build dashboard template</li>
                  <li>• Build meeting agenda</li>
                  <li>• Finalize deliverable format</li>
                </ul>
              </div>
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-[#F26422] text-lg">Week 3</h4>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>• Invite 5 ideal clients</li>
                  <li>• Run advisory audits</li>
                  <li>• Present initial findings</li>
                </ul>
              </div>
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-[#F26422] text-lg">Week 4</h4>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>• Close 2 retainers</li>
                  <li>• Deliver month one</li>
                  <li>• Improve process</li>
                </ul>
              </div>
            </div>
            <p className="mt-5 text-[17px] leading-8 text-gray-700">
              Keep it small. Make it repeatable. Then scale.
            </p>
          </section>

          {/* Bottom CTA section */}
          <section className="mt-12 rounded-2xl bg-[#131B2A] p-6 md:p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#F26422]">
              Ready to add advisory the right way?
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Build Your Advisory Practice with TSG ProAdvisor
            </h2>
            <p className="mt-4 max-w-3xl text-white/80 leading-8">
              If you want to move from compliance to advisory faster, we can help. At TSG ProAdvisor, we built a world-class membership platform for tax and accounting pros who want more income and more freedom. We give you training, tools, and mentorship, so you can package advisory services and deliver them with confidence.
            </p>
            <p className="mt-2 max-w-3xl text-white/80 leading-8">
              We do not just teach theory. We help you turn your skills into a real business model. We help you price offers, run better client meetings, and build a repeatable system.
            </p>
            <p className="mt-2 max-w-3xl text-white/80 leading-8">
              If you are ready to stop trading hours for forms, and start getting paid for guidance, join us at TSG ProAdvisor and let's build your advisory practice the smart way.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-[#F26422] px-8 py-3 font-bold text-white transition hover:bg-white hover:text-[#F26422]"
              >
                Join TSG ProAdvisor Today
              </Link>
              <a
                href="https://www.tsgproadvisor.com"
                className="inline-flex items-center text-[#F26422] font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit tsgproadvisor.com
              </a>
            </div>
          </section>

          {/* FAQs component */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Frequently Asked Questions (FAQs)
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

          <section className="mt-10 border-t border-gray-200 pt-6">
            <p className="text-xs text-gray-500 italic">
              Disclaimer: This blog is for informational purposes only. If you want details, please contact TSG Pro Advisor.
            </p>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-6 max-h-[1000px] overflow-y-auto rounded-lg p-3">
            <h2 className="font-medium text-4xl text-black border-b-2 pb-4 mb-6">
              Recent Blogs
            </h2>

            <Link
              href={`/blogs/${transitionComplianceToAdvisoryPost.slug}`}
              className="flex items-start gap-3 ps-3 py-3 shadow bg-white my-3 border-l-4 border-[#F26422]"
            >
              <Image
                width={120}
                height={120}
                src={transitionComplianceToAdvisoryPost.featuredImage.image.url}
                alt={transitionComplianceToAdvisoryPost.featuredImage.altText}
                className="w-[100px] h-[72px] rounded object-cover animate-pulse"
              />
              <div className="font-bold text-black line-clamp-2 text-sm">
                {transitionComplianceToAdvisoryPost.title}
              </div>
            </Link>

            {sidebarPosts.map((item) => (
              <Link
                key={item.slug}
                href={`/blogs/${item.slug}`}
                className="flex items-start gap-3 ps-3 py-3 shadow bg-white my-3"
              >
                <Image
                  width={120}
                  height={120}
                  src={
                    item.featuredImage?.image?.url ||
                    "/images/blogPage/insight/img1.png"
                  }
                  alt={item.featuredImage?.altText || item.title}
                  className="w-[100px] h-[72px] rounded object-cover"
                />
                <div className="font-bold text-black line-clamp-2 text-sm">
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
