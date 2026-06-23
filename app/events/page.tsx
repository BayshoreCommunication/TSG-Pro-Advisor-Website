import UpcomingEvents from "@/components/EventsPage/UpcomingEvents";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/events",
  },
};

const page = () => {
  return (
    <div>
      <BreadcrumbSection
        title=" Workshops, Trainings, and Networking Opportunities. Learn and
                Connect at TSG ProAdvisor Events. "
        bgImage="/images/breadcrumb/breadcrumb-event.jpg"
      />
      <UpcomingEvents />
    </div>
  );
};

export default page;
