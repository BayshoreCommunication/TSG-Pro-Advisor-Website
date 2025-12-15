"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Blog {
  id: string | number;
  title: string;
  desc?: string;
  featuredImage?: { image?: { url: string } };
  slug: string;
  published?: boolean | string;
  image?: string;
}

export default function BlogSliderSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(
          "https://backend-tsg-pro.vercel.app/site/blog"
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        const blogArray = data?.data ?? data?.blogs ?? data ?? [];

        const filteredBlogs = blogArray
          .filter(
            (b: Blog) =>
              b.published === true ||
              b.published === "true" ||
              b.published === undefined
          )
          .map((b: Blog) => ({
            ...b,
            image: b.featuredImage?.image?.url || "/images/placeholder.png",
          }));

        setBlogs(filteredBlogs);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading)
    return <p className="text-center py-10 text-white">Loading blogs...</p>;
  if (error)
    return <p className="text-center py-10 text-red-500">{error}</p>;
  if (blogs.length === 0)
    return <p className="text-center py-10 text-white">No blogs found.</p>;

  return (
    <section className="relative w-full bg-[#0F0F0F] text-white px-8 py-12 md:py-20 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/homepage/tsgslider/black-white-bg.png"
        alt="Background"
        fill
        className="absolute inset-0 w-full h-full object-cover object-top"
        priority
      />

      {/* Section Title */}
      <div className="text-center mb-12 relative z-40">
        <p className="text-sm uppercase tracking-wide text-gray-300 arya-font">
          Join The TSG ProAdvisor Community
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold arya-font">
          Start. Scale. Succeed.
        </h2>
        <div className="mt-2 flex justify-center">
          <div className="w-40 h-[3px] bg-[#F16128] rounded-full"></div>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={26}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative z-30 !pb-6"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <Link href={`/blogs/${blog.slug}`} className="block h-full">
              <div className="bg-white text-black rounded-2xl shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition">
                <div className="relative w-full h-[180px] md:h-[200px]">
                  <Image
                    src={blog.image!}
                    alt={blog.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {blog.desc}
                  </p>
                  <span className="bg-[#F16128] text-white text-sm font-semibold px-6 py-2 rounded-full self-start">
                    Learn More
                  </span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}

        {/* Pagination */}
        <div className="custom-pagination flex justify-center gap-3 mt-4"></div>
      </Swiper>

      {/* Pagination Styles */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .custom-pagination .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 10px;
          background: #f16128;
        }
      `}</style>
    </section>
  );
}
