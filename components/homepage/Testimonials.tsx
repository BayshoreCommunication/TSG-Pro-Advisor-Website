"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSlider() {
  const reviews = [
    {
      name: "Benjamin Collins",
      date: "February 8, 2023",
      rating: 5,
      text: "Very professional and skilled team. The only issue was that we had to request a couple of revisions, but they handled them well. The final result was worth the wait!",
      image: "/images/homepage/testimonial/img1.png",
    },
    {
      name: "Sonia Reyes",
      date: "2 years ago",
      rating: 5,
      text: "Formar parte de la familia TSG proAdvisor fue una de las mejores decisiones!! Wendolyn excelente mentor!! Profesional, siempre pendiente y dispuesta acompañándome.",
      image: "/images/homepage/testimonial/img2.png",
    },
    {
      name: "Jessica Brown",
      date: "1 year ago",
      rating: 5,
      text: "Amazing service and great communication. Will definitely work with them again!",
      image: "/images/homepage/testimonial/img3.png",
    },
    {
      name: "Benjamin Collins",
      date: "February 8, 2023",
      rating: 5,
      text: "Very professional and skilled team. The only issue was that we had to request a couple of revisions, but they handled them well. The final result was worth the wait!",
      image: "/images/homepage/testimonial/img1.png",
    },
    {
      name: "Brian Jones",
      date: "February 18, 2025",
      rating: 5,
      text: "All of the mentors and teachers, personally care about you being knowledgeable and successful. The courses are very engaging. If there are any challenges in your learning you may occur a mentor is always available to assist. Everyone has been fun and enthusiastic",
      image: "/images/homepage/testimonial/img1.png",
    },
    {
      name: "Rosa Grimaldo",
      date: "December 8, 2025",
      rating: 5,
      text: "I highly recommend the Academy of Mentors to anyone looking to improve their leadership skills and gain insights from experienced mentors. It's an investment in yourself that pays off in many ways!",
      image: "/images/homepage/testimonial/img2.png",
    },
  ];

  return (
    <section className="w-full flex justify-center px-8 py-8 md:py-16">
      <div className="max-w-[1640px] mx-auto w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          centeredSlides={false}
          grabCursor={true}
          pagination={{ clickable: true }}
          loop={true}
          direction="horizontal"
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.7 },
            1024: { slidesPerView: 2.3 },
            1440: { slidesPerView: 3 },
          }}
          className="h-full"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="flex h-full">
              
              {/* Card */}
              <div
                className="bg-white shadow-md rounded-2xl p-5 flex gap-5 items-start 
                border border-gray-200 h-full w-full min-h-[260px] md:min-h-[280px]
                transition-all duration-300 
                hover:shadow-xl hover:-translate-y-2 hover:border-gray-300 hover:scale-[1.02]"
              >
                
                {/* Profile Image */}
                <div className="min-w-[90px] h-[90px] rounded-xl overflow-hidden">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={90}
                    height={90}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow h-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>

                    <Image
                      src="/images/homepage/testimonial/google.png"
                      alt="Google"
                      width={48}
                      height={48}
                    />
                  </div>

                  {/* Rating */}
                  <div className="flex text-yellow-400 mt-2">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-sm mt-3 leading-relaxed flex-grow">
                    {review.text}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
