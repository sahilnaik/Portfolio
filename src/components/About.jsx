import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center items-center h-full md:items-start">
        <div className="px-8 grid">
          <div className="pb-8">
            <h3 className="font-bold inline border-b-4 border-[#Beeeff] md: self-start">
              About
            </h3>
          </div>
        </div>
        <div className="max-w-[1000px] p-8 w-full grid gap-8">
          <p>
            I am very passionate about technology and always looking to learn
            new things and improve my skills. I am currently studying at Stevens
            Institute of Technology and am looking for a full-time position as a
            software engineer after I graduate in May 2023.
          </p>
          <div>
            <h3 className="font-bold inline border-b-4 border-[#Beeeff]">
              Experience
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold">Application Reliability Intern</h4>
                  <h5 className="font-bold">Lifion By ADP</h5>
                  <h6 className="font-bold text-gray-500  ">
                    June 2022 - August 2022
                  </h6>
                </div>
                <p>
                  Worked on the Reliability Engineering team to develop and
                  maintain tools to monitor status of Lifion applications.
                </p>
                <p>
                  Used React, Django, and AWS to build a dashboard to display
                  the status of applications and their dependencies.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold">Web Developer Intern</h4>
                  <h5 className="font-bold">Collegepond Counsellors</h5>
                  <h6 className="font-bold  text-gray-500 ">
                    December 2020 - January 2021
                  </h6>
                </div>
                <p>
                  Improved the user experience of the Collegepond website by
                  upgrading the website to a modern design and adding new
                  features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
