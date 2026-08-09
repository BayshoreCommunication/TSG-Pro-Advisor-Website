import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { documentationInDefendingTaxFilingsPost } from "@/components/static-blogs/blogs-metadata";

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
  "Documentation wins audits. It turns claims into facts.",
  "Reconcile books to bank statements every month.",
  "Store files in a consistent folder system.",
  "Keep records longer for complex items.",
];

const retentionData = [
  {
    type: "Filed Tax Returns",
    keep: "7 Years",
    matters: "Supports prior-year positions and comparisons",
  },
  {
    type: "Receipts For Deductions",
    keep: "7 Years",
    matters: "Backs up expense eligibility and amounts",
  },
  {
    type: "Bank And Card Statements",
    keep: "7 Years",
    matters: "Shows cash flow and payment proof",
  },
  {
    type: "Asset Purchase & Improvement Records",
    keep: "Life Of Asset + 7 Years",
    matters: "Proves basis, depreciation, and gain or loss",
  },
  {
    type: "Payroll Records",
    keep: "7 Years",
    matters: "Supports wages, taxes, and compliance",
  },
];

const originalData = [
  {
    area: "Income",
    source: "Invoices + Processor Reports",
    saveMonthly: "Invoice list, paid dates, platform payout report",
  },
  {
    area: "Expenses",
    source: "Receipts + Card Statements",
    saveMonthly: "Receipts PDFs, statement PDF, matching notes",
  },
  {
    area: "Mileage",
    source: "Trip Log App",
    saveMonthly: "Export of trips with purpose and odometer",
  },
  {
    area: "Home Office",
    source: "Measurements + Bills",
    saveMonthly: "Room dimensions, lease, utilities summary",
  },
  {
    area: "Inventory",
    source: "Purchase Orders + Counts",
    saveMonthly: "Purchases, count sheet, shrink notes",
  },
];

