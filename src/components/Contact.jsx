import React from "react";
import { FaLinkedin, FaLinkedinIn, FaStaylinked } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center items-center h-full md:items-start">
        <form action="" className="flex flex-col max-w-[600px] w-full">
          <div className="px-8">
            <h3 className="font-bold inline border-b-4 border-[#Beeeff] md: self-start">
              Contact
            </h3>
          </div>
          <div className="flex flex-col md:flex-row gap-4 px-8">
            <FaLinkedinIn size={100} />
            <MdEmail size={100} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
