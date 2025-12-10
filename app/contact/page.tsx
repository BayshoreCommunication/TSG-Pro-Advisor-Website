import ContactForm from "@/components/ContactUsPage/ContactForm";
import Map from "@/components/ContactUsPage/Map";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadcrumbSection
        title="  Get in Touch With TSG ProAdvisor"
        bgImage="/images/breadcrumb/breadcrumb-contact.jpg"
      />
      <ContactForm />
      <Map />
    </div>
  );
};

export default page;
