import React from "react";
import PropTypes from "prop-types";

import StyledText from "./style";
const Text = ({
  children,
  type = "primary",
  size = "normal",
  bold,
  ...rest
}) => {
  return (
    <StyledText type={type} size={size} bold={bold} {...rest}>
      {children}
    </StyledText>
  );
};
Text.propTypes = {
  children: PropTypes.any,
};

export default Text;
