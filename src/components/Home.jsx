import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* //SECTION - Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full items-center md:items-start">
        <h3>Hi, I'm Sahil</h3>
        <h2 className="text-5xl font-satoshi text-center md:text-left">
          I'm an aspiring{" "}
          <span className="text-[#Beeeff]">Software Developer </span>
          and a <span className="text-[#Beeeff]">Computer Science</span>{" "}
          student. I'm passionate about building{" "}
          <span className="text-[#Beeeff]">Web </span> and{" "}
          <span className="text-[#Beeeff]">Mobile Apps</span>
        </h2>
        <div className="flex">
          <Link
            to="projects"
            smooth={true}
            duration={700}
            offset={-100}
            className="text-white px-10 py-3 my-20 mr-4 bg-[#14142b] rounded-full flex items-center 
          hover:bg-white hover:text-black hover:scale-105 transition duration-300 ease-in-out shadow-xl cursor-pointer"
          >
            View Projects <HiArrowNarrowDown className="ml-1" />
          </Link>
          <a
            href="https://github.com/sahilnaik"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className=" px-10 py-3 my-20 border-[#14142b] rounded-full flex items-center 
           hover:text-white hover:bg-[#14142b] hover:scale-105 transition duration-300 ease-in-out shadow-xl"
            >
              My GitHub <FaGithub className="ml-1" />
            </button>
          </a>
        </div>
      </div>
      {/* //SECTION - Arrow */}
    </div>
  );
};

export default Home;
