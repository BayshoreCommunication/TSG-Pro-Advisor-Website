import BreadcrumbBlogsPage from "@/components/BlogsPage/BreadcrumbBlogsPage";
import React from "react";
import LatestInsights from "@/components/blogs/LatestInsights";
import GetAllPostData from "@/lib/GetPostData";
const page = async () => {
   const blogPostData = await GetAllPostData();
  return (
    <div>
      <BreadcrumbBlogsPage />
      <LatestInsights blogPost={blogPostData}/>
    </div>
  );
};

export default page;
