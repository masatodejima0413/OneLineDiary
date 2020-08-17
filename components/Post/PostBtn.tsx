import styled from "@emotion/styled";
import { PostAdd } from "@styled-icons/material-outlined/PostAdd";
import React, { useState } from "react";
import { lightBlack } from "../../constants/colors";

const PostBtn = ({ setIsFormOpen }) => {
  return (
    <>
      <StyledPostAdd onClick={() => setIsFormOpen(true)} />
    </>
  );
};

export default PostBtn;

const StyledPostAdd = styled(PostAdd)`
  color: ${lightBlack};
  height: 50px;
  width: 50px;
`;
