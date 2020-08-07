import styled from "@emotion/styled";
import React from "react";
import {
  black,
  lightBlack,
  turquoise,
  gray,
  blue,
  white,
} from "../constants/colors";

const StyledFrame = styled("div")`
  margin: 50px;
  padding: 30px;
  width: 400px;
  min-height: 100px;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  @media (max-width: 480px) {
    box-sizing: border-box;
    width: 95%;
  }
  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(
      235deg,
      ${blue} 0%,
      15%,
      ${white} 50%,
      85%,
      ${turquoise} 100%
    );
    z-index: -1;
    filter: blur(20px);
  }
`;

const Diary = () => {
  return (
    <>
      <StyledFrame>
        <div>picture!</div>
        <div>date</div>
        <div>locate</div>
        <div>comment</div>
      </StyledFrame>
    </>
  );
};

export default Diary;
