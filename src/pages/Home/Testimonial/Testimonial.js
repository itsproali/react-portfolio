import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores provident officiis ipsum harum labore illo quas nemo, laboriosam qui commodi?",
      rating: 5.0,
    },
    {
      id: 2,
      name: "Sheikh Siam",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores provident officiis ipsum harum labore illo quas nemo, laboriosam qui commodi?",
      rating: 5.0,
    },
    {
      id: 3,
      name: "Akram Sakib",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores provident officiis ipsum harum labore illo quas nemo, laboriosam qui commodi?",
      rating: 5.0,
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: false,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="parent py-16">
      <div className="mb-4">
        <h3 className="text-gray-400 text-center">What My Clients Say</h3>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center text-primary">
          Testimonials
        </h1>
      </div>

      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id}>
            <div className="mx-4 rounded-lg shadow single-blog cursor-pointer border-2 border-primary p-6">
              <h2 className="text-center text-2xl font-medium text-primary  ">
                {review.name}
              </h2>
              <h2 className="text-center">{review.description}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
