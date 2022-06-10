import React from "react";
import TypeAnimation from "react-type-animation";
import SkillBar from "react-skillbars";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const skills1 = [
    { type: "HTML", level: 90 },
    { type: "CSS", level: 85 },
    { type: "JavaScript", level: 60 },
    { type: "ExpressJS", level: 45 },
  ];
  const skills2 = [
    { type: "React", level: 75 },
    { type: "Bootstrap", level: 85 },
    { type: "MongoDb", level: 70 },
    { type: "NodeJS", level: 30 },
  ];
  const colors = {
    bar: "#FF651C",
    title: {
      text: "#fff",
      background: "#e64900",
    },
  };
  return (
    <div className="parent py-20">
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
              Front-end developer with 1 years + front end experience. Capable
              to solve working problems. Passionate about learning & development
              to reach the target. Eager to tackle more complex problems and
              continue to find ways to maximize user efficiency.
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
                <button className="primary-button">My Resume</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <div className="pt-20">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center mb-8">
          My <span className="text-primary">Skills</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <SkillBar skills={skills1} height={25} colors={colors} />
          <SkillBar skills={skills2} height={25} colors={colors} />
        </div>
      </div>
    </div>
  );
};

export default About;
