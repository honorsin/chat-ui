import React from "react";
import PropTypes from "prop-types";

import StyledButton from "./style";
const Button = ({
  children,
  type = "primary",
  shape = "circle",
  size = "30px",
  bgColor,
  ...rest
}) => {
  return (
    <StyledButton
      type={type}
      shape={shape}
      size={size}
      bgColor={bgColor}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
