import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sm:mb-8 mb-4 flex items-center justify-between py-6 sm:px-8 px-4 ">
      <div className="flex items-center flex-shrink-0">
        <h1 className="text-4xl font-bold">Ak</h1>
      </div>
      <div className=" flex items-center justify-center gap-4 text-3xl">
        <a href="https://linkedin.com/in/akhilesh-kasaudhan">
          {" "}
          <FaLinkedin />
        </a>
        <a href="https://github.com/Akhilesh-Kasaudhan">
          {" "}
          <FaGithub />
        </a>
        <a href="">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
