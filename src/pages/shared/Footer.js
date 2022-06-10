import React from "react";

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6"
        style={{ backgroundColor: "#313131" }}
      >
        &copy; Copyright All Rights Reserved {year.getFullYear()} | Developed by{" "}
        <a
          href="https://linkedin.com/in/itsproali"
          className="text-primary hover:underline"
          target="blank"
        >
          Mohammad Ali
        </a>
      </footer>
    </>
  );
};

export default Footer;
