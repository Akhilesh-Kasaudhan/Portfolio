import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="selection:bg-indigo-200 selection:text-indigo-700 antialiased text-neutral-300 overflow-x-hidden">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="z-[-2] top-0 h-screen w-screen bg-neutral-950 absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        </div>

        <div className="container">
          <Navbar />
          <HeroSection />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
