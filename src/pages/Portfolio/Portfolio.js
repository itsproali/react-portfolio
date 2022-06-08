import React from "react";
import PrimaryBtn from "../../components/PrimaryBtn";

const Portfolio = () => {
  return (
    <div className="parent py-16">
      <div className="">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          Featured <span className="text-primary">Projects</span>
        </h1>
        <h3 className="text-gray-400 text-center">
          Some of my recent Projects below
        </h3>
      </div>
      <div className="my-6 flex items-center justify-center">
        <PrimaryBtn className="mx-3">All</PrimaryBtn>
        <PrimaryBtn className="mx-3">E-Commerce</PrimaryBtn>
        <PrimaryBtn className="mx-3">Business</PrimaryBtn>
      </div>
    </div>
  );
};

export default Portfolio;
