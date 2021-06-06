import React from "react";
import PropTypes from "prop-types";

import StyledHeading from "./style";
const Heading = ({ children, level, ...rest }) => {
  return (
    <StyledHeading as={`h${level}`} level={level} {...rest}>
      {children}
    </StyledHeading>
  );
};
Heading.propTypes = {
  children: PropTypes.any,
  level: PropTypes.number,
};

export default Heading;
