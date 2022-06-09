import React from "react";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Banner from "./Banner/Banner";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Portfolio />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
