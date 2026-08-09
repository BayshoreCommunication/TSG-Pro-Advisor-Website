import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function MissionSection() {
  return (
    <section className="w-full flex justify-center px-8 pb-8 md:py-16 overflow-hidden">
      <div className="max-w-[1640px] w-full">
        {/* Heading */}
        <div className="text-center relative mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-semibold arya-font">
            Our Mission
          </h2>
        </div>

        {/* --- Image Block 1 --- */}
        <div>
          <div className="relative mb-10 md:mb-20">
            <div className="grid md:grid-cols-2 gap-4">
              <Reveal x={-100} opacityFrom={0} duration={3}>
                {" "}
                <div className="overflow-hidden rounded-xl">
                  <Image
                  src="/images/homepage/mission/mission-community.jpg"
                  alt="TSG ProAdvisor community attending a live event"
                  width={1600}
                  height={1067}
                  className="w-full h-[320px] md:h-[420px] rounded-xl object-cover transform transition-transform duration-500 hover:scale-110"
                />
                </div>
              </Reveal>
              <Reveal x={100} opacityFrom={0} duration={3}>
                  <div className="overflow-hidden rounded-xl">
                  
                <Image
                  src="/images/homepage/mission/mission-mentorship.jpg"
                  alt="A TSG ProAdvisor mentor speaking with tax professionals"
                  width={1600}
                  height={1067}
                  className="w-full h-[320px] md:h-[420px] rounded-xl object-cover transform transition-transform duration-500 hover:scale-110"
                />
                </div>
              </Reveal>
            </div>
            <div className="max-w-6xl mx-auto mt-6 md:mt-8 lg:-mt-14">
              <Reveal y={80} opacityFrom={0} duration={1.6}>
                <div className=" flex flex-col items-center justify-center  relative w-full px-4 py-3 lg:px-16 lg:py-10 bg-white/50 backdrop-blur-md shadow-lg rounded-2xl text-center transform transition-transform duration-500 hover:scale-110">
                  <p className="  text-base lg:text-xl text-gray-700 leading-relaxed inline-block">
                    We built TSG ProAdvisor to help tax professionals grow with
                    structure, knowledge, and ongoing support.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
          <div>
            <div className="max-w-6xl mx-auto overflow-hidden rounded-xl">
              <Reveal y={80} opacityFrom={0} duration={1.6}>
                <Image
                  src="/images/homepage/mission/mission-education.jpg"
                  alt="A tax professional leading a TSG ProAdvisor educational session"
                  width={1600}
                  height={1067}
                  className="w-full h-auto rounded-xl object-contain"
                />
              </Reveal>
            </div>
            <div className="max-w-6xl mx-auto mt-6 md:mt-8 lg:-mt-14">
              <Reveal y={80} opacityFrom={0} duration={1.6}>
                <div className=" flex  gap-4  md:flex-row items-center justify-center  relative w-full px-4 py-3 lg:px-16 lg:py-10 bg-white/50 backdrop-blur-md shadow-lg rounded-2xl text-center transform transition-transform duration-500 hover:scale-110">
                  <Image
                    src="/images/logo.png"
                    alt="Mission Text"
                    width={200}
                    height={200}
                    className="w-full max-w-20 md:max-w-32 "
                  />
                  <p className="text-start  text-base lg:text-xl text-gray-700 leading-relaxed inline-block ">
                    We turn practical education, proven tools, and trusted
                    mentorship into confidence that lasts well beyond tax
                    season.
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
