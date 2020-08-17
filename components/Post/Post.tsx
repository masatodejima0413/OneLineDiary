import React, { useState } from "react";
import PostBtn from "./PostBtn";
import PostForm from "./PostForm";
import styled from "@emotion/styled";

const Post = ({ accessToken }) => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  return (
    <StyledContainer>
      {isFormOpen ? (
        <PostForm accessToken={accessToken} setIsFormOpen={setIsFormOpen} />
      ) : (
        <PostBtn setIsFormOpen={setIsFormOpen} />
      )}
    </StyledContainer>
  );
};

export default Post;

const StyledContainer = styled("div")`
  display: flex;
  justify-content: center;
`;
