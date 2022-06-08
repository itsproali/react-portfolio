import React, { useState } from "react";
import Items from "../../assets/Items";
import PrimaryBtn from "../../components/PrimaryBtn";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [items, setItems] = useState(Items);
  const [activeBtn, setActiveBtn] = useState("all");
  const filterItem = (category) => {
    const filtered = Items.filter((item) => item.category === category);
    setItems(filtered);
    // console.log(category, filtered);
  };

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
        <PrimaryBtn
          className={`mx-3 ${activeBtn === "all" && "active-btn"}`}
          onClick={() => {
            setActiveBtn("all");
            setItems(Items);
          }}
        >
          All
        </PrimaryBtn>
        <PrimaryBtn
          className={`mx-3 ${activeBtn === "e-commerce" && "active-btn"}`}
          onClick={() => {
            setActiveBtn("e-commerce");
            filterItem("e-commerce");
          }}
        >
          E-Commerce
        </PrimaryBtn>
        <PrimaryBtn
          className={`mx-3 ${activeBtn === "business" && "active-btn"}`}
          onClick={() => {
            setActiveBtn("business");
            filterItem("business");
          }}
        >
          Business
        </PrimaryBtn>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {items.map((item) => (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            key={item.id}
            className="rounded-lg shadow-lg p-4 flex flex-col justify-between hover:shadow-primary duration-500"
            style={{ backgroundColor: "#313131" }}
          >
            <div>
              <img className="rounded" src={item.img} alt="Item" />
            </div>
            <div className="mt-3 mb-2">
              <h1 className="text-2xl text-primary font-semibold">
                {item.title}
              </h1>
              <p>{item.description}</p>
              <div className="flex items-center mt-4">
                <a href={item.liveLink} className="mr-4" target="blank">
                  <PrimaryBtn>Visit Now</PrimaryBtn>
                </a>
                <a href={item.codeLink} target="blank">
                  <button className="btn border-2 border-primary bg-transparent hover:bg-primary text-white duration-500">
                    See Code
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
