import React, { useEffect } from "react";
import "./Contact.css";
import "../../components/PrimaryBtn.css";
import { motion, useAnimation } from "framer-motion";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaLocationArrow,
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  const headingAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          delay: 1.2,
          duration: 1,
        },
      });
      headingAnimation.start({ y: 0, opacity: 1, transition: { duration: 1 } });
    }
  }, [inView, animation, headingAnimation]);

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "itsproali_portfolio",
        "itsproali_portfolio",
        e.target,
        "H-ispiDvwdbG_76iq"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="parent py-20">
      <motion.div initial={{ y: -200, opacity: 0 }} animate={headingAnimation}>
        <h3 className="text-gray-400 text-center">Feel Free To Contact Me</h3>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          Get In <span className="text-primary">Touch</span>
        </h1>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div
          className=""
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={animation}
        >
          <h2 className="text-2xl font-medium">Contact Me</h2>
          <form onSubmit={handleSend}>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
              <input
                className="input-field"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
              <input
                className="input-field"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <input
              className="input-field"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="input-field"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              value="Send Message"
              className="btn bg-primary border-2 border-primary text-white uppercase hover:bg-transparent hover:border-primary duration-300 shadow"
            >
              Send Message
            </button>
          </form>
        </motion.div>
        <motion.div
          className=""
          initial={{ y: 50, opacity: 0 }}
          animate={animation}
        >
          <h2 className="text-2xl font-medium">Contact Info</h2>
          <div className="flex items-center my-6">
            <FaUserAlt className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaUserAlt>
            <h3 className="font-medium text-primary">Mohammad Ali</h3>
          </div>
          <div className="flex items-center my-6">
            <FaPhoneAlt className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaPhoneAlt>
            <h3 className="font-medium text-primary">+88 01884622861</h3>
          </div>
          <div className="flex items-center my-6">
            <MdEmail className="text-3xl mr-8 hover:text-primary cursor-pointer duration-300"></MdEmail>
            <h3 className="font-medium text-primary">itsproali@gmail.com</h3>
          </div>
          <div className="flex items-center my-6">
            <FaLocationArrow className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaLocationArrow>

            <h3 className="font-medium text-primary">
              Sarulia, Demra, Dhaka, Bangladesh - 1361
            </h3>
          </div>
          <div className="mt-8 flex items-center">
            <h3 className="text-xl text-gray-400">Social</h3>
            <div className="bg-gray-400 w-10 h-[2px] mx-4"></div>
            <a
              href="https://www.linkedin.com/in/itsproali"
              target="blank"
              className="text-3xl text-gray-400 hover:text-primary shadow-lg mx-1 duration-300"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <a
              href="https://www.github.com/itsproali"
              target="blank"
              className="text-3xl  text-gray-400 hover:text-primary shadow-lg mx-1 duration-300"
            >
              <FaGithubSquare></FaGithubSquare>
            </a>
            <a
              href="https://www.facebook.com/itsproali"
              target="blank"
              className="text-3xl text-gray-400 hover:text-primary shadow-lg mx-1 duration-300"
            >
              <FaFacebookSquare></FaFacebookSquare>
            </a>
            <a
              href="https://www.instagram.com/itsproali"
              target="blank"
              className="text-3xl text-gray-400 hover:text-primary shadow-lg mx-1 duration-300"
            >
              <FaInstagramSquare></FaInstagramSquare>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
