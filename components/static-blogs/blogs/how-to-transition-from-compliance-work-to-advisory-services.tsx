import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const transitionComplianceToAdvisoryPost = {
  id: "how-to-transition-from-compliance-work-to-advisory-services",
  title: "How to Transition from Compliance Work to Advisory Services",
  slug: "how-to-transition-from-compliance-work-to-advisory-services",
  category: "Business Advisory",
  createdAt: "2026-07-08T00:00:00.000Z",
  updatedAt: "2026-07-08T00:00:00.000Z",
  published: true,
  excerpt:
    "Learn how to transition from compliance work to advisory services with proven steps. Avoid common mistakes and build higher-value client relationships.",
  desc: "Professional accounting and advisory services graphic illustrating how firms can transition from traditional compliance work to high-value advisory services. The image features a business advisor consulting with a client on strategic planning, tax strategy, cash flow optimization, and long-term business growth. It emphasizes building recurring revenue, strengthening client relationships, and positioning accountants as trusted strategic advisors through proactive financial guidance.",
  featuredImage: {
    altText:
      "Business advisor meeting with a client to discuss transitioning from compliance work to advisory services, strategic planning, tax strategy, cash flow optimization, and business growth.",
    title: "How to Transition from Compliance Work to Advisory Services",
    description:
      "Professional accounting and advisory services graphic illustrating how firms can transition from traditional compliance work to high-value advisory services. The image features a business advisor consulting with a client on strategic planning, tax strategy, cash flow optimization, and long-term business growth. It emphasizes building recurring revenue, strengthening client relationships, and positioning accountants as trusted strategic advisors through proactive financial guidance.",
    caption:
      "Learn how to move beyond compliance work by offering strategic advisory services that deliver greater value, build recurring revenue, and help clients achieve sustainable business growth.",
    image: {
      url: "/images/static-blogs/transition-compliance-to-advisory-services.webp",
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

const inlineLinkClass =
  "font-semibold text-[#F26422] underline underline-offset-4";

const keyTakeaways = [
  "Start with one advisory offer. Price it monthly.",
  "Use a short diagnostic.",
  "Make value predictable.",
  "Track impact. Show dollars saved or earned.",
  "Standardize delivery. Use templates and checklists.",
];

const comparisonData = [
  {
    category: "Primary Goal",
    compliance: "Accurate filings and reporting",
    advisory: "Better decisions and outcomes",
  },
  {
    category: "Client Value",
    compliance: "Meets requirements",
    advisory: "Improves cash, tax, and growth",
  },
  {
    category: "Timing",
    compliance: "After the fact",
    advisory: "Before decisions happen",
  },
  {
    category: "Revenue Model",
    compliance: "One-time, seasonal",
    advisory: "Recurring, monthly",
  },
  {
    category: "Client Touchpoints",
    compliance: "1–3 per year",
    advisory: "Monthly or quarterly",
  },
  {
    category: "Your Differentiator",
    compliance: "Speed and accuracy",
    advisory: "Judgment and clarity",
  },
];

const packageData = [
  {
    level: "Starter",
    bestFor: "New business owners",
    scope: "Quarterly planning, basic dashboard",
    anchor: "Fewer surprises and better estimates",
  },
  {
    level: "Growth",
    bestFor: "Scaling owners",
    scope: "Monthly meetings, cash flow planning",
    anchor: "Better cash decisions and margins",
  },
  {
    level: "Strategic",
    bestFor: "High earners",
    scope: "Entity planning, compensation strategy",
    anchor: "Tax strategy and audit-ready records",
  },
];

const advisoryIncludes = [
  "Tax savings plans before year-end.",
  "Entity and payroll planning decisions.",
  "Cash flow planning and runway forecasts.",
  "Pricing and margin fixes.",
  "Clean books that support lending.",
  "Quarterly estimated tax planning.",
  "KPI tracking with action items.",
];

const beginnerNiches = [
  "Real estate agents with variable income.",
  "Insurance agents with commissions and 1099s.",
  "Teachers with side businesses.",
  "Stay-at-home parents with new startups.",
  "Small service businesses with messy cash flow.",
];

const diagnosticItems = [
  "Year-to-date tax projection.",
  "Entity and payroll check.",
  "Cash flow review.",
  "Top three risks.",
  "Next 90-day plan.",
];

const toolsNeeded = [
  "A calendar system for recurring calls.",
  "A client agenda template.",
  "A meeting notes template.",
  "A dashboard or monthly snapshot.",
  "A task list with owners and due dates.",
];

const agendaItems = [
  "Wins and concerns since last call.",
  "Review three key numbers.",
  "Decide two actions for this month.",
  "Send a recap the same day. Recaps build trust.",
];

const beginnerMetrics = [
  "Missed deadlines reduced.",
  "Tax surprises reduced.",
  "Books closed on time.",
];

const intermediateMetrics = [
  "Cash runway increased.",
  "Gross margin improved.",
  "Owner pay stabilized.",
];

const expertMetrics = [
  "Effective tax rate reduced.",
  "Risk exposure reduced.",
  "Decision cycles shortened.",
];

const commonMistakes = [
  "Selling advisory without a meeting cadence.",
  "Underpricing due to fear.",
  "Offering custom work for everyone.",
  "Mixing bookkeeping errors into advisory time.",
  "Giving advice without documentation.",
];

const valueMetrics = [
  "Estimated tax variance.",
  "Cash balance trend.",
  "Net income trend.",
  "Owner draw stability.",
  "Tax savings actions completed.",
];

const faqs = [
  {
    question: "What Is The Fastest Way To Start Advisory If I Only Do Tax Returns?",
    answer:
      "Start with a paid planning diagnostic. Use prior-year data. Add a simple projection. Deliver a 90-day action plan. Then offer quarterly check-ins as a subscription service.",
  },
  {
    question: "How Do I Price Advisory If Clients Only Want Cheap Compliance Work?",
    answer:
      "Anchor pricing to outcomes, not hours. Offer two tiers. Start with a 6-month term. Show value using tax variance, avoided penalties, and clearer cash flow decisions.",
  },
  {
    question: "Do I Need Special Credentials To Offer Advisory Services?",
    answer:
      "Usually, no. You need to stay within your scope. Document recommendations. Coordinate with attorneys when needed. Use clear engagement terms. Provide guidance tied to financial facts.",
  },
  {
    question: "What Should I Offer First: Cash Flow Advisory Or Tax Planning?",
    answer:
      "Offer what you can deliver confidently. Tax planning is often easiest for tax pros, as seen in this case study which highlights the interplay between cash flow advisory and tax planning. Cash flow works well for bookkeeping-heavy clients. Pick one. Standardize it before expanding.",
  },
  {
    question: "How Can A Career Changer Compete With Experienced Tax Pros?",
    answer:
      "Win with process and consistency. Choose a niche. Use structured meetings. Use clear checklists. Communicate well.",
  },
  {
    question: "How Many Advisory Clients Do I Need For Stable Revenue?",
    answer:
      "A small base can work. Ten clients on monthly retainers can stabilize cash flow. Focus on retention first. Add clients slowly. Improve delivery before you scale marketing.",
  },
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

  return (
    <div className="max-w-[1640px] mx-auto px-8 w-full py-10">
      <div className="grid gap-12 mb-10 grid-cols-1 lg:grid-cols-3">
        <article className="lg:col-span-2">
          {/* Featured Image */}
          <figure className="mt-4">
            <div className="relative overflow-hidden rounded-2xl bg-[#131B2A]">
              <Image
                width={1200}
                height={720}
                src={transitionComplianceToAdvisoryPost.featuredImage.image.url}
                alt={transitionComplianceToAdvisoryPost.featuredImage.altText}
                title={transitionComplianceToAdvisoryPost.featuredImage.title}
                aria-describedby="advisory-featured-image-description"
                className="w-full h-auto object-cover object-top"
                priority
              />
            </div>
            <figcaption className="mt-3 text-sm italic text-gray-600">
              {transitionComplianceToAdvisoryPost.featuredImage.caption}
            </figcaption>
            <p id="advisory-featured-image-description" className="sr-only">
              {transitionComplianceToAdvisoryPost.featuredImage.description}
            </p>
          </figure>

          {/* Dates */}
          <p className="text-sm italic text-black mt-4">
            Published: {postDate(transitionComplianceToAdvisoryPost.createdAt)} | Updated: {postDate(transitionComplianceToAdvisoryPost.updatedAt)}
          </p>

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold text-[#1B2639] my-6">
            {transitionComplianceToAdvisoryPost.title}
          </h1>

          {/* Subtitle / Intro */}
          <p className="mb-6 text-xl md:text-2xl font-semibold text-[#F26422]">
            Advisory transitions shift your focus toward future planning.
          </p>

          <div className="space-y-4 text-[17px] leading-8 text-gray-700">
            <p>
              Advisory transitions shift your focus toward future planning. Professionals abandon basic form fulfillment. You become a strategic partner. This change justifies higher fees. Closer client relationships build business value. Advisors maximize long-term growth.
            </p>
          </div>

          {/* Key Advisory Outcome Box */}
          <div className="mt-6 rounded-2xl border border-[#F26422]/20 bg-[#FFF4ED] p-5 md:p-7 shadow">
            <p className="text-sm font-bold uppercase tracking-wider text-[#F26422]">KEY ADVISORY OUTCOME</p>
            <p className="mt-2 text-xl font-extrabold text-[#1B2639]">10X Business Value &amp; Predictable Scaling</p>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Shifting to recurring monthly advisory subscriptions eliminates seasonal dependency and transforms firms into proactive decision partners.
            </p>
          </div>

          {/* Key Takeaways */}
          <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 md:p-7 shadow">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Key Takeaways You Can Use Today
            </h2>
            <p className="mt-2 text-gray-600">You move faster when you keep it simple:</p>
            <BulletList items={keyTakeaways} />
          </section>

          {/* What Changes */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              What Changes When You Move From Compliance To Advisory
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              Advisory changes your role. You stop being only a filer. You become a decision partner. You help clients choose actions. You help them avoid surprises. You help them plan. Compliance is deadline-driven. Advisory is calendar-driven. Compliance is one-way delivery. Advisory is two-way collaboration.
            </p>

            <h3 className="mt-6 text-xl md:text-2xl font-bold text-[#1B2639]">
              Quick Comparison Of Compliance Vs Advisory (With Practical Differences)
            </h3>
            <p className="mt-2 text-gray-600">
              Compliance is deadline-driven, while advisory is calendar-driven. For more information, see the{" "}
              <Link href="https://www.journalofaccountancy.com/" className={inlineLinkClass} rel="nofollow noopener noreferrer" target="_blank">Journal of Accountancy</Link>{" "}
              guidelines on advisory services.
            </p>

            {/* Comparison Table */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-3 bg-[#131B2A] text-white font-semibold">
                <div className="p-4 text-sm md:text-base">Category</div>
                <div className="p-4 text-sm md:text-base">Compliance Work</div>
                <div className="p-4 text-sm md:text-base">Advisory Services</div>
              </div>
              {comparisonData.map((item, index) => (
                <div
                  key={item.category}
                  className={`grid grid-cols-3 ${index % 2 === 0 ? "bg-[#F4F7FC]" : "bg-white"}`}
                >
                  <div className="border-b border-gray-200 p-4 font-semibold text-xs md:text-sm text-[#1B2639] md:border-r">
                    {item.category}
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

            <p className="mt-5 text-[17px] leading-8 text-gray-700">
              You change your mindset. You switch to advisory services. You adopt new strategies. These strategies enhance client relationships. They improve financial decision-making processes.
            </p>
          </section>

          {/* Why Advisory Wins */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Why Advisory Wins For Your Firm And Your Clients
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              Advisory wins because it reduces chaos. It increases trust. It raises lifetime value. It also improves client retention. Clients do not wake up wanting a tax return. They want less stress. They want more money kept. They want fewer mistakes. Advisory speaks to that. Want fewer last-minute scrambles? Want clients who listen? Want higher margins? Advisory supports all three.
            </p>

            {/* Shift to Advisory CTA Box */}
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#1B2639] to-[#131B2A] p-6 md:p-8 text-white text-center shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold">READY TO SHIFT FROM COMPLIANCE TO STRATEGIC ADVISORY?</h3>
              <p className="mt-3 text-white/80 max-w-2xl mx-auto text-sm md:text-base">
                Join TSG ProAdvisor today and gain access to proven workflows, diagnostic checklists, and the exact roadmap needed to launch your new monthly subscription model comfortably.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-xl bg-[#F26422] px-8 py-3 font-bold text-white transition hover:bg-white hover:text-[#F26422]"
              >
                Join TSG ProAdvisor Today
              </Link>
            </div>
          </section>

          {/* What Advisory Actually Includes */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              What Advisory Actually Includes In Tax And Accounting
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              Advisory is not vague &ldquo;consulting.&rdquo; It is specific guidance tied to numbers. It is structured. It is documented. It has a cadence. Common advisory outcomes include:
            </p>
            <BulletList items={advisoryIncludes} />
          </section>

          {/* How To Choose The Right Advisory Niche */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How To Choose The Right Advisory Niche For Beginners
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              You select a specific niche. You deliver fast wins. You use your current knowledge. Start where you already have clients. A simple niche rule helps. Choose clients with repeating decisions. Those decisions create advisory demand.
            </p>
            <p className="mt-4 text-[17px] font-semibold text-[#1B2639]">Good beginner niches include:</p>
            <BulletList items={beginnerNiches} />
            <p className="mt-5 text-[17px] leading-8 text-gray-700">
              At TSG ProAdvisor, we see this daily. Many people start outside accounting. They still succeed. They choose a clear market. They build a simple offer. They deliver consistently. For instance, many learn{" "}
              <Link href="/blogs/how-to-start-a-successful-career-as-a-tax-professional-in-2026" className={inlineLinkClass}>
                how to start a successful career as a tax professional in 2026
              </Link>{" "}
              and successfully transition from outside accounting.
            </p>
          </section>

          {/* How To Create Your First Advisory Offer */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How To Create Your First Advisory Offer In One Day
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              Your first offer should be narrow. It should solve one problem. It should have a start and an ongoing cadence. Use this simple structure:
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#1B2639]">Step 1: Name The Outcome In Plain Words</h3>
                <p className="mt-2 text-[17px] leading-8 text-gray-700">
                  Lead with the result. Not the service. Clients buy outcomes.
                  <br />
                  <strong>Examples:</strong>
                  <br />
                  &bull; &ldquo;Quarterly Tax Savings Plan.&rdquo;
                  <br />
                  &bull; &ldquo;Cash Flow Clarity Program.&rdquo;
                  <br />
                  &bull; &ldquo;S-Corp Readiness Review.&rdquo;
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1B2639]">Step 2: Define The Deliverables And The Meeting Rhythm</h3>
                <p className="mt-2 text-[17px] leading-8 text-gray-700">
                  Keep deliverables tight. Make meetings routine. Routine drives retention.
                  <br />
                  <strong>Include:</strong>
                  <br />
                  &bull; A kickoff diagnostic.
                  <br />
                  &bull; A roadmap with actions.
                  <br />
                  &bull; A monthly or quarterly call.
                  <br />
                  &bull; A dashboard or summary.
                  <br />
                  &bull; Email support with boundaries.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1B2639]">Step 3: Price It As A Monthly Subscription</h3>
                <p className="mt-2 text-[17px] leading-8 text-gray-700">
                  Monthly pricing creates stability. It also makes value ongoing. Many firms start too low. Many also overcomplicate pricing.
                  <br />
                  <strong>Start with one of these:</strong>
                  <br />
                  &bull; A single monthly fee.
                  <br />
                  &bull; Two tiers with clear limits.
                  <br />
                  &bull; A setup fee plus monthly.
                </p>
              </div>
            </div>
          </section>

          {/* How To Price Advisory */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How To Price Advisory Using Simple Value Anchors
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              Price based on the decision value. Not your hours. Use anchors clients understand. Taxes saved is one anchor. Time saved is another. Risk reduced is another. Here is a clean way to think:
            </p>

            {/* Package Table */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-4 bg-[#131B2A] text-white font-semibold">
                <div className="p-4 text-xs md:text-sm">Advisory Package Level</div>
                <div className="p-4 text-xs md:text-sm">Best For</div>
                <div className="p-4 text-xs md:text-sm">Typical Scope</div>
                <div className="p-4 text-xs md:text-sm">Value Anchor You Can Use</div>
              </div>
              {packageData.map((item, index) => (
                <div
                  key={item.level}
                  className={`grid grid-cols-4 ${index % 2 === 0 ? "bg-[#F4F7FC]" : "bg-white"}`}
                >
                  <div className="border-b border-gray-200 p-4 font-semibold text-xs md:text-sm text-[#1B2639] md:border-r">
                    {item.level}
                  </div>
                  <div className="border-b border-gray-200 p-4 text-xs md:text-sm text-gray-700 md:border-r">
                    {item.bestFor}
                  </div>
                  <div className="border-b border-gray-200 p-4 text-xs md:text-sm text-gray-700 md:border-r">
                    {item.scope}
                  </div>
                  <div className="border-b border-gray-200 p-4 text-xs md:text-sm font-semibold text-[#F26422]">
                    {item.anchor}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[17px] leading-8 text-gray-700">
              Ask yourself one question. What is one avoided mistake worth? Many clients will pay to prevent pain.
            </p>
          </section>

          {/* What To Say When Clients Ask */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              What To Say When Clients Ask “What Do You Mean By Advisory?”
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              Say this in one breath. Keep it direct:
            </p>
            <blockquote className="mt-4 border-l-4 border-[#F26422] bg-[#FFF4ED] p-5 text-lg font-semibold leading-8 text-[#1B2639]">
              &ldquo;Advisory means you meet regularly. You review numbers together. You decide next steps. You plan before deadlines. You track results.&rdquo;
            </blockquote>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              Then ask a question: Do you want proactive planning? Or only filing?
            </p>
          </section>

          {/* How To Convert Compliance Clients */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How To Convert Compliance Clients Into Advisory Clients
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              Start with your best clients. Choose ones who respond. Choose ones who earn enough to care. Choose ones with decision points. Then use a two-step conversion.
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#1B2639]">Step 1: Run A Paid Diagnostic</h3>
                <p className="mt-2 text-[17px] leading-8 text-gray-700">
                  A diagnostic is advisory&rsquo;s entry point. It is also your filter. Your diagnostic can include:
                </p>
                <BulletList items={diagnosticItems} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1B2639]">Step 2: Offer A 6 Or 12 Month Advisory Plan</h3>
                <p className="mt-2 text-[17px] leading-8 text-gray-700">
                  Do not sell &ldquo;forever.&rdquo; Sell a term. Terms reduce hesitation. Terms also help you measure success. Offer two options. A basic plan and a premium plan. Keep the difference obvious.
                </p>
              </div>
            </div>
          </section>

          {/* What Tools And Systems You Need */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              What Tools And Systems You Need To Deliver Advisory Consistently
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              You need consistency more than tools. Still, a simple stack helps. Use tools that reduce manual work. Look at how firms are{" "}
              <Link href="/blogs/streamlining-audit-processes-with-tax-software" className={inlineLinkClass}>
                streamlining audit processes with tax software
              </Link>{" "}
              and automation to keep client delivery consistent and stress-free. Most advisory delivery needs:
            </p>
            <BulletList items={toolsNeeded} />
            <p className="mt-5 text-[17px] leading-8 text-gray-700">
              Do you have these yet? If not, build them before selling hard.
            </p>
          </section>

          {/* How To Run Advisory Meetings */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How To Run Advisory Meetings Without Rambling
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              Start with a fixed agenda. Make meetings short, like the one-on-one meetings with employees that help in focusing on key issues. Keep action items clear. Always end with next steps. A clean 30-minute agenda works well:
            </p>
            <BulletList items={agendaItems} />
          </section>

          {/* Beginner, Intermediate, And Expert Advisory Paths */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Beginner, Intermediate, And Expert Advisory Paths (So You Know What To Build Next)
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              You should match your advisory level to your current skill. You can grow step by step. You do not need to jump to complex planning.
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#1B2639]">Beginner Level: Build Confidence With Simple Planning</h3>
                <p className="mt-2 text-[17px] leading-8 text-gray-700">
                  You focus on clarity and routine. You do basic tax projections. You set up estimated payments. You fix bookkeeping flow. You can learn more about{" "}
                  <Link href="/blogs/how-regular-training-can-improve-your-accounting-accuracy" className={inlineLinkClass}>
                    how regular training can improve your accounting accuracy
                  </Link>{" "}
                  to ensure that your team delivers accurate financials for clients.
                  <br />
                  <strong>You measure:</strong>
                </p>
                <BulletList items={beginnerMetrics} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1B2639]">Intermediate Level: Drive Decisions And Profit Improvements</h3>
                <p className="mt-2 text-[17px] leading-8 text-gray-700">
                  You expand into cash flow. You track KPIs. You help with pricing. You help with hiring timing.
                  <br />
                  <strong>You measure:</strong>
                </p>
                <BulletList items={intermediateMetrics} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1B2639]">Expert Level: Lead Strategic Tax And Business Planning</h3>
                <p className="mt-2 text-[17px] leading-8 text-gray-700">
                  You lead entity strategy. You guide compensation planning. You coordinate with legal and finance. This is where{" "}
                  <Link href="/blogs/the-role-of-mentorship-in-leadership-development" className={inlineLinkClass}>
                    the role of mentorship in leadership development
                  </Link>{" "}
                  becomes vital as you learn to guide client businesses. You support exits and acquisitions.
                  <br />
                  <strong>You measure:</strong>
                </p>
                <BulletList items={expertMetrics} />
              </div>
            </div>
          </section>

          {/* How To Avoid The Most Common Advisory Mistakes */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How To Avoid The Most Common Advisory Mistakes
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              You can avoid most problems with boundaries and structure. Many firms fail here. The most common issues are predictable:
            </p>
            <BulletList items={commonMistakes} />
            <p className="mt-5 text-[17px] leading-8 text-gray-700">
              Fixing these makes advisory enjoyable.
            </p>
          </section>

          {/* How To Track And Prove Advisory Value */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How To Track And Prove Advisory Value With Simple Metrics
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              You must show impact. Impact sells renewals. Impact also reduces price pressure. Track value in a simple monthly scorecard. Keep it client-specific. Use a few metrics only:
            </p>
            <BulletList items={valueMetrics} />
            <p className="mt-5 text-[17px] leading-8 text-gray-700">
              Then quantify one thing. &ldquo;This plan likely saved $X.&rdquo; Clients remember that.
            </p>
          </section>

          {/* How To Position Yourself */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How To Position Yourself If You Are New To Tax Or Accounting
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              You can still move into advisory. You must be honest. You must be structured. You must be supervised when needed. Focus on one promise. You bring clarity. You bring process. You bring consistency. If you are switching careers, ask yourself this. Do you already guide people? Teachers do. Salespeople do. Agents do. Advisory is guidance with numbers. That is why platforms like TSG ProAdvisor exist. Our mission is to empower you. You can build and scale your firm. You can do it anytime. You can do it anywhere.
            </p>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              That is why platforms like TSG ProAdvisor exist. Our mission is to show you{" "}
              <Link href="/blogs/how-technology-is-revolutionizing-tax-and-accounting-education" className={inlineLinkClass}>
                how technology is revolutionizing tax and accounting education
              </Link>{" "}
              and help you build and scale your firm.
            </p>
          </section>

          {/* Final Thought */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Final Thought
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              You transition best when you keep your plan simple. Start with one offer. Sell a diagnostic. Put clients on a rhythm. Track impact. Standardize delivery. Advisory is not extra work. It is better work. It is work that compounds.
            </p>
          </section>

          {/* START YOUR JOURNEY WITH TSG PROADVISOR (CTA Box) */}
          <section className="mt-12 rounded-2xl bg-[#131B2A] p-6 md:p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#F26422]">
              Start Your Journey
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              START YOUR JOURNEY WITH TSG PROADVISOR
            </h2>
            <p className="mt-4 max-w-3xl text-white/80 leading-8">
              If you want to stop living by deadlines, we get it. We built TSG ProAdvisor to help you shift into higher-value work with a real roadmap. We empower you to build and scale a tax and accounting business, no matter your background. If you are ready to embrace the future, anytime and anywhere, we are ready to help you take the next step.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-[#F26422] px-8 py-3 font-bold text-white transition hover:bg-white hover:text-[#F26422]"
              >
                Join TSG ProAdvisor Today
              </Link>
            </div>
          </section>

          {/* FAQs */}
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

          {/* Disclaimer */}
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

            {/* Active post highlight */}
            <Link
              href={`/blogs/${transitionComplianceToAdvisoryPost.slug}`}
              className="flex items-start gap-3 ps-3 py-3 shadow bg-white my-3 border-l-4 border-[#F26422]"
            >
              <Image
                width={120}
                height={120}
                src={transitionComplianceToAdvisoryPost.featuredImage.image.url}
                alt={transitionComplianceToAdvisoryPost.featuredImage.altText}
                className="w-[100px] h-[72px] rounded object-cover"
              />
              <div className="font-bold text-black line-clamp-2 text-sm">
                {transitionComplianceToAdvisoryPost.title}
              </div>
            </Link>

            {/* Other posts */}
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
