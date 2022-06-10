import React from "react";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import Banner from "./Banner/Banner";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Project />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
