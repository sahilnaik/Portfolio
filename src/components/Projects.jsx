import React from "react";
import intune from "../assets/intune.png";
import temp from "../assets/temp.jpeg";
import vocab from "../assets/vocab.png";
import recipe from "../assets/recipe.png";
import buzinest from "../assets/buzinest.png";
const Projects = () => {
  return (
    <div name="projects" className="w-full">
      <div className="max-w-[1000px] px-8 mx-auto flex flex-col justify-center items-center h-full md:items-start w-full">
        <div className="pb-8">
          <h3 className="font-bold inline border-b-4 border-[#Beeeff] md: self-start">
            Projects
          </h3>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 w-full justify-between">
          <a
            href="https://github.com/sahilnaik/CS_554_Project_Intune"
            target="_blank"
            rel="noreferrer"
          >
            <div className="h-96 mb-20 group cursor-pointer">
              <div className="min-w-[390px] h-80 bg-red-300 rounded-2xl group-hover:shadow-2xl">
                <img
                  src={intune}
                  alt="intune"
                  className="px-8 py-7 rounded-3xl group-hover:scale-105 duration-150 h-80"
                />
              </div>
              <div className="flex flex-col justify-center mt-3">
                <div className="flex place-content-between">
                  <h1 className="text-2xl font-bold">Intune</h1>
                  <div className="flex bg-slate-100 rounded-2xl px-4 py-2">
                    <h3 className="text-sm font-bold">
                      React | Firebase | Spotify API
                    </h3>
                  </div>
                </div>

                <p className="text-center mt-2">
                  Listen to music with your friends in real time
                </p>
                <a
                  href="https://spotify-ten-wine.vercel.app/home"
                  target="_blank"
                  rel="noreferrer"
                  className=" px-4 py-2 rounded-full mt-4 self-center  hover:bg-white hover:text-black hover:scale-110 transition duration-300 ease-in-out shadow-xl"
                >
                  View Demo
                </a>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/sahilnaik/Personal-Dictionary-and-Vocab-Evaluator"
            target="_blank"
            rel="noreferrer"
          >
            <div className="h-96 mb-20 group cursor-pointer ">
              <div className="min-w-[390px] h-80 bg-emerald-200 rounded-2xl group-hover:shadow-2xl">
                <img
                  src={vocab}
                  alt="vocab"
                  className="px-8 py-7 rounded-3xl group-hover:scale-105 duration-150  h-80"
                />
              </div>
              <div className="flex flex-col justify-center mt-3">
                <div className="flex place-content-between">
                  <h1 className="text-2xl font-bold">Vocabulary Evaluator</h1>
                  <div className="flex bg-slate-100 rounded-2xl px-2 py-2">
                    <h3 className="text-sm font-bold">
                      JavaScript | Express | MongoDB
                    </h3>
                  </div>
                </div>

                <p className="text-center mt-2">
                  Create your personal dictionary and evaluate your vocabulary
                </p>
                <a
                  href="https://personal-dict-vocab-eval.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className=" px-4 py-2 rounded-full mt-4 self-center  hover:bg-white hover:text-black hover:scale-110 transition duration-300 ease-in-out shadow-xl"
                >
                  View Demo
                </a>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/sahilnaik/recipe"
            target="_blank"
            rel="noreferrer"
          >
            <div className="h-96 mb-20 group cursor-pointer">
              <div className="min-w-[390px] h-80 bg-yellow-200 rounded-2xl group-hover:shadow-2xl">
                <img
                  src={recipe}
                  alt="recipe"
                  className="px-8 py-7 rounded-3xl group-hover:scale-105 duration-150 h-80 "
                />
              </div>
              <div className="flex flex-col justify-center mt-3">
                <div className="flex place-content-between">
                  <h1 className="text-2xl font-bold">Recipe Finder</h1>
                  <div className="flex bg-slate-100 rounded-2xl px-4 py-2">
                    <h3 className="text-sm font-bold">
                      React | Spoonacular API
                    </h3>
                  </div>
                </div>

                <p className="text-center mt-2">
                  Look for recipes with your favorite ingredients
                </p>
                <a
                  href="https://recipe-sn-app.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className=" px-4 py-2 rounded-full mt-4 self-center  hover:bg-white hover:text-black hover:scale-110 transition duration-300 ease-in-out shadow-xl"
                >
                  View Demo
                </a>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/sahilnaik/BuziNest"
            target="_blank"
            rel="noreferrer"
          >
            <div className="h-96 mb-20 group cursor-pointer">
              <div className="min-w-[390px] h-80 bg-indigo-200 rounded-2xl group-hover:shadow-2xl">
                <img
                  src={buzinest}
                  alt="buzinest"
                  className="px-8 py-7 rounded-3xl group-hover:scale-105 duration-150 h-80 "
                />
              </div>
              <div className="flex flex-col justify-center mt-3">
                <div className="flex place-content-between">
                  <h1 className="text-2xl font-bold">BuziNest</h1>
                  <div className="flex bg-slate-100 rounded-2xl px-4 py-2">
                    <h3 className="text-sm font-bold">
                      Android Studio | Java | Firebase
                    </h3>
                  </div>
                </div>

                <p className="text-center mt-2">
                  A platform for small businesses to connect with customers
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
