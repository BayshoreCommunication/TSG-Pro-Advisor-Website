import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import RoundImageSlider from "../shared/RoundImageSlider";

export default function HelpYouGrow() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* TOP CONTENT */}
      <div className="max-w-[1640px] mx-auto px-8 py-8 md:py-16">
        <div className="max-w-4xl mx-auto mb-6 lg:mb-10 xl:mb-20">

          <Reveal y={100} opacityFrom={0} duration={3}>
          <h1 className="text-center text-4xl md:text-5xl lg:text-[52px] font-semibold mb-5 text-black arya-font">
            How We Help You Grow
          </h1>
          </Reveal>
          <Reveal y={100} opacityFrom={0} duration={3}>
          <p className="text-center">
            TSG ProAdvisor gives you the support, tools, and education you need
            to build and grow a successful tax and accounting business. Whether
            you are starting out or improving an existing business, you can
            learn at your own pace, access software that supports your workflow,
            and get guidance from experienced mentors.
          </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 md:gap-64 gap-10 text-center md:text-left ">
          <Reveal x={100} opacityFrom={0} duration={3}>
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-3">
              Education That Builds Confidence
            </h3>
            <p className="text-gray-600 text-sm mb-4 max-w-[300px] ">
              Learn the skills you need to handle tax and accounting work with
              more accuracy and confidence. Our training helps you strengthen
              your knowledge and improve the way you serve your clients.
            </p>
            <button className="text-[#F16128] font-semibold text-sm">
              LEARN MORE
            </button>
          </div>
          </Reveal>
          <Reveal x={100} opacityFrom={0} duration={3}>   

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Professional Tax Software
            </h3>
            <p className="text-gray-600 text-sm mb-4 max-w-[300px]">
              Use reliable, easy-to-navigate tax software designed to help you
              work accurately and efficiently. Our platform supports smoother
              workflows and better results.
            </p>
            <button className="text-[#F16128] font-semibold text-sm">
              LEARN MORE
            </button>
          </div>
          </Reveal>
          <Reveal x={100} opacityFrom={0} duration={3}>
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-3">
              Mentorship and Community Support
            </h3>
            <p className="text-gray-600 text-sm mb-4 max-w-[300px]">
              Get support from a community of professionals and access
              mentorship that helps you stay motivated, build your skills, and
              grow your business step by step.
            </p>
            <button className="text-[#F16128] font-semibold text-sm">
              LEARN MORE
            </button>
          </div>
          </Reveal>
        </div>
      </div>

      {/* Slider */}
      <RoundImageSlider />
    </section>
  );
}
