import OurServices from "@/components/ServicePage/OurServices";
import WhyChoose from "@/components/ServicePage/WhyChoose";
import MissionSection from "@/components/homepage/MissionSection";
import Testimonials from "@/components/homepage/Testimonials";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/services",
  },
};

const page = () => {
  return (
    <div>
      <BreadcrumbSection
        title="We Help Tax Professionals Grow & Scale with Confidence"
        bgImage="/images/breadcrumb/breadcrumb-services.jpg"
        buttonText="Connect with TSG ProAdvisor"
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
