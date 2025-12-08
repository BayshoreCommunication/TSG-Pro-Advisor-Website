import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="w-full flex justify-center px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-[1640px] w-full">

        {/* Heading */}
        <div className="text-center relative mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">Our Mission</h2>

          {/* Dotted curved arrow */}
          <Image
            src="/images/homepage/mission/arrow.png"
            alt="Decorative arrow"
            width={200}
            height={100}
            className="absolute left-1/2 top-10 -translate-x-1/2 hidden md:block pointer-events-none"
          />
        </div>

        {/* --- Image Block 1 --- */}
        <div className="relative mb-20">
          <Image
            src="/images/homepage/mission/mission1.jpg"
            alt="Mission Image 1"
            width={1600}
            height={900}
            className="w-full rounded-xl object-cover"
          />

          {/* Floating Text Box */}
          <div className="absolute left-1/2 bottom-5 -translate-x-1/2 w-[90%] md:w-auto bg-white/90 backdrop-blur-md shadow-lg rounded-2xl px-6 py-4 text-center">
            <p className="text-gray-700 text-sm md:text-base max-w-[900px]">
              We built TSG ProAdvisor to help tax professionals grow with
              structure, knowledge, and ongoing support.
            </p>
          </div>
        </div>

        {/* --- Image Block 2 --- */}
        <div className="relative">
          <Image
            src="/images/homepage/mission/mission2.jpg"
            alt="Mission Image 2"
            width={1600}
            height={900}
            className="w-full rounded-xl object-cover"
          />

          {/* Floating Text Box */}
          <div className="absolute left-1/2 bottom-5 -translate-x-1/2 w-[90%] md:w-auto bg-white/90 backdrop-blur-md shadow-lg rounded-2xl px-6 py-4 flex gap-4 items-start">
            
            {/* Optional Logo (like your screenshot) */}
            <Image
              src="/images/homepage/mission/tsg-logo.png"
              alt="TSG Logo"
              width={55}
              height={55}
              className="hidden md:block"
            />

            <p className="text-gray-700 text-sm md:text-base max-w-[900px]">
              From our first client to the hundreds of entrepreneurs we support
              today, our mission has stayed the same, to help everyday
              professionals become successful business owners.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
