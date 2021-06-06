import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border-line: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  ${({ shape }) => shapeVarints[shape]}
  ${({ type }) => typeVariants[type]}
  ${({ bgColor }) => `background-color: ${bgColor}`};

  transform: scale(1);
  transition: 0.4s;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`;

const shapeVarints = {
  circle: css`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  `,
  rect: css`
    padding: 12px 18px;
    border-radius: 6px;
  `,
};

const typeVariants = {
  primary: css`
    background-color: ${({ theme }) => theme.primaryColor};
    color: white;
  `,
};

export default StyledButton;
export { shapeVarints, typeVariants };
