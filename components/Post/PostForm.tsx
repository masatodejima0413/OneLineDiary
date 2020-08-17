import React, { useState } from "react";
import GooglePhotoList from "./GooglePhotoList";
import styled from "@emotion/styled";
import { Cross } from "@styled-icons/entypo/Cross";
import { ArrowUpCircleFill } from "@styled-icons/bootstrap/ArrowUpCircleFill";
import { turquoise, blue } from "../../constants/colors";

const PostForm = ({ accessToken, setIsFormOpen }) => {
  const [isGooglePhotoListOpen, setIsGooglePhotoListOpen] = useState(false);

  return (
    <StyledModal onClick={() => setIsFormOpen(false)}>
      <StyledCross onClick={() => setIsFormOpen(false)} />
      <StyledContainer onClick={(e) => e.stopPropagation()}>
        <StyledFormPartContainer>
          <label>comment:</label>
          <input type="text" />
        </StyledFormPartContainer>
        <StyledFormPartContainer>
          <label>location:</label>
          <input type="text" />
        </StyledFormPartContainer>

        {isGooglePhotoListOpen ? (
          <GooglePhotoList accessToken={accessToken} />
        ) : (
          <div onClick={() => setIsGooglePhotoListOpen(true)}>select photo</div>
        )}
        <StyledArrowUpCircleFill />
      </StyledContainer>
    </StyledModal>
  );
};

export default PostForm;

const StyledModal = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  z-index: 10;
  background-color: rgba(34, 40, 49, 0.3);
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled("div")`
  background-color: white;
  padding: 50px;
  margin: 50px;
  width: 80%;
`;

const StyledFormPartContainer = styled("div")`
  height: 10%;
`;

const StyledCross = styled(Cross)`
  width: 70px;
  height: 70px;
  color: white;
`;

const StyledArrowUpCircleFill = styled(ArrowUpCircleFill)`
  width: 70px;
  height: 70px;
  color: ${blue};
`;
