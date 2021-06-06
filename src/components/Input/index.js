import React from "react";
import PropTypes from "prop-types";

import StyledInput, { Prefix, Suffix, InputContainer } from "./style";
import { useTheme } from "styled-components";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import Icon from "components/Icon";

const Input = ({
  placeholder = "please type content...",
  prefix,
  suffix,
  ...rest
}) => {
  return (
    <InputContainer {...rest}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <StyledInput placeholder={placeholder}></StyledInput>
      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  );
};
Input.propTypes = {
  placeholder: PropTypes.string,
  suffix: PropTypes.any,
  prefix: PropTypes.any,
};

const Search = ({ placeholder = "please type", ...rest }) => {
  const theme = useTheme();

  return (
    <Input
      placeholder={placeholder}
      prefix={
        <Icon
          icon={SearchIcon}
          width={18}
          height={18}
          color={theme.gray3}
          {...rest}
        ></Icon>
      }
    ></Input>
  );
};

Input.Search = Search;
export default Input;
