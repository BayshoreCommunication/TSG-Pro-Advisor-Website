import BreadcrumbContactUsPage from "@/components/ContactUsPage/BreadcrumbContactUsPage";
import BreadcrumbEventsPage from "@/components/EventsPage/BreadcrumbEventsPage";
import UpcomingEvents from "@/components/EventsPage/UpcomingEvents";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadcrumbEventsPage />
      <UpcomingEvents />
    </div>
  );
};

export default page;
