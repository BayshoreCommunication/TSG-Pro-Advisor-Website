import AboutTSG from "@/components/AboutPage/AboutTSG";
import BreadcrumbAboutPage from "@/components/AboutPage/BreadcrumbAboutPage";
import HelpYouGrow from "@/components/AboutPage/HelpYouGrow";
import VideoSection from "@/components/AboutPage/VideoSection";
import MissionSection from "@/components/homepage/MissionSection";
import Testimonials from "@/components/homepage/Testimonials";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadcrumbAboutPage />
      <VideoSection />
      <AboutTSG />
      <HelpYouGrow />
      <Testimonials />
      <MissionSection />
    </div>
  );
};

export default page;
