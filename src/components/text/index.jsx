import React from "react";
import "./styles.scss";

const Text = ({ label, className, ...props }) => {
  return (
    <p className={`text-main-style ${className}`} {...props}>
      {label}
    </p>
  );
};

export default Text;
