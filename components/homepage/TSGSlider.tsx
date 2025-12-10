"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Blog {
  id: string | number;
  title: string;
  desc?: string;
  featuredImage?: { image?: { url: string } };
  slug: string;
  published?: boolean | string;
}

export default function BlogSliderSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("https://backend-mccullochlawpa.vercel.app/site/blog");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();

        console.log("API raw response:", data);

        const blogArray = data?.data ?? data?.blogs ?? data ?? [];
        console.log("Interpreted blogArray:", blogArray);

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
            desc: b.desc || b.excerpt || "No description available",
          }));

        console.log("Filtered blogs:", filteredBlogs);
        setBlogs(filteredBlogs);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center py-10 text-white">Loading blogs...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (blogs.length === 0)
    return <p className="text-center py-10 text-white">No blogs found.</p>;

  return (
    <section className="relative w-full bg-[#0F0F0F] text-white px-8 py-12 md:py-20">
      {/* SECTION TITLE */}
      <div className="text-center mb-12">
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

      {/* SWIPER */}
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          renderBullet: (index, className) =>
            `<span class="${className} custom-bullet"></span>`,
        }}
        spaceBetween={26}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-14"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <Link href={`/blogs/${blog.slug}`} className="block h-full">
              <div className="bg-white text-black rounded-2xl shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition">
                <div className="relative w-full h-[180px] md:h-[200px]">
                  <Image
                    src={blog.image || "/images/placeholder.png"}
                    alt={blog.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold mb-3">{blog.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{blog.desc}</p>
                  <span className="bg-[#F16128] text-white text-sm font-semibold px-6 py-2 rounded-full self-start hover:bg-[#d7541f] transition cursor-pointer inline-block">
                    Learn More
                  </span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination flex justify-center items-center gap-3 mt-6"></div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d6d6d6;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 28px !important;
          border-radius: 10px !important;
          background: #f16128 !important;
        }
      `}</style>
    </section>
  );
}
