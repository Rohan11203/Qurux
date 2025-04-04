import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { CardSection } from "../components/CardSection";
import { Procedures } from "../components/Procedures";
import { ShowCaseSection } from "../components/ShowCaseSection";
import { ServicesSection } from "../components/ServicesSection";

export const LandingPage = () => {
  return (
    <div className="h-screen w-full  bg-[var(--primary-color)]  overflow-x-hidden">
      <div className="pt-10 ">
        <Navbar />
      </div>
      <HeroSection />
      <AboutSection />
      <CardSection />
      <Procedures />
      <ShowCaseSection />
      <ServicesSection />
    </div>
  );
};
