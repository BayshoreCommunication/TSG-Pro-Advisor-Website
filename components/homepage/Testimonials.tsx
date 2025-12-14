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
      text: "Formar parte de la familia TSG proAdvisor fue una de las mejores decisiones!! Wendolyn excelente mentor!!",
      image: "/images/homepage/testimonial/img2.png",
    },
    {
      name: "Sonia Reyes",
      date: "2 years ago",
      rating: 5,
      text: "Formar parte de la familia TSG proAdvisor fue una de las mejores decisiones!! Wendolyn excelente mentor!!",
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
      name: "Jessica Brown",
      date: "1 year ago",
      rating: 5,
      text: "Amazing service and great communication. Will definitely work with them again!",
      image: "/images/homepage/testimonial/img3.png",
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
<<<<<<< HEAD
            <SwiperSlide key={index} className="h-auto flex">
  {/* CARD */}
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex gap-6 p-6 w-full h-full">
    
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
=======
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
>>>>>>> b7e34e2e658ecd3eb66d1da9dc7c32f6b056745a

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
