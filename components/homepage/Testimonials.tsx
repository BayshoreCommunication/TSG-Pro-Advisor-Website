"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSlider() {
  const reviews = [
    {
      name: "Srikanth K",
      date: "A month ago",
      rating: 5,
      text: "They offer Fabulous program. I am enjoying it very much and hope their knowledge will help me fast track my tax business",
      image: "/images/homepage/testimonial/img1.png",
    },
    {
      name: "Jessica Velasquez",
      date: "2 years ago",
      rating: 5,
      text: "Great experience with Jenny! I love her training sessions and is always open to help!",
      image: "/images/homepage/testimonial/img2.png",
    },
    {
      name: "Zenaida Diaz",
      date: "2 years ago",
      rating: 5,
      text: "EXCELLENT CLASES ALWAYS PROFESSIONAL I DO APPRECIATE THE TIME AND THE EFFORT; THE TEAM IS AMAZING.",
      image: "/images/homepage/testimonial/img3.png",
    },
    {
      name: "Gladys Burgos",
      date: "1 year ago",
      rating: 5,
      text: "I wouldn’t have been able to start my tax career without TSG. The resources they provide have been amazing and my tax mentor Jenny is the best!! So grateful for them.",
      image: "/images/homepage/testimonial/img4.png",
    },
    {
      name: "Elsie Carrucini",
      date: "1 year ago",
      rating: 5,
      text: "They are excellent people and always available to help you thru the process of learning best of all bilingual Spanish or English. Thank you Glendaliz and TSG Team Members",
      image: "/images/homepage/testimonial/img5.png",
    },
    {
      name: "Veronica Villacres",
      date: "1 year ago",
      rating: 5,
      text: "Eddia, I don’t have enough words to say thank you. Even though I’m not in the business for a long time but she is a great person, professional and helpful in anything you ask for.",
      image: "/images/homepage/testimonial/img6.png",
    },
    {
      name: "Mayra Herrera",
      date: "1 year ago",
      rating: 5,
      text: "Exceptional service from start to finish. The team at TSG provided thorough guidance, ensured accuracy, and maximized my returns. Their expertise and professionalism made the process seamless. Highly recommend for anyone seeking really able tax assistance.",
      image: "/images/homepage/testimonial/img7.png",
    },
    {
      name: "Sanchez Familia",
      date: "1 year ago",
      rating: 5,
      text: "TSG has been a game changer in learning how to be a great Tax preparer, I can't thank my mentor Leiza enough for all her help. This team always shows up for us as new tax preparers.",
      image: "/images/homepage/testimonial/img8.png",
    },
  ];

  return (
    <section className="w-full px-8 py-8 md:py-16 flex justify-center">
      <div className="max-w-[1640px] w-full relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000 }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          breakpoints={{
            640: { slidesPerView: 1.1 },
            768: { slidesPerView: 1.6 },
            1024: { slidesPerView: 2.2 },
            1440: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="h-auto flex py-8">
              {/* CARD */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex gap-6 p-6 h-full w-full ">
                {/* LEFT IMAGE */}
                <div className="w-[140px] h-[160px] rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex flex-col flex-1 h-full">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {review.name}
                      </h3>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>

                    <Image
                      src="/images/homepage/testimonial/google.png"
                      alt="Google"
                      width={32}
                      height={32}
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mt-2 text-yellow-400 text-sm">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="mt-4 text-gray-700 text-sm leading-relaxed flex-grow">
                    {review.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* PAGINATION — MORE BOTTOM SPACE */}
        <div className="custom-pagination z-10 flex justify-center mt-12" />
      </div>
    </section>
  );
}
