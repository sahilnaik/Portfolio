import React from "react";
import {
  FaAndroid,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { DiDjango, DiMongodb } from "react-icons/di";
import { SiFirebase } from "react-icons/si";

const Skills = () => {
  const [hover, setHover] = React.useState("");
  return (
    <div name="skills" className="w-full  ">
      <div className="max-w-[1000px] px-8 mx-auto flex flex-col justify-center items-center h-full md:items-start">
        <div className="px-8 grid">
          <div className="pb-8">
            <h3 className="font-bold inline border-b-4 border-[#Beeeff] md: self-start">
              Skills
            </h3>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div
            onMouseEnter={() => setHover("html")}
            onMouseLeave={() => setHover("")}
            className="hover:scale-105 transition duration-300 ease-in-out"
          >
            {hover === "html" ? (
              <FaHtml5 className="mx-auto text-[#E65100]" size={100} />
            ) : (
              <FaHtml5 className="mx-auto" size={100} />
            )}

            <p className="my-4">HTML</p>
          </div>
          <div
            className="hover:scale-105 transition duration-300 ease-in-out"
            onMouseEnter={() => setHover("react")}
            onMouseLeave={() => setHover("")}
          >
            {hover === "react" ? (
              <FaReact className="mx-auto text-[#61DBFB]" size={100} />
            ) : (
              <FaReact className="mx-auto" size={100} />
            )}
            <p className="my-4">React</p>
          </div>
          <div
            className="hover:scale-105 transition duration-300 ease-in-out"
            onMouseEnter={() => setHover("python")}
            onMouseLeave={() => setHover("")}
          >
            {hover === "python" ? (
              <FaPython className="mx-auto text-[#3776AB]" size={100} />
            ) : (
              <FaPython className="mx-auto" size={100} />
            )}
            <p className="my-4">Python</p>
          </div>
          <div
            className="hover:scale-105 transition duration-300 ease-in-out"
            onMouseEnter={() => setHover("mongo")}
            onMouseLeave={() => setHover("")}
          >
            {hover === "mongo" ? (
              <DiMongodb className="mx-auto text-[#4DB33D]" size={100} />
            ) : (
              <DiMongodb className="mx-auto" size={100} />
            )}

            <p className="my-4">MongoDB</p>
          </div>
          <div
            className="hover:scale-105 transition duration-300 ease-in-out"
            onMouseEnter={() => setHover("android")}
            onMouseLeave={() => setHover("")}
          >
            {hover === "android" ? (
              <FaAndroid className="mx-auto text-[#39c67d]" size={100} />
            ) : (
              <FaAndroid className="mx-auto" size={100} />
            )}
            <p className="my-4">Android Studio</p>
          </div>
          <div
            className="hover:scale-105 transition duration-300 ease-in-out"
            onMouseEnter={() => setHover("java")}
            onMouseLeave={() => setHover("")}
          >
            {hover === "java" ? (
              <FaJava className="mx-auto text-[#F89820]" size={100} />
            ) : (
              <FaJava className="mx-auto" size={100} />
            )}
            <p className="my-4">Java</p>
          </div>
          <div
            className="hover:scale-105 transition duration-300 ease-in-out"
            onMouseEnter={() => setHover("javascript")}
            onMouseLeave={() => setHover("")}
          >
            {hover === "javascript" ? (
              <FaJs className="mx-auto text-[#FFD600] " size={100} />
            ) : (
              <FaJs className="mx-auto" size={100} />
            )}
            <p className="my-4">JavaScript</p>
          </div>
          <div
            className="hover:scale-105 transition duration-300 ease-in-out"
            onMouseEnter={() => setHover("django")}
            onMouseLeave={() => setHover("")}
          >
            {hover === "django" ? (
              <DiDjango className="mx-auto text-[#004D40]" size={100} />
            ) : (
              <DiDjango className="mx-auto" size={100} />
            )}
            <p className="my-4">Django</p>
          </div>
          <div
            className="hover:scale-105 transition duration-300 ease-in-out"
            onMouseEnter={() => setHover("node")}
            onMouseLeave={() => setHover("")}
          >
            {hover === "node" ? (
              <FaNodeJs className="mx-auto text-[#3C873A]" size={100} />
            ) : (
              <FaNodeJs className="mx-auto" size={100} />
            )}
            <p className="my-4">Node</p>
          </div>
          <div
            className="hover:scale-105 transition duration-300 ease-in-out"
            onMouseEnter={() => setHover("firebase")}
            onMouseLeave={() => setHover("")}
          >
            {hover === "firebase" ? (
              <SiFirebase className="mx-auto text-[#FFCA28]" size={100} />
            ) : (
              <SiFirebase className="mx-auto" size={100} />
            )}
            <p className="my-4">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
