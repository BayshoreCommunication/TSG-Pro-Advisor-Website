import BreadcrumbBlogsPage from "@/components/BlogsPage/BreadcrumbBlogsPage";
import React from "react";
import LatestInsights from "./LatestInsights";
const page = () => {
  return (
    <div>
      <BreadcrumbBlogsPage />
      <LatestInsights/>
    </div>
  );
};

export default page;
