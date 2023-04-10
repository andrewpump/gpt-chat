import React from "react";
import "./styles.scss";

const Text = ({ label, className }) => {
  return <p className={`text-main-style ${className}`}>{label}</p>;
};

export default Text;
