import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
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
    Portfolio: "/portfolio",
    Contact: "/contact",
  };
  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive ? "#F75023" : "#3D4451",
    };
  };

  return (
    <div className="bg-transparent w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between  px-3 md:px-24 py-3">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-semibold">Mohammad Ali</h1>
          </Link>
        </div>
        <div>
          <ul className="md:flex items-center hidden">
            {Object.entries(navLinks).map((link) => (
              <li className="mx-4" key={link[0]}>
                <NavLink to={link[1]} style={activeLink}>
                  {link[0]}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="block md:hidden">
            <button
              onClick={toggleDrawer}
              className="btn btn-ghost text-neutral"
            >
              <RiMenu3Fill></RiMenu3Fill>
            </button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              className="bla bla bla"
            >
              <ul className="">
                {Object.entries(navLinks).map((link) => (
                  <li key={link[0]}>
                    <NavLink
                      to={link[1]}
                      className="btn btn-ghost rounded-none w-full"
                      style={activeLink}
                    >
                      {link[0]}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
