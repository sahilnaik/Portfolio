import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Skills />
      <div className="w-full flex py-5 flex-row justify-center items-center bg-white">
        <ul className="flex">
          <li>
            <a
              href="https://github.com/sahilnaik"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/s-naik"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
          </li>
          <li>
            <a
              href="mailto::sahil.j.naik@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineMail size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
