import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiAdobephotoshop,
} from "react-icons/si";
import Lottie from "react-lottie";
import man from "../../assets/man.json";
import "./About.css";
import "../../components/PrimaryBtn.css";
import "../shared/Shared.css";

const About = () => {
  const languages = [
    { title: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { title: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    {
      title: "JavaScript",
      icon: <SiJavascript className="text-yellow-500 rounded" />,
    },
    { title: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
  ];
  const frameworks = [
    { title: "React", icon: <FaReact className="text-cyan-400" /> },
    { title: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" /> },
    { title: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { title: "ExpressJS", icon: <SiExpress className="text-gray-400" /> },
  ];
  const tools = [
    { title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { title: "GitHub", icon: <FaGithub className="text-black" /> },
    { title: "Figma", icon: <FaFigma className="" /> },
    {
      title: "Photoshop",
      icon: <SiAdobephotoshop className="text-cyan-800" />,
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: man,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="parent py-16">
      <div className="">
        <motion.div
          className="mb-12"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
        >
          <h3 className="text-gray-400 text-center">Something About Myself</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.5 },
            }}
          >
            <img
              src="https://i.ibb.co/c6rZ6wN/bg-shape.png"
              alt="Mohammad Ali"
              className="mx-auto"
            />
          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.5 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-0">Mohammad Ali</h1>
            <div className="my-2">
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
            <p className="text-gray-400 font-medium">
              Dedicated Front-end developer. Capable to solve working problems. Passionate about learning & development to reach the target. Eager to tackle more complex problems and continue to find ways to maximize user efficiency.
            </p>
            <br />
            <p className="text-gray-400 font-medium">
              My next mission is how to become a Mern stack Developer. I would
              love to build some Giant Website which will shine myself.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4">
              <h2 className="font-medium">
                <span className="mr-4 text-primary">Name: </span>Mohammad Ali
              </h2>
              <h2 className="font-medium">
                <span className="mr-4 text-primary">Phone: </span>+880
                1884622861
              </h2>
              <h2 className="font-medium">
                <span className="mr-4 text-primary">Email: </span>
                itsproali@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-4 text-primary">Address: </span>Sarulia,
                Demra, Dhaka
              </h2>
              <a
                href="https://drive.google.com/file/d/1qVQ1OLO-5RxHy1rwbe5Ib9igCTfeO99f/view?usp=sharing"
                target="blank"
              >
                <button className="primary-button">
                  <span>My Resume</span>
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <div className="pt-24">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center mb-8">
          My <span className="text-primary">Skills</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-evenly my-8">
          <div>
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
          <div>
            <h2 className="text-cyan-500 text-xl font-semibold">Languages:</h2>
            <div className="flex flex-wrap mb-4">
              {languages?.map((skill) => (
                <div key={skill.title} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                    title={skill.title}
                  >
                    {skill?.icon}
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-cyan-500 text-xl font-semibold">
              Library & Frameworks:
            </h2>
            <div className="flex flex-wrap mb-4">
              {frameworks?.map((skill) => (
                <div key={skill.title} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                    title={skill.title}
                  >
                    {skill?.icon}
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-cyan-500 text-xl font-semibold">
              Tools & Technologies:
            </h2>
            <div className="flex flex-wrap mb-4">
              {tools?.map((skill) => (
                <div key={skill.title} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                    title={skill.title}
                  >
                    {skill?.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
