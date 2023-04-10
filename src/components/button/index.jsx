import React from "react";
import "./styles.scss";

const Button = ({ child, className, ...props }) => {
  return (
    <button className={`button-component-main-style ${className}`} {...props}>
      {child}
    </button>
  );
};

export default Button;
