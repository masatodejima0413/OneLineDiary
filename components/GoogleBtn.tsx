import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import styled from "@emotion/styled";
import { db } from "../libs/firebase";

const CLIENT_ID =
  "1062013144652-an0qd6bvkksav66ksoeb73v59mi1877m.apps.googleusercontent.com";

const READONLY_SCOPE = "https://www.googleapis.com/auth/photoslibrary.readonly";

const GoogleBtn = ({
  isLogined,
  setIsLogined,
  setAccessToken,
  setUserName,
  setGoogleId,
}) => {
  const login = (response) => {
    if (response.accessToken) {
      getUserData(response.profileObj);
      setIsLogined(true);
      setAccessToken(response.accessToken);
    }
  };

  const getUserData = (profileObj) => {
    const userRef = db.collection("users");
    userRef
      .doc(profileObj.googleId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
          console.log("we met again. set your info to state.");
          setGoogleId(profileObj.googleId);
          setUserName(doc.data().userName);
        } else {
          console.log(
            "we haven't met you. create new user document on firestore!!"
          );
          userRef.doc(profileObj.googleId).set({ userName: profileObj.name });
          setGoogleId(profileObj.googleId);
          setUserName(profileObj.name);
        }
      })
      .catch((error) => {
        console.log(`error getting document: ${error}`);
      });
  };

  const logout = () => {
    setIsLogined(false);
    setAccessToken("");
  };

  const handleLoginFailure = () => {
    alert("Failed to LOG-IN");
  };

  const handleLogoutFailure = () => {
    alert("Failed to LOG-OUT");
  };

  return (
    <StyledContainer>
      {isLogined ? (
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={logout}
          onFailure={handleLogoutFailure}
        />
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={login}
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
          responseType="code,token"
          scope={READONLY_SCOPE}
        />
      )}
    </StyledContainer>
  );
};

export default GoogleBtn;

const StyledContainer = styled("div")`
  display: flex;
  justify-content: center;
  margin: 70px;
`;
