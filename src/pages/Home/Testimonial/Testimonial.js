import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import "./Testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      city: "Dhaka, Bangladesh",
      img: "https://i.ibb.co/MGXNxNM/Mohammad-Ali-Profile-Circle.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores provident officiis ipsum harum labore illo quas nemo, laboriosam qui commodi?",
      rating: 5.0,
    },
    {
      id: 2,
      name: "Sheikh Siam",
      city: "Dhaka, Bangladesh",
      img: "https://i.ibb.co/QphMstM/siam.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores provident officiis ipsum harum labore illo quas nemo, laboriosam qui commodi?",
      rating: 5.0,
    },
    {
      id: 3,
      name: "Akram Sakib",
      city: "Dhaka, Bangladesh",
      img: "https://i.ibb.co/YRJ02j3/sakib.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores provident officiis ipsum harum labore illo quas nemo, laboriosam qui commodi?",
      rating: 5.0,
    },
    {
      id: 4,
      name: "Nasimur Rahman",
      city: "Dhaka, Bangladesh",
      img: "https://i.ibb.co/YWLFHDj/nasim.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores provident officiis ipsum harum labore illo quas nemo, laboriosam qui commodi?",
      rating: 5.0,
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="parent py-20">
      <div className="mb-8">
        <h3 className="text-gray-400 text-center">What My Clients Say</h3>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center text-primary">
          Testimonials
        </h1>
      </div>

      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="mt-6">
            <div className="mx-4 rounded-lg shadow-xl single-blog cursor-pointer border-2 border-primary pt-6 flex flex-col justify-between"  style={{ backgroundColor: "#313131" }}>
              <div className="px-6">
                <FaQuoteLeft className="text-6xl text-primary mb-4"></FaQuoteLeft>
                <h2 className="text-center">{review.description}</h2>
              </div>
              <div className="bg-primary mt-12 flex justify-end px-6 py-2 rounded-b">
                <div className="text-right mr-4 text-gray-200">
                  <h2 className="text-center font-medium leading-none">
                    {review.name}
                  </h2>
                  <p className="text-xs leading-none">{review.city}</p>
                </div>
                <img
                  src={review.img}
                  alt="client"
                  className="inline-block w-16 h-16 rounded-full bg-white -mt-10"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
