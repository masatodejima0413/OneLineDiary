import styled from "@emotion/styled";
import React from "react";
import Diary from "./Diary";

const TimeLine = () => {
  return (
    <StyledContainer>
      <Diary />
      <Diary />
      <Diary />
    </StyledContainer>
  );
};

export default TimeLine;

const StyledContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
