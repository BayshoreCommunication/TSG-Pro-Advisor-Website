import AboutTSG from "@/components/AboutPage/AboutTSG";
import BreadcrumbAboutPage from "@/components/AboutPage/BreadcrumbAboutPage";
import VideoSection from "@/components/AboutPage/VideoSection";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadcrumbAboutPage />
      <VideoSection />
      <AboutTSG />
      {/* How We Help You Grow Component */}
    </div>
  );
};

export default page;
