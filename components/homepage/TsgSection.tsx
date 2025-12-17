"use client";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

export default function TsgSection() {
  return (
    // <section className="relative w-full overflow-hidden px-8 py-8 md:py-16 min-h-screen">
    //   <div className="absolute inset-0 min-h-screen">
    //     <Image
    //       src="/images/homepage/tsg/bg.png"
    //       alt="TSG background"
    //       fill
    //       className="object-cover object-top"
    //     />
    //   </div>

    //   <div>
    //     <div className="">
    //       <Image
    //         src="/images/homepage/tsg/angle-image.png"
    //         alt="TSG background"
    //         width={1920}
    //         height={400}
    //       />
    //     </div>
    //     <div className="max-w-3xl mx-auto bg-[#F16128] rounded-[26px] p-8 md:p-12 text-white shadow-xl relative  md:mt-[800px] mt-[500px]">
    //       <Reveal y={100} opacityFrom={0} duration={3}>
    //         <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
    //           TSG ProAdvisor is leading the way.
    //         </h2>
    //       </Reveal>
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg md:text-xl">
    //         <Reveal y={100} opacityFrom={0} duration={3}>
    //           <div className="flex items-start gap-4">
    //             <Image
    //               src="/images/homepage/tsg/icon1.png"
    //               alt="support"
    //               width={48}
    //               height={48}
    //             />
    //             <p>Supporting over 5000 tax professionals nationwide</p>
    //           </div>
    //         </Reveal>

    //         <Reveal y={100} opacityFrom={0} duration={3}>
    //           <div className="flex items-start gap-4">
    //             <Image
    //               src="/images/homepage/tsg/icon4.png"
    //               alt="event"
    //               width={48}
    //               height={48}
    //             />
    //             <p>Hosting training and growth events across the U.S.</p>
    //           </div>
    //         </Reveal>

    //         <Reveal y={100} opacityFrom={0} duration={3}>
    //           <div className="flex items-start gap-4">
    //             <Image
    //               src="/images/homepage/tsg/icon3.png"
    //               alt="software"
    //               width={48}
    //               height={48}
    //             />
    //             <p>Providing professional software and mentorship</p>
    //           </div>
    //         </Reveal>

    //         <Reveal y={100} opacityFrom={0} duration={3}>
    //           <div className="flex items-start gap-4">
    //             <Image
    //               src="/images/homepage/tsg/icon2.png"
    //               alt="community"
    //               width={48}
    //               height={48}
    //             />
    //             <p>
    //               Building a community focused on integrity and lasting results
    //             </p>
    //           </div>
    //         </Reveal>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="relative w-full flex items-center justify-center min-h-[480px] lg:min-h-[480]">
      {/* Background Image */}
      <Image
        src="/images/homepage/tsg/bg.png"
        alt="Hero Background"
        fill
        className="hidden lg:block absolute inset-0 w-full h-full object-cover object-top"
        priority
      />
      <Image
        src="/images/homepage/tsg/bg-2.png"
        alt="Hero Background"
        fill
        className="absolute block lg:hidden inset-0 w-full h-full object-cover object-top"
        priority
      />

      {/* Content Container */}
      <div className="  px-8 w-full py-10 ">
        <div className="flex flex-col items-center text-center lg:mt-[550px] mt-[250px]">
          {/* Headline */}
          <div className="relative w-full">
            <div className="absolute inset-0 z-40  w-full -top-28">
              <Image
                src="/images/homepage/tsg/angle-image.png"
                alt="TSG background"
                width={1920}
                height={400}
                className="hidden lg:block"
              />
              <Image
                src="/images/homepage/tsg/angle-image-2.png"
                alt="TSG background"
                width={1920}
                height={400}
                className="block lg:hidden"
              />
            </div>
            <div className="max-w-3xl mx-auto bg-[#F16128] rounded-[26px] p-10   text-white shadow-xl relative  ">
              <Reveal y={100} opacityFrom={0} duration={3}>
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 md:mt-[80px] mt-0">
                  TSG ProAdvisor is leading the way.
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg md:text-xl">
                <Reveal y={100} opacityFrom={0} duration={3}>
                  <div className="flex items-start gap-4">
                    <Image
                      src="/images/homepage/tsg/icon1.png"
                      alt="support"
                      width={48}
                      height={48}
                    />
                    <p className="text-start">
                      Supporting over 5000 tax professionals nationwide
                    </p>
                  </div>
                </Reveal>

                <Reveal y={100} opacityFrom={0} duration={3}>
                  <div className="flex items-start gap-4">
                    <Image
                      src="/images/homepage/tsg/icon4.png"
                      alt="event"
                      width={48}
                      height={48}
                    />
                    <p className="text-start">
                      Hosting training and growth events across the U.S.
                    </p>
                  </div>
                </Reveal>

                <Reveal y={100} opacityFrom={0} duration={3}>
                  <div className="flex items-start gap-4">
                    <Image
                      src="/images/homepage/tsg/icon3.png"
                      alt="software"
                      width={48}
                      height={48}
                    />
                    <p className="text-start">
                      Providing professional software and mentorship
                    </p>
                  </div>
                </Reveal>

                <Reveal y={100} opacityFrom={0} duration={3}>
                  <div className="flex items-start gap-4">
                    <Image
                      src="/images/homepage/tsg/icon2.png"
                      alt="community"
                      width={48}
                      height={48}
                    />
                    <p className="text-start">
                      Building a community focused on integrity and lasting
                      results
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
