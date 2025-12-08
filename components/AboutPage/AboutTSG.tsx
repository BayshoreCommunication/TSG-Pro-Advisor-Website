import Image from "next/image";
import React from "react";
import Reveal from "../motion/Reveal";
import Link from "next/link";

const AboutTSG = () => {
  return (
    <div className="bg-[#131313] text-white">
      <div className=" max-w-[1640px] mx-auto px-8 w-full py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About TSG <br /> ProAdvisor
            </h2>
            <Image
              src="/images/aboutPage/AboutTSG.png"
              alt=""
              width={560}
              height={600}
            ></Image>
          </div>
          <div className="flex flex-col gap-2 max-w-4xl">
            <Reveal y={80} opacityFrom={0} duration={1}>
              <p className="text-base font-bold leading-relaxed ">
                Welcome to TSG ProAdvisor: Unlocking the Future of Tax &
                Accounting!
              </p>
            </Reveal>
            <Reveal y={80} opacityFrom={0} duration={1.2}>
              <p className="text-base  leading-relaxed ">
                There’s never been a more thrilling time to be a part of the tax
                and accounting industry! Rapid advancements in technology and a
                growing demand for expert advice have created boundless
                opportunities for aspiring entrepreneurs and established
                professionals alike. That’s where TSG ProAdvisor steps in!
              </p>
            </Reveal>
            <Reveal y={80} opacityFrom={0} duration={1.5}>
              <p className="text-base  leading-relaxed ">
                At TSG ProAdvisor, our mission is to empower YOU to achieve your
                dreams of building and scaling a successful tax and accounting
                business. Our platform is meticulously designed to cater to
                individuals from all walks of life; be it real estate agents,
                salespeople, teachers, insurance agents, stay-at-home parents,
                or seasoned tax pros. We help everyone  the has the potential to
                excel in this dynamic industry and achieve success! Embrace the
                Future, Anytime & Anywhere
              </p>
            </Reveal>
            <Reveal y={80} opacityFrom={0} duration={1.8}>
              <p className="text-base  leading-relaxed ">
                With our cutting-edge platform, you can tap into a wealth of
                knowledge and resources, 24/7. You’ll have access to the
                brightest minds in the industry through our Business Mentorship
                Program, guiding you every step of the way as you start or grow
                your business. Our comprehensive course offerings cover
                everything from taxes, accounting, and bookkeeping, to
                leadership, marketing, and business scaling. We’re constantly
                updating and expanding our curriculum to ensure you stay ahead
                of the curve in this ever-evolving landscape. We are the #1 Tax
                Professional Training & Business Platform in the World:
                Experience the Difference!
              </p>
            </Reveal>
            <Reveal y={80} opacityFrom={0} duration={2}>
              <p className="text-base  leading-relaxed ">
                TSG ProAdvisor’s World Class Membership platform is designed to
                equip you with everything you need to thrive in the tax and
                accounting world. We offer top-notch Tax & Accounting Education,
                professional Tax Software, Business mentorship, and so much
                more. When you choose TSG ProAdvisor, you’re not just joining a
                training platform—you’re joining a community of like-minded
                individuals, fueled by passion and driven to succeed. So why
                wait any longer? Come, be a part of this exhilarating journey
                and experience the unparalleled benefits of TSG ProAdvisor
                today! Together, let’s unlock the future of tax and accounting,
                one success story at a time.
              </p>
            </Reveal>
            <Reveal y={80} opacityFrom={0} duration={2.5}>
              <Link
                href="/contact"
                className="
                relative px-10 py-4 bg-primary text-white hover:text-primary font-bold text-lg rounded-xl 
                inline-flex items-center overflow-hidden group
                transition-colors duration-300
                mt-6
              "
              >
                <span className="relative z-10">
                  Connect with TSG Pro Advisor
                </span>

                {/* Creative Hover Animation */}
                <span
                  className="
                  absolute inset-0 bg-white 
                  translate-y-full group-hover:translate-y-0 
                  transition-transform duration-300
                "
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTSG;
