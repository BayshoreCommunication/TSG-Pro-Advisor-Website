import React from "react";
import LatestInsights from "@/components/blogs/LatestInsights";
import GetAllPostData from "@/lib/GetPostData";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/blogs",
  },
};

const page = async () => {
  const blogPostData = await GetAllPostData();
  return (
    <div>
      <BreadcrumbSection
        title="Tips, Training, and Updates for 
Tax & Accounting Professionals"
        bgImage="/images/breadcrumb/breadcrumb-blogs.jpg"
      />
      <LatestInsights blogPost={blogPostData} />
    </div>
  );
};

export default page;
