import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

const growthServices = [
  {
    title: "Education That Builds Confidence",
    description:
      "Learn the skills you need to handle tax and accounting work with more accuracy and confidence. Our training helps you strengthen your knowledge and improve the way you serve your clients.",
    image: "/images/aboutPage/growth-education-v2.jpg",
    imageAlt:
      "Tax professionals learning during a live TSG ProAdvisor education session",
    imageLabel: "Tax Education",
  },
  {
    title: "Professional Tax Software",
    description:
      "Use reliable, easy-to-navigate tax software designed to help you work accurately and efficiently. Our platform supports smoother workflows and better results.",
    image: "/images/aboutPage/growth-software.jpg",
    imageAlt:
      "Modern professional tax software displayed on a desktop monitor and laptop",
    imageLabel: "Tax Software",
  },
  {
    title: "Mentorship and Community Support",
    description:
      "Get support from a community of professionals and access mentorship that helps you stay motivated, build your skills, and grow your business step by step.",
    image: "/images/aboutPage/growth-mentorship-v2.jpg",
    imageAlt:
      "Tax professionals connecting at a TSG ProAdvisor community event",
    imageLabel: "Mentorship & Community",
  },
];

export default function HelpYouGrow() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-8 py-8 md:py-16">
        <div className="max-w-4xl mx-auto mb-10 lg:mb-14">
          <Reveal y={100} opacityFrom={0} duration={3}>
            <h1 className="text-center text-4xl md:text-5xl lg:text-[52px] font-semibold mb-5 text-black arya-font">
              How We Help You Grow
            </h1>
          </Reveal>
          <Reveal y={100} opacityFrom={0} duration={3}>
            <p className="text-center">
              TSG ProAdvisor gives you the support, tools, and education you
              need to build and grow a successful tax and accounting business.
              Whether you are starting out or improving an existing business,
              you can learn at your own pace, access software that supports your
              workflow, and get guidance from experienced mentors.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-5 lg:gap-12">
          {growthServices.map((service) => (
            <Reveal key={service.title} x={100} opacityFrom={0} duration={3}>
              <article className="h-full text-left sm:min-h-[270px] lg:min-h-[230px]">
                <h3 className="text-lg lg:text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <button className="text-[#F16128] font-semibold text-sm">
                  LEARN MORE
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="relative mt-6">
          <div className="absolute inset-x-0 top-1/2 h-28 -translate-y-1/2 bg-gradient-to-r from-[#131313] via-primary to-[#131313]" />
          <div className="relative grid grid-cols-3 gap-3 sm:gap-5 lg:gap-12">
            {growthServices.map((service) => (
              <figure key={service.image} className="min-w-0 text-center">
                <div className="overflow-hidden rounded-full border-2 sm:border-4 border-primary bg-[#131313] aspect-square max-w-[300px] mx-auto shadow-xl group">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={900}
                    height={900}
                    className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <figcaption className="relative z-10 -mt-5 sm:-mt-7 mx-auto w-fit max-w-full rounded-full border border-primary bg-[#131313] px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-[10px] sm:text-sm lg:text-lg font-semibold text-white shadow-lg whitespace-nowrap">
                  {service.imageLabel}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
