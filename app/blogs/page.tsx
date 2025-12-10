import React from "react";
import LatestInsights from "@/components/blogs/LatestInsights";
import GetAllPostData from "@/lib/GetPostData";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
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
