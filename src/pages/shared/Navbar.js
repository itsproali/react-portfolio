import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navLinks = {
    Home: "/",
    About: "/about",
    Project: "/project",
    Contact: "/contact",
    Blog: "/blog",
  };
  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive ? "#FF651C" : "white",
    };
  };

  return (
    <div
      className="w-full sticky top-0 left-0 z-50 shadow-lg"
      style={{ backgroundColor: "#313131" }}
    >
      <div className="flex items-center justify-between  px-3 md:px-24 py-3">
        <div>
          <Link to="/">
            <h1 className="text-2xl text-primary font-lobster">Mohammad Ali</h1>
          </Link>
        </div>
        <div>
          <ul className="lg:flex items-center hidden">
            {Object.entries(navLinks).map((link) => (
              <li className="mx-4" key={link[0]}>
                <NavLink to={link[1]} style={activeLink}>
                  {link[0]}
                </NavLink>
              </li>
            ))}

            <a
              className="inline-block ml-4"
              href="https://drive.google.com/file/d/1qVQ1OLO-5RxHy1rwbe5Ib9igCTfeO99f/view?usp=sharing"
              target="blank"
            >
              <button className="primary-button">My Resume</button>
            </a>
          </ul>
          <div className="block lg:hidden">
            <button onClick={toggleDrawer} className="btn btn-ghost text-white">
              <RiMenu3Fill></RiMenu3Fill>
            </button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              style={{ backgroundColor: "#212121" }}
              className="bla bla bla"
            >
              <ul className="">
                <li className="mt-6 ml-4">
                  <GiCrossMark
                    className="cursor-pointer hover:text-primary duration-300"
                    onClick={() => setIsOpen(!isOpen)}
                  ></GiCrossMark>
                </li>
                {Object.entries(navLinks).map((link) => (
                  <li key={link[0]}>
                    <NavLink
                      to={link[1]}
                      className="btn btn-ghost rounded-none w-full"
                      style={activeLink}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {link[0]}
                    </NavLink>
                  </li>
                ))}
                <li className="text-center">
                  <a
                    href="https://drive.google.com/file/d/1qVQ1OLO-5RxHy1rwbe5Ib9igCTfeO99f/view?usp=sharing"
                    target="blank"
                  >
                    <button className="primary-button">My Resume</button>
                  </a>
                </li>
              </ul>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
