import Image from "next/image";

const growthImages = [
  {
    src: "/images/aboutPage/growth-education-v2.jpg",
    alt: "Tax professionals learning during a live TSG ProAdvisor education session",
    label: "Tax Education",
  },
  {
    src: "/images/aboutPage/growth-software.jpg",
    alt: "Modern professional tax software displayed on a desktop monitor and laptop",
    label: "Tax Software",
  },
  {
    src: "/images/aboutPage/growth-mentorship-v2.jpg",
    alt: "Tax professionals connecting at a TSG ProAdvisor community event",
    label: "Mentorship & Community",
  },
];

const RoundImageSlider = () => {
  return (
    <div className="relative w-full mt-8 md:mt-12 pb-12 md:pb-16">
      <div className="absolute inset-x-0 top-1/2 h-36 -translate-y-1/2 bg-gradient-to-r from-[#131313] via-primary to-[#131313] opacity-95" />

      <div className="relative max-w-[1280px] mx-auto px-8 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 lg:gap-14">
        {growthImages.map((image) => (
          <figure key={image.src} className="text-center">
            <div className="overflow-hidden rounded-full border-4 border-primary bg-[#131313] aspect-square max-w-[300px] mx-auto shadow-xl group">
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={900}
                className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <figcaption className="relative z-10 -mt-7 mx-auto w-fit max-w-full rounded-full border border-primary bg-[#131313] px-4 py-2 text-sm sm:text-base lg:text-lg font-semibold text-white shadow-lg">
              {image.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default RoundImageSlider;
