import React, { useState } from "react";
import GooglePhotoList from "./GooglePhotoList";
import styled from "@emotion/styled";
import { Cross } from "@styled-icons/entypo/Cross";
import { ArrowUpCircleFill } from "@styled-icons/bootstrap/ArrowUpCircleFill";
import { turquoise, blue } from "../../constants/colors";
import { db } from "../../libs/firebase";

const PostForm = ({ accessToken, setIsFormOpen, googleId }) => {
  const [isGooglePhotoListOpen, setIsGooglePhotoListOpen] = useState(false);
  const [comment, setComment] = useState<string>("");
  const [photoId, setPhotoId] = useState<string>("");

  const Post = () => {
    const postsRef = db.collection("users").doc(googleId).collection("posts");
    postsRef
      .doc(photoId)
      .set({ photoId: photoId, comment: comment })
      .then(function (docRef) {
        console.log("Document written with ID ");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <StyledModal onClick={() => setIsFormOpen(false)}>
      <StyledCross onClick={() => setIsFormOpen(false)} />
      <StyledContainer onClick={(e) => e.stopPropagation()}>
        <StyledFormPartContainer>
          <label>comment:</label>
          <input
            type="text"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
        </StyledFormPartContainer>

        {isGooglePhotoListOpen ? (
          <GooglePhotoList accessToken={accessToken} setPhotoId={setPhotoId} />
        ) : (
          <div onClick={() => setIsGooglePhotoListOpen(true)}>select photo</div>
        )}
        <StyledArrowUpCircleFill onClick={Post} />
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
