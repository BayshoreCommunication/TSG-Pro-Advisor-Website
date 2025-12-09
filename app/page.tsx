// import Blog from "@/components/shared/Blog";
import Hero from "@/components/homepage/Hero";
import StatsSection from "@/components/homepage/StatsSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import Testimonials from "@/components/homepage/Testimonials";
import MissionSection from "@/components/homepage/MissionSection";
import TsgSection from "@/components/homepage/TsgSection";
import TSGSlider from "@/components/homepage/TSGSlider";


export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection/>
      <ServicesSection/>
      <Testimonials />  
      <MissionSection/>
      <TsgSection/>
      <TSGSlider/>
    </>
  );
}
