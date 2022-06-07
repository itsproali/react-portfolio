import React from "react";
import "../../shared/Shared.css";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="parent min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-accent text-xl font-medium">Hello, I'm</h2>
        <h1 className="text-4xl font-semibold mb-0">Mohammad Ali</h1>
        <div className="my-4">
          <TypeAnimation
            className="text-2xl text-primary font-bold"
            cursor={true}
            sequence={[
              "A Front-end Developer",
              2000,
              "A React JS Developer",
              2000,
              "A Jr. Web Developer",
              2000,
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        <p className="text-gray-400 max-w-md mb-6 font-medium">
          I am Jr. Front-end Developer. I am very passionate to my work and
          dedicated to explore New Tools And Technologies.
        </p>
        <div className="mb-4 flex items-center">
          <a
            href="https://www.linkedin.com/in/itsproali"
            target="blank"
            className="text-3xl text-blue-400 shadow-lg mx-1"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            href="https://www.github.com/itsproali"
            target="blank"
            className="text-3xl text-black shadow-lg mx-1"
          >
            <FaGithubSquare></FaGithubSquare>
          </a>
          <a
            href="https://www.facebook.com/itsproali"
            target="blank"
            className="text-3xl text-blue-500 shadow-lg mx-1"
          >
            <FaFacebookSquare></FaFacebookSquare>
          </a>
          <a
            href="https://www.instagram.com/itsproali"
            target="blank"
            className="text-3xl text-pink-600 shadow-lg mx-1"
          >
            <FaInstagramSquare></FaInstagramSquare>
          </a>
        </div>
        <button className="resume-btn">
          <span>My Resume</span>
        </button>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          //   src="https://i.ibb.co/xXYCYSy/mdali-yellow-bg-profile.png"
          src="https://cdn.dribbble.com/users/330915/screenshots/3587000/10_coding_dribbble.gif"
          alt="Mohammad Ali"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
