import BreadcrumbServicePage from "@/components/ServicePage/BreadcrumbServicePage";
import OurServices from "@/components/ServicePage/OurServices";
import WhyChoose from "@/components/ServicePage/WhyChoose";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadcrumbServicePage />
      <OurServices />
      <WhyChoose />
    </div>
  );
};

export default page;
