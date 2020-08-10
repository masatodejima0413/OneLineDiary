import React from "react";
import styled from "@emotion/styled";

const Login = () => {
  return (
    <StyledContainer>
      <div>Login with Google</div>
    </StyledContainer>
  );
};

export default Login;

const StyledContainer = styled("div")`
  display: flex;
  justify-content: center;
  font-weight: 900;
  font-size: 40px;
  margin-top: 200px;
`;
