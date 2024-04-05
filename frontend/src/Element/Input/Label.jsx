import React from "react";

const Label = (props) => {
  const { children, htmlFor } = props;
  return (
    <label htmlFor={htmlFor} className="text-slate-700 text-sm font-bold">
      {children}
    </label>
  );
};

export default Label;
