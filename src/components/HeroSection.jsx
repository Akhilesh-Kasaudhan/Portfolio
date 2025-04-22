import React from "react";
import picBg from "../assets/picbg.png";
import userPic from "../assets/userPic.png";
import TypeWriter from "typewriter-effect";
const HeroSection = () => {
  return (
    <div className="hero-section w-full sm:flex items-center justify-between  sm:flex-row-reverse overflow-y-hidden px-8 ">
      <div className="relative sm:w-[50%] flex items-center justify-center ">
        <img src={picBg} alt="" className=" w-[75%] spin " />
        <img
          src={userPic}
          alt=""
          className="absolute rounded-full top-[13%] right-[22%] w-[55%] hue-rotate-180  "
        />
      </div>
      <div className="sm:w-[50%] py-4">
        <h1 className="text-3xl sm:text-6xl font-bold text-white">
          <TypeWriter
            onInit={(TypeWriter) => {
              TypeWriter.typeString("Hi! I'm Akhilesh").pauseFor(2000).start();
            }}
          />
        </h1>
        <h3 className="text-2xl text-wrap sm:text-4xl font-bold text-zinc-500 mt-4">
          <TypeWriter
            onInit={(typewriter) => {
              typewriter
                .typeString("I'm a React Developer")
                .pauseFor(2000)
                .deleteChars(15)
                .typeString(" MERN Stack Developer")
                .pauseFor(2000)
                .deleteChars(20)
                .typeString(" Full Stack Developer")
                .pauseFor(2000)
                .start();
            }}
          />
        </h3>
        <h4 className="text-xl sm:text-3xl mt-8 leading-relaxed">
          Passionate <span className=" text-zinc-400">MERN</span> Stack
          Developer | <br />
          Crafting Digital Experiences From Frontend to Backend
        </h4>
        <a href="/Akhilesh_CV.pdf" download>
          <button className="mt-4 bg-gradient-to-r from-slate-600 to-zinc-700 text-white py-2 px-4 rounded hover:scale-[1.1]">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
