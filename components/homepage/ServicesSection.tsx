import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import RoundImageSlider from "../shared/RoundImageSlider";

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* TOP CONTENT */}
      <div className="max-w-[1640px] mx-auto px-8 py-8 md:py-16">
        <div className="w-full flex justify-center mb-10">
          {/* Button */}
          <Reveal y={80} opacityFrom={0} duration={2.2}>
            <Link
              href="/services"
              className="
                relative px-10 py-4 bg-primary text-white hover:text-primary font-bold text-lg rounded-xl
                inline-flex items-center overflow-hidden group
                transition-colors duration-300
              "
            >
              <span className="relative z-10">Explore Our Services</span>

              {/* Creative Hover Animation */}
              <span
                className="
                  absolute inset-0 bg-black
                  translate-y-full group-hover:translate-y-0
                  transition-transform duration-300
                "
              />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Tax & Accounting Education
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Improve your skills, build confidence, and learn how to deliver
              better results.
            </p>
            <button className="text-[#F16128] font-semibold text-sm">
              LEARN MORE
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Professional Tax Software
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Use fast, accurate, and reliable tax software that supports your
              workflow.
            </p>
            <button className="text-[#F16128] font-semibold text-sm">
              LEARN MORE
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Business Mentorship</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get guidance to streamline your process and grow your business.
            </p>
            <button className="text-[#F16128] font-semibold text-sm">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      {/* Slider */}
      <RoundImageSlider />
    </section>
  );
}
