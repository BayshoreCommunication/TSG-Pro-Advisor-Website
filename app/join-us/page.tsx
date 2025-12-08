import BreadcrumbJoinUsPage from "@/components/JoinUsPage/BreadcrumbJoinUsPage";
import ContactPage from "@/components/JoinUsPage/ContactForm";
import WhatYouAchieve from "@/components/JoinUsPage/WhatYouAchieve";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadcrumbJoinUsPage />
      <ContactPage />
      <WhatYouAchieve />
      {/* Our Mission Have to Make*/}
      {/* <OurMission /> */}
    </div>
  );
};

export default page;
