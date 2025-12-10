import OurServices from "@/components/ServicePage/OurServices";
import WhyChoose from "@/components/ServicePage/WhyChoose";
import MissionSection from "@/components/homepage/MissionSection";
import Testimonials from "@/components/homepage/Testimonials";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadcrumbSection
        title="We Help Tax Professionals  Grow & Scale with Confidence"
        bgImage="/images/breadcrumb/breadcrumb-services.jpg"
        buttonText="Connect with TSG Pro Advisor"
        buttonLink="/contact"
      />
      <OurServices />
      <WhyChoose />
      <Testimonials />
      <MissionSection />
    </div>
  );
};

export default page;
