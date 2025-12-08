import BreadcrumbContactUsPage from "@/components/ContactUsPage/BreadcrumbContactUsPage";
import ContactForm from "@/components/ContactUsPage/ContactForm";
import Map from "@/components/ContactUsPage/Map";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadcrumbContactUsPage />
      <ContactForm />
      <Map />
    </div>
  );
};

export default page;
