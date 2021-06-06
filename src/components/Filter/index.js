import React from "react";
import PropTypes from "prop-types";

import StyledFilter, { Filters, Action } from "./style";
import Text from "components/Text";
const Filter = ({ children, ...rest }) => {
  return <StyledFilter {...rest}>{children}</StyledFilter>;
};
Filter.Filters = ({ children, label, ...rest }) => (
  <Filters {...rest}>
    <Text type="secondary">
      {label}:{children}
    </Text>
  </Filters>
);
Filter.Action = ({ children, label, ...rest }) => (
  <Action {...rest}>
    <Text type="secondary">
      {label}>{children}
    </Text>
  </Action>
);
Filter.propTypes = {
  children: PropTypes.any,
};

export default Filter;
