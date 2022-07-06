import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiPalette } from "react-icons/bi";
import { DiAtom } from "react-icons/di";
import { FiServer } from "react-icons/fi";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);
  return (
    <div className="parent py-20">
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-gray-400 text-center">What I Provide</h3>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Services</span>
        </h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        <div
          className="shadow rounded-lg p-6"
          style={{ backgroundColor: "#313131" }}
        >
          <div className="text-center mb-4">
            <DiAtom className="text-primary text-5xl inline-block"></DiAtom>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">
            Front end Development
          </h2>
          <p className="text-gray-400">
            As a Front-end developer, I would love to develope any front-end
            application using React and its libraries.
          </p>
        </div>

        <div
          className="shadow-xl rounded-lg p-6"
          style={{ backgroundColor: "#212121" }}
        >
          <div className="text-center mb-4">
            <FiServer className="text-primary text-5xl inline-block"></FiServer>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">
            MERN Development
          </h2>
          <p className="text-gray-400">
            I am very familiar with NodeJS, Express JS, and MongoDB. So I can
            build full-stack application with MERN.
          </p>
        </div>

        <div
          className="shadow rounded-lg p-6"
          style={{ backgroundColor: "#313131" }}
        >
          <div className="text-center mb-4">
            <BiPalette className="text-primary text-5xl inline-block"></BiPalette>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">
            Web Design
          </h2>
          <p className="text-gray-400">
            I also provide Fully Responsive Static Website Design with HTML,
            CSS, Bootstrap, Tailwind.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
