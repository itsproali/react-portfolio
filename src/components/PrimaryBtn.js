import React from "react";
import "./PrimaryBtn.css";

const PrimaryBtn = ({ children, className }) => {
  return <button className={`${className} primary-button`}>{children}</button>;
};

export default PrimaryBtn;
