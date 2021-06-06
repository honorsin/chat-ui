import React, { useState } from "react";
import PropTypes from "prop-types";

import StyledPopover, { Content, Triangle, Target } from "./style";
const Popover = ({ children, content, offset, onVisible, onHide, ...rest }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    if (visible) {
      onHide && onHide();
    } else {
      onVisible && onVisible();
    }
    setVisible(!visible);
  };
  return (
    <StyledPopover onClick={handleClick} {...rest}>
      <Content visible={visible} offset={offset}>
        {content}
      </Content>
      <Triangle visible={visible} offset={offset} />
      <Target>{children}</Target>
    </StyledPopover>
  );
};

Popover.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any,
  offset: PropTypes.shape({ x: PropTypes.string, y: PropTypes.string }),
  onVisible: PropTypes.func,
  onHide: PropTypes.func,
};

export default Popover;
