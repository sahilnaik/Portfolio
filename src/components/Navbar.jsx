import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-[#14142b] bg-white z-10">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <h1 className="text-2xl font-satoshi cursor-default">Sahil Naik</h1>
        </Link>
      </div>

      {/* //NOTE - Menu Icon */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-100} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <a
          href="https://drive.google.com/file/d/1CWg5Ue3UHJP0Q4rfN85shzNbM6idCtYv/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <li className="border rounded-2xl border-[#14142b] hover:text-white hover:bg-[#14142b] hover:duration-200">
            Resume
          </li>
        </a>
      </ul>

      {/* //NOTE - Hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* //NOTE - Mobile Menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-white"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <a
          href="https://drive.google.com/file/d/1CWg5Ue3UHJP0Q4rfN85shzNbM6idCtYv/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <li className="border rounded-2xl border-[#14142b] hover:text-white hover:bg-[#14142b] hover:duration-200 py-6 text-4xl">
            Resume
          </li>
        </a>
      </ul>

      {/* //NOTE - Social Icons */}
    </div>
  );
};

export default Navbar;
