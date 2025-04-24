import Navbar from "./components/Navbar";

import "./App.css";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Technol from "./components/Techologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="overflow-hidden text-neutral-300 antialiased slec selection:bg-cyan-300 selection:text-black">
        <div className="fixed top-0 -z-10 min-h-screen w-full">
          <div className="absolute inset-0 -z-10 min-h-screen w-screen -ml-10 [background:radial-gradient(130%_120%_at_50%_20%,#000_55%,#800080_100%)]"></div>
        </div>
        <Navbar />
        <Hero />
        <Aboutme />
        <Technol className="!my-10" />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
