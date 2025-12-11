"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";
export default function LatestInsights({ blogPost }: { blogPost: any }) {
  // API posts → fallback static
  const posts =
    blogPost?.data
      ?.filter((p: any) => p.published)
      ?.map((p: any) => ({
        title: p.title,
        excerpt: p.excerpt || "",
        date: new Date(p.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        image: p.featuredImage?.image?.url,
        slug: p.slug,
      })) || [];

  return (
    <section className="w-full px-8 py-8 md:py-16 bg-white">
      <div className="max-w-[1640px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>

            <Reveal y={100} opacityFrom={0} duration={3}>
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold mb-2 arya-font ">
              Latest Insights
            </h2>
            </Reveal>
             <Reveal y={100} opacityFrom={0} duration={3}>
            <p className="text-gray-600 max-w-3xl">
              Explore insights, tips, and guidance to help you grow your tax and accounting business.
            </p>
            </Reveal>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-100">
              Dates ▼
            </button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {posts.map((blog: any, i: number) => (
            <Link
              key={i}
              href={`/blogs/${blog.slug}`}
              className="group block rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={1000}
                  height={800}
                  className="w-full h-auto object-cover object-top group-hover:scale-110 duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg group-hover:text-orange-600">
                    {blog.title}
                  </h3>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-600 text-sm">{blog.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-8 text-center">
          <Link
            href="/blogs"
            className="
              relative px-10 py-4 bg-primary text-white hover:text-primary font-bold text-lg rounded-xl
              inline-flex items-center overflow-hidden group
              transition-colors duration-300
            "
          >
            <span className="relative z-10">Load More</span>
            <span
              className="
                absolute inset-0 bg-white
                translate-y-full group-hover:translate-y-0
                transition-transform duration-300
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
