import BreadcrumbJoinUsPage from "@/components/JoinUsPage/BreadcrumbJoinUsPage";
import ContactPage from "@/components/JoinUsPage/ContactForm";
import WhatYouAchieve from "@/components/JoinUsPage/WhatYouAchieve";
import StatsStrip from "@/components/shared/StatsStrip";
import FAQSection from "@/components/shared/FAQSection";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/join-us",
  },
};

const page = () => {
  return (
    <div>
      <BreadcrumbJoinUsPage />
      <WhatYouAchieve />
      <StatsStrip />
      <ContactPage />
      <FAQSection />
    </div>
  );
};

export default page;
