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
  return (
    <div name="skills" className="w-full h-screen">
      <div className="max-w-[1000px] px-8 mx-auto flex flex-col justify-center items-center h-full md:items-start">
        <div className="pb-8">
          <h3 className="font-bold inline border-b-4 border-[#Beeeff] md: self-start">
            Skills
          </h3>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="hover:scale-105 transition duration-300 ease-in-out">
            <FaHtml5 className="mx-auto" size={100} />
            <p className="my-4">HTML</p>
          </div>
          <div className="hover:scale-105 transition duration-300 ease-in-out">
            <FaReact className="mx-auto" size={100} />
            <p className="my-4">React</p>
          </div>
          <div className="hover:scale-105 transition duration-300 ease-in-out">
            <FaPython className="mx-auto" size={100} />
            <p className="my-4">Python</p>
          </div>
          <div className="hover:scale-105 transition duration-300 ease-in-out">
            <DiMongodb className="mx-auto" size={100} />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="hover:scale-105 transition duration-300 ease-in-out">
            <FaAndroid className="mx-auto" size={100} />
            <p className="my-4">Android Studio</p>
          </div>
          <div className="hover:scale-105 transition duration-300 ease-in-out">
            <FaJava className="mx-auto" size={100} />
            <p className="my-4">Java</p>
          </div>
          <div className="hover:scale-105 transition duration-300 ease-in-out">
            <FaJs className="mx-auto" size={100} />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="hover:scale-105 transition duration-300 ease-in-out">
            <DiDjango className="mx-auto" size={100} />
            <p className="my-4">Django</p>
          </div>
          <div className="hover:scale-105 transition duration-300 ease-in-out">
            <FaNodeJs className="mx-auto" size={100} />
            <p className="my-4">Node</p>
          </div>
          <div className="hover:scale-105 transition duration-300 ease-in-out">
            <SiFirebase className="mx-auto" size={100} />
            <p className="my-4">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
