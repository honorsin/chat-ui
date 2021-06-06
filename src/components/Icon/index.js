import React from "react";
import PropTypes from "prop-types";

import StyledIcon from "./style";
const Icon = ({
  icon: IconComponent,
  width = 24,
  height = 24,
  color,
  opacity,
  ...rest
}) => {
  return (
    <StyledIcon color={color} opacity={opacity} {...rest}>
      {IconComponent && <IconComponent width={width} height={height} />}
    </StyledIcon>
  );
};
Icon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.element,
  opacity: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;
