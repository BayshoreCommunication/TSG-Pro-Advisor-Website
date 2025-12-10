import BreadcrumbServicePage from "@/components/ServicePage/BreadcrumbServicePage";
import OurServices from "@/components/ServicePage/OurServices";
import WhyChoose from "@/components/ServicePage/WhyChoose";
import MissionSection from "@/components/homepage/MissionSection";
import Testimonials from "@/components/homepage/Testimonials";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadcrumbServicePage />
      <OurServices />
      <WhyChoose />
      <Testimonials />
      <MissionSection />
    </div>
  );
};

export default page;
