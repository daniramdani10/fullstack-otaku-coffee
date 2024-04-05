import React from "react";

const Button = (props) => {
  const {
    children = "Button",
    classname = "bg-slate-500",
    onClick = () => {},
    type = "Button",
  } = props;
  return (
    <button
      className={` text-white font-bold py-2 px-4 rounded ${classname} `}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
