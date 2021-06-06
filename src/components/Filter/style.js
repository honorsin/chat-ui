import styled from "styled-components";
import styledText from "components/Text/style";
const StyledFilter = styled.div`
  display: grid;
  grid-template-columns: 2fr, 1fr;
  align-items: center;
`;

const Filters = styled.div``;

const Action = styled.div`
  justify-self: end;
  ${styledText} {
    padding-right: 1rem;
  }
`;
export default StyledFilter;
export { Filters, Action };
