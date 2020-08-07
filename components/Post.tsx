import styled from "@emotion/styled";
import { PostAdd } from "@styled-icons/material-outlined/PostAdd";
import React, { useState } from "react";
import { lightBlack } from "../constants/colors";

const Post = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  return (
    <StyledContainer>
      <StyledPostAdd onClick={() => setIsFormOpen(!isFormOpen)} />
      {isFormOpen && (
        <div>
          <div>comment:</div>
          <input type="text" />
        </div>
      )}
    </StyledContainer>
  );
};

export default Post;

const StyledContainer = styled("div")`
  display: flex;
  justify-content: center;
`;

const StyledPostAdd = styled(PostAdd)`
  color: ${lightBlack};
  height: 50px;
  width: 50px;
`;
