import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { CardSection } from "../components/CardSection";
import { Procedures } from "../components/Procedures";

export const LandingPage = () => {
  return (
    <div className="h-screen w-full bg-[#FCEDEA] overflow-x-hidden">
      <div className="pt-10 ">
        <Navbar />
      </div>

      <HeroSection />
      <AboutSection />
      <CardSection />
      <Procedures />

      <div className="mt-20 h-[50%]">
        <div className="flex gap-6 justify-between items-center ">
          <div>
            {/* <img src="https://kinforce.net/qurux/wp-content/uploads/2021/05/flowers-and-eucaaliptus-composition-M9PL2FC.jpg"/> */}
          </div>
        </div>
      </div>
    </div>
  );
};
