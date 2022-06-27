import React, { useEffect } from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Testimonial.css";
import Reviews from "../../../assets/Reviews";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const [ref, inView] = useInView();
  const animation = useAnimation();
  const headingAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 1.2,
        },
      });
      headingAnimation.start({ y: 0, opacity: 1, transition: { duration: 1 } });
    }
  }, [inView, animation, headingAnimation]);
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
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="parent py-20">
      <motion.div
        className="mb-8"
        initial={{ y: -200, opacity: 0 }}
        animate={headingAnimation}
      >
        <h3 className="text-gray-400 text-center">What My Clients Say</h3>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center text-primary">
          Testimonials
        </h1>
      </motion.div>

      <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={animation}>
        <Slider {...settings}>
          {Reviews.map((review) => (
            <div key={review.id} className="mt-6">
              <div
                className="mx-4 rounded-lg shadow-xl single-blog cursor-pointer border-2 border-primary pt-6 flex flex-col justify-between h-[300px]"
                style={{ backgroundColor: "#313131" }}
              >
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
      </motion.div>
    </div>
  );
};

export default Testimonial;
