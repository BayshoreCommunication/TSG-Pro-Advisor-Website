import ContactForm from "@/components/ContactUsPage/ContactForm";
import Map from "@/components/ContactUsPage/Map";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/contact",
  },
};

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
