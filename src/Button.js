import React from "react";

const Button = (props) => {
  const {
    buttonType,
    buttonPosition,
    onClick,
    onMouseOver,
    onMouseOut,
    children,
    style,
  } = props;

  return (
    <div
      className={`buttons ${buttonType}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;