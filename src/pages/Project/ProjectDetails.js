import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Items from "../../assets/Items";
import PrimaryBtn from "../../components/PrimaryBtn";

const ProjectDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  useEffect(() => {
    const filtered = Items.find((item) => item.id === parseInt(id));
    setItem(filtered);
  }, [id]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="parent py-16">
      <h1 className="text-center text-4xl font-medium">{item?.title}</h1>

      <Slider {...settings}>
        {item?.img?.map((image, index) => (
          <div key={index} className="mt-6">
            <div
              className="mx-4 rounded-lg shadow-xl single-blog cursor-pointer border-2 border-primary flex flex-col justify-between"
              style={{ backgroundColor: "#313131" }}
            >
              <img
                src={image}
                alt={item?.title}
                className="inline-block w-full h-72 rounded-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
      <p className="text-gray-400 font-medium mt-8">
        <span className="font-semibold text-white text-xl">Description: </span>{" "}
        {item?.description}
      </p>
      <div className="my-4">
        <h2 className="text-2xl font-semibld mb-3">Features:</h2>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4">
          {item?.features?.map((feature, index) => (
            <li key={index} className="text-gray-400">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="my-4">
        <h2 className="text-2xl font-semibld mb-3">Tools & Technologies:</h2>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4">
          {item?.technologies?.map((feature, index) => (
            <li key={index} className="text-gray-400">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center mt-8">
        <a href={item?.liveLink} className="mr-4" target="blank">
          <PrimaryBtn>Visit Now</PrimaryBtn>
        </a>
        <a href={item?.codeLink} target="blank">
          <button className="btn border-2 border-primary bg-transparent hover:bg-primary text-white duration-500">
            See Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
