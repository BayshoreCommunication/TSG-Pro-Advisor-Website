import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function MissionSection() {
  return (
    <section className="w-full flex justify-center px-8 py-8 md:py-16 overflow-hidden">
      <div className="max-w-[1640px] w-full">
        {/* Heading */}
        <div className="text-center relative mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-semibold arya-font">
            Our Mission
          </h2>
        </div>

        {/* --- Image Block 1 --- */}
        <div>
          <div className="relative mb-20">
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal x={-300} opacityFrom={0} duration={3}>
                {" "}
                <Image
                  src="/images/homepage/mission/Mission-1.png"
                  alt="Mission Image 1"
                  width={1600}
                  height={900}
                  className="w-full rounded-xl object-cover"
                />
              </Reveal>
              <Reveal x={300} opacityFrom={0} duration={3}>
                <Image
                  src="/images/homepage/mission/Mission-2.png"
                  alt="Mission Image 1"
                  width={1600}
                  height={900}
                  className="w-full rounded-xl object-cover"
                />
              </Reveal>
            </div>
            <div className="max-w-6xl mx-auto mt-6 md:mt-8 lg:-mt-14">
              <Reveal y={80} opacityFrom={0} duration={1.6}>
                <div className=" flex flex-col items-center justify-center  relative w-full px-4 py-3 lg:px-16 lg:py-10 bg-white/50 backdrop-blur-md shadow-lg rounded-2xl text-center">
                  <p className="  text-base lg:text-xl text-gray-700 leading-relaxed inline-block">
                    We built TSG ProAdvisor to help tax professionals grow with
                    structure, knowledge, and ongoing support.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
          <div>
            <div className="">
              <Reveal y={80} opacityFrom={0} duration={1.6}>
                <Image
                  src="/images/homepage/mission/Mission-4.png"
                  alt="Mission Image 1"
                  width={1600}
                  height={900}
                  className="w-full rounded-xl object-cover"
                />
              </Reveal>
            </div>
            <div className="max-w-6xl mx-auto mt-6 md:mt-8 lg:-mt-14">
              <Reveal y={80} opacityFrom={0} duration={1.6}>
                <div className=" flex  gap-4  md:flex-row items-center justify-center  relative w-full px-4 py-3 lg:px-16 lg:py-10 bg-white/50 backdrop-blur-md shadow-lg rounded-2xl text-center">
                  <Image
                    src="/images/logo.png"
                    alt="Mission Text"
                    width={200}
                    height={200}
                    className="w-full max-w-20 md:max-w-32 "
                  />
                  <p className="text-start  text-base lg:text-xl text-gray-700 leading-relaxed inline-block">
                    We built TSG ProAdvisor to help tax professionals grow with
                    structure, knowledge, and ongoing support.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