const faqs = [
  {
    question: "How should I Best Keep Receipts In Case Of An Audit?",
    answer:
      "Use scans or clear photos. Save searchable PDFs. Name files with date, vendor, amount, and purpose. Back up to cloud plus local storage. Keep folders by year and category.",
  },
  {
    question: "Can Bank Statements Replace Missing Receipts?",
    answer:
      "Sometimes. But not always. Statements prove payment. They rarely prove business purpose. Use vendor reprints, invoices, and written notes to fill gaps. Combine sources to strengthen support.",
  },
  {
    question: "How Detailed Should My Mileage Log Be?",
    answer:
      "It should be contemporaneous and specific. Track date, start and end miles, destination, and business purpose. Monthly exports help. Avoid estimates. Exact logs defend vehicle deductions best.",
  },
  {
    question: "How Long Should I Keep Records For Assets And Depreciation?",
    answer:
      "Keep asset records for the life of the asset plus seven years. You need purchase proof, improvements, and depreciation schedules. These affect gain, loss, and recapture when you sell.",
  },
  {
    question: "What If My Documentation Is Digital Only?",
    answer:
      "Digital is fine if it is readable and retrievable. Keep originals when possible. Ensure images show key receipt fields. Maintain backups. Use consistent naming and folders to find files fast.",
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

export default function TheImportanceOfDocumentationInDefendingTaxFilings({
  recentPosts = [],
}: {
  recentPosts?: RecentPost[];
}) {
  const sidebarPosts = recentPosts.filter(
    (item, index, arr) =>
      item.slug !== documentationInDefendingTaxFilingsPost.slug &&
      arr.findIndex((post) => post.slug === item.slug) === index
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
                src={documentationInDefendingTaxFilingsPost.featuredImage.image.url}
                alt={documentationInDefendingTaxFilingsPost.featuredImage.altText}
                title={documentationInDefendingTaxFilingsPost.featuredImage.title}
                aria-describedby="featured-image-description"
                className="w-full h-auto object-cover object-top"
                priority
              />
            </div>
            <figcaption className="mt-3 text-sm italic text-gray-600">
              {documentationInDefendingTaxFilingsPost.featuredImage.caption}
            </figcaption>
            <p id="featured-image-description" className="sr-only">
              {documentationInDefendingTaxFilingsPost.featuredImage.description}
            </p>
          </figure>

          {/* Dates */}
          <p className="text-sm italic text-black mt-4">
            Published: {postDate(documentationInDefendingTaxFilingsPost.createdAt)} | Updated: {postDate(documentationInDefendingTaxFilingsPost.updatedAt)}
          </p>

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold text-[#1B2639] my-6">
            {documentationInDefendingTaxFilingsPost.title}
          </h1>

          {/* Subtitle / Intro */}
          <div className="mt-6 rounded-2xl border border-[#F26422]/20 bg-[#FFF4ED] p-5 md:p-7">
            <p className="text-gray-700 leading-relaxed font-semibold text-lg">
              Your financial insurance policy is for tax purposes. If your return is audited by a tax authority, the burden of proof is on you. Lack of clear records can result in the disallowance of legitimate deductions and harsh financial penalties.
            </p>
          </div>

          {/* Key Takeaways */}
          <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 md:p-7 shadow">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Key Takeaways
            </h2>
            <BulletList items={keyTakeaways} />
          </section>

          {/* Why Documentation Matters More Than A Perfect Return */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Why Documentation Matters More Than A Perfect Return
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Documentation matters because the burden of proof is often on you. The tax authority can ask questions later. Your return is only the starting point. Your records finish the story.
              </p>
              <p>
                If you claim an expense, you must support it. If you report income, you must show it is complete. If you take a credit, you must meet each rule.
              </p>
              <p>
                Good records also protect you from honest mistakes. They help you amend fast. They help your preparer work with confidence.
              </p>
            </div>
          </section>

          {/* What “Defending A Tax Filing” Really Means */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              What “Defending A Tax Filing” Really Means
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Tax filing defence is more than a tax return. This means you can answer questions with obvious proof, reference every statistic back to an authoritative source, and show that your reporting technique has remained the same all through the file.
              </p>
              <p>
                What it really comes down to are three key ingredients for any tax filing: accuracy, eligibility and timing. Accuracy means the amounts on your return are correct and supported by records. The term “eligible” means any deduction, credit or exemption must be allowed by tax law. Timing guarantees that all items are recorded in the period required by the applicable standards.
              </p>
              <p>
                If any of these three items cannot be established, the IRS or other tax authority may disallow the item and the taxpayer may be subject to additional taxes, fines or further examination.
              </p>
            </div>
          </section>

          {/* What Auditors Look For First When They Review Your Records */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              What Auditors Look For First When They Review Your Records
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Auditors will typically start their review of your records by looking for patterns, irregularities and missing information before they get into individual transactions. They compare your return to industry norms, analyse your previous tax returns and look for anything that appears out of place or doesn’t add up.
              </p>
              <p>
                One of the first things they notice is a lack of paperwork, such as missing receipts or poor recordkeeping. They also watch for round number repetitions, significant deductions for claimed income, big cash transactions not backed up by logs, and dramatic swings in reporting from one tax year to the next. These are not always red flags, but often lead auditors to ask for additional evidence.
              </p>
              <p>
                Auditors don’t just look at the figures they also undertake a reasonableness test They will check that each claim makes sense to you and that you can show it was for a genuine business or tax reason. If you can document the claim with the right papers and explain the claim, you are in a much stronger position in an audit.
              </p>
            </div>

            {/* Visual Overview of Audit Vulnerabilities */}
            <div className="mt-6 rounded-2xl bg-[#131B2A] p-6 text-white shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-[#F26422] mb-4">
                Visual Overview of Audit Vulnerabilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                  <h4 className="font-bold text-white text-base">1. Missing Receipts & Documentation</h4>
                  <p className="text-sm text-white/70 mt-1">Lack of original paper or digital proof for claimed deductions.</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                  <h4 className="font-bold text-white text-base">2. Round Number Repetitions</h4>
                  <p className="text-sm text-white/70 mt-1">Repeated exact figures indicating estimated rather than actual expenses.</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                  <h4 className="font-bold text-white text-base">3. Unbacked Cash Transactions</h4>
                  <p className="text-sm text-white/70 mt-1">Large cash payments or withdrawals lacking detailed logs or receipts.</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                  <h4 className="font-bold text-white text-base">4. Year-over-Year Swings</h4>
                  <p className="text-sm text-white/70 mt-1">Dramatic variations in reported income or deductions between tax years.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Which Documents Prove Income The Best */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Which Documents Prove Income The Best
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Income proof should be complete and easy. You should keep third party forms first. You should also keep internal records to fill gaps.
              </p>
              <p className="font-semibold text-[#1B2639]">
                The strongest income records include:
              </p>
            </div>
            <BulletList
              items={[
                "Bank deposit summaries by month.",
                "Sales reports from payment processors.",
                "Invoices with paid status and dates.",
                "Signed contracts for large projects.",
              ]}
            />
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              Do you use multiple platforms? Then export reports monthly. Save them as PDF. Also save the raw CSV.
            </p>

            {/* MID-DOCUMENT STRATEGY CALL CTA */}
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#1B2639] to-[#131B2A] p-6 md:p-8 text-white text-center shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#F26422]">
                MID-DOCUMENT STRATEGY CALL
              </p>
              <h3 className="mt-2 text-xl md:text-3xl font-bold">
                Want fewer tax surprises?
              </h3>
              <p className="mt-3 text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                Let TSG Pro Advisor set up a monthly workflow that sticks and protects your revenue.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-xl bg-[#F26422] px-8 py-3 font-bold text-white transition hover:bg-white hover:text-[#F26422]"
              >
                👉 Contact TSG Pro Advisor Now
              </Link>
            </div>
          </section>

          {/* Which Documents Prove Expenses And Deductions The Best */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Which Documents Prove Expenses And Deductions The Best
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                The best proof of expenses and deductions is documentation that confirms two things: You really paid the expense and it was incurred for a lawful business purpose. The auditor usually wants to see documentation that proves both of these things. It is often not enough to have merely a receipt or only a bank statement.
              </p>
              <p>
                Itemised receipts containing vendor, date of purchase, and products purchased, combined with invoices and evidence of payment, are the best documentation. Receipts should match bank statements and credit card statements to give a clear audit trail. If you claim vehicle expenditures, keep a mileage journal that shows the date, destination and business reason of each journey. Please write down the size of your dedicated workspace, along with your utility bills and other household expense documentation that supports your claim for home office deductions.
              </p>
              <p>
                In addition, while keeping those documents, get in the habit of noting the business reason of each expense as you incur it. A simple remark on why the spending is needed gives great context and is much more accurate than relying on your memory months or years down the line.
              </p>
            </div>
          </section>

          {/* What A “Complete Receipt” Should Show */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              What A “Complete Receipt” Should Show
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                A complete receipt should show key fields. If the receipt lacks them, add notes.
              </p>
              <p className="font-semibold text-[#1B2639]">You want:</p>
            </div>
            <BulletList
              items={[
                "Vendor name.",
                "Date and time.",
                "Items purchased.",
                "Total amount and tax.",
                "Payment method.",
              ]}
            />
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              For meals, add who attended. Add the business topic. Add the location.
            </p>
          </section>

          {/* How Documentation Rules Change By Taxpayer Type */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How Documentation Rules Change By Taxpayer Type
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Your record needs to change by how you file. Complexity drives proof needs.
              </p>
            </div>

            {/* Sub-section: Employee */}
            <div className="mt-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#1B2639]">
                If You Are An Employee With Simple Deductions
              </h3>
              <div className="mt-2 text-[17px] leading-8 text-gray-700">
                <p className="font-semibold text-[#1B2639]">You still need proof for:</p>
              </div>
              <BulletList
                items={[
                  "Charitable gifts.",
                  "Education credits.",
                  "Medical costs, if claimed.",
                  "Dependent care expenses.",
                ]}
              />
              <p className="mt-3 text-[17px] leading-8 text-gray-700">
                Keep year end summaries too.
              </p>
            </div>

            {/* Sub-section: Freelancer */}
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#1B2639]">
                If You Are A Freelancer Or Sole Proprietor
              </h3>
              <div className="mt-3 space-y-4 text-[17px] leading-8 text-gray-700">
                <p>
                  Business and personal money can easily become confused and freelancers and sole entrepreneurs find themselves under the microscope. These two need to be kept separate for the purpose of filing your taxes accurately as well as protecting your deductions if your return is ever audited.
                </p>
                <p>
                  Open a separate bank account for your business. Keep your business income and expenses separate from your personal money. Keep invoices, contracts and customer communication that support the services you completed and money you received. All business expenses must be accompanied with receipts and a short explanation of the business rationale. If car or travel expenditures are claimed, keep thorough mileage logs and travel records showing the dates, places and business purpose of each trip.
                </p>
                <p>
                  Good record-keeping makes your taxes quicker to file, and it gives you a paper trail that can be used to support your return if you are audited or reviewed.
                </p>
              </div>
            </div>

            {/* Sub-section: Corporation */}
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#1B2639]">
                If You Run A Corporation Or Partnership
              </h3>
              <div className="mt-3 text-[17px] leading-8 text-gray-700">
                <p>You need formal records. You also need governance proof.</p>
                <p className="mt-2 font-semibold text-[#1B2639]">Keep:</p>
              </div>
              <BulletList
                items={[
                  "Board minutes for key decisions.",
                  "Shareholder or partner agreements.",
                  "Payroll filings and support.",
                  "Accountable plan records for reimbursements.",
                ]}
              />
            </div>
          </section>

          {/* How Long You Should Keep Tax Records For Real Defense */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How Long You Should Keep Tax Records For Real Defense
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Keep records long enough to answer questions later. Keep longer for assets and basis items. Carryovers require longer storage.
              </p>
              <p>
                This guide offers tips. It is not legal advice. It is a strong baseline.
              </p>
            </div>

            {/* Retention Table */}
            <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#131B2A] text-white">
                  <tr>
                    <th className="px-5 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Record Type
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Keep For
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Why It Matters
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {retentionData.map((row, index) => (
                    <tr
                      key={row.type}
                      className={index % 2 === 0 ? "bg-[#F4F7FC]" : "bg-white"}
                    >
                      <td className="px-5 py-4 text-sm font-bold text-[#1B2639]">
                        {row.type}
                      </td>
                      <td className="px-5 py-4 text-sm font-semibold text-[#F26422]">
                        {row.keep}
                      </td>
                      <td className="px-5 py-4 text-sm text-gray-700">
                        {row.matters}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-5 text-[17px] leading-8 text-gray-700">
              If you cannot store paper, store scans. Use searchable PDFs. Keep backups.
            </p>
          </section>

          {/* What “Original Data” Looks Like In Real Documentation */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              What “Original Data” Looks Like In Real Documentation
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Original data means records created at the time. It means unedited sources. It also means clear audit trails.
              </p>
              <p>
                Here is a simple benchmark set you can create. It uses your own activity.
              </p>
            </div>

            {/* Original Data Table */}
            <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#131B2A] text-white">
                  <tr>
                    <th className="px-5 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Area
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Original Data Source
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      What You Should Save Monthly
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {originalData.map((row, index) => (
                    <tr
                      key={row.area}
                      className={index % 2 === 0 ? "bg-[#F4F7FC]" : "bg-white"}
                    >
                      <td className="px-5 py-4 text-sm font-bold text-[#1B2639]">
                        {row.area}
                      </td>
                      <td className="px-5 py-4 text-sm font-semibold text-[#F26422]">
                        {row.source}
                      </td>
                      <td className="px-5 py-4 text-sm text-gray-700">
                        {row.saveMonthly}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-5 text-[17px] leading-8 text-gray-700">
              This table is “original data” because it comes from you. It is created as work happens. It also reduces later reconstruction.
            </p>
          </section>

          {/* How To Build A Documentation System That Survives An Audit */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How To Build A Documentation System That Survives An Audit
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Building a system that runs monthly is crucial. Avoid relying on year-end cleanups as the rush during this period often results in missing proof.
              </p>
              <p>
                To create an effective documentation system, implement three layers:
              </p>
            </div>
            <BulletList
              items={[
                "Capture documents quickly.",
                "Organize them according to established rules.",
                "Reconcile them with your books.",
              ]}
            />
          </section>

          {/* What Folder Structure Keeps Things Simple */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              What Folder Structure Keeps Things Simple
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Adopt a consistent folder structure for each year, using the same names. This will make it easier for your future self to navigate.
              </p>
              <p className="font-semibold text-[#1B2639]">
                A clean structure might look like this:
              </p>
            </div>
            <BulletList
              items={[
                "Income",
                "Expenses",
                "Assets",
                "Payroll",
                "Taxes Filed",
                "Notes And Memos",
              ]}
            />
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              Within the “Expenses” folder, split documents by month and maintain consistency.
            </p>
          </section>

          {/* How To Label Files So They Explain Themselves */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How To Label Files So They Explain Themselves
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                File names should provide quick answers. Keep them short and easily searchable.
              </p>
              <p className="font-semibold text-[#1B2639]">Use this naming pattern:</p>
              <div className="rounded-xl bg-[#131B2A] p-4 text-[#F26422] font-mono text-sm">
                YYYY-MM-DD_Vendor_Amount_Purpose.pdf
              </div>
              <p className="font-semibold text-[#1B2639] pt-2">For example:</p>
              <div className="rounded-xl bg-[#131B2A] p-4 text-white font-mono text-sm">
                2026-02-14_ToolStore_86.42_JobSupplies.pdf
              </div>
            </div>
          </section>

          {/* How Often Should You Reconcile For Strong Defense */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How Often Should You Reconcile For Strong Defense
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                A consistent reconciliation of your financial records is one of the finest strategies to enhance your tax return and be prepared in case of an audit. Most firms find that reconciling on a monthly basis strikes the best mix between accuracy and efficiency. However, if a business has a high volume of transactions it may wish to reconcile its accounts on a weekly basis so that anomalies can be identified before they become major problems.
              </p>
              <p>
                At the end of each month, you should perform a reconciliation to ensure your bank account balances agree with your accounting records, that credit and debit card transactions are backed by receipts, and that the income represented in your books matches the deposits received. It should also detect any missing, duplicated or inexplicable transactions so that they can be investigated and resolved in a timely way.
              </p>
              <p>
                Having a reliable reconciliation schedule will help you maintain a reliable financial record throughout the year. It makes tax prep quicker, improves your documentation, and makes answering questions in an audit a lot easier. Regular reviews also lower the chance of errors and eliminate the last-minute panic when tax time arrives.
              </p>
            </div>
          </section>

          {/* What To Do If You Lost Receipts Or Records */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              What To Do If You Lost Receipts Or Records
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                In the unfortunate event of lost records or receipts, replace them as quickly as possible without making guesses. Utilize secondary proof and write notes to clarify the situation.
              </p>
              <p className="font-semibold text-[#1B2639]">
                You can often rebuild lost information using:
              </p>
            </div>
            <BulletList
              items={[
                "Bank statements and card statements.",
                "Vendor reprints and email confirmations.",
                "Shipment records and job files.",
                "Calendar entries and project notes.",
              ]}
            />
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                For every gap in your records, add a written memo stating facts only. Include dates and amounts, while also explaining the business reason behind each expense.
              </p>
              <p>
                In instances where you need to replace lost payroll records, you might find resources like{" "}
                <Link
                  href="https://www.ssa.gov/"
                  className={inlineLinkClass}
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  this guide from SSA
                </Link>{" "}
                helpful in navigating through the process efficiently.
              </p>
            </div>
          </section>

          {/* How Documentation Standards Change For Higher Risk Deductions */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              How Documentation Standards Change For Higher Risk Deductions
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Some tax deductions are scrutinised more than others. Some deductions are riskier than others, either because they are more often claimed incorrectly or because they have more restrictive tax rules. So, we need to document these things in more depth and completely, so we can pass an audit.
              </p>
              <p>
                Common higher risk deductions are meals, business travel, automotive expenses, home office deductions and payments to independent contractors. Receipts are vital, but they are not enough in and of themselves. Tax authorities generally seek more documentation to show the business purpose of each expense and the way the deduction was calculated.
              </p>
              <p>
                Keep good records and save your receipts for these deductions. Please be sure to include the date and location of the expense, who was involved (if appropriate), and most importantly the reason the expense was incurred for your firm. If you ever have to defend a tax file, you&apos;ll find it much easier to do so with clear, contemporaneous documentation than to try and reconstruct the details months or years later.
              </p>
            </div>
          </section>

          {/* Beginner Level Checklist For Defensible Tax Records */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Beginner Level Checklist For Defensible Tax Records
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Start simple. Start consistent. You do not need complex software yet.
              </p>
              <p className="font-semibold text-[#1B2639]">Do these basics:</p>
            </div>
            <BulletList
              items={[
                "Create a separate account for business.",
                "Save all the receipts in one app.",
                "Export statements monthly.",
                "Write purpose notes on key items.",
              ]}
            />
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              Can you do this for 30 days? If yes, you can scale.
            </p>
          </section>

          {/* Intermediate Level Practices That Reduce Audit Time */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Intermediate Level Practices That Reduce Audit Time
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Intermediate systems cut response time. They also reduce follow-up questions.
              </p>
              <p className="font-semibold text-[#1B2639]">Focus on:</p>
            </div>
            <BulletList
              items={[
                "Monthly reconciliation and variance notes.",
                "Standard categories that match the return.",
                "Digital copies of all source documents.",
                "A yearly “tax pack” folder per year.",
              ]}
            />
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              If your preparer asks fewer questions, you are improving.
            </p>
          </section>

          {/* Expert Level Documentation That Prevents Disputes Before They Start */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Expert Level Documentation That Prevents Disputes Before They Start
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Expert documentation creates audit trails. It also supports complex positions. It shows your method is repeatable.
              </p>
              <p className="font-semibold text-[#1B2639]">Expert practices include:</p>
            </div>
            <BulletList
              items={[
                "Written accounting policies for key items.",
                "Asset schedules with basis support.",
                "Accountable plans for reimbursements.",
                "Contemporaneous logs for travel and mileage.",
                "Memos for unusual transactions.",
              ]}
            />
            <p className="mt-4 text-[17px] leading-8 text-gray-700">
              If a number needs judgment, write a memo. Write it now, not later.
            </p>
          </section>

          {/* What You Should Send When You Get An Audit Notice */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              What You Should Send When You Get An Audit Notice
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                You don’t need to transmit all of your financial records just because you got an audit notification. Provide just the papers the tax authorities has specifically requested and organise them in a way that makes them easy to review. A clean, well-organised response helps the auditor verify your information and can limit the number of follow-up queries.
              </p>
              <p>
                A good audit package often starts with a brief cover summary that lists the documents being submitted and describes how they respond to the audit request. Prepare a well-organised index that relates each document to the appropriate line item on your tax return, then include copies of receipts, invoices and evidence of payment. If the audit involves risky deductions like travel, vehicle expenses or home office claims, include supporting logs, worksheets and explanation memos that outline the business purpose for each expense.
              </p>
              <p>
                The more you make it easy for an auditor to trace every number on your tax return back to the documentation that supports it, the easier the review process is likely to be. A good record, organised and complete, with a little explanation, can assist you to answer enquiries faster and to defend the file better.
              </p>
            </div>
          </section>

          {/* Final Thought */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
              Final Thought
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
              <p>
                Documentation is the difference between “I think” and “I can prove.” It protects your deductions. It protects your credits. It also protects your time.
              </p>
              <p>
                If you build a monthly system, you stay ready. If you wait until year end, you scramble. Your goal is simple. Make every number traceable.
              </p>
            </div>
          </section>

          {/* WORK WITH TSG Pro Advisor CTA */}
          <section className="mt-12 rounded-2xl bg-[#131B2A] p-6 md:p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#F26422]">
              WORK WITH TSG Pro Advisor
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Build Clear, Defensible Documentation Systems.
            </h2>
            <p className="mt-4 max-w-3xl text-white/80 leading-8">
              At TSG Pro Advisor, we help you build clear, defensible documentation systems. We organize what you have, fix what is missing, and implement a monthly workflow that sticks.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-xl bg-[#F26422] px-8 py-3 font-bold text-white transition hover:bg-white hover:text-[#F26422]"
            >
              👉 Get Started with TSG Pro Advisor
            </Link>
          </section>

          {/* FAQs Accordion */}
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
              Disclaimer: This blog is for informational purposes only. If you want to know anything in details, please contact TSG Pro Advisor.
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
              href={`/blogs/${documentationInDefendingTaxFilingsPost.slug}`}
              className="flex items-start gap-3 ps-3 py-3 shadow bg-white my-3 border-l-4 border-[#F26422]"
            >
              <Image
                width={120}
                height={120}
                src={
                  documentationInDefendingTaxFilingsPost.featuredImage.image.url
                }
                alt={
                  documentationInDefendingTaxFilingsPost.featuredImage.altText
                }
                className="w-[100px] h-[72px] rounded object-cover"
              />
              <div className="font-bold text-black line-clamp-2 text-sm">
                {documentationInDefendingTaxFilingsPost.title}
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
