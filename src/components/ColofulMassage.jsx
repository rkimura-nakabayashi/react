import React from "react";

export const ColofulMassage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
