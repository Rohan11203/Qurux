import { useEffect } from "react";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel:true });
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <div className="">
        <LandingPage />
      </div>
    </>
  );
}

export default App;
