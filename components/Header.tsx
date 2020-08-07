import styled from "@emotion/styled";
import React from "react";
import { blue, turquoise } from "../constants/colors";

const StyledContainer = styled("div")`
  display: flex;
  justify-content: center;
  font-weight: 900;
  font-size: 40px;
  color: ${blue};
  margin: 40px;
`;

const Header = () => {
  return (
    <StyledContainer>
      <div>OneLineDiary</div>
    </StyledContainer>
  );
};

export default Header;
