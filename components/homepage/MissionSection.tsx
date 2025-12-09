import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="w-full flex justify-center px-8 py-8 md:py-16 ">
      <div className="max-w-[1640px] w-full">

        {/* Heading */}
        <div className="text-center relative mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">Our Mission</h2>
        </div>

        {/* --- Image Block 1 --- */}
        <div className="relative mb-20">
          <Image
            src="/images/homepage/mission/img1.png"
            alt="Mission Image 1"
            width={1600}
            height={900}
            className="w-full rounded-xl object-cover"
          />

          {/* Floating Text Box */}
          {/* <div className="absolute left-1/2 bottom-5 -translate-x-1/2 w-[90%] md:w-auto bg-white/90 backdrop-blur-md shadow-lg rounded-2xl px-6 py-4 text-center">
            <p className="text-gray-700 text-sm md:text-base max-w-[900px]">
              We built TSG ProAdvisor to help tax professionals grow with
              structure, knowledge, and ongoing support.
            </p>
          </div> */}
        </div>

        {/* --- Image Block 2 --- */}
        <div className="relative mt-[-60px] md:mt-0">
          <Image
            src="/images/homepage/mission/img2.png"
            alt="Mission Image 2"
            width={1600}
            height={900}
            className="w-full rounded-xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}
