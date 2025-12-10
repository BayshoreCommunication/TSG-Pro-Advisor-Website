import AboutTSG from "@/components/AboutPage/AboutTSG";
import HelpYouGrow from "@/components/AboutPage/HelpYouGrow";
import VideoSection from "@/components/AboutPage/VideoSection";
import MissionSection from "@/components/homepage/MissionSection";
import Testimonials from "@/components/homepage/Testimonials";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadcrumbSection
        title="About TSG PROADVISOR"
        bgImage="/images/hero/hero-bg.png"
      />
      <VideoSection />
      <AboutTSG />
      <HelpYouGrow />
      <Testimonials />
      <MissionSection />
    </div>
  );
};

export default page;
